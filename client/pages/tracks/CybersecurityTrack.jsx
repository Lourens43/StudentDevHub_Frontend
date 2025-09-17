import { Layout } from "@/components/Layout";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@/contexts/UserContext";
import {
  Shield,
  CheckCircle,
  Circle,
  PlayCircle,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";
import AdminResourcesSection from "@/components/AdminResourcesSection";
import ModuleSubmissions from "@/components/ModuleSubmissions";

export default function CybersecurityTrack() {
  const { user } = useUser();
  const isAdmin = user?.role === "admin";
  const seed = [
    {
      id: 1,
      title: "Security Fundamentals",
      level: "Beginner",
      completed: false,
    },
    { id: 2, title: "Network Security", level: "Beginner", completed: false },
    {
      id: 3,
      title: "Operating System Security",
      level: "Beginner",
      completed: false,
    },
    {
      id: 4,
      title: "Cryptography Basics",
      level: "Beginner",
      completed: false,
    },
    {
      id: 5,
      title: "Ethical Hacking Principles",
      level: "Intermediate",
      completed: false,
    },
    {
      id: 6,
      title: "Penetration Testing",
      level: "Intermediate",
      completed: false,
    },
    {
      id: 7,
      title: "Vulnerability Assessment",
      level: "Intermediate",
      completed: false,
    },
    {
      id: 8,
      title: "Web Application Security",
      level: "Intermediate",
      completed: false,
    },
    { id: 9, title: "Malware Analysis", level: "Advanced", completed: false },
    { id: 10, title: "Digital Forensics", level: "Advanced", completed: false },
  ];

  const [modules, setModules] = useState(
    seed.map((m) => ({ ...m, description: m.description || "" })),
  );
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    level: "Beginner",
  });

  const submitForm = (e) => {
    e.preventDefault();
    if (!isAdmin) return;
    if (editingId)
      setModules((p) =>
        p.map((x) =>
          x.id === editingId
            ? {
                ...x,
                title: form.title,
                description: form.description,
                level: form.level,
              }
            : x,
        ),
      );
    else {
      const id = Math.max(0, ...modules.map((m) => m.id)) + 1;
      setModules((p) => [
        ...p,
        {
          id,
          title: form.title,
          description: form.description,
          level: form.level,
          completed: false,
        },
      ]);
    }
    setForm({ title: "", description: "", level: "Beginner" });
    setEditingId(null);
  };
  const startEdit = (m) => {
    setEditingId(m.id);
    setForm({
      title: m.title,
      description: m.description || "",
      level: m.level,
    });
  };
  const remove = (id) => {
    if (!isAdmin) return;
    setModules((p) => p.filter((m) => m.id !== id));
  };
  const [openIds, setOpenIds] = useState([]);
  const toggleOpen = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner":
        return "border-transparent bg-green-100 text-green-800";
      case "Intermediate":
        return "border-transparent bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "border-transparent bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Cybersecurity</h1>
            <p className="text-gray-600">Master ethical hacking and security</p>
          </div>
        </div>

        {isAdmin && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-4 h-4" />{" "}
                {editingId ? "Edit module" : "Add new module"}
              </CardTitle>
              <CardDescription>
                Admins can manage modules (Beginner/Intermediate/Advanced).
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
                    placeholder="Short description"
                    value={form.description}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, description: e.target.value }))
                    }
                  />
                </div>
                <Input
                  placeholder="Level (Beginner/Intermediate/Advanced)"
                  value={form.level}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, level: e.target.value }))
                  }
                  required
                />
                <div className="md:col-span-2">
                  <Button type="submit">
                    {editingId ? "Save changes" : "Add module"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Modules */}
        <div className="space-y-4">
          {modules.map((module) => (
            <Card key={module.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {module.completed ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-400" />
                    )}
                    <div>
                      <h3 className="font-medium">{module.title}</h3>
                      <Badge className={`mt-1 ${getLevelColor(module.level)}`}>
                        {module.level}
                      </Badge>
                      {module.description ? (
                        <div className="text-sm text-muted-foreground mt-1 whitespace-pre-wrap break-words">
                          {module.description}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" onClick={() => toggleOpen(module.id)}>
                      <PlayCircle className="w-4 h-4 mr-2" />
                      {openIds.includes(module.id) ? "Hide" : "Start"}
                    </Button>
                    {isAdmin && (
                      <>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => startEdit(module)}
                          aria-label="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="destructive"
                          onClick={() => remove(module.id)}
                          aria-label="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>
                {openIds.includes(module.id) && (
                  <>
                    <AdminResourcesSection
                      storageKey={`track_cyber_module_${module.id}`}
                      isAdmin={isAdmin}
                      variant="rich"
                    />
                    <ModuleSubmissions
                      storageKey={`track_cyber_module_${module.id}`}
                    />
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
