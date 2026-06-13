import { ArrowDown, Download, MapPin, Sparkles } from 'lucide-react';
import AnimatedText from './AnimatedText';

export default function Hero({ data }) {
  return (
    <section id="top" className="hero section-padding">
      <div className="hero-content">
        <div className="status-pill">
          <Sparkles size={16} />
          <span>Available for AI-powered digital projects</span>
        </div>

        <h1>
          {data.name}
          <span className="gradient-text">{data.jobTitle}</span>
        </h1>

        <p className="hero-intro">{data.shortIntro}</p>

        <div className="hero-animation-line">
          <span>Đang render:</span>
          <AnimatedText phrases={data.animatedTitles} />
        </div>

        <div className="hero-tags">
          {data.heroTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            Liên hệ ngay
            <ArrowDown size={18} />
          </a>
          <button className="btn btn-ghost" type="button" onClick={() => window.print()}>
            In / Lưu PDF
            <Download size={18} />
          </button>
        </div>
      </div>

      <aside className="hero-card" aria-label="Thông tin nhanh">
        <div className="avatar-ring">
          <div className="avatar-core">{data.avatarText}</div>
        </div>

        <div className="profile-card-body">
          <p className="card-kicker">Digital Identity</p>
          <h2>{data.name}</h2>
          <p>{data.jobTitle}</p>

          <div className="location-line">
            <MapPin size={16} />
            <span>{data.location}</span>
          </div>
        </div>

        <div className="stats-grid">
          {data.stats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
