import { Navigation } from "./Navigation";
import { Code2 } from "lucide-react";
import { Link } from "react-router-dom";

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50">
      <Navigation />
      <main className="flex-1">{children}</main>
      <footer className="border-t bg-white/80 backdrop-blur">
        <div className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                <Code2 className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold">StudentDev Hub</span>
            </div>
            <p className="text-sm text-gray-600 max-w-sm">
              Learn programming through structured roadmaps and practical projects.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-6 md:col-span-2 md:grid-cols-3 text-sm">
            <div>
              <h4 className="mb-3 font-semibold text-gray-900">Explore</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/tracks" className="hover:text-gray-900">Tracks</Link></li>
                <li><Link to="/resources" className="hover:text-gray-900">Resources</Link></li>
                <li><Link to="/projects" className="hover:text-gray-900">Projects</Link></li>
                <li><Link to="/activities" className="hover:text-gray-900">Activities</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-gray-900">Account</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/dashboard" className="hover:text-gray-900">Dashboard</Link></li>
                <li><Link to="/profile" className="hover:text-gray-900">Profile</Link></li>
                <li><Link to="/login" className="hover:text-gray-900">Login</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-gray-900">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Terms</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="border-t">
          <div className="container mx-auto px-4 py-6 text-xs text-gray-600 flex flex-col md:flex-row items-center justify-between gap-2">
            <p>© {new Date().getFullYear()} StudentDev Hub. All rights reserved.</p>
            <p className="text-gray-500">Built with React, Vite, and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
