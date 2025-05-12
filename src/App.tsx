
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CompanionProvider } from "./contexts/CompanionContext";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import CompanionBuilder from "./pages/CompanionBuilder";
import ChatPage from "./pages/ChatPage";
import PremiumPage from "./pages/PremiumPage";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CompanionProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/create" element={<CompanionBuilder />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/premium" element={<PremiumPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </CompanionProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
