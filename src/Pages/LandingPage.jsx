export default function Home() {
  return (
    <div className="mt-20">

      {/* HERO SECTION */}
      <section className="text-center px-6 py-24 bg-gray-50">
        <h1 className="text-5xl font-bold text-gray-800">
          Build Websites Faster with{" "}
          <span className="text-blue-600">React + Tailwind</span>
        </h1>

        <p className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto">
          A modern UI starter template to boost your development speed and create beautiful, responsive web apps.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Get Started
          </button>
          <button className="px-8 py-3 bg-white border rounded-lg hover:bg-gray-100">
            Learn More
          </button>
        </div>

      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Powerful Features
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-10">

          <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">Fast Setup</h3>
            <p className="mt-3 text-gray-600">
              Start building in minutes using Vite + Tailwind.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">Responsive</h3>
            <p className="mt-3 text-gray-600">
              Automatically adapts to all screen sizes.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">Easy to Customize</h3>
            <p className="mt-3 text-gray-600">
              Change colors, layout, and components easily.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-blue-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold">Start Building Today</h2>
        <p className="mt-3 text-lg">Everything you need to launch stunning websites.</p>
        <button className="mt-6 px-10 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100">
          Join Now
        </button>
      </section>

    </div>
  );
}
