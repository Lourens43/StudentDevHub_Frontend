import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Coffee, Laptop, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            {user ? `Welcome back, ${user.firstName}!` : "Your Progress"}
          </h1>
          {user && (
            <p className="text-gray-600 mt-2">
              Student at {user.university} • Joined {new Date(user.joinedAt).toLocaleDateString()}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Coffee className="w-6 h-6 text-orange-600" />
                <CardTitle>Java</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-2">0/45 modules</p>
              <Progress value={0} className="mb-4" />
              <Button className="w-full" asChild>
                <Link to="/tracks/java">Continue</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Laptop className="w-6 h-6 text-blue-600" />
                <CardTitle>Frontend</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-2">0/38 modules</p>
              <Progress value={0} className="mb-4" />
              <Button className="w-full" asChild>
                <Link to="/tracks/frontend">Continue</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-red-600" />
                <CardTitle>Cybersecurity</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-2">0/42 modules</p>
              <Progress value={0} className="mb-4" />
              <Button className="w-full" asChild>
                <Link to="/tracks/cybersecurity">Continue</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/resources">Browse Resources</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/projects">View Projects</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/activities">View Activities</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
