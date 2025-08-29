import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Laptop, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Tracks() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-12">Learning Tracks</h1>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Java Track */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle>Java Development</CardTitle>
              <CardDescription>Backend development with Spring Boot</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" asChild>
                <Link to="/tracks/java">View Track</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Frontend Track */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Laptop className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Frontend Development</CardTitle>
              <CardDescription>Web development with React</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" asChild>
                <Link to="/tracks/frontend">View Track</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Cybersecurity Track */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle>Cybersecurity</CardTitle>
              <CardDescription>Ethical hacking and security</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" asChild>
                <Link to="/tracks/cybersecurity">View Track</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
