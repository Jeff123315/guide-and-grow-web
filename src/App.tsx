import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ClinicalSocialWork from "./pages/ClinicalSocialWork";
import CommunitySocialWork from "./pages/CommunitySocialWork";
import ChildFamilyServices from "./pages/ChildFamilyServices";
import MentalHealthCounseling from "./pages/MentalHealthCounseling";
import CrisisIntervention from "./pages/CrisisIntervention";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/clinical-social-work" element={<ClinicalSocialWork />} />
          <Route path="/community-social-work" element={<CommunitySocialWork />} />
          <Route path="/child-family-services" element={<ChildFamilyServices />} />
          <Route path="/mental-health-counseling" element={<MentalHealthCounseling />} />
          <Route path="/crisis-intervention" element={<CrisisIntervention />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
