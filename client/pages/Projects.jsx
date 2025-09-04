import { Layout } from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Clock, Coffee, Laptop, Shield } from "lucide-react";

export default function Projects() {
  const mockProjects = [
    {
      id: 1,
      title: "E-commerce API",
      description: "Build a REST API with Spring Boot",
      track: "Java",
      difficulty: "Intermediate",
      duration: "2-3 weeks",
    },
    {
      id: 2,
      title: "Task Manager",
      description: "Create a React task management app",
      track: "Frontend",
      difficulty: "Beginner",
      duration: "1-2 weeks",
    },
    {
      id: 3,
      title: "Security Scanner",
      description: "Network vulnerability scanner",
      track: "Cybersecurity",
      difficulty: "Advanced",
      duration: "3-4 weeks",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Professional portfolio with HTML/CSS",
      track: "Frontend",
      difficulty: "Beginner",
      duration: "1 week",
    },
  ];

  const getTrackIcon = (track) => {
    switch (track) {
      case "Java":
        return <Coffee className="w-4 h-4 text-orange-600" />;
      case "Frontend":
        return <Laptop className="w-4 h-4 text-blue-600" />;
      case "Cybersecurity":
        return <Shield className="w-4 h-4 text-red-600" />;
      default:
        return null;
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>

        {/* Search */}
        <div className="relative mb-8 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder="Search projects..." className="pl-10" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {mockProjects.map((project) => (
            <Card
              key={project.id}
              className="hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {getTrackIcon(project.track)}
                  <Badge variant="outline">{project.track}</Badge>
                  <Badge
                    className={`${getDifficultyColor(project.difficulty)}`}
                  >
                    {project.difficulty}
                  </Badge>
                </div>

                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                </div>

                <Button className="w-full">Start Project</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
