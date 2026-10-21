import { Mail } from 'lucide-react';

const UpdatesPage = () => {
  const updates = [
    {
      id: 1,
      date: 'October 15, 2026',
      title: 'New Sport-Specific Modules Added',
      description: 'Added specialized biomechanical analysis for basketball, soccer, and tennis movements.',
      icon: <Mail className="h-4 w-4 text-primary-blue" />,
    },
    {
      id: 2,
      date: 'October 1, 2026',
      title: 'Mobile App Beta Release',
      description: 'Our mobile app is now available for beta testing on iOS and Android devices.',
      icon: <Mail className="h-4 w-4 text-primary-blue" />,
    },
    {
      id: 3,
      date: 'September 15, 2026',
      title: 'Enhanced Reporting Features',
      description: 'New customizable reports allow coaches to track specific metrics over time.',
      icon: <Mail className="h-4 w-4 text-primary-blue" />,
    },
    {
      id: 4,
      date: 'September 1, 2026',
      title: 'Integration with Wearable Devices',
      description: 'ATS now syncs data from popular wearable devices for more comprehensive analysis.',
      icon: <Mail className="h-4 w-4 text-primary-blue" />,
    },
  ];

  return (
    <section id="updates" className="container section-padding">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-main-text text-center">
          Latest Updates
        </h2>

        <div className="space-y-6">
          {updates.map((update) => (
            <div key={update.id} className="flex items-start space-x-6 bg-card-background/50 border border-border rounded-xl p-6">
              <div className="flex-shrink-0">
                {update.icon}
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="font-bold text-main-text">
                  {update.title}
                </h3>
                <p className="text-secondary-text text-sm">
                  {update.date}
                </p>
                <p className="text-secondary-text">
                  {update.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpdatesPage;