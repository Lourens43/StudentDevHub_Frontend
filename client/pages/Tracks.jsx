import { Layout } from "@/components/Layout";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@/contexts/UserContext";
import { Coffee, Laptop, Shield, Plus, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Tracks() {
  const { user } = useUser();
  const isAdmin = user?.role === "admin";
  const seed = [
    {
      id: 1,
      title: "Java Development",
      description: "Backend development with Spring Boot",
      type: "Java",
      path: "/tracks/java",
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Web development with React",
      type: "Frontend",
      path: "/tracks/frontend",
    },
    {
      id: 3,
      title: "Cybersecurity",
      description: "Ethical hacking and security",
      type: "Cybersecurity",
      path: "/tracks/cybersecurity",
    },
  ];

  const [tracks, setTracks] = useState(seed);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    type: "Frontend",
    path: "/tracks/custom",
  });

  const iconFor = (type) => {
    switch (type) {
      case "Java":
        return (
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Coffee className="w-6 h-6 text-orange-600" />
          </div>
        );
      case "Cybersecurity":
        return (
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Shield className="w-6 h-6 text-red-600" />
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Laptop className="w-6 h-6 text-blue-600" />
          </div>
        );
    }
  };

  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      type: "Frontend",
      path: "/tracks/custom",
    });
    setEditingId(null);
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (!isAdmin) return;
    if (editingId)
      setTracks((p) =>
        p.map((t) => (t.id === editingId ? { ...t, ...form } : t)),
      );
    else {
      const id = Math.max(0, ...tracks.map((t) => t.id)) + 1;
      setTracks((p) => [...p, { id, ...form }]);
    }
    resetForm();
  };
  const startEdit = (t) => {
    setEditingId(t.id);
    setForm({
      title: t.title,
      description: t.description,
      type: t.type,
      path: t.path,
    });
  };
  const remove = (id) => {
    if (!isAdmin) return;
    setTracks((p) => p.filter((t) => t.id !== id));
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Learning Tracks</h1>

        {isAdmin && (
          <Card className="max-w-4xl mx-auto mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-4 h-4" />{" "}
                {editingId ? "Edit track" : "Add new track"}
              </CardTitle>
              <CardDescription>
                Admins can add custom tracks. Type: Frontend/Java/Cybersecurity.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={submitForm} className="grid gap-3 md:grid-cols-2">
                <div className="md:col-span-2">
                  <Input
                    placeholder="Title"
                    value={form.title}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, title: e.target.value }))
                    }
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Textarea
                    placeholder="Description"
                    value={form.description}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, description: e.target.value }))
                    }
                    required
                  />
                </div>
                <Input
                  placeholder="Type (Frontend/Java/Cybersecurity)"
                  value={form.type}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, type: e.target.value }))
                  }
                  required
                />
                <Input
                  placeholder="Path (e.g. /tracks/java)"
                  value={form.path}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, path: e.target.value }))
                  }
                  required
                />
                <div className="flex items-center gap-2 md:col-span-2">
                  <Button type="submit">
                    {editingId ? "Save changes" : "Add track"}
                  </Button>
                  {editingId && (
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Cancel
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {tracks.map((t) => (
            <Card key={t.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                {iconFor(t.type)}
                <CardTitle>{t.title}</CardTitle>
                <CardDescription>{t.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Button className="w-full" asChild>
                    <Link to={t.path}>View Track</Link>
                  </Button>
                  {isAdmin && (
                    <div className="flex items-center gap-2 ml-2">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => startEdit(t)}
                        aria-label="Edit"
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => remove(t.id)}
                        aria-label="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
