import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Coffee, Laptop, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 via-white to-blue-50"></div>
        <div className="absolute -top-24 right-1/2 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute -bottom-24 left-1/2 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="container mx-auto px-4 py-20 text-center max-w-5xl">

          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span className="text-blue-600">StudentDev</span> Hub
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Learn programming through structured roadmaps and practical projects
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="px-8" asChild>
              <Link to="/login">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8" asChild>
              <Link to="/tracks">Browse Tracks</Link>
            </Button>
          </div>

        </div>
      </section>

      {/* Learning Tracks */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Choose Your Track
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
    </Layout>
  );
}
