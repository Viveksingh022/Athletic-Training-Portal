import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Network, ScanLine } from 'lucide-react';

const steps = [
  { title: 'Coordinate', description: 'Build your roster and decide who gets screened, and when.' },
  { title: 'Record', description: 'Film on a phone you already own. No wearables, no markers.' },
  { title: 'Analyze', description: 'Joint angles, range of motion and left-versus-right symmetry, read back in plain language.' },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="how-it-works" className="landing-section how-section">
      <div className="landing-section-heading">
        <span className="section-badge"><Network aria-hidden="true" size={14} /> Why it works</span>
        <h2>Biomechanical insight<br />that prevents injuries</h2>
        <p>No special equipment required. Just a phone video.</p>
      </div>

      <div className="how-content">
        <div className="how-steps">
          {steps.map((step, index) => (
            <button
              type="button"
              className={`how-step${activeStep === index ? ' is-active' : ''}`}
              key={step.title}
              onClick={() => setActiveStep(index)}
              aria-pressed={activeStep === index}
            >
              <span>Step 0{index + 1}</span>
              <strong>{step.title}</strong>
              <small>{step.description}</small>
            </button>
          ))}
        </div>

        <div className="how-visual">
          <video src="/video1.mp4" autoPlay muted loop playsInline aria-label="Recording an athlete with a phone" />
          <div className="how-visual-overlay" />
          <span className="how-visual-caption"><ScanLine aria-hidden="true" size={14} /> Any phone · No wearables</span>
        </div>
      </div>
      <div className="how-cta">
        <Link to="/video-analysis">See how video analysis works</Link>
      </div>
    </section>
  );
};

export default HowItWorks;
