import React from 'react';
import { ArrowRight, Sparkles, Target, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="slide-in-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Sync Your
            <span className="gradient-text block">Career Path</span>
          </h1>
        </div>
        
        <div className="slide-in-right" style={{animationDelay: '0.3s'}}>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered career planning that adapts to industry trends and matches your skills with the perfect opportunities
          </p>
        </div>

        <div className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" style={{animationDelay: '0.6s'}}>
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 tech-glow">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5 inline group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-full hover:bg-white/10 transition-all duration-300">
            Explore Paths
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="floating-animation bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <Target className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Precision Matching</h3>
            <p className="text-gray-300">AI algorithms match your skills with industry demands</p>
          </div>
          
          <div className="floating-animation bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10" style={{animationDelay: '1s'}}>
            <TrendingUp className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Growth Tracking</h3>
            <p className="text-gray-300">Monitor your progress with real-time analytics</p>
          </div>
          
          <div className="floating-animation bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10" style={{animationDelay: '2s'}}>
            <Sparkles className="h-12 w-12 text-pink-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Smart Recommendations</h3>
            <p className="text-gray-300">Get personalized learning paths and opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;