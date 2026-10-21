import { useState } from 'react';
import { Activity, HeartPulse } from 'lucide-react';

const PreventionRehab = () => {
  const [tab, setTab] = useState<'prevention' | 'rehab'>('prevention');
  const metrics = tab === 'prevention'
    ? [
        { label: 'Trend', value: 'Declining', detail: '-1.3° / wk · At risk', tone: 'danger' },
        { label: 'Vs healthy floor', value: '-5°', detail: 'floor 20° · now 15°', tone: 'default' },
        { label: 'Team pct', value: '30th', detail: 'within squad norm', tone: 'blue' },
        { label: 'Re-capture', value: '1 wk', detail: "confirm it's moving", tone: 'default' },
      ]
    : [
        { label: 'Recovery trend', value: 'Improving', detail: '+2.1° / wk · On track', tone: 'blue' },
        { label: 'Vs healthy floor', value: '-2°', detail: 'floor 20° · now 18°', tone: 'default' },
        { label: 'Team pct', value: '55th', detail: 'closing the gap', tone: 'blue' },
        { label: 'Re-capture', value: '3 days', detail: 'check range again', tone: 'default' },
      ];

  return (
    <section id="prevention-rehab" className="landing-section rehab-section">
      <div className="landing-section-heading">
        <span className="section-badge"><Activity aria-hidden="true" size={14} /> Prevention &amp; rehab</span>
        <h2>Reduce injuries and return-<br />to-play with confidence</h2>
        <p>The same range-of-motion trend flags a joint drifting toward injury, and tracks its way back afterward. Switch the lens below.</p>
      </div>

      <div className="dashboard-toggle rehab-toggle" role="group" aria-label="Choose prevention or rehab view">
        <button
          type="button"
          className={tab === 'prevention' ? 'is-selected is-risk' : ''}
          aria-pressed={tab === 'prevention'}
          onClick={() => setTab('prevention')}
        >
          <i /> Preventing injury
        </button>
        <button
          type="button"
          className={tab === 'rehab' ? 'is-selected' : ''}
          aria-pressed={tab === 'rehab'}
          onClick={() => setTab('rehab')}
        >
          <i /> Guiding rehab
        </button>
      </div>

      <article className="rehab-dashboard">
        <div className="rehab-chart">
          <div className="chart-y-labels"><span>30°</span><span>20°</span></div>
          <svg viewBox="0 0 620 190" preserveAspectRatio="none" role="img" aria-label={tab === 'prevention' ? 'Declining ankle range of motion trend' : 'Improving ankle range of motion trend'}>
            <rect className="healthy-range" x="0" y="26" width="620" height="87" rx="2" />
            <path className="healthy-boundary" d="M0 26H620M0 113H620" />
            <path
              className={tab === 'prevention' ? 'trend-line trend-risk' : 'trend-line trend-recovery'}
              d={tab === 'prevention'
                ? 'M0 96 L58 104 L116 104 L174 113 L232 121 L290 121 L348 132 L406 143 L464 143 L522 153 L564 153 L620 162'
                : 'M0 151 L58 148 L116 140 L174 140 L232 129 L290 123 L348 117 L406 103 L464 93 L522 83 L564 68 L620 61'}
            />
            <circle className={tab === 'prevention' ? 'trend-dot trend-dot-risk' : 'trend-dot trend-dot-recovery'} cx="620" cy={tab === 'prevention' ? '162' : '61'} r="7" />
          </svg>
          <div className="chart-x-labels"><span>Feb</span><span>Healthy range shaded</span><span>Now</span></div>
        </div>

        <div className="rehab-metrics">
          {metrics.map((metric) => (
            <div className="rehab-metric" key={metric.label}>
              <span>{metric.label}</span>
              <strong className={`metric-${metric.tone}`}>{metric.value}</strong>
              <small>{metric.detail}</small>
            </div>
          ))}
        </div>

        <div className="rehab-insight">
          <HeartPulse aria-hidden="true" size={16} />
          <p><strong>What it means.</strong> {tab === 'prevention'
            ? 'Limited dorsiflexion pushes load up the chain, a common precursor to knee and patellar complaints. Prioritize mobility work and re-capture within a week.'
            : 'Range of motion is moving toward the healthy floor. Keep the current mobility plan and re-capture in three days to confirm progress.'}</p>
        </div>
      </article>
    </section>
  );
};

export default PreventionRehab;
