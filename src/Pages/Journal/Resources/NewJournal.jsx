import { useState } from 'react';
import { postJournalEntry } from '../../../api/journal';

function NewJournal({ onBack }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showVaultOptions, setShowVaultOptions] = useState(false);
  const [selectedVault, setSelectedVault] = useState("private");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const vaultOptions = [
    {
      key: "private",
      label: "Private Vault",
      desc: "Only you can view this journal. It's stored securely and privately.",
      color: "bg-white border-blue-500 text-blue-700",
    },
    {
      key: "dao",
      label: "DAO Vault",
      desc: "Share anonymously with a healing community you're part of. DAO members may reflect, but never judge.",
      color: "bg-white border-green-500 text-green-700",
    },
    {
      key: "public",
      label: "Public Vault",
      desc: "Make this anonymous journal public to help others feel less alone.",
      color: "bg-white border-purple-500 text-purple-700",
    },
  ];

  const handleSave = () => {
    setShowVaultOptions(true);
  };

  // Go back one step from confirmation or vault options, else call onBack
  const handleBack = () => {
    if (showConfirmation) {
      setShowConfirmation(false);
      setText("");
    } else if (showVaultOptions) {
      setShowVaultOptions(false);
    } else {
      onBack && onBack();
    }
  };

  const handleFinalSave = async () => {
    setShowVaultOptions(false);
    setShowConfirmation(true);
    setLoading(true);
    setError("");
    try {
      await postJournalEntry({
        content: text,
        tags: [],
        is_private: selectedVault === "private",
        is_public: selectedVault === "public",
        is_dao: selectedVault === "dao",
      });
      setText("");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-pink-100">
      {/* Confirmation Screen */}
      {showConfirmation ? (
        <div className="flex flex-col flex-1 min-h-screen items-center justify-center px-4 py-8">
          {/* Header */}
          <div className="flex items-center w-full max-w-md mx-auto mb-8">
            <button onClick={handleBack} className="p-1">
              <span className="text-2xl text-gray-600">&#8592;</span>
            </button>
            <div className="flex-1 text-center -ml-8">
              <h1 className="text-base sm:text-lg font-semibold text-gray-800">Confirmation Screen</h1>
            </div>
            <div className="w-8" />
          </div>
          <div className="text-center w-full max-w-md mx-auto">
            <p className="text-gray-700 text-base mb-6">Your journal entry has been saved successfully.<br/>You're doing the inner work  and that's powerful.</p>
            <div className="text-6xl mb-4">🎉</div>
            <div className="text-sm text-gray-600 mb-8">Saved to: {vaultOptions.find(v => v.key === selectedVault)?.label || ''}</div>
            <button
              className="w-full max-w-md py-3 rounded-lg font-semibold text-white bg-pink-400 hover:bg-pink-500 active:bg-pink-600 text-base"
              onClick={() => {}}
              disabled={loading}
            >
              Mint as NFT
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-6 pb-2">
            <button onClick={handleBack} className="p-1">
              <span className="text-2xl text-gray-600">&#8592;</span>
            </button>
            <div className="flex-1 text-center -ml-8">
              <h1 className="text-base sm:text-lg font-semibold text-gray-800">Journaling Vault</h1>
            </div>
            <div className="w-8" />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col px-4 pt-2 pb-28 max-w-md w-full mx-auto">
            <div className="mb-2 text-center">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">New Journal Entry</h2>
              <p className="text-gray-600 text-xs sm:text-sm">
                This space is yours. Feel free to express, tag, and store your thoughts safely.
              </p>
            </div>
            <div className="mt-4 mb-1">
              <span className="text-xs text-blue-500">
                {new Date().toLocaleString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
            <textarea
              className="mt-2 w-full bg-pink-50 rounded-lg border border-gray-200 p-3 min-h-[100px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300 resize-none text-sm"
              placeholder="Start writing how you feel today..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            {error && <div className="text-red-500 text-xs mt-2">{error}</div>}
          </div>

          {/* Save Button */}
          {!showVaultOptions && (
            <div className="fixed bottom-0 left-0 w-full bg-pink-50 border-t border-gray-200 z-50 flex flex-col items-center py-4">
              <button
                className="w-11/12 max-w-md py-3 rounded-lg font-semibold text-white bg-pink-400 hover:bg-pink-500 active:bg-pink-600 mb-2 text-base"
                onClick={handleSave}
                disabled={loading || !text.trim()}
              >
                Save Entry
              </button>
              <button
                className="w-11/12 max-w-md py-3 rounded-lg font-semibold text-pink-400 bg-white border border-pink-300 hover:bg-pink-100 text-base"
                onClick={onBack}
                disabled={loading}
              >
                Cancel
              </button>
            </div>
          )}

          {/* Vault Options Modal/Page */}
          {showVaultOptions && (
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-pink-100 bg-opacity-95 px-2 py-8 overflow-auto">
              <div className="w-full max-w-md mx-auto">
                <h2 className="text-center text-lg font-semibold text-gray-800 mb-6">Journaling Vault</h2>
                <div className="space-y-6">
                  {vaultOptions.map((vault) => (
                    <div key={vault.key} className="flex items-center gap-3">
                      <div className="flex flex-col gap-2 flex-1">
                        <div className="flex gap-2">
                          {vaultOptions.map((v) => (
                            <button
                              key={v.key}
                              className={`px-3 py-1 rounded-lg border text-xs font-semibold transition-all duration-150 focus:outline-none ${selectedVault === v.key ? v.color + ' ring-2 ring-pink-400' : 'bg-white border-gray-300 text-gray-500'}`}
                              onClick={() => setSelectedVault(v.key)}
                            >
                              {v.label}
                            </button>
                          ))}
                        </div>
                        <div className="bg-white/80 rounded-lg p-3 text-xs text-gray-600 shadow-sm">
                          {vault.desc}
                        </div>
                      </div>
                      <button
                        className="ml-2 text-gray-400 hover:text-gray-600 text-lg font-bold"
                        onClick={() => setShowVaultOptions(false)}
                        aria-label="Close"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3">
                  <button
                    className="w-full py-3 rounded-lg font-semibold text-white bg-pink-400 hover:bg-pink-500 active:bg-pink-600 text-base"
                    onClick={handleFinalSave}
                    disabled={loading}
                  >
                    Save Entry
                  </button>
                  <button
                    className="w-full py-3 rounded-lg font-semibold text-pink-400 bg-white border border-pink-300 hover:bg-pink-100 text-base"
                    onClick={() => setShowVaultOptions(false)}
                    disabled={loading}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default NewJournal;