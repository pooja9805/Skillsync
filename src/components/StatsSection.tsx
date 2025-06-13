import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: "10K+", label: "Successful Placements", delay: "0s" },
    { number: "95%", label: "Career Growth Rate", delay: "0.2s" },
    { number: "500+", label: "Partner Companies", delay: "0.4s" },
    { number: "24/7", label: "AI Support", delay: "0.6s" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven <span className="gradient-text">Results</span>
          </h2>
          <p className="text-xl text-gray-300">
            Numbers that speak for our success
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
              style={{
                animation: `fadeInUp 0.8s ease-out ${stat.delay} both`
              }}
            >
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300 pulse-glow">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;