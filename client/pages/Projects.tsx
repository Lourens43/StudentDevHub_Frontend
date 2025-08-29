import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Github,
  ExternalLink,
  Clock,
  Users,
  Coffee,
  Laptop,
  Shield,
  Star
} from "lucide-react";

export default function Projects() {
  const mockProjects = [
    {
      id: 1,
      title: "E-commerce REST API",
      description: "Build a complete e-commerce backend API with Spring Boot, including user authentication, product management, and order processing",
      track: "Java",
      difficulty: "Intermediate",
      duration: "2-3 weeks",
      technologies: ["Spring Boot", "JPA", "MySQL", "JWT"],
      students: 234,
      rating: 4.8
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Create a modern task management application with React, featuring drag-and-drop, real-time updates, and responsive design",
      track: "Frontend",
      difficulty: "Beginner",
      duration: "1-2 weeks",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
      students: 156,
      rating: 4.9
    },
    {
      id: 3,
      title: "Network Security Scanner",
      description: "Develop a network vulnerability scanner that identifies common security issues and generates detailed reports",
      track: "Cybersecurity",
      difficulty: "Advanced",
      duration: "3-4 weeks",
      technologies: ["Python", "Nmap", "Scapy", "Flask"],
      students: 89,
      rating: 4.7
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Build a professional portfolio website showcasing your projects and skills with modern web technologies",
      track: "Frontend",
      difficulty: "Beginner",
      duration: "1 week",
      technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
      students: 412,
      rating: 4.6
    },
    {
      id: 5,
      title: "Microservices Blog Platform",
      description: "Create a scalable blog platform using microservices architecture with Spring Boot and Docker",
      track: "Java",
      difficulty: "Advanced",
      duration: "4-5 weeks",
      technologies: ["Spring Boot", "Docker", "Kubernetes", "MongoDB"],
      students: 67,
      rating: 4.9
    },
    {
      id: 6,
      title: "Penetration Testing Lab",
      description: "Set up and secure a virtual lab environment for practicing ethical hacking techniques",
      track: "Cybersecurity",
      difficulty: "Intermediate",
      duration: "2-3 weeks",
      technologies: ["VirtualBox", "Kali Linux", "Metasploit", "Wireshark"],
      students: 134,
      rating: 4.8
    }
  ];

  const getTrackIcon = (track: string) => {
    switch (track) {
      case "Java": return <Coffee className="w-4 h-4 text-orange-600" />;
      case "Frontend": return <Laptop className="w-4 h-4 text-blue-600" />;
      case "Cybersecurity": return <Shield className="w-4 h-4 text-red-600" />;
      default: return <Github className="w-4 h-4" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Project Ideas</h1>
          <p className="text-gray-600">Real-world projects to build your portfolio and practical skills</p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search projects..." 
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
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Duration</SelectItem>
                  <SelectItem value="short">1 week</SelectItem>
                  <SelectItem value="medium">2-3 weeks</SelectItem>
                  <SelectItem value="long">4+ weeks</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {mockProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 mb-2">
                    {getTrackIcon(project.track)}
                    <Badge variant="outline" className="text-xs">
                      {project.track}
                    </Badge>
                    <Badge className={`text-xs ${getDifficultyColor(project.difficulty)}`}>
                      {project.difficulty}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{project.rating}</span>
                  </div>
                </div>
                
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Technologies */}
                  <div>
                    <div className="text-sm font-medium mb-2">Technologies</div>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{project.students} students</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1">
                      Start Project
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="w-3 h-3" />
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
            Load More Projects
          </Button>
        </div>
      </div>
    </Layout>
  );
}
