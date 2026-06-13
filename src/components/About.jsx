import { Store, PenLine, TrendingUp } from 'lucide-react';
import SectionTitle from './SectionTitle';

const cards = [
  {
    icon: Store,
    title: 'Tư duy vận hành',
    description: 'Hiểu luồng bán hàng online từ sản phẩm, nội dung, gian hàng đến đơn hàng và chăm sóc khách hàng.',
  },
  {
    icon: PenLine,
    title: 'Tối ưu nội dung',
    description: 'Xây dựng tiêu đề, mô tả, hình ảnh và thông điệp giúp sản phẩm dễ hiểu, dễ tìm và dễ mua hơn.',
  },
  {
    icon: TrendingUp,
    title: 'Tư duy tăng trưởng',
    description: 'Theo dõi thị trường, đối thủ và phản hồi khách hàng để liên tục cải thiện hiệu quả bán hàng online.',
  },
];

export default function About({ data }) {
  return (
    <section id="about" className="content-section section-padding">
      <SectionTitle
        eyebrow="01 / About"
        title="Giới thiệu"
        description="Tổng quan về định hướng công việc, thế mạnh cá nhân và cách tôi kết hợp thương mại điện tử, nội dung và AI trong vận hành thực tế."
      />

      <div className="about-grid">
        <div className="glass-panel about-copy reveal-wing-left">
          {data.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="feature-grid">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <article 
                className="feature-card reveal-wing-right" 
                key={card.title}
                style={{ '--delay': `${idx * 0.15}s` }}
              >
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
