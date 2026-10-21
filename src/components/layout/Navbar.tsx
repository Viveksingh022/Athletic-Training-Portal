import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Sun, X } from 'lucide-react';

const navigationItems = [
  { id: 'performance', label: 'Performance' },
  { id: 'dashboards', label: 'Dashboards' },
  { id: 'prevention-rehab', label: 'Prevention & Rehab' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'updates', label: 'Updates' },
  { id: 'about', label: 'About' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <div className="site-nav-container">
        <Link to="/" className="site-brand" aria-label="Athletic Training Portal home">
          <span className="site-brand-mark">ATP</span>
          <span>Athletic Training Portal</span>
        </Link>

        <nav className="site-nav-links" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              to={`/#${item.id}`}
              onClick={() => handleScrollTo(item.id)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-nav-actions">
          <button className="theme-toggle" type="button" aria-label="Theme options">
            <Sun aria-hidden="true" size={18} />
          </button>
          <Link to="/login" className="site-login-link">Log in</Link>
          <Link
            to="/#hero-cta"
            onClick={() => handleScrollTo('hero-cta')}
            className="site-nav-cta"
          >
            Get started
          </Link>
        </div>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      {isOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              to={`/#${item.id}`}
              onClick={() => handleScrollTo(item.id)}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/login" onClick={() => setIsOpen(false)}>Log in</Link>
          <Link
            to="/#hero-cta"
            className="site-nav-cta"
            onClick={() => handleScrollTo('hero-cta')}
          >
            Get started
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
