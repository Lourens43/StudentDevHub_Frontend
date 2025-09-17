import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Code2, LogOut, Menu, User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";

const navItems = [
  { to: "/tracks", label: "Tracks" },
  { to: "/resources", label: "Resources" },
  { to: "/projects", label: "Projects" },
  { to: "/activities", label: "Activities" },
];

export function Navigation() {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">
              <Code2 className="h-5 w-5" />
            </div>
            <span className="text-lg font-extrabold tracking-tight">
              <span className="text-blue-700">StudentDev</span>{" "}
              <span className="text-gray-900">Hub</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 ${
                  isActive(item.to) ? "bg-gray-100 text-gray-900" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex items-center gap-2">
                    <div className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                      <Code2 className="h-4 w-4" />
                    </div>
                    <span className="text-base font-bold">
                      <span className="text-blue-700">StudentDev</span> Hub
                    </span>
                  </div>
                  <div className="mt-6 grid gap-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={`block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 ${
                          isActive(item.to) ? "bg-gray-100 text-gray-900" : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 border-t pt-6 grid gap-2">
                    {user ? (
                      <>
                        <Button variant="secondary" asChild>
                          <Link to="/dashboard">Dashboard</Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link to="/profile">Profile</Link>
                        </Button>
                        <Button variant="destructive" onClick={handleLogout}>
                          <LogOut className="mr-2 h-4 w-4" /> Logout
                        </Button>
                      </>
                    ) : (
                      <Button asChild>
                        <Link to="/login">Login</Link>
                      </Button>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop user menu */}
            <div className="hidden md:block">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : user.email}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="text-red-600"
                    >
                      <LogOut className="mr-2 h-4 w-4" /> Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button asChild>
                  <Link to="/login">Login</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
