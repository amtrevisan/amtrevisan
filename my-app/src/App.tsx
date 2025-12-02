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

      {/* Click Spark Canvas */}
      <canvas
        ref={(canvas) => {
          if (!canvas) return;
          const ctx = canvas.getContext('2d');
          if (!ctx) return;

          // Set canvas size
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          canvas.style.position = 'fixed';
          canvas.style.top = '0';
          canvas.style.left = '0';
          canvas.style.pointerEvents = 'none';
          canvas.style.zIndex = '9999';

          let sparks: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            life: number;
            maxLife: number;
            angle: number;
          }> = [];

          const handleClick = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Create 8 sparks in a circle
            for (let i = 0; i < 8; i++) {
              const angle = (Math.PI * 2 * i) / 8;
              const speed = 50 + Math.random() * 100;
              const life = 30 + Math.random() * 20;

              sparks.push({
                x,
                y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life,
                maxLife: life,
                angle
              });
            }
          };

          const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            sparks = sparks.filter(spark => {
              spark.x += spark.vx * 0.016;
              spark.y += spark.vy * 0.016;
              spark.vy += 0.3; // gravity
              spark.life--;

              if (spark.life > 0) {
                const alpha = spark.life / spark.maxLife;
                const size = 2 + (spark.maxLife - spark.life) * 0.1;

                ctx.save();
                ctx.globalAlpha = alpha;
                ctx.fillStyle = '#fbbf24';
                ctx.shadowColor = '#fbbf24';
                ctx.shadowBlur = 4 + (spark.maxLife - spark.life) * 0.1;

                ctx.beginPath();
                ctx.arc(spark.x, spark.y, size, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
                return true;
              }
              return false;
            });

            requestAnimationFrame(animate);
          };

          // Add click listener to document
          document.addEventListener('click', handleClick);
          animate();

          // Cleanup function would be called on unmount
          return () => {
            document.removeEventListener('click', handleClick);
          };
        }}
        style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999 }}
      />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
