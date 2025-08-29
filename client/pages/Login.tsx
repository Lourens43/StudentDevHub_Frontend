import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Code2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";

export default function Login() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    university: "",
    email: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { user, login } = useUser();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Use context login function
    login(formData);

    setIsLoading(false);
    navigate('/dashboard');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="text-center">
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="mt-4 text-3xl font-bold text-blue-600">StudentDev Hub</h2>
          <p className="mt-2 text-gray-600">Join the developer community</p>
        </div>

        {/* Login Form */}
        <Card>
          <CardHeader>
            <CardTitle>Create Account</CardTitle>
            <CardDescription>
              Enter your details to get started with your learning journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@university.edu"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="university">University</Label>
                <Input
                  id="university"
                  type="text"
                  placeholder="University of Technology"
                  value={formData.university}
                  onChange={(e) => handleInputChange("university", e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Get Started"}
              </Button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/dashboard" className="text-blue-600 hover:underline">
                  Continue as guest
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
