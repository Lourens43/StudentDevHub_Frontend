import { Layout } from "./Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Construction, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function Placeholder({ title, description }) {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-md mx-auto text-center">
          <CardHeader>
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Construction className="w-8 h-8 text-orange-600" />
            </div>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription>
              {description ||
                "This page is under construction. Please check back later!"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              Want to help build this feature? Continue learning and let us know
              what you'd like to see here.
            </p>
            <div className="space-y-3">
              <Button className="w-full" asChild>
                <Link to="/tracks">Browse Learning Tracks</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
