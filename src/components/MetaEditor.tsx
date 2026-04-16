"use client";

import { useApp } from "@/context/AppContext";

export default function MetaEditor() {
  const { state, dispatch } = useApp();
  const { meta } = state;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: 28,
        background: "var(--card)",
        borderRadius: 16,
        border: "1px solid var(--border)",
      }}
    >
      <h3
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: "var(--heading)",
          margin: 0,
        }}
      >
        Meta Tag Editor
      </h3>

      {/* URL Field */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--body)",
          }}
        >
          Page URL
        </label>
        <input
          type="url"
          value={meta.url}
          onChange={(e) =>
            dispatch({ type: "SET_URL", payload: e.target.value })
          }
          placeholder="https://example.com"
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid var(--border)",
            background: "var(--bg)",
            color: "var(--heading)",
            fontSize: 14,
            outline: "none",
            width: "100%",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Title Field */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "var(--body)",
            }}
          >
            Title
          </label>
          <span
            style={{
              fontSize: 12,
              color: meta.title.length > 60 ? "#ef4444" : "var(--body)",
              opacity: 0.7,
            }}
          >
            {meta.title.length}/60
          </span>
        </div>
        <input
          type="text"
          value={meta.title}
          onChange={(e) => {
            if (e.target.value.length <= 60)
              dispatch({ type: "SET_TITLE", payload: e.target.value });
          }}
          placeholder="Page title (max 60 chars)"
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid var(--border)",
            background: "var(--bg)",
            color: "var(--heading)",
            fontSize: 14,
            outline: "none",
            width: "100%",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Description Field */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "var(--body)",
            }}
          >
            Description
          </label>
          <span
            style={{
              fontSize: 12,
              color: meta.description.length > 160 ? "#ef4444" : "var(--body)",
              opacity: 0.7,
            }}
          >
            {meta.description.length}/160
          </span>
        </div>
        <textarea
          value={meta.description}
          onChange={(e) => {
            if (e.target.value.length <= 160)
              dispatch({ type: "SET_DESCRIPTION", payload: e.target.value });
          }}
          placeholder="Page description (max 160 chars)"
          rows={3}
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid var(--border)",
            background: "var(--bg)",
            color: "var(--heading)",
            fontSize: 14,
            outline: "none",
            resize: "vertical",
            fontFamily: "inherit",
            width: "100%",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* OG Image URL */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--body)",
          }}
        >
          OG Image URL
        </label>
        <input
          type="url"
          value={meta.ogImageUrl}
          onChange={(e) =>
            dispatch({ type: "SET_OG_IMAGE", payload: e.target.value })
          }
          placeholder="https://example.com/image.png (or drag & drop)"
          onDragOver={(e) => {
            e.preventDefault();
            e.currentTarget.style.borderColor = "var(--primary)";
          }}
          onDragLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.currentTarget.style.borderColor = "var(--border)";
            const text = e.dataTransfer.getData("text/uri-list") || e.dataTransfer.getData("text/plain");
            if (text && text.startsWith("http")) {
              dispatch({ type: "SET_OG_IMAGE", payload: text.trim() });
            }
          }}
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid var(--border)",
            background: "var(--bg)",
            color: "var(--heading)",
            fontSize: 14,
            outline: "none",
            width: "100%",
            boxSizing: "border-box",
            transition: "border-color 0.2s",
          }}
        />
        {meta.ogImageUrl && (
          <div
            style={{
              marginTop: 8,
              borderRadius: 10,
              overflow: "hidden",
              border: "1px solid var(--border)",
              maxHeight: 160,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={meta.ogImageUrl}
              alt="OG Preview"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: 160,
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        )}
      </div>

      {/* Twitter Card Type */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--body)",
          }}
        >
          Twitter Card Type
        </label>
        <div style={{ display: "flex", gap: 8 }}>
          {(
            ["summary_large_image", "summary"] as const
          ).map((cardType) => (
            <button
              key={cardType}
              onClick={() =>
                dispatch({
                  type: "SET_TWITTER_CARD_TYPE",
                  payload: cardType,
                })
              }
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border:
                  meta.twitterCardType === cardType
                    ? "2px solid var(--primary)"
                    : "1px solid var(--border)",
                background:
                  meta.twitterCardType === cardType
                    ? "var(--primary)"
                    : "var(--bg)",
                color:
                  meta.twitterCardType === cardType
                    ? "#fff"
                    : "var(--body)",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 500,
                transition: "all 0.2s",
              }}
            >
              {cardType === "summary_large_image"
                ? "Large Image"
                : "Summary"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
