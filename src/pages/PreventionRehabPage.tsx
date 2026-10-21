import { useState } from 'react';

const PreventionRehabPage = () => {
  const [tab, setTab] = useState<'prevention' | 'rehab'>('prevention');

  return (
    <section id="prevention-rehab" className="container section-padding">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-main-text text-center">
          Prevention & Rehabilitation
        </h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-2 bg-card-background/50 border border-border rounded-xl px-2">
          <button
            onClick={() => setTab('prevention')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              tab === 'prevention'
                ? 'bg-primary-blue text-white hover:bg-primary-blue/90'
                : 'bg-card-background/50 text-main-text hover:bg-card-background/80'
            } transition-colors`}
          >
            Prevention
          </button>
          <button
            onClick={() => setTab('rehab')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              tab === 'rehab'
                ? 'bg-primary-blue text-white hover:bg-primary-blue/90'
                : 'bg-card-background/50 text-main-text hover:bg-card-background/80'
            } transition-colors`}
          >
            Rehabilitation
          </button>
        </div>

        {/* Content */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Chart Placeholder */}
          <div className="bg-card-background/50 border border-border rounded-xl">
            <div className="p-6">
              <h3 className="text-xl font-bold text-main-text mb-4">
                Movement Trend
              </h3>
              <div className="h-48 bg-linear-to-br from-primary-blue/10 to-transparent rounded-lg flex items-center justify-center">
                <span className="text-secondary-text">Chart Visualization</span>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-4">
            {tab === 'prevention' ? (
              <>
                <div className="flex items-center space-x-4 bg-card-background border border-border rounded-lg p-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-blue/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary-blue font-bold">📈</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium text-main-text">Trend Analysis</p>
                    <p className="text-secondary-text text-sm">
                      Improving movement patterns over time to reduce injury risk
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-card-background border border-border rounded-lg p-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-blue/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary-blue font-bold">↔️</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="font-bold text-main-text">ROM Comparison</p>
                    <p className="text-secondary-text text-sm">
                      Left vs right symmetry tracking for balanced performance
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-card-background border border-border rounded-lg p-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-blue/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary-blue font-bold">🔄</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium text-main-text">Re-capture Schedule</p>
                    <p className="text-secondary-text text-sm">
                      Regular reassessment to monitor progress and adjust training
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center space-x-4 bg-card-background border border-border rounded-lg p-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-blue/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary-blue font-bold">📉</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium text-main-text">Pain Levels</p>
                    <p className="text-secondary-text text-sm">
                      Tracking discomfort to guide rehabilitation intensity
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-card-background border border-border rounded-lg p-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-blue/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary-blue font-bold">🦵</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium text-main-text">Range of Motion</p>
                    <p className="text-secondary-text text-sm">
                      Measuring joint flexibility during recovery phases
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-card-background border border-border rounded-lg p-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-blue/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary-blue font-bold">💪</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium text-main-text">Strength</p>
                    <p className="text-secondary-text text-sm">
                      Monitoring muscle rebuilding and functional strength
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Explanation */}
        <div className="mt-8 bg-card-background/50 border border-border rounded-xl p-6">
          <h3 className="text-xl font-bold text-main-text mb-4">
            How ATS Supports Your Goals
          </h3>
          <p className="text-secondary-text">
            Whether preventing injury through proactive monitoring or guiding rehabilitation with objective data, ATS provides the insights needed for confident decision-making. Our platform transforms video sessions into actionable biomechanical metrics that help optimize performance while minimizing risk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PreventionRehabPage;