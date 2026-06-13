import SectionTitle from './SectionTitle';

export default function Skills({ data }) {
  return (
    <section id="skills" className="content-section section-padding">
      <SectionTitle
        eyebrow="02 / Skills"
        title="Kỹ năng"
        description="Nhóm kỹ năng phục vụ trực tiếp cho vận hành gian hàng, digital marketing, tối ưu nội dung sản phẩm và cải thiện hiệu quả bán hàng online."
      />

      <div className="skills-grid">
        {data.map((group, idx) => (
          <article 
            className="glass-panel skill-card reveal-card-flip" 
            key={group.group}
            style={{ '--delay': `${idx * 0.15}s` }}
          >
            <h3>{group.group}</h3>
            <div className="skill-list">
              {group.items.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
