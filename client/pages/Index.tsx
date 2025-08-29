import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Code2, 
  Users, 
  Trophy, 
  ArrowRight, 
  Star, 
  Target,
  Zap,
  Shield,
  Laptop,
  Coffee,
  Github
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-medium">
              <Zap className="w-4 h-4 mr-2" />
              Bridge the Gap Between Academia & Industry
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                StudentDev
              </span>
              <br />
              <span className="text-gray-900">Hub</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Your comprehensive platform for practical software development learning. 
              Follow structured roadmaps, access curated resources, and build real-world skills.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="px-8 py-6 text-lg" asChild>
                <Link to="/tracks">
                  Start Learning <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg" asChild>
                <Link to="/resources">
                  Browse Resources
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">3</div>
                <div className="text-sm text-gray-600">Career Tracks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">100+</div>
                <div className="text-sm text-gray-600">Curated Resources</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">Project Ideas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Tracks Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Path</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Structured learning roadmaps designed to take you from beginner to job-ready developer
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Java Track */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Coffee className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">Java Development</CardTitle>
                <CardDescription>Master enterprise Java development and backend systems</CardDescription>
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
                  
                  <Button className="w-full mt-6" asChild>
                    <Link to="/tracks/java">Start Java Track</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Frontend Track */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Laptop className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Frontend Development</CardTitle>
                <CardDescription>Build modern, responsive web applications</CardDescription>
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
                  
                  <Button className="w-full mt-6" asChild>
                    <Link to="/tracks/frontend">Start Frontend Track</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Cybersecurity Track */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl">Cybersecurity</CardTitle>
                <CardDescription>Learn ethical hacking and security practices</CardDescription>
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
                  
                  <Button className="w-full mt-6" asChild>
                    <Link to="/tracks/cybersecurity">Start Security Track</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools and resources designed for modern software development learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Curated Resources</h3>
              <p className="text-gray-600">Hand-picked tutorials, documentation, and learning materials from industry experts</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Structured Roadmaps</h3>
              <p className="text-gray-600">Clear learning paths with beginner, intermediate, and advanced levels</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Trophy className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">Monitor your learning journey with badges, progress bars, and achievements</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Code2 className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Practical Projects</h3>
              <p className="text-gray-600">Build real-world applications with guided project ideas and tutorials</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Developer Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students bridging the gap between academic theory and industry practice
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg" asChild>
              <Link to="/dashboard">
                Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/resources">
                Explore Resources
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">StudentDev Hub</h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Bridging the gap between academic education and industry requirements through 
                practical, hands-on learning experiences.
              </p>
              <div className="flex space-x-4">
                <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Users className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Learning Tracks</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/tracks/java" className="hover:text-white">Java Development</Link></li>
                <li><Link to="/tracks/frontend" className="hover:text-white">Frontend Development</Link></li>
                <li><Link to="/tracks/cybersecurity" className="hover:text-white">Cybersecurity</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/resources" className="hover:text-white">Resources</Link></li>
                <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
                <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
                <li><Link to="/activities" className="hover:text-white">Activities</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 StudentDev Hub. Building the next generation of developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
