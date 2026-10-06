
export default function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
  align = "start"
}) {
  return (
    <div
      className={`section-heading ${
        light ? "heading-light" : ""
      } text-${align}`}
    >
      {eyebrow && (
        <div className="eyebrow">
          <span></span>
          {eyebrow}
        </div>
      )}

      <h2>{title}</h2>

      {text && <p>{text}</p>}
    </div>
  );
}