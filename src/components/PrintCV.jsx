import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function PrintCV({ data }) {
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
            <span>{data.phone}</span>
          </div>
          <div className="print-contact-item">
            <Mail size={14} />
            <span>{data.email}</span>
          </div>
          <div className="print-contact-item">
            <MapPin size={14} />
            <span>{data.location}</span>
          </div>
          {data.socials && data.socials.map((social) => (
            <div className="print-contact-item" key={social.label}>
              <Globe size={14} />
              <span>{social.url.replace(/^https?:\/\/(www\.)?/, '')}</span>
            </div>
          ))}
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
