import { Cpu, Rocket, ShieldCheck } from 'lucide-react';
import SectionTitle from './SectionTitle';

const cards = [
  {
    icon: Cpu,
    title: 'Tư duy hệ thống',
    description: 'Nhìn vấn đề theo luồng dữ liệu, điểm nghẽn và khả năng tự động hoá.',
  },
  {
    icon: Rocket,
    title: 'Tốc độ triển khai',
    description: 'Ưu tiên giải pháp rõ ràng, dễ kiểm thử, dễ nâng cấp khi dự án lớn hơn.',
  },
  {
    icon: ShieldCheck,
    title: 'Ý thức bảo mật',
    description: 'Không hardcode dữ liệu nhạy cảm, không leak lỗi nội bộ, luôn nghĩ đến rủi ro.',
  },
];

export default function About({ data }) {
  return (
    <section id="about" className="content-section section-padding">
      <SectionTitle
        eyebrow="01 / About"
        title="Giới thiệu"
        description="Một CV không chỉ để đọc, mà còn phải tạo cảm giác chuyên nghiệp ngay từ cú chạm đầu tiên."
      />

      <div className="about-grid">
        <div className="glass-panel about-copy">
          {data.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="feature-grid">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article className="feature-card" key={card.title}>
                <Icon size={22} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
