import SectionTitle from './SectionTitle';

export default function Skills({ data }) {
  return (
    <section id="skills" className="content-section section-padding">
      <SectionTitle
        eyebrow="02 / Skills"
        title="Kỹ năng"
        description="Chia theo nhóm để sau này anh muốn thêm/bớt chỉ cần sửa file dữ liệu CV."
      />

      <div className="skills-grid">
        {data.map((group) => (
          <article className="glass-panel skill-card" key={group.group}>
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
