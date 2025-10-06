import Hero from "../components/Hero"; // Adjust path as needed

const Index = () => {
  return (
    // The main container. Simplified Tailwind classes.
    <div className="min-h-screen bg-white text-gray-900">
      {/* The main content area */}
      <div>
        <Hero />
      </div>

      {/* Barebones Footer */}
      <footer className="py-4 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-500">© 2024 Barebones Portfolio</p>
      </footer>
    </div>
  );
};

export default Index;
