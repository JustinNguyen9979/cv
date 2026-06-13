import { ExternalLink } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function Projects({ data }) {
  return (
    <section id="projects" className="content-section section-padding">
      <SectionTitle
        eyebrow="04 / Projects"
        title="Dự án nổi bật"
        description="Một số dự án và quy trình thực tế liên quan đến nội dung sản phẩm, tối ưu marketplace, social media và ứng dụng AI trong marketing."
      />

      <div className="project-grid">
        {data.map((project, idx) => {
          let revealClass = 'reveal-deep-space';
          if (idx % 3 === 0) revealClass = 'reveal-wing-left';
          else if (idx % 3 === 2) revealClass = 'reveal-wing-right';

          return (
            <article 
              className={`project-card ${revealClass}`} 
              key={project.name}
              style={{ '--delay': `${(idx % 3) * 0.15}s` }}
            >
              <div className="project-topline">
                <span>{project.type}</span>
                <a href={project.url} aria-label={`Xem ${project.name}`}>
                  <ExternalLink size={18} />
                </a>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
