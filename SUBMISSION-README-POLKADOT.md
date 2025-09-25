INA — Polkadot Hackathon Submission (Option A)

Overview
- INA is an anonymous journaling app for women. Entries are encrypted client-side, pinned to IPFS, and minted as soulbound NFTs on Astar Shibuya (ink!). A proof-of-authorship toggle lets users attach a signed-proof CID on-chain.

Tech Stack
- ink! smart contract: contracts-ink/ina_journal (soulbound token with metadata, votes, and proof CID)
- Frontend: React + Vite + polkadot.js + Tailwind
- Wallet: polkadot.js extension
- Storage: IPFS via Web3.Storage (token required; can be provided at runtime)

How it works
1) Connect wallet (polkadot.js extension)
2) Write a journal entry → client-side encryption (XChaCha20-Poly1305 via libsodium) → upload encrypted blob to IPFS → store CID + SHA-256 hash locally
3) Mint: call mint_journal(cid, hash[32], tags[]) on Shibuya
4) Optional: Attach proof
   - App signs the entry hash with the wallet (off-chain proof)
   - Uploads proof JSON to IPFS → set_proof_cid(tokenId, proofCid)
5) Community curation: upvote(tokenId), get_votes(tokenId)

Local dev
- Frontend
  - bun add or npm i
  - bun dev or npm run dev
  - Set VITE_WEB3STORAGE_TOKEN in .env or paste token on first upload prompt
- Contract build (local)
  - rustup default stable; cargo install cargo-contract --locked
  - cd contracts-ink/ina_journal && cargo contract build --release
  - Upload ina_journal.contract in Astar Portal (Shibuya)

Deployment notes
- After deploy, save the contract address in the app (Mint → Contract Settings)
- Optionally host the artifact at /contracts/ina_journal.contract.json and set the Metadata URL setting

Judging highlights
- Technological implementation: ink! contract with tests, client encryption, wallet integration, IPFS upload, on-chain proof CID
- Design: polished, mobile-first UI; clear onboarding; error states; IPFS-friendly routing
- Potential impact: safe space for expression with ownership and community support
- Idea quality: soulbound journaling + proofs + curation; clear roadmap to INA Chain (Substrate)

Roadmap to Option B (INA Chain)
- Pallet-ina-journal: commitments (hash + CID), membership, and curation
- Native ZK verification pallet / verifier precompile
- Cross-chain interoperability via XCM for curated stories

Demo flow
- Connect wallet → write & save → mint on Shibuya → attach proof → show votes/curation
