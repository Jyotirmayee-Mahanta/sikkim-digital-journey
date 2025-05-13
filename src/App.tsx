
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Transport from "./pages/Transport";
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
          <Route path="/transport" element={<Transport />} />
          {/* Placeholder routes for future development */}
          <Route path="/culture" element={<NotFound />} />
          <Route path="/history" element={<NotFound />} />
          <Route path="/nature" element={<NotFound />} />
          <Route path="/people" element={<NotFound />} />
          <Route path="/experiences" element={<NotFound />} />
          <Route path="/blog" element={<NotFound />} />
          <Route path="/blog/:slug" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
