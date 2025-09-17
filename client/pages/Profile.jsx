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
import { User, Mail, GraduationCap, Calendar } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { Link, Navigate } from "react-router-dom";

export default function Profile() {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const joinedDate = new Date(user.joinedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Profile</h1>

          {/* User Info Card */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">
                    {user.firstName} {user.lastName}
                  </CardTitle>
                  <CardDescription>Student Developer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <div>
                    <div className="text-sm text-gray-600">Email</div>
                    <div className="font-medium">{user.email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-gray-600" />
                  <div>
                    <div className="text-sm text-gray-600">University</div>
                    <div className="font-medium">{user.university}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg md:col-span-2">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <div>
                    <div className="text-sm text-gray-600">Member Since</div>
                    <div className="font-medium">{joinedDate}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>


          {/* Actions */}
          <div className="flex gap-4">
            <Button asChild>
              <Link to="/dashboard">Go to Dashboard</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/tracks">Browse Learning Tracks</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
