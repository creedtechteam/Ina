INA ink! Contracts

This folder contains the ink! smart contract(s) used for the Polkadot hackathon submission.

Contract: ina_journal (soulbound entries)
- Purpose: Mint non-transferable "Journal Entry" tokens that reference client-side encrypted content on IPFS.
- Storage per token: owner, encrypted content CID, content hash (blake2 or sha256), tags, timestamp, optional zk-proof CID.
- Non-transferable by design (soulbound) – transfer() always errors.

Build and test (locally)
1) Install Rust and cargo-contract
   - rustup default stable
   - cargo install cargo-contract --force --locked
2) Build metadata and Wasm
   - cd contracts-ink/ina_journal
   - cargo contract build --release
     Artifacts: target/ink/ina_journal.contract (ABI + Wasm)
3) Run unit tests
   - cargo test

Deploy (Astar Shibuya)
- Use Swanky or Astar Portal to upload ina_journal.contract and instantiate.
- Record contract address for the frontend (.env + README).

Frontend call plan
- mint_journal(cid, hash32, tags[]) -> id
- get_entry(id) -> Entry { owner, cid, hash, tags[], timestamp, proof_cid }
- tokens_of(account) -> Vec<id>
- set_proof_cid(id, proofCid)

Metadata schema (high level)
{
  "messages": [
    {"name": "mint_journal", "args": ["String cid", "[u8;32] hash", "Vec<String> tags"], "returns": "u128"},
    {"name": "get_entry", "args": ["u128 id"], "returns": "Entry | null"},
    {"name": "tokens_of", "args": ["AccountId owner"], "returns": "Vec<u128>"},
    {"name": "total_supply", "args": [], "returns": "u128"},
    {"name": "set_proof_cid", "args": ["u128 id", "String proofCid"], "returns": "Result<()>"},
    {"name": "transfer", "args": ["AccountId to", "u128 id"], "returns": "Error::NonTransferable"}
  ],
  "types": {
    "Entry": {
      "owner": "AccountId",
      "cid": "String",
      "hash": "[u8;32]",
      "tags": "Vec<String>",
      "timestamp": "u64",
      "proof_cid": "Option<String>"
    }
  }
}

Notes
- For hackathon scale, tokens_of() does a simple linear scan. If needed, switch to indexed owner->ids mapping.
- ZK: store only the proof CID on-chain; verification is shown in the app (client-side) for performance.
