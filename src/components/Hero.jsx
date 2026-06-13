import { useState } from 'react';
import { ArrowDown, Download, MapPin, Sparkles } from 'lucide-react';
import AnimatedText from './AnimatedText';

export default function Hero({ data }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="top" className="hero section-padding">
      <div className="hero-content">
        <div className="status-pill">
          <Sparkles size={16} />
          <span>Available for AI-powered digital projects</span>
        </div>

        <h1>
          <span className="glitch-text">{data.nickname}</span>
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

      <div 
        className="hero-card-wrapper reveal-deep-space"
        role="button"
        tabIndex={0}
        onClick={() => setIsFlipped(!isFlipped)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsFlipped(!isFlipped);
          }
        }}
        onMouseLeave={() => {
          if (window.matchMedia('(hover: hover)').matches) {
            setIsFlipped(false);
          }
        }}
      >
        <div className="hero-card-floating-layer">
          <div className={`hero-card-inner-3d ${isFlipped ? 'is-flipped' : ''}`}>
            
            {/* MẶT TRƯỚC (FRONT) - Chứa thông tin CV */}
            <aside className="hero-card hero-card-front" aria-label="Thông tin nhanh">
              <div className="hero-card-border" />
              <div className="avatar-ring">
                <div className="avatar-core">
                  {data.avatarUrl ? (
                    <img 
                      src={data.avatarUrl.startsWith('http') ? data.avatarUrl : `${import.meta.env.BASE_URL}${data.avatarUrl.replace(/^\//, '')}`} 
                      alt={data.name} 
                      className="avatar-img" 
                    />
                  ) : (
                    data.avatarText
                  )}
                </div>
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

            {/* MẶT SAU (BACK) - Họa tiết mạch điện công nghệ, AI, Cyber */}
            <div className="hero-card-back">
              <div className="hero-card-border" />
              
              <div className="cyber-circuit-bg">
              <svg width="100%" height="100%" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="cyber-svg">
                {/* Lưới tọa độ công nghệ nền mờ (Grid) */}
                <defs>
                  <pattern id="circuit-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0, 240, 255, 0.04)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit-grid)" />

                {/* Các vòng tròn định vị công nghệ đồng tâm mờ ảo */}
                <circle cx="200" cy="300" r="130" stroke="rgba(0, 240, 255, 0.08)" strokeWidth="1" strokeDasharray="4 12" />
                <circle cx="200" cy="300" r="160" stroke="rgba(255, 0, 127, 0.06)" strokeWidth="1" strokeDasharray="10 6" />
                <circle cx="200" cy="300" r="190" stroke="rgba(157, 0, 255, 0.04)" strokeWidth="1.5" />

                {/* CÁC ĐƯỜNG MẠCH PHỤ NÉT ĐỨT MỜ TẠO CHIỀU SÂU (MULTI-LAYER PCB) - DÀY ĐẶC & SÁNG HƠN */}
                <path d="M 170 240 L 170 190 L 120 140 L 120 90" className="neon-line-dashed-cyan" />
                <path d="M 230 240 L 230 180 L 280 130 L 280 80" className="neon-line-dashed-pink" />
                <path d="M 170 360 L 170 410 L 120 460 L 120 510" className="neon-line-dashed-purple" />
                <path d="M 230 360 L 230 420 L 280 470 L 280 520" className="neon-line-dashed-cyan" />
                <path d="M 140 315 L 40 315" className="neon-line-dashed-pink" />
                <path d="M 260 285 L 360 285" className="neon-line-dashed-purple" />
                <path d="M 70 240 L 100 190" className="neon-line-dashed-purple" />
                <path d="M 330 360 L 300 410" className="neon-line-dashed-cyan" />

                {/* Các đường đứt mờ bổ sung để tăng mật độ bảng mạch */}
                <path d="M 190 260 L 190 160 L 130 100 L 50 100" className="neon-line-dashed-green" />
                <path d="M 210 260 L 210 170 L 270 110 L 340 110" className="neon-line-dashed-yellow" />
                <path d="M 100 70 L 60 110 L 60 170" className="neon-line-dashed-cyan" />
                <path d="M 300 60 L 340 100 L 340 180" className="neon-line-dashed-pink" />
                <path d="M 80 240 L 80 320" className="neon-line-dashed-purple" />
                <path d="M 320 240 L 320 320" className="neon-line-dashed-green" />
                <path d="M 190 340 L 190 430 L 130 490 L 50 490" className="neon-line-dashed-purple" />
                <path d="M 210 340 L 210 440 L 270 500 L 340 500" className="neon-line-dashed-green" />
                <path d="M 70 360 L 100 410" className="neon-line-dashed-yellow" />
                <path d="M 330 240 L 300 190" className="neon-line-dashed-pink" />

                {/* HỆ THỐNG ĐƯỜNG MẠCH ĐIỆN NEON XUẤT PHÁT TỪ CHIP TRUNG TÂM (Tâm 200, 300) */}
                
                {/* NHÁNH TRÊN BÊN TRÁI */}
                {/* Mạch chính Cyan với tia sáng chạy */}
                <path d="M 180 260 L 180 150 L 110 80 L 40 80 L 40 110" className="neon-line-cyan" />
                <path d="M 180 260 L 180 150 L 110 80 L 40 80 L 40 110" className="neon-flow-line" style={{ color: '#00f0ff' }} />
                
                {/* Mạch phụ Green */}
                <path d="M 150 280 L 110 280 L 70 240 L 70 140" className="neon-line-green" />
                
                {/* Mạch phụ Pink */}
                <path d="M 160 250 L 100 190 L 100 70" className="neon-line-pink" />

                {/* NHÁNH TRÊN BÊN PHẢI */}
                {/* Mạch chính Pink với tia sáng chạy */}
                <path d="M 220 260 L 220 160 L 290 90 L 360 90 L 360 130" className="neon-line-pink" />
                <path d="M 220 260 L 220 160 L 290 90 L 360 90 L 360 130" className="neon-flow-line" style={{ color: '#ff007f' }} />
                
                {/* Mạch phụ Cyan */}
                <path d="M 250 280 L 290 280 L 330 240 L 330 150" className="neon-line-cyan" />
                
                {/* Mạch phụ Purple */}
                <path d="M 240 250 L 300 190 L 300 60" className="neon-line-purple" />

                {/* NHÁNH DƯỚI BÊN TRÁI */}
                {/* Mạch chính Purple với tia sáng chạy */}
                <path d="M 180 340 L 180 440 L 110 510 L 40 510 L 40 480" className="neon-line-purple" />
                <path d="M 180 340 L 180 440 L 110 510 L 40 510 L 40 480" className="neon-flow-line" style={{ color: '#9d00ff' }} />
                
                {/* Mạch phụ Yellow */}
                <path d="M 150 320 L 110 320 L 70 360 L 70 460" className="neon-line-yellow" />
                
                {/* Mạch phụ Cyan */}
                <path d="M 160 350 L 100 410 L 100 530" className="neon-line-cyan" />

                {/* NHÁNH DƯỚI BÊN PHẢI */}
                {/* Mạch chính Green với tia sáng chạy */}
                <path d="M 220 340 L 220 450 L 290 520 L 360 520 L 360 490" className="neon-line-green" />
                <path d="M 220 340 L 220 450 L 290 520 L 360 520 L 360 490" className="neon-flow-line" style={{ color: '#00ff66' }} />
                
                {/* Mạch phụ Pink */}
                <path d="M 250 320 L 290 320 L 330 360 L 330 470" className="neon-line-pink" />
                
                {/* Mạch phụ Purple */}
                <path d="M 240 350 L 300 410 L 300 540" className="neon-line-purple" />

                {/* NHÁNH NGANG (TRUYỀN TIN NGANG) */}
                {/* Sang trái */}
                <path d="M 150 300 L 30 300" className="neon-line-cyan" />
                <path d="M 150 300 L 30 300" className="neon-flow-line" style={{ color: '#00f0ff' }} />
                
                {/* Sang phải */}
                <path d="M 250 300 L 370 300" className="neon-line-pink" />
                <path d="M 250 300 L 370 300" className="neon-flow-line" style={{ color: '#ff007f' }} />

                {/* CÁC CHẤM TRÒN PHÁT SÁNG TẠI ĐẦU MÚT MẠCH ĐIỆN */}
                <circle cx="40" cy="110" r="3" fill="#00f0ff" className="glow-dot" style={{ color: '#00f0ff' }} />
                <circle cx="70" cy="140" r="3" fill="#00ff66" className="glow-dot" style={{ color: '#00ff66' }} />
                <circle cx="100" cy="70" r="3" fill="#ff007f" className="glow-dot" style={{ color: '#ff007f' }} />
                <circle cx="360" cy="130" r="3" fill="#ff007f" className="glow-dot" style={{ color: '#ff007f' }} />
                <circle cx="330" cy="150" r="3" fill="#00f0ff" className="glow-dot" style={{ color: '#00f0ff' }} />
                <circle cx="300" cy="60" r="3" fill="#9d00ff" className="glow-dot" style={{ color: '#9d00ff' }} />
                <circle cx="40" cy="480" r="3" fill="#9d00ff" className="glow-dot" style={{ color: '#9d00ff' }} />
                <circle cx="70" cy="460" r="3" fill="#ffea00" className="glow-dot" style={{ color: '#ffea00' }} />
                <circle cx="100" cy="530" r="3" fill="#00f0ff" className="glow-dot" style={{ color: '#00f0ff' }} />
                <circle cx="360" cy="490" r="3" fill="#00ff66" className="glow-dot" style={{ color: '#00ff66' }} />
                <circle cx="330" cy="470" r="3" fill="#ff007f" className="glow-dot" style={{ color: '#ff007f' }} />
                <circle cx="300" cy="540" r="3" fill="#9d00ff" className="glow-dot" style={{ color: '#9d00ff' }} />
                <circle cx="30" cy="300" r="3" fill="#00f0ff" className="glow-dot" style={{ color: '#00f0ff' }} />
                <circle cx="370" cy="300" r="3" fill="#ff007f" className="glow-dot" style={{ color: '#ff007f' }} />
              </svg>
            </div>

              {/* Chip AI Core ở tâm mặt sau */}
              <div className="cyber-chip">
                <div className="chip-inner">
                  <div className="chip-glow" />
                  <span className="chip-text">AI CORE</span>
                  <span className="chip-subtext">OPERATOR</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
