// src/components/Hero.tsx (Adjust path as needed)

// No imports needed for a truly barebones component

const Hero = () => {
  return (
    // Simple section with padding
    <section className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        {/* Simple Title */}
        <h1 className="text-4xl font-bold mb-4">Hello, I'm Barebones</h1>

        {/* Simple Description */}
        <p className="text-lg text-gray-600">
          This is a minimal hero component. Start building here!
        </p>

        {/* Placeholder for future buttons/links */}
        <div className="mt-8">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Click Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
