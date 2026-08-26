export const SOCIAL_IMAGE_ALT = "Walter Furrer — Software Developer";
export const SOCIAL_IMAGE_SIZE = { width: 1200, height: 630 };

export default function SocialImage() {
  return (
    <div
      style={{
        alignItems: "stretch",
        background:
          "radial-gradient(circle at 82% 18%, #31302a 0, #171717 34%, #0a0a0a 72%)",
        color: "#f4f4f4",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px 80px",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          color: "#c2c2c2",
          display: "flex",
          fontFamily: "monospace",
          fontSize: 22,
          gap: 14,
          letterSpacing: 1,
        }}
      >
        <span
          style={{
            background: "#e6b84a",
            borderRadius: 999,
            display: "flex",
            height: 10,
            width: 10,
          }}
        />
        walterfurrer.dev
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          Walter Furrer
        </div>
        <div
          style={{
            color: "#b5b5b5",
            display: "flex",
            fontSize: 34,
            lineHeight: 1.35,
            maxWidth: 820,
          }}
        >
          Software developer building thoughtful, useful web products.
        </div>
      </div>

      <div
        style={{
          color: "#8f8f8f",
          display: "flex",
          fontFamily: "monospace",
          fontSize: 20,
          gap: 14,
        }}
      >
        <span>currently</span>
        <span>·</span>
        <span>projects</span>
        <span>·</span>
        <span>contact</span>
      </div>
    </div>
  );
}
