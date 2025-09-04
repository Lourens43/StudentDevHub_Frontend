import { Navigation } from "./Navigation";

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <footer className="border-t bg-white/70 backdrop-blur">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} StudentDev Hub. All rights reserved.</p>
          <nav className="flex items-center gap-4 text-sm text-gray-600">
            <a href="/resources" className="hover:text-gray-900">Resources</a>
            <a href="/projects" className="hover:text-gray-900">Projects</a>
            <a href="/activities" className="hover:text-gray-900">Activities</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
