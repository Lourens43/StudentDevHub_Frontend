import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Star,
  ExternalLink,
  BookOpen,
  Video,
  FileText,
  Coffee,
  Laptop,
  Shield
} from "lucide-react";

export default function Resources() {
  const mockResources = [
    {
      id: 1,
      title: "Official Java Documentation",
      description: "Comprehensive guide to Java programming language and its APIs",
      type: "Documentation",
      track: "Java",
      provider: "Oracle",
      rating: 4.8,
      level: "All Levels",
      url: "#"
    },
    {
      id: 2,
      title: "React Tutorial for Beginners",
      description: "Learn React from scratch with practical examples and projects",
      type: "Video Tutorial",
      track: "Frontend",
      provider: "YouTube",
      rating: 4.9,
      level: "Beginner",
      url: "#"
    },
    {
      id: 3,
      title: "Cybersecurity Fundamentals",
      description: "Introduction to cybersecurity concepts and best practices",
      type: "Course",
      track: "Cybersecurity",
      provider: "Udemy",
      rating: 4.7,
      level: "Beginner",
      url: "#"
    },
    {
      id: 4,
      title: "Spring Boot Microservices",
      description: "Build scalable microservices with Spring Boot and Java",
      type: "Tutorial",
      track: "Java",
      provider: "Baeldung",
      rating: 4.6,
      level: "Intermediate",
      url: "#"
    }
  ];

  const getTrackIcon = (track: string) => {
    switch (track) {
      case "Java": return <Coffee className="w-4 h-4 text-orange-600" />;
      case "Frontend": return <Laptop className="w-4 h-4 text-blue-600" />;
      case "Cybersecurity": return <Shield className="w-4 h-4 text-red-600" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Video Tutorial": return <Video className="w-4 h-4" />;
      case "Documentation": return <FileText className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Learning Resources</h1>
          <p className="text-gray-600">Curated collection of tutorials, documentation, and learning materials</p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search resources..." 
                  className="pl-10"
                />
              </div>
              
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Learning Track" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tracks</SelectItem>
                  <SelectItem value="java">Java Development</SelectItem>
                  <SelectItem value="frontend">Frontend Development</SelectItem>
                  <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Resource Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="video">Video Tutorials</SelectItem>
                  <SelectItem value="docs">Documentation</SelectItem>
                  <SelectItem value="course">Courses</SelectItem>
                  <SelectItem value="tutorial">Tutorials</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Difficulty Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockResources.map((resource) => (
            <Card key={resource.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 mb-2">
                    {getTrackIcon(resource.track)}
                    <Badge variant="outline" className="text-xs">
                      {resource.track}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{resource.rating}</span>
                  </div>
                </div>
                
                <CardTitle className="text-lg line-clamp-2">{resource.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {resource.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(resource.type)}
                      <span className="text-gray-600">{resource.type}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {resource.level}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">by {resource.provider}</span>
                    <Button size="sm" variant="outline" asChild>
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        View <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Resources
          </Button>
        </div>
      </div>
    </Layout>
  );
}
