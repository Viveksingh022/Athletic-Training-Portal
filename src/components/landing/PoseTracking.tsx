import { ScanLine } from 'lucide-react';

const PoseTracking = () => {
  return (
    <section id="performance" className="landing-section pose-section">
      <div className="landing-section-heading">
        <span className="section-badge"><ScanLine aria-hidden="true" size={14} /> Pose tracking</span>
        <h2>A single recording becomes<br />a full range-of-motion map</h2>
        <p>Biomechanical insight helps guide interventions that improve performance safely.</p>
      </div>

      <div className="pose-previews">
        <div className="pose-preview-card">
          <video src="/video1.mp4" autoPlay muted loop playsInline aria-label="Athlete training video" />
          <span className="preview-label"><i /> Capture · Phone video</span>
        </div>
        <div className="pose-preview-card pose-skeleton-preview">
          <video src="/video1.mp4" autoPlay muted loop playsInline aria-label="Athlete video with movement landmarks" />
          <svg className="pose-skeleton" viewBox="0 0 120 190" fill="none" aria-hidden="true">
            <g stroke="#48d6ee" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M58 35 50 65 38 91 29 126 16 153M50 65 68 88 82 119 101 143M51 48 35 61 25 83M56 48 72 59 88 77M38 91 57 99 82 96M29 126 45 132M82 119 94 127" />
            </g>
            <g fill="#f5a623" stroke="#fff" strokeWidth="1.5">
              <circle cx="58" cy="27" r="7" /><circle cx="50" cy="48" r="5" />
              <circle cx="68" cy="50" r="5" /><circle cx="35" cy="61" r="5" />
              <circle cx="72" cy="59" r="5" /><circle cx="25" cy="83" r="5" />
              <circle cx="88" cy="77" r="5" /><circle cx="38" cy="91" r="5" />
              <circle cx="82" cy="96" r="5" /><circle cx="57" cy="99" r="5" />
              <circle cx="29" cy="126" r="5" /><circle cx="82" cy="119" r="5" />
              <circle cx="16" cy="153" r="5" /><circle cx="101" cy="143" r="5" />
            </g>
          </svg>
          <span className="preview-label">Skeleton · Landmarks on the clip</span>
        </div>
      </div>
    </section>
  );
};

export default PoseTracking;
