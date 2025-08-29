import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  const modules = {
    beginner: [
      { id: 1, title: "HTML & CSS Fundamentals", duration: "2 weeks", completed: false },
      { id: 2, title: "JavaScript Basics", duration: "3 weeks", completed: false },
      { id: 3, title: "DOM Manipulation", duration: "2 weeks", completed: false },
      { id: 4, title: "Responsive Design", duration: "2 weeks", completed: false },
      { id: 5, title: "CSS Frameworks (Bootstrap/Tailwind)", duration: "1 week", completed: false }
    ],
    intermediate: [
      { id: 6, title: "Modern JavaScript (ES6+)", duration: "3 weeks", completed: false },
      { id: 7, title: "React Fundamentals", duration: "4 weeks", completed: false },
      { id: 8, title: "State Management", duration: "2 weeks", completed: false },
      { id: 9, title: "React Router & Navigation", duration: "1 week", completed: false },
      { id: 10, title: "API Integration", duration: "2 weeks", completed: false },
      { id: 11, title: "TypeScript for React", duration: "3 weeks", completed: false }
    ],
    advanced: [
      { id: 12, title: "Advanced React Patterns", duration: "3 weeks", completed: false },
      { id: 13, title: "Performance Optimization", duration: "2 weeks", completed: false },
      { id: 14, title: "Testing (Jest, React Testing Library)", duration: "2 weeks", completed: false },
      { id: 15, title: "Build Tools (Vite, Webpack)", duration: "2 weeks", completed: false },
      { id: 16, title: "Deployment & CI/CD", duration: "2 weeks", completed: false }
    ]
  };

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "Build a responsive portfolio website with HTML, CSS, and JavaScript",
      level: "Beginner",
      duration: "1 week"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Create a React-based task manager with local storage",
      level: "Intermediate",
      duration: "2 weeks"
    },
    {
      id: 3,
      title: "E-commerce Dashboard",
      description: "Build a complex dashboard with charts, tables, and real-time data",
      level: "Advanced",
      duration: "4 weeks"
    }
  ];

  const totalModules = Object.values(modules).flat().length;
  const completedModules = Object.values(modules).flat().filter(m => m.completed).length;
  const progressPercentage = (completedModules / totalModules) * 100;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Laptop className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Frontend Development Track</h1>
              <p className="text-gray-600">Master modern web application development with React and TypeScript</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{completedModules}/{totalModules}</div>
                <div className="text-sm text-gray-600">Modules Completed</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">0</div>
                <div className="text-sm text-gray-600">Projects Built</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">0</div>
                <div className="text-sm text-gray-600">Badges Earned</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">4-8</div>
                <div className="text-sm text-gray-600">Months to Complete</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm text-gray-600">{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>
        </div>

        <Tabs defaultValue="roadmap" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="roadmap">Learning Roadmap</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="roadmap" className="space-y-6">
            {/* Beginner Level */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800">Beginner</Badge>
                      Web Development Basics
                    </CardTitle>
                    <CardDescription>
                      Learn the fundamentals of HTML, CSS, and JavaScript
                    </CardDescription>
                  </div>
                  <Badge variant="outline">5 modules</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {modules.beginner.map((module) => (
                    <AccordionItem key={module.id} value={`module-${module.id}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-3 flex-1">
                          {module.completed ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-400" />
                          )}
                          <span className="font-medium">{module.title}</span>
                          <div className="flex items-center gap-1 ml-auto mr-4">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{module.duration}</span>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-8 pr-4 space-y-3">
                          <p className="text-gray-600">
                            Detailed description of the {module.title} module content and learning objectives.
                          </p>
                          <div className="flex gap-2">
                            <Button size="sm">
                              <PlayCircle className="w-4 h-4 mr-2" />
                              Start Module
                            </Button>
                            <Button size="sm" variant="outline">
                              <BookOpen className="w-4 h-4 mr-2" />
                              Resources
                            </Button>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Intermediate Level */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Badge className="bg-yellow-100 text-yellow-800">Intermediate</Badge>
                      React Development
                    </CardTitle>
                    <CardDescription>
                      Build interactive applications with React and modern JavaScript
                    </CardDescription>
                  </div>
                  <Badge variant="outline">6 modules</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {modules.intermediate.map((module) => (
                    <AccordionItem key={module.id} value={`module-${module.id}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-3 flex-1">
                          {module.completed ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-400" />
                          )}
                          <span className="font-medium">{module.title}</span>
                          <div className="flex items-center gap-1 ml-auto mr-4">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{module.duration}</span>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-8 pr-4 space-y-3">
                          <p className="text-gray-600">
                            Detailed description of the {module.title} module content and learning objectives.
                          </p>
                          <div className="flex gap-2">
                            <Button size="sm" disabled>
                              <PlayCircle className="w-4 h-4 mr-2" />
                              Complete Beginner Track First
                            </Button>
                            <Button size="sm" variant="outline">
                              <BookOpen className="w-4 h-4 mr-2" />
                              Preview Resources
                            </Button>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Advanced Level */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Badge className="bg-red-100 text-red-800">Advanced</Badge>
                      Production-Ready Development
                    </CardTitle>
                    <CardDescription>
                      Advanced patterns, testing, optimization, and deployment strategies
                    </CardDescription>
                  </div>
                  <Badge variant="outline">5 modules</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {modules.advanced.map((module) => (
                    <AccordionItem key={module.id} value={`module-${module.id}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-3 flex-1">
                          {module.completed ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-400" />
                          )}
                          <span className="font-medium">{module.title}</span>
                          <div className="flex items-center gap-1 ml-auto mr-4">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{module.duration}</span>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-8 pr-4 space-y-3">
                          <p className="text-gray-600">
                            Detailed description of the {module.title} module content and learning objectives.
                          </p>
                          <div className="flex gap-2">
                            <Button size="sm" disabled>
                              <PlayCircle className="w-4 h-4 mr-2" />
                              Complete Intermediate Track First
                            </Button>
                            <Button size="sm" variant="outline">
                              <BookOpen className="w-4 h-4 mr-2" />
                              Preview Resources
                            </Button>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <Badge variant="outline">{project.level}</Badge>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{project.duration}</span>
                      </div>
                      <Button className="w-full">Start Project</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="text-center py-12 text-gray-500">
              <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">Resources Coming Soon</h3>
              <p>Curated learning materials and documentation will be available here.</p>
              <Button className="mt-4" variant="outline">
                Browse All Resources
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
