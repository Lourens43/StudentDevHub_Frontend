import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Code2, 
  Target, 
  User,
  Coffee,
  Laptop,
  Shield,
  Calendar,
  Trophy
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const location = useLocation();
  
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              StudentDev Hub
            </span>
          </Link>

          {/* Navigation Menu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Target className="w-4 h-4 mr-2" />
                  Learning Tracks
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[500px] grid-cols-2">
                    <Link 
                      to="/tracks/java" 
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Coffee className="w-4 h-4 text-orange-600" />
                        <span className="text-sm font-medium">Java Development</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Enterprise Java, Spring Boot, and backend systems
                      </p>
                    </Link>
                    
                    <Link 
                      to="/tracks/frontend" 
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Laptop className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium">Frontend Development</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        React, TypeScript, and modern web development
                      </p>
                    </Link>
                    
                    <Link 
                      to="/tracks/cybersecurity" 
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 col-span-2"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4 text-red-600" />
                        <span className="text-sm font-medium">Cybersecurity</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Ethical hacking, penetration testing, and security practices
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link 
                  to="/resources" 
                  className={navigationMenuTriggerStyle()}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Resources
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link 
                  to="/projects" 
                  className={navigationMenuTriggerStyle()}
                >
                  <Code2 className="w-4 h-4 mr-2" />
                  Projects
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link 
                  to="/activities" 
                  className={navigationMenuTriggerStyle()}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Activities
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* User Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard">
                <User className="w-4 h-4 mr-2" />
                Dashboard
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/dashboard">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
