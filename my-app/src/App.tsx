import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClickSpark from "./components/ClickSpark";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* Click Spark Overlay */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9999 }}>
        <ClickSpark
          sparkColor="#fbbf24"
          sparkSize={8}
          sparkRadius={30}
          sparkCount={8}
          duration={600}
          easing="ease-out"
          extraScale={1.2}
        >
          <div className="w-screen h-screen" />
        </ClickSpark>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
