import { Mail, Phone, Send } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function Contact({ data }) {
  return (
    <section id="contact" className="content-section section-padding contact-section">
      <SectionTitle
        eyebrow="06 / Contact"
        title="Liên hệ"
        description="Khu vực CTA cuối trang, dùng để điều hướng nhà tuyển dụng hoặc khách hàng tiềm năng."
      />

      <div className="contact-card glass-panel">
        <div>
          <h3>Sẵn sàng kết nối?</h3>
          <p>
            Nếu cần một người có tư duy vận hành, hiểu AI automation và biết biến ý tưởng thành quy trình chạy được,
            đây là khu vực bấm nút. Không màu mè, nhưng có điện.
          </p>
        </div>

        <div className="contact-actions">
          <a className="btn btn-primary" href={`mailto:${data.email}`}>
            <Mail size={18} />
            {data.email}
          </a>
          <a className="btn btn-ghost" href={`tel:${data.phone.replace(/\s/g, '')}`}>
            <Phone size={18} />
            {data.phone}
          </a>
        </div>

        <div className="social-list">
          {data.socials.map((social) => (
            <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
              <Send size={15} />
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
