import React from 'react';
import { Brain, Shield, Zap, Users, BarChart2, Rocket } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze market trends and skill demands",
      color: "text-blue-400"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Enterprise-grade security with end-to-end encryption for your data",
      color: "text-green-400"
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Stay ahead with live industry data and trending skill requirements",
      color: "text-yellow-400"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Connect with professionals and mentors in your field",
      color: "text-purple-400"
    },
    {
      icon: BarChart2,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards to track your career progression",
      color: "text-pink-400"
    },
    {
      icon: Rocket,
      title: "Fast Execution",
      description: "Accelerate your career growth with actionable insights",
      color: "text-orange-400"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cutting-Edge <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leverage the power of modern technology to supercharge your career development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <feature.icon className={`h-12 w-12 ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`} />
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
