
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GameDevelopment from "./pages/GameDevelopment";
import WebApplications from "./pages/WebApplications";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Support from "./pages/Support";
import Privacy from "./pages/Privacy";

const queryClient = new QueryClient();

// Get the base path for GitHub Pages deployment
const basename = import.meta.env.PROD ? '/JBLinx-Studio-HUB' : '';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/game-development" element={<GameDevelopment />} />
          <Route path="/web-applications" element={<WebApplications />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
