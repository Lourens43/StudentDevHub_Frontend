import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-blue-600">
              StudentDev Hub
            </span>
          </Link>

          {/* Simple Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/tracks" className="text-gray-600 hover:text-gray-900">
              Tracks
            </Link>
            <Link to="/resources" className="text-gray-600 hover:text-gray-900">
              Resources
            </Link>
            <Link to="/projects" className="text-gray-600 hover:text-gray-900">
              Projects
            </Link>
          </nav>

          {/* User Actions */}
          <Button asChild>
            <Link to="/dashboard">Dashboard</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
