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
import { Calendar, ExternalLink, Award, Github } from "lucide-react";

export default function Activities() {
  const mockEvents = [
    {
      id: 1,
      title: "StudentDev Hackathon 2024",
      description: "48-hour hackathon for student developers",
      date: "March 15-17, 2024",
      type: "Hackathon",
    },
    {
      id: 2,
      title: "AWS Certified Developer",
      description: "Professional certification for cloud development",
      date: "Available year-round",
      type: "Certification",
    },
    {
      id: 3,
      title: "StudentDev Community",
      description: "Open source projects and collaboration",
      date: "Join anytime",
      type: "Community",
    },
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case "Hackathon":
        return <Calendar className="w-4 h-4 text-blue-600" />;
      case "Certification":
        return <Award className="w-4 h-4 text-green-600" />;
      case "Community":
        return <Github className="w-4 h-4 text-purple-600" />;
      default:
        return null;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Hackathon":
        return "bg-blue-100 text-blue-800";
      case "Certification":
        return "bg-green-100 text-green-800";
      case "Community":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Activities</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {mockEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {getTypeIcon(event.type)}
                  <Badge className={getTypeColor(event.type)}>
                    {event.type}
                  </Badge>
                </div>

                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{event.date}</span>
                  <Button size="sm" variant="outline">
                    Learn More <ExternalLink className="w-3 h-3 ml-1" />
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
