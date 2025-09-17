import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Placeholder } from "@/components/Placeholder.jsx";
import { UserProvider } from "@/contexts/UserContext.jsx";

// Page imports
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Tracks from "./pages/Tracks.jsx";
import Resources from "./pages/Resources.jsx";
import Projects from "./pages/Projects.jsx";
import Activities from "./pages/Activities.jsx";
import NotFound from "./pages/NotFound.jsx";

// Track page imports
import JavaTrack from "./pages/tracks/JavaTrack.jsx";
import FrontendTrack from "./pages/tracks/FrontendTrack.jsx";
import CybersecurityTrack from "./pages/tracks/CybersecurityTrack.jsx";
import GenericTrack from "./pages/tracks/GenericTrack.jsx";

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
            <Route path="/tracks/:slug" element={<GenericTrack />} />

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

const rootEl = document.getElementById("root");
if (rootEl) {
  createRoot(rootEl).render(<App />);
}
