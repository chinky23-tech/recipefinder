import homeing from "../assets/homeing.avif";
import Card from "../Components/ui/Card";
import Button from "../Components/ui/Button";

export default function About() {
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
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">About Recipe Finder</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Your ultimate companion in the world of culinary delights. Discover, create, and share recipes that bring joy to your kitchen.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <Card title="Our Story" className="mb-8">
          <p className="text-lg text-gray-700 mb-4">
            Recipe Finder was born from a passion for cooking and a desire to make meal planning easier for everyone.
            Whether you're a seasoned chef or just starting your culinary journey, our app provides personalized recipe
            recommendations based on your preferences, dietary needs, and available ingredients.
          </p>
          <p className="text-lg text-gray-700">
            We believe that great food brings people together. That's why we've created a platform that not only helps
            you find amazing recipes but also connects you with a community of food enthusiasts sharing their favorite dishes.
          </p>
        </Card>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What Makes Us Special</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <div className="text-6xl mb-4">🍳</div>
            <h3 className="text-2xl font-bold mb-4">Personalized Recommendations</h3>
            <p className="text-gray-600">
              Get recipe suggestions tailored to your taste preferences, dietary restrictions, and cooking skill level.
            </p>
          </Card>

          <Card className="text-center">
            <div className="text-6xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold mb-4">Global Cuisine</h3>
            <p className="text-gray-600">
              Explore recipes from around the world, from traditional Italian pasta to exotic Asian stir-fries.
            </p>
          </Card>

          <Card className="text-center">
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Quick & Easy</h3>
            <p className="text-gray-600">
              Find recipes that fit your schedule, from 15-minute meals to elaborate weekend feasts.
            </p>
          </Card>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Mission</h2>
          <p className="text-xl text-gray-700 mb-8">
            To empower home cooks everywhere by providing accessible, diverse, and delicious recipes that inspire creativity
            in the kitchen and bring families together around the dinner table.
          </p>
          <Button color="primary" size="lg" className="px-8 py-3">
            Start Cooking Today
          </Button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">10,000+</div>
            <p className="text-gray-600">Recipes Available</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
            <p className="text-gray-600">Cuisines Covered</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">1M+</div>
            <p className="text-gray-600">Happy Users</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
            <p className="text-gray-600">Support Available</p>
                <p className="text-gray-600">Support Available</p>
          </div>
        </div>
      </div>
    </div>
  );
}
