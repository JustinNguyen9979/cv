export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>
        <span className="glitch-text">{title}</span>
      </h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
