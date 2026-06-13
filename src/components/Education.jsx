import SectionTitle from './SectionTitle';

export default function Education({ data }) {
  return (
    <section className="content-section section-padding">
      <SectionTitle
        eyebrow="05 / Learning"
        title="Học tập & phát triển"
        description="CV kiểu mới nên show được cả năng lực tự học và khả năng biến kiến thức thành sản phẩm."
      />

      <div className="education-list">
        {data.map((item) => (
          <article className="glass-panel education-card" key={item.name}>
            <span>{item.period}</span>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
