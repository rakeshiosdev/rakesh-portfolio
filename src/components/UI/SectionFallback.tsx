export default function SectionFallback() {
  return (
    <div
      role="status"
      aria-label="Loading content"
      style={{
        minHeight: "40vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        className="mono"
        style={{
          color: "var(--color-text-tertiary)",
          fontSize: "var(--fs-xs)",
        }}
      >
        loading…
      </span>
    </div>
  );
}
