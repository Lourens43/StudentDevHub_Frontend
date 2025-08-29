import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Coffee, Laptop, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Tracks() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Learning Tracks</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your learning path and follow a structured roadmap from beginner to professional developer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Java Track */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-orange-600" />
              </div>
              <CardTitle className="text-2xl">Java Development</CardTitle>
              <CardDescription>Enterprise Java development and backend systems</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Progress</span>
                  <span className="text-sm font-medium">0/45 modules</span>
                </div>
                <Progress value={0} className="h-2" />
                
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2">Spring Boot</Badge>
                  <Badge variant="outline" className="mr-2">REST APIs</Badge>
                  <Badge variant="outline">Microservices</Badge>
                </div>
                
                <Button className="w-full" asChild>
                  <Link to="/tracks/java">
                    View Track <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Frontend Track */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">Frontend Development</CardTitle>
              <CardDescription>Modern web application development</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Progress</span>
                  <span className="text-sm font-medium">0/38 modules</span>
                </div>
                <Progress value={0} className="h-2" />
                
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2">React</Badge>
                  <Badge variant="outline" className="mr-2">TypeScript</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                </div>
                
                <Button className="w-full" asChild>
                  <Link to="/tracks/frontend">
                    View Track <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Cybersecurity Track */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="text-2xl">Cybersecurity</CardTitle>
              <CardDescription>Ethical hacking and security practices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Progress</span>
                  <span className="text-sm font-medium">0/42 modules</span>
                </div>
                <Progress value={0} className="h-2" />
                
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2">Penetration Testing</Badge>
                  <Badge variant="outline" className="mr-2">Network Security</Badge>
                  <Badge variant="outline">OWASP</Badge>
                </div>
                
                <Button className="w-full" asChild>
                  <Link to="/tracks/cybersecurity">
                    View Track <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
