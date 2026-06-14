import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const ZaloIcon = ({ size = 14, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    <path d="M9 10h6l-6 5h6" strokeWidth="2.5" />
  </svg>
);

const FacebookIcon = ({ size = 14, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const getSocialUsername = (social) => {
  if (!social.url) return '';
  const url = social.url.replace(/\/$/, ''); // Bỏ dấu gạch chéo ở cuối nếu có
  try {
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/').filter(Boolean);
    if (pathParts.length > 0) {
      return pathParts[pathParts.length - 1];
    }
  } catch (e) {
    // Fallback nếu URL không hợp lệ
  }
  return url.split('/').filter(Boolean).pop() || '';
};

const getSocialIcon = (label) => {
  if (label.toLowerCase() === 'facebook') return FacebookIcon;
  return Globe;
};

export default function PrintCV({ data }) {
  const hasZalo = data.socials && data.socials.some(s => s.label.toLowerCase() === 'zalo');
  const filteredSocials = data.socials 
    ? data.socials.filter(s => s.label.toLowerCase() !== 'zalo') 
    : [];

  return (
    <div className="print-cv-container">
      <header className="print-header">
        <div className="print-header-left">
          {data.avatarUrl && (
            <img 
              src={data.avatarUrl.startsWith('http') ? data.avatarUrl : `${import.meta.env.BASE_URL}${data.avatarUrl.replace(/^\//, '')}`} 
              alt={data.name} 
              className="print-avatar" 
            />
          )}
          <div className="print-header-main">
            <h1>{data.name}</h1>
            <p className="print-subtitle">{data.jobTitle}</p>
          </div>
        </div>
        <div className="print-contact-info">
          <div className="print-contact-item">
            <Phone size={14} />
            {hasZalo && <ZaloIcon size={14} />}
            <span>{data.phone}</span>
          </div>
          {filteredSocials.map((social) => {
            const Icon = getSocialIcon(social.label);
            return (
              <div className="print-contact-item" key={social.label}>
                <Icon size={14} />
                <span>{getSocialUsername(social)}</span>
              </div>
            );
          })}
          <div className="print-contact-item">
            <Mail size={14} />
            <span>{data.email}</span>
          </div>
          <div className="print-contact-item">
            <MapPin size={14} />
            <span>{data.location}</span>
          </div>
        </div>
      </header>

      <div className="print-body">
        <div className="print-col-main">
          {/* Giới thiệu */}
          <section className="print-section">
            <h2 className="print-section-title">Giới Thiệu</h2>
            <div className="print-section-content">
              <p>{data.shortIntro}</p>
            </div>
          </section>

          {/* Kinh nghiệm làm việc */}
          <section className="print-section">
            <h2 className="print-section-title">Kinh Nghiệm Làm Việc</h2>
            <div className="print-section-content">
              {data.experience.map((exp, idx) => (
                <div key={idx} className="print-exp-item">
                  <div className="print-item-header">
                    <h3>{exp.role}</h3>
                    <span className="print-item-period">{exp.period}</span>
                  </div>
                  <div className="print-item-company">{exp.company}</div>
                  <p className="print-item-desc">{exp.description}</p>
                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="print-item-highlights">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Dự án */}
          <section className="print-section">
            <h2 className="print-section-title">Dự Án Cá Nhân & Thực Tế</h2>
            <div className="print-section-content">
              {data.projects.map((proj, idx) => (
                <div key={idx} className="print-proj-item">
                  <div className="print-item-header">
                    <h3>{proj.name}</h3>
                    <span className="print-item-type">{proj.type}</span>
                  </div>
                  <p className="print-item-desc">{proj.description}</p>
                  <div className="print-item-tech">
                    <strong>Công nghệ:</strong> {proj.stack.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="print-col-sidebar">
          {/* Kỹ năng */}
          <section className="print-section">
            <h2 className="print-section-title">Kỹ Năng</h2>
            <div className="print-section-content">
              {data.skills.map((skillGroup, idx) => (
                <div key={idx} className="print-skill-group">
                  <h4>{skillGroup.group}</h4>
                  <ul className="print-skill-list">
                    {skillGroup.items.map((skill, sIdx) => (
                      <li key={sIdx}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Học vấn */}
          <section className="print-section">
            <h2 className="print-section-title">Học Vấn</h2>
            <div className="print-section-content">
              {data.education.map((edu, idx) => (
                <div key={idx} className="print-edu-item">
                  <div className="print-item-header">
                    <h4>{edu.name}</h4>
                    <span className="print-item-period">{edu.period}</span>
                  </div>
                  <p className="print-item-desc">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
