// src/api/journal.js
// API utility for journal integration
// https://ina-backend.onrender.com/api/v1

export async function postJournalEntry(content) {
  const API_URL = "https://ina-backend.onrender.com/near/journal"; // Update to your backend endpoint if needed
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });
  if (!res.ok) throw new Error("Failed to post journal entry");
  return res.json();
}
