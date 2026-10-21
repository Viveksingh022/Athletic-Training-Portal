import { useState } from 'react';
import { Activity, AlertTriangle, ChevronRight, ScanLine, Users } from 'lucide-react';

const DashboardPreview = () => {
  const [view, setView] = useState<'coach' | 'athlete'>('coach');

  const stats = view === 'coach'
    ? [
        { label: 'Athletes tracked', value: '13', tone: 'default', icon: <Users size={13} /> },
        { label: 'Avg readiness', value: '64', tone: 'warning', icon: <Activity size={13} /> },
        { label: 'ROM coverage', value: '78%', tone: 'blue', icon: <ScanLine size={13} /> },
        { label: 'Need attention', value: '4', tone: 'danger', icon: <AlertTriangle size={13} /> },
      ]
    : [
        { label: 'Sessions completed', value: '18', tone: 'default', icon: <Activity size={13} /> },
        { label: 'Readiness', value: '82', tone: 'warning', icon: <Activity size={13} /> },
        { label: 'ROM progress', value: '+12%', tone: 'blue', icon: <ScanLine size={13} /> },
        { label: 'Goals reached', value: '4', tone: 'danger', icon: <AlertTriangle size={13} /> },
      ];

  const athletes = [
    { initials: 'S2', name: 'Student 2', issue: 'Knee asymmetry 18%', score: '38', tone: 'danger' },
    { initials: 'JD', name: 'John D.', issue: 'Ankle asymmetry 12%', score: '51', tone: 'warning' },
    { initials: 'AK', name: 'Alex K.', issue: 'Hip range trending low', score: '63', tone: 'warning' },
  ];

  return (
    <section id="dashboards" className="landing-section dashboard-section">
      <div className="landing-section-heading">
        <span className="section-badge"><Users aria-hidden="true" size={14} /> Built for both sides of the whistle</span>
        <h2>Personalized dashboards for<br />both coaches and athletes</h2>
        <p>Coaches view team and individual performance across sleep, nutrition, and biomechanics. Athletes get feedback that helps prevent injuries and improve their performance.</p>
      </div>

      <div className="dashboard-toggle" role="group" aria-label="Choose dashboard view">
        <button
          type="button"
          className={view === 'coach' ? 'is-selected' : ''}
          aria-pressed={view === 'coach'}
          onClick={() => setView('coach')}
        >
          Coach view
        </button>
        <button
          type="button"
          className={view === 'athlete' ? 'is-selected' : ''}
          aria-pressed={view === 'athlete'}
          onClick={() => setView('athlete')}
        >
          Athlete view
        </button>
      </div>

      <div className="dashboard-stats">
        {stats.map((stat) => (
          <article className="dashboard-stat" key={stat.label}>
            <span className="dashboard-stat-label">{stat.icon}{stat.label}</span>
            <strong className={`stat-${stat.tone}`}>{stat.value}</strong>
          </article>
        ))}
      </div>

      <div className="dashboard-panels">
        <article className="dashboard-panel movement-panel">
          <h3><ScanLine aria-hidden="true" size={13} /> Squad movement profile · ROM by region vs. norm</h3>
          <div className="radar-chart">
            <span className="radar-label radar-top">Hip</span>
            <span className="radar-label radar-right">Knee</span>
            <span className="radar-label radar-bottom">Ankle</span>
            <span className="radar-label radar-left">Shoulder</span>
            <svg viewBox="0 0 240 210" role="img" aria-label="Radar chart comparing squad movement profile with the norm">
              <g className="radar-grid">
                <polygon points="120,26 196,82 167,171 73,171 44,82" />
                <polygon points="120,45 179,88 157,157 83,157 61,88" />
                <polygon points="120,64 162,94 146,143 94,143 78,94" />
                <path d="M120 26v148M44 82l123 89M196 82 73 171" />
              </g>
              <polygon className="radar-norm" points="120,45 174,91 145,153 86,156 60,90" />
              <polygon className="radar-athlete" points="120,35 158,96 151,151 90,158 64,91" />
              <g className="radar-points"><circle cx="120" cy="35" r="3.5" /><circle cx="158" cy="96" r="3.5" /><circle cx="151" cy="151" r="3.5" /><circle cx="90" cy="158" r="3.5" /><circle cx="64" cy="91" r="3.5" /></g>
            </svg>
          </div>
          <div className="chart-legend"><span><i /> Current squad</span><span><i /> Squad norm</span></div>
        </article>

        <article className="dashboard-panel triage-panel">
          <div className="triage-heading">
            <div><span>Triage</span><h3>Needs attention</h3></div>
            <strong>4</strong>
          </div>
          <div className="athlete-list">
            {athletes.map((athlete) => (
              <div className="athlete-row" key={athlete.initials}>
                <span className={`athlete-avatar avatar-${athlete.tone}`}>{athlete.initials}</span>
                <div className="athlete-info"><strong>{athlete.name}</strong><span>{athlete.issue}</span></div>
                <div className={`athlete-score score-${athlete.tone}`}><strong>{athlete.score}</strong><span>Readiness</span></div>
                <ChevronRight aria-hidden="true" size={17} />
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default DashboardPreview;
