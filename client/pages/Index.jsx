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
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 via-white to-blue-50" />
        <div className="pointer-events-none absolute -top-24 right-1/3 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="container mx-auto max-w-6xl px-4 py-24 md:py-32 text-center">
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-700 bg-clip-text text-transparent">
              StudentDev Hub
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg md:text-xl text-gray-600">
            Learn programming through structured roadmaps and practical projects.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="px-8 shadow-lg hover:shadow-xl" asChild>
              <Link to="/login">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 border-gray-300 text-gray-700 hover:bg-gray-50" asChild>
              <Link to="/tracks">Browse Tracks</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            Choose Your Track
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
            Start with a path that matches your goals. Each track includes projects to build real skills.
          </p>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col border-blue-100/60 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 ring-1 ring-orange-200">
                  <Coffee className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Java</CardTitle>
                <CardDescription>Backend development with Spring Boot</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button className="w-full shadow-md hover:shadow-lg" asChild>
                  <Link to="/tracks/java">Start Track</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col border-blue-100/60 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 ring-1 ring-blue-200">
                  <Laptop className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Frontend</CardTitle>
                <CardDescription>Web development with React</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button className="w-full shadow-md hover:shadow-lg" asChild>
                  <Link to="/tracks/frontend">Start Track</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col border-blue-100/60 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 ring-1 ring-red-200">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Cybersecurity</CardTitle>
                <CardDescription>Ethical hacking and security</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button className="w-full shadow-md hover:shadow-lg" asChild>
                  <Link to="/tracks/cybersecurity">Start Track</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Button variant="link" asChild>
              <Link to="/tracks">Explore all tracks</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
