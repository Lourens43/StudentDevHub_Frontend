import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Laptop,
  CheckCircle,
  Circle,
  PlayCircle
} from "lucide-react";

export default function FrontendTrack() {
  const modules = [
    { id: 1, title: "HTML & CSS Basics", level: "Beginner", completed: false },
    { id: 2, title: "JavaScript Fundamentals", level: "Beginner", completed: false },
    { id: 3, title: "DOM Manipulation", level: "Beginner", completed: false },
    { id: 4, title: "Responsive Design", level: "Beginner", completed: false },
    { id: 5, title: "React Fundamentals", level: "Intermediate", completed: false },
    { id: 6, title: "State Management", level: "Intermediate", completed: false },
    { id: 7, title: "React Router", level: "Intermediate", completed: false },
    { id: 8, title: "TypeScript for React", level: "Intermediate", completed: false },
    { id: 9, title: "Performance Optimization", level: "Advanced", completed: false },
    { id: 10, title: "Testing & Deployment", level: "Advanced", completed: false }
  ];

  const completedModules = modules.filter(m => m.completed).length;
  const progressPercentage = (completedModules / modules.length) * 100;

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Laptop className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Frontend Development</h1>
            <p className="text-gray-600">Build modern web applications</p>
          </div>
        </div>

        {/* Progress */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Your Progress</span>
              <span className="text-sm text-gray-600">{completedModules}/{modules.length} modules</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </CardContent>
        </Card>

        {/* Modules */}
        <div className="space-y-4">
          {modules.map((module) => (
            <Card key={module.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {module.completed ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-400" />
                    )}
                    <div>
                      <h3 className="font-medium">{module.title}</h3>
                      <Badge className={`mt-1 ${getLevelColor(module.level)}`}>
                        {module.level}
                      </Badge>
                    </div>
                  </div>
                  <Button size="sm">
                    <PlayCircle className="w-4 h-4 mr-2" />
                    Start
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
