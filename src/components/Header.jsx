import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Kỹ năng', href: '#skills' },
  { label: 'Kinh nghiệm', href: '#experience' },
  { label: 'Dự án', href: '#projects' },
  { label: 'Liên hệ', href: '#contact' },
];

export default function Header({ data, theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Về đầu trang">
        <span className="brand-mark">{data.avatarText}</span>
        <span>
          <strong>{data.name}</strong>
          <small>Nhân viên TMĐT</small>
        </span>
      </a>

      <nav className={isOpen ? 'nav-list nav-list--open' : 'nav-list'} aria-label="Menu chính">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label="Đổi giao diện sáng tối">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          <span>{theme === 'dark' ? 'Sáng' : 'Tối'}</span>
        </button>

        <button className="menu-toggle" type="button" onClick={() => setIsOpen(!isOpen)} aria-label="Mở menu">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
