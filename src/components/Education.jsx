import SectionTitle from './SectionTitle';

export default function Education({ data }) {
  return (
    <section className="content-section section-padding">
      <SectionTitle
        eyebrow="05 / Learning"
        title="Học tập & phát triển"
        description="Quá trình tự học và phát triển kỹ năng thông qua công việc thực tế trong thương mại điện tử, digital marketing và công cụ AI."
      />

      <div className="education-list">
        {data.map((item, idx) => (
          <article 
            className="glass-panel education-card reveal-wing-left" 
            key={item.name}
            style={{ '--delay': `${idx * 0.15}s` }}
          >
            <span>{item.period}</span>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
