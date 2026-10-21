import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PerformancePage = () => {
  const [selectedAthlete, setSelectedAthlete] = useState<string | null>(null);

  const athletes = [
    { id: 1, name: 'Alex Johnson', sport: 'Basketball', performanceScore: 85 },
    { id: 2, name: 'Maria Garcia', sport: 'Soccer', performanceScore: 92 },
    { id: 3, name: 'James Lee', sport: 'Tennis', performanceScore: 78 },
    { id: 4, name: 'Sarah Chen', sport: 'Swimming', performanceScore: 88 },
    { id: 5, name: 'David Kim', sport: 'Track', performanceScore: 90 },
  ];

  const performanceData = [
    { name: 'Jan', Score: 400 },
    { name: 'Feb', Score: 300 },
    { name: 'Mar', Score: 200 },
    { name: 'Apr', Score: 278 },
    { name: 'May', Score: 189 },
    { name: 'Jun', Score: 239 },
    { name: 'Jul', Score: 349 },
  ];

  return (
    <section id="performance" className="container section-padding">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-main-text text-center">
          Athlete Performance Analytics
        </h2>

        {/* Athlete Selector */}
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col space-y-4">
            <label className="text-secondary-text font-medium">Select Athlete</label>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
              {athletes.map((athlete) => (
                <button
                  key={athlete.id}
                  onClick={() => setSelectedAthlete(athlete.name)}
                  className={`flex-1 px-4 py-2 rounded-md border border-border text-sm text-center ${
                    selectedAthlete === athlete.name
                      ? 'bg-primary-blue text-white hover:bg-primary-blue/90'
                      : 'bg-card-background/50 text-main-text hover:bg-card-background/80'
                  }`}
                >
                  {athlete.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="bg-card-background/50 border border-border rounded-xl p-6">
          <h3 className="text-xl font-bold text-main-text mb-4">
            Monthly Performance Trend
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Score" fill="#3987F5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Athlete Performance Table */}
        <div className="bg-card-background/50 border border-border rounded-xl p-6">
          <h3 className="text-xl font-bold text-main-text mb-4">
            Athlete Performance Scores
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
              <thead className="bg-bgbackground/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-text uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-text uppercase tracking-wider">
                    Sport
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-text uppercase tracking-wider">
                    Performance Score
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {athletes.map((athlete) => (
                  <tr key={athlete.id} className="bg-white/5 hover:bg-card-background/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-main-text">
                      {athlete.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-main-text">
                      {athlete.sport}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-main-text">
                      {athlete.performanceScore}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformancePage;