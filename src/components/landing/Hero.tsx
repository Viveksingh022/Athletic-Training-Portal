import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-video-wrap" aria-hidden="true">
        <video
          src="/video1.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <span className="hero-eyebrow">
          BIOMECHANICS FROM ANY VIDEO
        </span>

        <h1 className="hero-title">
          Reduce injuries.<br />
          Improve performance.<br />
          <span>Recover faster.</span>
        </h1>

        <p className="hero-description">
          ATP measures how an athlete moves from ordinary phone video: joint angles,
          range of motion, and left-versus-right symmetry, tracked over time.
        </p>

        <div className="hero-actions">
          <Link
            to="/register"
            className="hero-primary-button"
          >
            Get started <ArrowRight aria-hidden="true" size={17} />
          </Link>
          <Link
            to="/video-analysis"
            className="hero-secondary-button"
          >
            Try it out!
          </Link>
        </div>
      </div>

      <a
        className="hero-scroll-link"
        href="#performance"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById('performance')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Scroll <ChevronDown aria-hidden="true" size={15} />
      </a>
    </section>
  );
};

export default Hero;
