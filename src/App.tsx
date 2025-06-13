
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";
import Technology from "./pages/Technology";
import Industries from "./pages/Industries";
import Sustainability from "./pages/Sustainability";
import FSaaS from "./pages/FSaaS";
import Careers from "./pages/Careers";
import Pricing from "./pages/Pricing";
import BlogNews from "./pages/BlogNews";
import SlideDeck from "./pages/SlideDeck";
import NotFound from "./pages/NotFound";
import FloatingScheduleButton from "./components/FloatingScheduleButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/fsaas" element={<FSaaS />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog-news" element={<BlogNews />} />
          <Route path="/slide-deck" element={<SlideDeck />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingScheduleButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
