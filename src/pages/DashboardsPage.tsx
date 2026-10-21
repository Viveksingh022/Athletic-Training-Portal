import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const DashboardsPage = () => {
  const [view, setView] = useState<'team' | 'individual'>('team');

  const teamPerformanceData = [
    { name: 'Jan', Score: 400 },
    { name: 'Feb', Score: 300 },
    { name: 'Mar', Score: 200 },
    { name: 'Apr', Score: 278 },
    { name: 'May', Score: 189 },
    { name: 'Jun', Score: 239 },
    { name: 'Jul', Score: 349 },
  ];

  const sportDistribution = [
    { name: 'Basketball', value: 45, fill: '#3987F5' },
    { name: 'Soccer', value: 25, fill: '#F5AC32' },
    { name: 'Tennis', value: 15, fill: '#F45B64' },
    { name: 'Swimming', value: 10, fill: '#9AA9C2' },
    { name: 'Track', value: 5, fill: '#151E31' },
  ];

  return (
    <section id="dashboards" className="container section-padding">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-main-text text-center">
          Team & Individual Dashboards
        </h2>

        {/* View Toggle */}
        <div className="flex justify-center space-x-2 bg-card-background/50 border border-border rounded-xl px-2">
          <button
            onClick={() => setView('team')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              view === 'team'
                ? 'bg-primary-blue text-white hover:bg-primary-blue/90'
                : 'bg-card-background/50 text-main-text hover:bg-card-background/80'
            } transition-colors`}
          >
            Team Dashboard
          </button>
          <button
            onClick={() => setView('individual')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              view === 'individual'
                ? 'bg-primary-blue text-white hover:bg-primary-blue/90'
                : 'bg-card-background/50 text-main-text hover:bg-card-background/80'
            } transition-colors`}
          >
            Individual Dashboard
          </button>
        </div>

        {view === 'team' ? (
          <>
            {/* Team Performance Trend */}
            <div className="bg-card-background/50 border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold text-main-text mb-4">
                Team Performance Trend (Last 6 Months)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={teamPerformanceData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Score" fill="#3987F5" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Sport Distribution */}
            <div className="bg-card-background/50 border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold text-main-text mb-4">
                Sport Distribution
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={sportDistribution}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name}: ${percent}%`
                    }
                  >
                    {sportDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </>
        ) : (
          <>
            {/* Individual Athlete Performance */}
            <div className="bg-card-background/50 border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold text-main-text mb-4">
                Individual Athlete Performance
              </h3>
              {/* In a real app, this would show selected athlete's detailed metrics */}
              <p className="text-secondary-text">
                Select an athlete from the team dashboard to view their detailed performance metrics, including strength, agility, endurance, and injury risk scores.
              </p>
              <div className="mt-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {[1, 2, 3, 4].map((idx) => (
                    <div key={idx} className="bg-card-background border border-border rounded-xl p-4">
                      <h4 className="font-bold text-main-text mb-2">
                        Metric {idx}
                      </h4>
                      <p className="text-secondary-text">
                        Detailed analysis and trend visualization for this performance metric.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default DashboardsPage;