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
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HighlightStudentDev } from "@/components/HighlightStudentDev";
import { useUser } from "@/contexts/UserContext";
import {
  Calendar,
  Award,
  Github,
  Plus,
  Pencil,
  Trash2,
  Tag,
} from "lucide-react";
import AdminResourcesSection from "@/components/AdminResourcesSection";
import ModuleSubmissions from "@/components/ModuleSubmissions";

export default function Activities() {
  const { user } = useUser();
  const isAdmin = user?.role === "admin";
  const seed = [
    {
      id: 1,
      title: "StudentDev Hackathon",
      description: "48-hour hackathon for student developers",
      date: "Join anytime",
      type: "Hackathon",
    },
    {
      id: 2,
      title: "AWS Certified Developer",
      description: "Professional certification for cloud development",
      date: "Available year-round",
      type: "Certification",
    },
    {
      id: 3,
      title: "StudentDev Community",
      description: "Open source projects and collaboration",
      date: "Join anytime",
      type: "Community",
    },
  ];

  const [events, setEvents] = useState(seed);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    type: "Hackathon",
  });

  const resetForm = () => {
    setForm({ title: "", description: "", date: "", type: "Hackathon" });
    setEditingId(null);
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (!isAdmin) return;
    if (editingId)
      setEvents((p) =>
        p.map((x) => (x.id === editingId ? { ...x, ...form } : x)),
      );
    else {
      const id = Math.max(0, ...events.map((p) => p.id)) + 1;
      setEvents((p) => [...p, { id, ...form }]);
    }
    resetForm();
  };
  const startEdit = (r) => {
    setEditingId(r.id);
    setForm({
      title: r.title,
      description: r.description,
      date: r.date,
      type: r.type,
    });
  };
  const remove = (id) => {
    if (!isAdmin) return;
    setEvents((p) => p.filter((x) => x.id !== id));
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "Hackathon":
        return <Calendar className="w-4 h-4 text-blue-600" />;
      case "Certification":
        return <Award className="w-4 h-4 text-green-600" />;
      case "Community":
        return <Github className="w-4 h-4 text-purple-600" />;
      default:
        return <Tag className="w-4 h-4 text-gray-600" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Hackathon":
        return "bg-blue-100 text-blue-800";
      case "Certification":
        return "bg-green-100 text-green-800";
      case "Community":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Activities</h1>

        {isAdmin && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-4 h-4" />{" "}
                {editingId ? "Edit activity" : "Add new activity"}
              </CardTitle>
              <CardDescription>
                Admins can create, update and delete activities.
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
                  placeholder="Date (e.g. March 15-17, 2025)"
                  value={form.date}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, date: e.target.value }))
                  }
                  required
                />
                <Input
                  placeholder="Type (e.g. Hackathon, Certification, Community, or custom)"
                  value={form.type}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, type: e.target.value }))
                  }
                  required
                />
                <div className="flex items-center gap-2 md:col-span-2">
                  <Button type="submit">
                    {editingId ? "Save changes" : "Add activity"}
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

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getTypeIcon(event.type)}
                    <Badge className={getTypeColor(event.type)}>
                      {event.type}
                    </Badge>
                  </div>
                  {isAdmin && (
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => startEdit(event)}
                        aria-label="Edit"
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => remove(event.id)}
                        aria-label="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>

                <CardTitle>
                  <HighlightStudentDev text={event.title} />
                </CardTitle>
                <CardDescription>
                  <HighlightStudentDev text={event.description} />
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{event.date}</span>
                </div>
                <AdminResourcesSection
                  storageKey={`activity_${event.id}`}
                  isAdmin={isAdmin}
                  variant="rich"
                />
                <ModuleSubmissions storageKey={`activity_${event.id}`} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
