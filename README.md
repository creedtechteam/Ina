📘 INA Project – Final README for Hackathon Submission

🚀 Overview

INA (UnchainHer) is a decentralized emotional sanctuary and empowerment OS for women in Web3. It blends journaling, zk-privacy, NFT minting, DAO governance, and Web3 upskilling into a safe, expressive platform.

🛠️ Technologies Used

Smart Contracts: NEAR Protocol (Rust, NEAR SDK)

Frontend: React.js (Hosted on IPFS via ENS)

Backend: Node.js / Express (handles journal data + agent logic)

Storage: Temporary local DB or simulated storage

Identity: Wallet Connect + Anonymous ID

Agent Logic: Basic intent mapping from journal tags to suggestions

NFT Minting: Simulated/testnet mint via NEAR smart contract


📦 Core Features

• Journaling Vault - Rich text input, tag emotions, choose visibility (private, DAO, mint)

• Agent Intent Flow - Maps journal tag to suggested action (e.g., join support circle)

• NFT Story Minting - Tokenize journals as NFTs on NEAR testnet

• Support Circles - Anonymous emoji-only rooms (Grief, Rage, Sisterhood, Forgiveness)

• Cycle Tracker - Menstrual & emotion tracking (cycle-based prompts)

• The Forge - Token-gated Web3 learning hub for women

• DAO & Governance - Vote on story curation, vault release, & platform direction

📍 Tags Supported

Grief, Rage, Love, Confusion, Silence, Hope, Growth, Sadness, Joy, Anxiety, Forgiveness



🔁 User Flow

1. User lands on onboarding page.

2. Signs up with wallet or anonymous ID.

3. Expresses mood → logs journal entry → selects tag.

4. Agent suggests next step: e.g., Join Rage Room, Mint Entry, View Public Vault.

5. User follows through (via button click).

6. Entry can be saved, minted, or shared to DAO/public vault.

7. DAO members vote on featured stories.

8. Users upskill in The Forge and join governance.



🏗️ Technical Architecture

• Frontend: React.js app hosted on IPFS + ENS (via inalab.eth.limo)

• Backend: Express server to handle journal storage + agent mapping

• Smart Contracts: NEAR testnet contracts for journaling and minting

• NFTs: Minted from journal entries (testnet-only for now)

• DAO: Basic voting mock with fake proposals

• Agent Flow: Basic logic mapping tags to suggested actions (can evolve with AI)




📤 APIs / Endpoints

- POST /journal → Save new journal entry

- GET /vault → Fetch all user entries

- POST /intent → Suggest action based on tag

- POST /mint → Mint selected entry

- GET /support-circles → List themed chat rooms



🎯 Bounty Alignment – NEAR Challenge

Challenge: 'The Agentic Internet and Building AI-led Web3 Experiences'

This project meets submission goals by:

- Creating a journaling intent → action flow

- Hosting on NEAR testnet (journal smart contract deployed)

- Simulating agent response & cross-component integration

- Providing zk-privacy toggle, NFT mint simulation, and DAO voting

📽️ Demo Walkthrough (Live)

Link: https://inalab.eth.limo (IPFS + ENS hosted frontend)




👥 Team & Roles

Samuel Utibe – Product Lead / Coordinator

Peni Vera – Smart Contract Dev (NEAR)

Adaora J. – Backend Developer

Enny V. – UI/UX Designer

Frontend Devs – React.js Engineers



📘 Track Alignment: The Agentic Internet

INA aligns with the NEAR Hackathon track on “The Agentic Internet” through the following pillars:

• Intent-Based Flow: Journal entries tagged with emotions map to meaningful suggestions.

• zk-Privacy + Sovereignty: Private journaling, DAO submissions, anonymous ID support.

• Web3 Composability: NFTs, DAO, and IPFS + ENS combine for full user-led flow.



📁 Bounty Integration Log

**Frontend:** React.js + IPFS via inalab.eth.limo

**Backend:** Node.js/Express (simulated DB, local deployment)

**Smart Contracts:** NEAR testnet - journal + NFT mint contracts

**Agent Flow:** Rule-based logic (tag → suggestion)

**DAO Mock:** Simulated voting + proposal system

**APIs:** /journal, /vault, /mint, /intent, /support-circles



📜 License

Licensed under the Apache License, Version 2.0. You may obtain a copy at http://www.apache.org/licenses/LICENSE-2.0

