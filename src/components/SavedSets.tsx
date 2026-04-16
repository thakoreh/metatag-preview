"use client";

import { useApp } from "@/context/AppContext";

export default function SavedSets() {
  const { state, dispatch } = useApp();
  const { savedSets } = state;
  const [saveName, setSaveName] = React.useState("");
  const [showInput, setShowInput] = React.useState(false);

  const handleSave = () => {
    if (!saveName.trim()) return;
    dispatch({ type: "SAVE_SET", payload: saveName.trim() });
    setSaveName("");
    setShowInput(false);
  };

  return (
    <div
      style={{
        background: "var(--card)",
        borderRadius: 16,
        border: "1px solid var(--border)",
        padding: 24,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <h3
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "var(--heading)",
            margin: 0,
          }}
        >
          Saved Meta Tag Sets
        </h3>
        {!showInput && (
          <button
            onClick={() => setShowInput(true)}
            style={{
              padding: "6px 14px",
              borderRadius: 8,
              border: "1px solid var(--primary)",
              background: "transparent",
              color: "var(--primary)",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            Save Current
          </button>
        )}
      </div>

      {showInput && (
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 16,
          }}
        >
          <input
            type="text"
            value={saveName}
            onChange={(e) => setSaveName(e.target.value)}
            placeholder="Name this set..."
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
            style={{
              flex: 1,
              padding: "8px 12px",
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "var(--bg)",
              color: "var(--heading)",
              fontSize: 14,
              outline: "none",
            }}
          />
          <button
            onClick={handleSave}
            style={{
              padding: "8px 16px",
              borderRadius: 8,
              border: "none",
              background: "var(--primary)",
              color: "#fff",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              setShowInput(false);
              setSaveName("");
            }}
            style={{
              padding: "8px 12px",
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "transparent",
              color: "var(--body)",
              cursor: "pointer",
              fontSize: 13,
            }}
          >
            Cancel
          </button>
        </div>
      )}

      {savedSets.length === 0 ? (
        <p
          style={{
            color: "var(--body)",
            opacity: 0.6,
            fontSize: 14,
            margin: 0,
            textAlign: "center",
            padding: "20px 0",
          }}
        >
          No saved sets yet. Save your current meta tags to reuse later.
        </p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {savedSets.map((set) => (
            <div
              key={set.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 16px",
                borderRadius: 10,
                border: "1px solid var(--border)",
                background: "var(--bg)",
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontWeight: 600,
                    color: "var(--heading)",
                    fontSize: 14,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {set.name || "Unnamed"}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--body)",
                    opacity: 0.6,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {set.title} - {set.url}
                </div>
              </div>
              <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                <button
                  onClick={() =>
                    dispatch({ type: "LOAD_SET", payload: set.id })
                  }
                  style={{
                    padding: "4px 12px",
                    borderRadius: 6,
                    border: "1px solid var(--primary)",
                    background: "transparent",
                    color: "var(--primary)",
                    cursor: "pointer",
                    fontSize: 12,
                  }}
                >
                  Load
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "DELETE_SET", payload: set.id })
                  }
                  style={{
                    padding: "4px 12px",
                    borderRadius: 6,
                    border: "1px solid #ef4444",
                    background: "transparent",
                    color: "#ef4444",
                    cursor: "pointer",
                    fontSize: 12,
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import React from "react";
