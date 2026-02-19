

import { useEffect, useRef, useState } from "react";
import homeing from "../assets/homeing.avif";
import Card from "../Components/ui/Card";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    { label: "Recipes Available", value: 10000, suffix: "+" },
    { label: "Cuisines Covered", value: 50, suffix: "+" },
    { label: "Happy Users", value: 1000000, suffix: "+" },
    { label: "Support Available", value: 24, suffix: "/7" },
  ];

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Count Up Component
  const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [end, duration]);

const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num;
};

return <>{formatNumber(count)}</>;

  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
        <img
          src={homeing}
          alt="Delicious food background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">About Recipe Finder</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Your ultimate companion in the world of culinary delights.
              Discover, create, and share recipes that bring joy to your kitchen.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <Card title="Our Story" className="mb-8">
          <p className="text-lg text-gray-700 mb-4">
            Recipe Finder was born from a passion for cooking and a desire to
            make meal planning easier for everyone. Whether you're a seasoned
            chef or just starting your culinary journey, our app provides
            personalized recipe recommendations based on your preferences,
            dietary needs, and available ingredients.
          </p>
          <p className="text-lg text-gray-700">
            We believe that great food brings people together. That's why we've
            created a platform that not only helps you find amazing recipes but
            also connects you with a community of food enthusiasts.
          </p>
        </Card>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          What Makes Us Special
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <div className="text-6xl mb-4">🍳</div>
            <h3 className="text-2xl font-bold mb-4">
              Personalized Recommendations
            </h3>
            <p className="text-gray-600">
              Get recipe suggestions tailored to your taste preferences,
              dietary restrictions, and cooking skill level.
            </p>
          </Card>

          <Card className="text-center">
            <div className="text-6xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold mb-4">Global Cuisine</h3>
            <p className="text-gray-600">
              Explore recipes from around the world.
            </p>
          </Card>

          <Card className="text-center">
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Quick & Easy</h3>
            <p className="text-gray-600">
              Find recipes that fit your schedule.
            </p>
          </Card>
        </div>
      </div>

      {/* Mission */}
      <div className="bg-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            To empower home cooks everywhere by providing accessible, diverse,
            and delicious recipes that inspire creativity in the kitchen.
          </p>

          <button className="bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Start Cooking Today
          </button>
        </div>
      </div>

      {/* Animated Stats Section */}
      <div
        ref={statsRef}
        className="max-w-6xl mx-auto px-4 py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105"
              style={{
                animation: isVisible
                  ? `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  : "none",
              }}
            >
              <div className="text-5xl font-bold text-orange-500 mb-2">
                {isVisible ? <CountUp end={stat.value} /> : "0"}
                <span>{stat.suffix}</span>
              </div>
              <p className="text-gray-600 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
