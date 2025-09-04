import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2, ArrowRight, Coffee, Laptop, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* decorative background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.18),_rgba(255,255,255,0)_65%)]" />
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="container mx-auto px-4 text-center max-w-4xl relative">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="text-blue-600">StudentDev</span> Hub
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Learn programming through structured roadmaps and practical projects
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" className="px-8 py-3 shadow-lg hover:shadow-xl" asChild>
              <Link to="/login">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 shadow-lg hover:shadow-xl" asChild>
              <Link to="/tracks">Browse Tracks</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Choose Your Track
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-xl border-blue-100/60">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4 ring-1 ring-orange-200">
                  <Coffee className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Java</CardTitle>
                <CardDescription>
                  Backend development with Spring Boot
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full shadow-md hover:shadow-lg" asChild>
                  <Link to="/tracks/java">Start Track</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-xl border-blue-100/60">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 ring-1 ring-blue-200">
                  <Laptop className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Frontend</CardTitle>
                <CardDescription>Web development with React</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full shadow-md hover:shadow-lg" asChild>
                  <Link to="/tracks/frontend">Start Track</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-xl border-blue-100/60">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4 ring-1 ring-red-200">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Cybersecurity</CardTitle>
                <CardDescription>Ethical hacking and security</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full shadow-md hover:shadow-lg" asChild>
                  <Link to="/tracks/cybersecurity">Start Track</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-10 bg-gray-900 text-white text-center">
        <p>&copy; 2024 StudentDev Hub</p>
      </footer>
    </div>
  );
}
