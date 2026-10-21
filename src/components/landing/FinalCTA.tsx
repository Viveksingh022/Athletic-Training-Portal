import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section id="hero-cta" className="final-cta-section">
      <div className="final-cta-content">
        <h2>Try it on your own roster</h2>
        <p>Set up your team, film on a phone you already own, and get a full movement read-out on every athlete. That's it.</p>
        <div className="final-cta-actions">
          <Link to="/register" className="final-cta-primary">Get started <ArrowRight aria-hidden="true" size={17} /></Link>
          <a href="mailto:support@atp-data.com" className="final-cta-secondary">Talk to us</a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
