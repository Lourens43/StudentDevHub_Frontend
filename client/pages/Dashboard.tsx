import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  BookOpen, 
  Target, 
  Clock, 
  Star,
  Coffee,
  Laptop,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Student!</h1>
          <p className="text-gray-600">Continue your learning journey and track your progress</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Your Learning Progress
                </CardTitle>
                <CardDescription>Track your advancement across all learning tracks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Coffee className="w-5 h-5 text-orange-600" />
                      <span className="font-medium">Java Development</span>
                    </div>
                    <span className="text-sm text-gray-600">0/45 modules</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Laptop className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">Frontend Development</span>
                    </div>
                    <span className="text-sm text-gray-600">0/38 modules</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-red-600" />
                      <span className="font-medium">Cybersecurity</span>
                    </div>
                    <span className="text-sm text-gray-600">0/42 modules</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Recent Activity
                </CardTitle>
                <CardDescription>Your latest learning activities and achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No recent activity yet. Start learning to see your progress here!</p>
                  <Button className="mt-4" asChild>
                    <Link to="/tracks">Browse Learning Tracks</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Quick Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Modules Completed</span>
                  <span className="font-semibold">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Projects Built</span>
                  <span className="font-semibold">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Badges Earned</span>
                  <span className="font-semibold">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Learning Streak</span>
                  <span className="font-semibold">0 days</span>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6 text-gray-500">
                  <Trophy className="w-10 h-10 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">Complete your first module to earn badges!</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/resources">Browse Resources</Link>
                </Button>
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/projects">Explore Projects</Link>
                </Button>
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/activities">View Activities</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
