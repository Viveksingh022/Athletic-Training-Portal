const HowItWorksPage = () => {
  return (
    <section id="how-it-works" className="container section-padding">
      <div className="space-y-12">
        <h2 className="text-3xl font-bold text-main-text text-center">
          How It Works
        </h2>

        <div className="flex flex-col space-y-12 md:flex-row md:items-start">
          {/* Steps */}
          <div className="space-y-8 flex-1">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-blue/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary-blue font-bold text-xl">{step}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-main-text">
                    {step === 1 && 'Coordinate'}
                    {step === 2 && 'Record'}
                    {step === 3 && 'Analyze'}
                  </h3>
                  <p className="text-secondary-text">
                    {step === 1 && "Build your roster and decide who gets screened."}
                    {step === 2 && "Film using a phone you already own."}
                    {step === 3 && "Review supported movement metrics and trends."}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Placeholder */}
          <div className="flex-shrink-0 w-64 h-48 bg-card-background/50 border border-border rounded-xl flex items-center justify-center">
            <span className="text-secondary-text">Sports Action Image</span>
          </div>
        </div>

        {/* Additional Details */}
        <div className="mt-8 bg-card-background/50 border border-border rounded-xl p-6">
          <h3 className="text-xl font-bold text-main-text mb-4">
            The Science Behind ATS
          </h3>
          <p className="text-secondary-text">
            ATS uses advanced computer vision and machine learning algorithms to extract movement data from standard video recordings. Our proprietary pose estimation model tracks key body joints with high accuracy, allowing for precise measurement of angles, velocities, and symmetries. This data is then processed through our biomechanical models to provide actionable insights for performance enhancement and injury prevention.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPage;