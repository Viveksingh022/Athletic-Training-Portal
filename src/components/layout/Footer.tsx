import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="site-brand" aria-label="Athletic Training Portal home">
            <span className="site-brand-mark">ATP</span>
            <span>Athletic Training Portal</span>
          </Link>
          <p>Optimize performance. Reduce risk.<br />Faster recovery.</p>
        </div>

        <nav className="footer-column" aria-label="Product">
          <h2>Product</h2>
          <a href="#performance">Performance</a>
          <a href="#dashboards">Dashboards</a>
          <a href="#prevention-rehab">Prevention &amp; rehab</a>
          <a href="#how-it-works">Why it works</a>
        </nav>

        <div className="footer-column">
          <h2>For</h2>
          <a href="mailto:support@atp-data.com?subject=Coach%20inquiry">Coaches</a>
          <a href="mailto:support@atp-data.com?subject=Athlete%20inquiry">Athletes</a>
          <a href="mailto:support@atp-data.com?subject=Clinician%20inquiry">Clinicians</a>
        </div>

        <nav className="footer-column" aria-label="Account">
          <h2>Account</h2>
          <Link to="/login">Log in</Link>
          <Link to="/register">Get started</Link>
        </nav>

        <nav className="footer-column" aria-label="Company">
          <h2>Company</h2>
          <a href="#about">About</a>
          <a href="#updates">Updates</a>
          <a href="mailto:support@atp-data.com">Contact</a>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ATP · All rights reserved.</p>
        <div>
          <a href="mailto:support@atp-data.com?subject=Privacy%20policy">Privacy Policy</a>
          <a href="mailto:support@atp-data.com?subject=Terms%20of%20service">Terms of Service</a>
          <a href="mailto:support@atp-data.com">support@atp-data.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
