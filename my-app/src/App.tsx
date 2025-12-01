import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GradualBlur from "./components/GradualBlur";
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

      {/* Page-wide Gradual Blur Effects */}
      <GradualBlur
        position="top"
        height="6rem"
        strength={1.5}
        divCount={4}
        opacity={0.6}
        curve="ease-out"
        animated="scroll"
        duration="0.4s"
        target="page"
        zIndex={50}
      />
      <GradualBlur
        position="bottom"
        height="6rem"
        strength={1.5}
        divCount={4}
        opacity={0.6}
        curve="ease-out"
        animated="scroll"
        duration="0.4s"
        target="page"
        zIndex={50}
      />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
