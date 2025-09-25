#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
pub mod ina_journal {
    use ink::prelude::{string::String, vec::Vec};
    use ink::storage::Mapping;

    #[derive(scale::Encode, scale::Decode, Clone, Debug, PartialEq, Eq, scale_info::TypeInfo)]
    #[cfg_attr(feature = "std", derive(::scale_info::IntoPortable))]
    pub struct Entry {
        pub owner: AccountId,
        pub cid: String,
        pub hash: [u8; 32],
        pub tags: Vec<String>,
        pub timestamp: u64,
        pub proof_cid: Option<String>,
    }

    #[ink(storage)]
    pub struct InaJournal {
        owner_of: Mapping<u128, AccountId>,
        entries: Mapping<u128, Entry>,
        votes: Mapping<u128, u32>,
        has_voted: Mapping<(u128, AccountId), bool>,
        total: u128,
    }

    #[derive(scale::Encode, scale::Decode, Debug, PartialEq, Eq, scale_info::TypeInfo)]
    pub enum Error {
        NotOwner,
        NonTransferable,
        NotFound,
        AlreadyVoted,
    }

    pub type Result<T> = core::result::Result<T, Error>;

    impl InaJournal {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self { owner_of: Mapping::default(), entries: Mapping::default(), votes: Mapping::default(), has_voted: Mapping::default(), total: 0 }
        }

        /// Mint a new soulbound journal entry NFT to the caller.
        /// Stores encrypted content CID, content hash, and tags.
        #[ink(message)]
        pub fn mint_journal(&mut self, cid: String, hash: [u8; 32], tags: Vec<String>) -> u128 {
            let caller = self.env().caller();
            let id = self.total + 1;
            let entry = Entry { owner: caller, cid, hash, tags, timestamp: self.env().block_timestamp(), proof_cid: None };
            self.owner_of.insert(id, &caller);
            self.entries.insert(id, &entry);
            self.total = id;
            id
        }

        /// Returns an entry if it exists.
        #[ink(message)]
        pub fn get_entry(&self, id: u128) -> Option<Entry> { self.entries.get(id) }

        /// Returns how many entries exist in total.
        #[ink(message)]
        pub fn total_supply(&self) -> u128 { self.total }

        /// Returns all token IDs owned by an account (linear scan; fine for hackathons)
        #[ink(message)]
        pub fn tokens_of(&self, owner: AccountId) -> Vec<u128> {
            let mut ids = Vec::new();
            for id in 1..=self.total {
                if let Some(o) = self.owner_of.get(id) { if o == owner { ids.push(id) } }
            }
            ids
        }

        /// Set/attach a ZK proof CID to an existing entry (owner only)
        #[ink(message)]
        pub fn set_proof_cid(&mut self, id: u128, proof_cid: String) -> Result<()> {
            let caller = self.env().caller();
            let Some(mut entry) = self.entries.get(id) else { return Err(Error::NotFound) };
            if entry.owner != caller { return Err(Error::NotOwner) }
            entry.proof_cid = Some(proof_cid);
            self.entries.insert(id, &entry);
            Ok(())
        }

        /// Upvote an entry once per account
        #[ink(message)]
        pub fn upvote(&mut self, id: u128) -> Result<()> {
            let caller = self.env().caller();
            if self.entries.get(id).is_none() { return Err(Error::NotFound) }
            let key = (id, caller);
            if self.has_voted.get(key).unwrap_or(false) { return Err(Error::AlreadyVoted) }
            let mut v = self.votes.get(id).unwrap_or(0);
            v += 1;
            self.votes.insert(id, &v);
            self.has_voted.insert(key, &true);
            Ok(())
        }

        /// Get votes for an entry
        #[ink(message)]
        pub fn get_votes(&self, id: u128) -> u32 { self.votes.get(id).unwrap_or(0) }

        /// Soulbound: any attempt to transfer should error
        #[ink(message)]
        pub fn transfer(&mut self, _to: AccountId, _id: u128) -> Result<()> { Err(Error::NonTransferable) }
    }

    // --- Tests ---
    #[cfg(test)]
    mod tests {
        use super::*;
        use ink::env::test;

        #[ink::test]
        fn mint_and_read() {
            let mut c = InaJournal::new();
            let id = c.mint_journal(String::from("bafy..."), [1u8; 32], vec![String::from("joy"), String::from("growth")]);
            assert_eq!(id, 1);
            assert_eq!(c.total_supply(), 1);
            let entry = c.get_entry(id).expect("exists");
            assert_eq!(entry.cid, "bafy...");
            assert_eq!(entry.tags.len(), 2);
            assert!(entry.timestamp > 0);
        }

        #[ink::test]
        fn soulbound_transfer_blocked() {
            let mut c = InaJournal::new();
            let id = c.mint_journal(String::from("cid"), [0u8; 32], Vec::new());
            assert_eq!(c.transfer(test::default_accounts::<ink::env::DefaultEnvironment>().bob, id), Err(Error::NonTransferable));
        }

        #[ink::test]
        fn set_proof_works() {
            let mut c = InaJournal::new();
            let id = c.mint_journal(String::from("cid"), [0u8; 32], Vec::new());
            assert_eq!(c.set_proof_cid(id, String::from("proofcid")), Ok(()));
            let e = c.get_entry(id).unwrap();
            assert_eq!(e.proof_cid, Some(String::from("proofcid")));
        }

        #[ink::test]
        fn votes_work() {
            let mut c = InaJournal::new();
            let id = c.mint_journal(String::from("cid"), [0u8; 32], Vec::new());
            assert_eq!(c.get_votes(id), 0);
            assert_eq!(c.upvote(id), Ok(()));
            assert_eq!(c.get_votes(id), 1);
            assert_eq!(c.upvote(id), Err(Error::AlreadyVoted));
        }
    }
}
