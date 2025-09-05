import { Navigation } from "./Navigation";

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50">
      <Navigation />
      <main className="flex-1">{children}</main>
      <footer className="border-t bg-white/80 backdrop-blur">
        <div className="container mx-auto px-4 py-6 text-xs text-gray-600 flex items-center justify-between">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-blue-700">StudentDev</span> Hub. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
