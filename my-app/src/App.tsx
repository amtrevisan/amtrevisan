// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index"; // Assumes Index.tsx is in a 'pages' folder
import NotFound from "./pages/NotFound"; // Placeholder for a simple component

// Simplified placeholder components for the files that were removed
const BarebonesIndex = () => <Index />;
const BarebonesNotFound = () => (
  <div className="text-center p-10">404 - Not Found</div>
);

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BarebonesIndex />} />
        <Route path="*" element={<BarebonesNotFound />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
