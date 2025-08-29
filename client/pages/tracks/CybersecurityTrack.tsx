import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Shield,
  CheckCircle,
  Circle,
  Clock,
  BookOpen,
  Trophy,
  Star,
  PlayCircle
} from "lucide-react";

export default function CybersecurityTrack() {
  const modules = {
    beginner: [
      { id: 1, title: "Cybersecurity Fundamentals", duration: "2 weeks", completed: false },
      { id: 2, title: "Network Security Basics", duration: "3 weeks", completed: false },
      { id: 3, title: "Operating System Security", duration: "2 weeks", completed: false },
      { id: 4, title: "Cryptography Fundamentals", duration: "3 weeks", completed: false },
      { id: 5, title: "Risk Assessment & Management", duration: "2 weeks", completed: false }
    ],
    intermediate: [
      { id: 6, title: "Ethical Hacking Principles", duration: "3 weeks", completed: false },
      { id: 7, title: "Penetration Testing Basics", duration: "4 weeks", completed: false },
      { id: 8, title: "Vulnerability Assessment", duration: "3 weeks", completed: false },
      { id: 9, title: "Web Application Security", duration: "3 weeks", completed: false },
      { id: 10, title: "Social Engineering & OSINT", duration: "2 weeks", completed: false },
      { id: 11, title: "Incident Response", duration: "2 weeks", completed: false }
    ],
    advanced: [
      { id: 12, title: "Advanced Penetration Testing", duration: "4 weeks", completed: false },
      { id: 13, title: "Malware Analysis", duration: "3 weeks", completed: false },
      { id: 14, title: "Digital Forensics", duration: "3 weeks", completed: false },
      { id: 15, title: "Cloud Security", duration: "2 weeks", completed: false },
      { id: 16, title: "Red Team Operations", duration: "4 weeks", completed: false }
    ]
  };

  const projects = [
    {
      id: 1,
      title: "Home Network Security Audit",
      description: "Perform a basic security assessment of your home network infrastructure",
      level: "Beginner",
      duration: "1 week"
    },
    {
      id: 2,
      title: "Web Application Penetration Test",
      description: "Conduct a comprehensive pentest on a practice web application",
      level: "Intermediate",
      duration: "3 weeks"
    },
    {
      id: 3,
      title: "Enterprise Security Assessment",
      description: "Full-scale red team exercise with advanced evasion techniques",
      level: "Advanced",
      duration: "6 weeks"
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
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Cybersecurity Track</h1>
              <p className="text-gray-600">Master ethical hacking, penetration testing, and security practices</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-red-600">{completedModules}/{totalModules}</div>
                <div className="text-sm text-gray-600">Modules Completed</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">0</div>
                <div className="text-sm text-gray-600">Labs Completed</div>
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
                <div className="text-2xl font-bold text-purple-600">8-12</div>
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
            <TabsTrigger value="projects">Labs & Projects</TabsTrigger>
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
                      Security Fundamentals
                    </CardTitle>
                    <CardDescription>
                      Learn core cybersecurity concepts, principles, and terminology
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
                      Ethical Hacking & Penetration Testing
                    </CardTitle>
                    <CardDescription>
                      Learn offensive security techniques and penetration testing methodologies
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
                      Advanced Security & Forensics
                    </CardTitle>
                    <CardDescription>
                      Master advanced techniques in malware analysis, forensics, and red team operations
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
                      <Button className="w-full">Start Lab</Button>
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
