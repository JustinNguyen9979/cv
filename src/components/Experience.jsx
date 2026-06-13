import SectionTitle from './SectionTitle';

export default function Experience({ data }) {
  return (
    <section id="experience" className="content-section section-padding">
      <SectionTitle
        eyebrow="03 / Experience"
        title="Kinh nghiệm"
        description="Kinh nghiệm làm việc xoay quanh vận hành gian hàng, phát triển nội dung sản phẩm, nghiên cứu thị trường và tối ưu hiệu quả bán hàng online."
      />

      <div className="timeline">
        {data.map((item) => (
          <article className="timeline-item" key={`${item.role}-${item.company}`}>
            <div className="timeline-dot" />
            <div className="glass-panel timeline-card">
              <div className="timeline-head">
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <span>{item.period}</span>
              </div>
              <p>{item.description}</p>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
