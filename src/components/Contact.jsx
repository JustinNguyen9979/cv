import { Mail, Phone, Send } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function Contact({ data }) {
  return (
    <section id="contact" className="content-section section-padding contact-section">
      <SectionTitle
        eyebrow="06 / Contact"
        title="Liên hệ"
        description="Sẵn sàng trao đổi về các vị trí E-commerce Executive, TikTok Shop/Shopee Operator, Digital Marketing hoặc Content sản phẩm."
      />

      <div className="contact-card glass-panel reveal-deep-space">
        <div>
          <h3>Sẵn sàng kết nối?</h3>
          <p>
            Có kinh nghiệm thực chiến trong vận hành TikTok Shop, Shopee, tối ưu sản phẩm, nội dung bán hàng và chăm sóc khách hàng.
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
