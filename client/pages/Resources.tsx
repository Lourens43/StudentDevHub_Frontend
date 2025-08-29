import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  ExternalLink,
  Coffee,
  Laptop,
  Shield
} from "lucide-react";

export default function Resources() {
  const mockResources = [
    {
      id: 1,
      title: "Java Documentation",
      description: "Official Java programming guide",
      track: "Java",
      provider: "Oracle",
      url: "#"
    },
    {
      id: 2,
      title: "React Tutorial",
      description: "Learn React from scratch",
      track: "Frontend",
      provider: "YouTube",
      url: "#"
    },
    {
      id: 3,
      title: "Security Fundamentals",
      description: "Introduction to cybersecurity",
      track: "Cybersecurity",
      provider: "Udemy",
      url: "#"
    },
    {
      id: 4,
      title: "Spring Boot Guide",
      description: "Build apps with Spring Boot",
      track: "Java",
      provider: "Baeldung",
      url: "#"
    }
  ];

  const getTrackIcon = (track: string) => {
    switch (track) {
      case "Java": return <Coffee className="w-4 h-4 text-orange-600" />;
      case "Frontend": return <Laptop className="w-4 h-4 text-blue-600" />;
      case "Cybersecurity": return <Shield className="w-4 h-4 text-red-600" />;
      default: return null;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Resources</h1>

        {/* Search */}
        <div className="relative mb-8 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search resources..."
            className="pl-10"
          />
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {mockResources.map((resource) => (
            <Card key={resource.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {getTrackIcon(resource.track)}
                  <Badge variant="outline">
                    {resource.track}
                  </Badge>
                </div>

                <CardTitle className="text-lg">{resource.title}</CardTitle>
                <CardDescription>
                  {resource.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">by {resource.provider}</span>
                  <Button size="sm" variant="outline" asChild>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      View <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
