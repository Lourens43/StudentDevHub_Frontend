import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Placeholder } from "@/components/Placeholder";
import { UserProvider } from "@/contexts/UserContext";

// Page imports
import Index from "./pages/Index";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Tracks from "./pages/Tracks";
import Resources from "./pages/Resources";
import Projects from "./pages/Projects";
import Activities from "./pages/Activities";
import NotFound from "./pages/NotFound";

// Track page imports
import JavaTrack from "./pages/tracks/JavaTrack";
import FrontendTrack from "./pages/tracks/FrontendTrack";
import CybersecurityTrack from "./pages/tracks/CybersecurityTrack";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <UserProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tracks" element={<Tracks />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/activities" element={<Activities />} />

            {/* Learning Track Pages */}
            <Route path="/tracks/java" element={<JavaTrack />} />
            <Route path="/tracks/frontend" element={<FrontendTrack />} />
            <Route
              path="/tracks/cybersecurity"
              element={<CybersecurityTrack />}
            />

            {/* Placeholder routes for future features */}
            <Route
              path="/tips"
              element={
                <Placeholder
                  title="Documentation Tips"
                  description="Learn how to read and interpret technical documentation effectively."
                />
              }
            />
            <Route
              path="/settings"
              element={
                <Placeholder
                  title="Settings"
                  description="Customize your StudentDev Hub experience."
                />
              }
            />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
