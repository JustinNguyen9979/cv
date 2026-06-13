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
        {data.map((project) => (
          <article className="project-card" key={project.name}>
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
        ))}
      </div>
    </section>
  );
}
