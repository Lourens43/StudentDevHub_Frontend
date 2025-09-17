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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useUser } from "@/contexts/UserContext";
import {
  Clock,
  Coffee,
  Laptop,
  Shield,
  Pencil,
  Trash2,
  Plus,
} from "lucide-react";
import AdminResourcesSection from "@/components/AdminResourcesSection";
import ModuleSubmissions from "@/components/ModuleSubmissions";

export default function Projects() {
  const { user } = useUser();
  const isAdmin = user?.role === "admin";
  const seed = [
    {
      id: 1,
      title: "E-commerce API",
      description: "Build a REST API with Spring Boot",
      track: "Java",
      difficulty: "Intermediate",
      duration: "2-3 weeks",
    },
    {
      id: 2,
      title: "Task Manager",
      description: "Create a React task management app",
      track: "Frontend",
      difficulty: "Beginner",
      duration: "1-2 weeks",
    },
    {
      id: 3,
      title: "Security Scanner",
      description: "Network vulnerability scanner",
      track: "Cybersecurity",
      difficulty: "Advanced",
      duration: "3-4 weeks",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Professional portfolio with HTML/CSS",
      track: "Frontend",
      difficulty: "Beginner",
      duration: "1 week",
    },
  ];

  const [projects, setProjects] = useState(seed);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    track: "Frontend",
    difficulty: "Beginner",
    duration: "1 week",
    objectives: "",
    instructions: "",
    deliverables: "",
    evaluationCriteria: "",
  });

  const [openIds, setOpenIds] = useState([]);
  const toggleOpen = (id) =>
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      track: "Frontend",
      difficulty: "Beginner",
      duration: "1 week",
      objectives: "",
      instructions: "",
      deliverables: "",
      evaluationCriteria: "",
    });
    setEditingId(null);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!isAdmin) return;
    if (editingId) {
      setProjects((p) =>
        p.map((x) => (x.id === editingId ? { ...x, ...form } : x)),
      );
    } else {
      const id = Math.max(0, ...projects.map((p) => p.id)) + 1;
      setProjects((p) => [...p, { id, ...form }]);
    }
    resetForm();
  };

  const startEdit = (r) => {
    setEditingId(r.id);
    setForm({
      title: r.title,
      description: r.description || "",
      track: r.track,
      difficulty: r.difficulty,
      duration: r.duration || "",
      objectives: r.objectives || "",
      instructions: r.instructions || "",
      deliverables: r.deliverables || "",
      evaluationCriteria: r.evaluationCriteria || "",
    });
  };

  const remove = (id) => {
    if (!isAdmin) return;
    setProjects((p) => p.filter((x) => x.id !== id));
  };

  const getTrackIcon = (track) => {
    switch (track) {
      case "Java":
        return <Coffee className="w-4 h-4 text-orange-600" />;
      case "Frontend":
        return <Laptop className="w-4 h-4 text-blue-600" />;
      case "Cybersecurity":
        return <Shield className="w-4 h-4 text-red-600" />;
      default:
        return null;
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
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
        <h1 className="text-3xl font-bold mb-6">Projects</h1>

        {isAdmin && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-4 h-4" />{" "}
                {editingId ? "Edit project" : "Add new project"}
              </CardTitle>
              <CardDescription>
                Admins can create, update and delete projects.
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
                    placeholder="Project Description"
                    value={form.description}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, description: e.target.value }))
                    }
                    required
                  />
                </div>

                <div>
                  <div className="text-sm font-medium mb-1">Track</div>
                  <Input
                    placeholder="e.g. Frontend, Java, Cybersecurity, or custom"
                    value={form.track}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, track: e.target.value }))
                    }
                    required
                  />
                </div>

                <div>
                  <div className="text-sm font-medium mb-1">
                    Difficulty Level
                  </div>
                  <Select
                    value={form.difficulty}
                    onValueChange={(v) =>
                      setForm((s) => ({ ...s, difficulty: v }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Beginner">Beginner</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Input
                  placeholder="Duration (e.g. 1-2 weeks)"
                  value={form.duration}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, duration: e.target.value }))
                  }
                  required
                />

                <div className="md:col-span-2">
                  <Textarea
                    placeholder="Project Objectives / Learning Outcomes"
                    value={form.objectives}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, objectives: e.target.value }))
                    }
                    rows={3}
                  />
                </div>

                <div className="md:col-span-2">
                  <Textarea
                    placeholder="Instructions / Steps (tasks or milestones)"
                    value={form.instructions}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, instructions: e.target.value }))
                    }
                    rows={6}
                    className="font-mono"
                  />
                </div>

                <div className="md:col-span-2">
                  <Textarea
                    placeholder="Expected Deliverables (what to submit)"
                    value={form.deliverables}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, deliverables: e.target.value }))
                    }
                    rows={3}
                  />
                </div>

                <div className="md:col-span-2">
                  <Textarea
                    placeholder="Evaluation Criteria (optional)"
                    value={form.evaluationCriteria}
                    onChange={(e) =>
                      setForm((s) => ({
                        ...s,
                        evaluationCriteria: e.target.value,
                      }))
                    }
                    rows={3}
                  />
                </div>
                <div className="flex items-center gap-2 md:col-span-2">
                  <Button type="submit">
                    {editingId ? "Save changes" : "Add project"}
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
          {projects.map((project) => (
            <Card
              key={project.id}
              className="hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getTrackIcon(project.track)}
                    <Badge variant="outline">{project.track}</Badge>
                    <Badge
                      className={`${getDifficultyColor(project.difficulty)}`}
                    >
                      {project.difficulty}
                    </Badge>
                  </div>
                  {isAdmin && (
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => startEdit(project)}
                        aria-label="Edit"
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => remove(project.id)}
                        aria-label="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>

                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                </div>

                <Button
                  className="w-full"
                  onClick={() => toggleOpen(project.id)}
                >
                  {openIds.includes(project.id) ? "Hide" : "Start Project"}
                </Button>

                {openIds.includes(project.id) && (
                  <div className="mt-4 space-y-4">
                    {project.objectives && (
                      <div>
                        <div className="text-sm font-medium">
                          Objectives / Learning Outcomes
                        </div>
                        <div className="text-sm whitespace-pre-wrap break-words">
                          {project.objectives}
                        </div>
                      </div>
                    )}
                    {project.instructions && (
                      <div>
                        <div className="text-sm font-medium">
                          Instructions / Steps
                        </div>
                        <pre className="bg-muted p-2 rounded-md text-xs overflow-auto font-mono">
                          <code>{project.instructions}</code>
                        </pre>
                      </div>
                    )}
                    {project.deliverables && (
                      <div>
                        <div className="text-sm font-medium">
                          Expected Deliverables
                        </div>
                        <div className="text-sm whitespace-pre-wrap break-words">
                          {project.deliverables}
                        </div>
                      </div>
                    )}
                    {project.evaluationCriteria && (
                      <div>
                        <div className="text-sm font-medium">
                          Evaluation Criteria
                        </div>
                        <div className="text-sm whitespace-pre-wrap break-words">
                          {project.evaluationCriteria}
                        </div>
                      </div>
                    )}

                    <AdminResourcesSection
                      storageKey={`project_${project.id}`}
                      isAdmin={isAdmin}
                      variant="rich"
                    />
                    <ModuleSubmissions storageKey={`project_${project.id}`} />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
