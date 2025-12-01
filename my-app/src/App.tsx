import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

interface Spark {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

const App = () => {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newSparks: Spark[] = [];
      const numSparks = 8 + Math.random() * 4; // 8-12 sparks

      for (let i = 0; i < numSparks; i++) {
        const angle = (Math.PI * 2 * i) / numSparks + (Math.random() - 0.5) * 0.5;
        const speed = 50 + Math.random() * 100;
        const life = 30 + Math.random() * 20;

        newSparks.push({
          id: Date.now() + i,
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: life,
          maxLife: life
        });
      }

      setSparks(prev => [...prev, ...newSparks]);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    if (sparks.length === 0) return;

    const interval = setInterval(() => {
      setSparks(prev =>
        prev
          .map(spark => ({
            ...spark,
            x: spark.x + spark.vx * 0.016,
            y: spark.y + spark.vy * 0.016,
            vy: spark.vy + 0.3, // gravity
            life: spark.life - 1
          }))
          .filter(spark => spark.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, [sparks]);

  return (
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

        {/* Click Sparks */}
        {sparks.map(spark => (
          <div
            key={spark.id}
            className="fixed pointer-events-none z-50"
            style={{
              left: spark.x - 2,
              top: spark.y - 2,
              opacity: spark.life / spark.maxLife,
              transform: `scale(${0.5 + (spark.life / spark.maxLife) * 0.5})`
            }}
          >
            <div
              className="w-1 h-1 bg-accent rounded-full"
              style={{
                boxShadow: `0 0 ${4 + (spark.maxLife - spark.life) * 0.1}px hsl(var(--accent))`,
              }}
            />
          </div>
        ))}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
