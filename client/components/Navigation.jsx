import { Code2 } from "lucide-react";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">
              <Code2 className="h-5 w-5" />
            </div>
            <span className="text-lg font-extrabold tracking-tight">
              <span className="text-blue-700">StudentDev</span> <span className="text-gray-900">Hub</span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
