import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Code2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Login() {
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    university: "",
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { user, login } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const delay = (ms) => new Promise((r) => setTimeout(r, ms));

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await delay(800);

    const { password, ...profile } = signupData;
    login(profile);

    setIsLoading(false);
    navigate("/dashboard");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await delay(600);

    const nameFromEmail = loginData.email.split("@")[0] || "Member";
    const userPayload = {
      email: loginData.email,
      firstName: nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1),
      lastName: "",
      university: "",
    };
    login(userPayload);

    setIsLoading(false);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="mt-4 text-3xl font-bold">
            <span className="text-blue-700">StudentDev</span> <span className="text-gray-900">Hub</span>
          </h2>
          <p className="mt-2 text-gray-600">Join the developer community</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
            <CardDescription>Sign up or log in to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signup" className="w-full">
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="signup">Sign up</TabsTrigger>
                <TabsTrigger value="login">Log in</TabsTrigger>
              </TabsList>

              <TabsContent value="signup" className="space-y-4 pt-4">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        value={signupData.firstName}
                        onChange={(e) => setSignupData((s) => ({ ...s, firstName: e.target.value }))}
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
                        value={signupData.lastName}
                        onChange={(e) => setSignupData((s) => ({ ...s, lastName: e.target.value }))}
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
                      value={signupData.email}
                      onChange={(e) => setSignupData((s) => ({ ...s, email: e.target.value }))}
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
                      value={signupData.university}
                      onChange={(e) => setSignupData((s) => ({ ...s, university: e.target.value }))}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter a secure password"
                      value={signupData.password}
                      onChange={(e) => setSignupData((s) => ({ ...s, password: e.target.value }))}
                      required
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Creating Account..." : "Create account"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="login" className="space-y-4 pt-4">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="you@example.com"
                      value={loginData.email}
                      onChange={(e) => setLoginData((s) => ({ ...s, email: e.target.value }))}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="Your password"
                      value={loginData.password}
                      onChange={(e) => setLoginData((s) => ({ ...s, password: e.target.value }))}
                      required
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Log in"}
                  </Button>

                  <div className="text-center">
                    <Link to="/dashboard" className="text-sm text-blue-600 hover:underline">
                      Continue as guest
                    </Link>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
