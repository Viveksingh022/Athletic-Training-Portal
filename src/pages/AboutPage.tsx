import { Award, Users, Monitor, Heart, MessageCircle, Zap, ShieldCheck } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    {
      value: '500+',
      label: 'Teams Using ATS',
      icon: <Users className="h-5 w-5 text-primary-blue" />,
    },
    {
      value: '10K+',
      label: 'Athletes Monitored',
      icon: <Heart className="h-5 w-5 text-primary-blue" />,
    },
    {
      value: '95%',
      label: 'Injury Reduction',
      icon: <ShieldCheck className="h-5 w-5 text-primary-blue" />,
    },
    {
      value: '24/7',
      label: 'Support Available',
      icon: <MessageCircle className="h-5 w-5 text-primary-blue" />,
    },
  ];

  const features = [
    {
      title: 'Accurate Motion Tracking',
      description: 'Precise pose estimation with sub-degree angle accuracy for reliable biomechanical analysis.',
      icon: <Monitor className="h-5 w-5 text-primary-blue" />,
    },
    {
      title: 'Real-time Feedback',
      description: 'Get immediate insights during training sessions to make on-the-fly adjustments.',
      icon: <Zap className="h-5 w-5 text-primary-blue" />,
    },
    {
      title: 'Customizable Reports',
      description: 'Tailor reports to focus on the metrics that matter most to your team and sport.',
      icon: <Award className="h-5 w-5 text-primary-blue" />,
    },
    {
      title: 'Multi-Sport Support',
      description: 'Sport-specific models optimized for basketball, soccer, tennis, swimming, track & field, and more.',
      icon: <Users className="h-5 w-5 text-primary-blue" />,
    },
  ];

  return (
    <section id="about" className="container section-padding">
      <div className="space-y-10">
        <h2 className="text-3xl font-bold text-main-text text-center">
          About ATS
        </h2>

        {/* Mission Statement */}
        <div className="bg-card-background/50 border border-border rounded-xl p-6">
          <h3 className="text-xl font-bold text-main-text mb-4">
            Our Mission
          </h3>
          <p className="text-secondary-text">
            At Athletic Training Session, we're dedicated to empowering athletes, coaches, and medical professionals
            with accurate, accessible biomechanical insights. We believe that every athlete deserves access to
            professional-grade performance analysis to reach their full potential while minimizing injury risk.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center space-y-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary-blue/20 rounded-lg">
                {stat.icon}
              </div>
              <p className="text-2xl font-bold text-main-text">{stat.value}</p>
              <p className="text-secondary-text">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-main-text text-center mb-6">
            Why Choose ATS?
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start space-x-4 bg-card-background/50 border border-border rounded-xl p-6">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="flex-1 space-y-2">
                  <h4 className="font-bold text-main-text">{feature.title}</h4>
                  <p className="text-secondary-text">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-card-background/50 border border-border rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-main-text mb-4">
            Ready to Transform Your Team's Performance?
          </h3>
          <p className="text-secondary-text mb-6">
            Join hundreds of teams already using ATS to gain a competitive edge through data-driven training.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <button className="bg-primary-blue text-white px-6 py-3 rounded-lg hover:bg-primary-blue/90 transition-colors">
              Get Started Today
            </button>
            <button className="bg-card-background/50 text-main-text border border-border px-6 py-3 rounded-lg hover:bg-card-background/80 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;