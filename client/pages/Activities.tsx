import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  MapPin,
  Users,
  ExternalLink,
  Award,
  Zap,
  Github,
  Trophy,
  Clock
} from "lucide-react";

export default function Activities() {
  const mockHackathons = [
    {
      id: 1,
      title: "StudentDev Hackathon 2024",
      description: "48-hour hackathon focused on building innovative solutions for student developers",
      date: "March 15-17, 2024",
      location: "Virtual Event",
      participants: 250,
      prizes: "$5,000",
      status: "Upcoming",
      tags: ["Web Development", "Mobile Apps", "AI/ML"]
    },
    {
      id: 2,
      title: "Cybersecurity Challenge",
      description: "Capture the flag competition featuring real-world security scenarios",
      date: "April 8-9, 2024",
      location: "University Campus",
      participants: 150,
      prizes: "$3,000",
      status: "Registration Open",
      tags: ["Security", "Networking", "Ethical Hacking"]
    }
  ];

  const mockCertifications = [
    {
      id: 1,
      title: "AWS Certified Developer",
      provider: "Amazon Web Services",
      level: "Associate",
      duration: "3 months prep",
      cost: "$150",
      description: "Validate your ability to develop and maintain applications on AWS"
    },
    {
      id: 2,
      title: "Oracle Java SE Certification",
      provider: "Oracle",
      level: "Professional",
      duration: "2 months prep",
      cost: "$245",
      description: "Demonstrate your Java programming skills and knowledge"
    },
    {
      id: 3,
      title: "Certified Ethical Hacker (CEH)",
      provider: "EC-Council",
      level: "Professional",
      duration: "4 months prep",
      cost: "$1,199",
      description: "Learn to think like a hacker to better protect organizations"
    }
  ];

  const mockGithubOrgs = [
    {
      id: 1,
      name: "StudentDev-Community",
      description: "Collaborative projects and learning resources for student developers",
      members: 1240,
      repositories: 45,
      tags: ["Open Source", "Learning", "Community"]
    },
    {
      id: 2,
      name: "University-CS-Projects",
      description: "Collection of computer science projects and assignments",
      members: 856,
      repositories: 89,
      tags: ["Academic", "Projects", "Collaboration"]
    },
    {
      id: 3,
      name: "CyberSec-Students",
      description: "Cybersecurity tools and educational resources for students",
      members: 432,
      repositories: 23,
      tags: ["Security", "Tools", "Education"]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Activities & Opportunities</h1>
          <p className="text-gray-600">Hackathons, certifications, and community involvement opportunities</p>
        </div>

        {/* Hackathons Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl font-bold">Upcoming Hackathons</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {mockHackathons.map((hackathon) => (
              <Card key={hackathon.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{hackathon.title}</CardTitle>
                      <CardDescription>{hackathon.description}</CardDescription>
                    </div>
                    <Badge 
                      variant={hackathon.status === "Upcoming" ? "default" : "secondary"}
                      className="shrink-0"
                    >
                      {hackathon.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span>{hackathon.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span>{hackathon.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span>{hackathon.participants} participants</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-gray-500" />
                        <span>{hackathon.prizes} in prizes</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium mb-2">Focus Areas</div>
                      <div className="flex flex-wrap gap-1">
                        {hackathon.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full">
                      Register Now <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold">Recommended Certifications</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {mockCertifications.map((cert) => (
              <Card key={cert.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <CardDescription>{cert.provider}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Level</span>
                      <Badge variant="outline">{cert.level}</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Prep Time</span>
                      <span className="font-medium">{cert.duration}</span>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Cost</span>
                      <span className="font-medium">{cert.cost}</span>
                    </div>
                    
                    <p className="text-sm text-gray-600 pt-2">
                      {cert.description}
                    </p>
                    
                    <Button className="w-full" variant="outline">
                      Learn More <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* GitHub Organizations Section */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Github className="w-6 h-6 text-gray-700" />
            <h2 className="text-2xl font-bold">Student GitHub Organizations</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {mockGithubOrgs.map((org) => (
              <Card key={org.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{org.name}</CardTitle>
                  <CardDescription>{org.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span>{org.members} members</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Github className="w-4 h-4 text-gray-500" />
                        <span>{org.repositories} repos</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium mb-2">Tags</div>
                      <div className="flex flex-wrap gap-1">
                        {org.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full" variant="outline">
                      Join Organization <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
