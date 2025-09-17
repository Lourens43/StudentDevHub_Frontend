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
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { useUser } from "@/contexts/UserContext";
import {
  Coffee,
  Laptop,
  Shield,
  ChevronDown,
  ExternalLink,
  Trash2,
  Pencil,
  Plus,
} from "lucide-react";

function ChatSection({ resourceId }) {
  const { user } = useUser();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const send = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const msg = {
      id: `${Date.now()}_${Math.random().toString(36).slice(2)}`,
      text: trimmed,
      ts: Date.now(),
      authorName: user ? `${user.firstName} ${user.lastName}` : "Guest",
      authorEmail: user ? user.email : "",
    };
    setMessages((prev) => [...prev, msg]);
    setText("");
  };

  const deleteMsg = (id) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
  };

  const beginEdit = (m) => {
    if (!canEdit(m)) return;
    setEditingId(m.id);
    setEditText(m.text || "");
  };

  const saveEdit = (e) => {
    e.preventDefault();
    if (!editingId) return;
    const newText = editText.trim();
    if (!newText) return;
    setMessages((prev) =>
      prev.map((x) => (x.id === editingId ? { ...x, text: newText } : x)),
    );
    setEditingId(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const isAdmin = user?.role === "admin";
  const canEdit = (m) => !!user?.email && m.authorEmail && user.email === m.authorEmail;

  return (
    <div className="mt-4 border-t pt-4 space-y-3">
      <div className="font-medium">Community Q&A</div>
      <div className="max-h-64 overflow-y-auto space-y-3 pr-1">
        {messages.length === 0 ? (
          <div className="text-sm text-muted-foreground">
            No messages yet. Be the first to ask a question.
          </div>
        ) : (
          messages.map((m) => (
            <div key={m.id} className="rounded-md border p-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="truncate">
                  {m.authorName}
                  {m.authorEmail ? ` • ${m.authorEmail}` : ""}
                </span>
                <div className="flex items-center gap-2">
                  <span>{new Date(m.ts).toLocaleString()}</span>
                  {canEdit(m) && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => beginEdit(m)}
                      aria-label="Edit comment"
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                  )}
                  {isAdmin && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteMsg(m.id)}
                      aria-label="Delete comment"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  )}
                </div>
              </div>
              {editingId === m.id ? (
                <form onSubmit={saveEdit} className="mt-2 grid gap-2">
                  <Textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    rows={3}
                  />
                  <div className="flex items-center gap-2">
                    <Button type="submit">Save</Button>
                    <Button type="button" variant="outline" onClick={cancelEdit}>
                      Cancel
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="mt-1 text-sm whitespace-pre-wrap break-words">
                  {m.text}
                </div>
              )}
            </div>
          ))
        )}
      </div>
      <div className="flex items-start gap-2">
        <Textarea
          placeholder={
            user
              ? "Ask a question or share a tip..."
              : "Sign in to post. You can still type here."
          }
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-10"
          rows={2}
          maxLength={1000}
        />
        <Button onClick={send} disabled={!text.trim()} className="shrink-0">
          Send
        </Button>
      </div>
      {!user && (
        <div className="text-xs text-muted-foreground">
          Posts are kept only while this page is open.
        </div>
      )}
    </div>
  );
}

export default function Resources() {
  const { user } = useUser();
  const seedResources = [
    {
      id: 1,
      title: "Java Programming Full Course",
      description: "Complete Java tutorial from basics to advanced concepts",
      track: "Java",
      provider: "Programming with Mosh",
      url: "https://www.youtube.com/watch?v=eIrMbAQSU34",
    },
    {
      id: 2,
      title: "React Course - Beginner's Tutorial",
      description: "Learn React from scratch with practical projects",
      track: "Frontend",
      provider: "freeCodeCamp",
      url: "https://www.youtube.com/watch?v=bMknfKXIFA8",
    },
    {
      id: 3,
      title: "Ethical Hacking Full Course",
      description: "Complete cybersecurity and ethical hacking course",
      track: "Cybersecurity",
      provider: "edureka!",
      url: "https://www.youtube.com/watch?v=fNzpcB7ODxQ",
    },
    {
      id: 4,
      title: "Spring Boot Tutorial",
      description: "Build REST APIs with Spring Boot and Java",
      track: "Java",
      provider: "Java Brains",
      url: "https://www.youtube.com/watch?v=vtPkZShrvXQ",
    },
    {
      id: 5,
      title: "JavaScript Full Course",
      description: "Master JavaScript fundamentals for web development",
      track: "Frontend",
      provider: "freeCodeCamp",
      url: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
    },
    {
      id: 6,
      title: "HTML & CSS Full Course",
      description: "Complete HTML and CSS tutorial for beginners",
      track: "Frontend",
      provider: "freeCodeCamp",
      url: "https://www.youtube.com/watch?v=mU6anWqZJcc",
    },
    {
      id: 7,
      title: "Kali Linux Tutorial",
      description: "Learn penetration testing with Kali Linux",
      track: "Cybersecurity",
      provider: "NetworkChuck",
      url: "https://www.youtube.com/watch?v=fKuqYQdqRIs",
    },
    {
      id: 8,
      title: "TypeScript Course",
      description: "Learn TypeScript for better JavaScript development",
      track: "Frontend",
      provider: "Traversy Media",
      url: "https://www.youtube.com/watch?v=BCg4U1FzODs",
    },
    {
      id: 9,
      title: "Java Spring Framework",
      description: "Complete Spring Framework tutorial with examples",
      track: "Java",
      provider: "Telusko",
      url: "https://www.youtube.com/watch?v=If1Lw4pLLEo",
    },
    {
      id: 10,
      title: "Network Security Basics",
      description: "Understanding network security fundamentals",
      track: "Cybersecurity",
      provider: "Professor Messer",
      url: "https://www.youtube.com/watch?v=qiQR5rTSshw",
    },
  ];

  const [resources, setResources] = useState(seedResources);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    track: "Frontend",
    provider: "",
    url: "",
    imageUrl: "",
  });

  const isAdmin = user?.role === "admin";

  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      track: "Frontend",
      provider: "",
      url: "",
      imageUrl: "",
    });
    setEditingId(null);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!isAdmin) return;
    if (editingId) {
      setResources((prev) =>
        prev.map((r) => (r.id === editingId ? { ...r, ...form } : r)),
      );
    } else {
      const id = Math.max(0, ...resources.map((r) => r.id)) + 1;
      setResources((prev) => [...prev, { id, ...form }]);
    }
    resetForm();
  };

  const startEdit = (r) => {
    setEditingId(r.id);
    setForm({
      title: r.title,
      description: r.description,
      track: r.track,
      provider: r.provider,
      url: r.url,
      imageUrl: r.imageUrl || "",
    });
  };

  const remove = (id) => {
    if (!isAdmin) return;
    setResources((prev) => prev.filter((r) => r.id !== id));
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

  const extractYouTubeId = (url) => {
    try {
      const u = new URL(url);
      if (u.hostname === "youtu.be") {
        return u.pathname.slice(1);
      }
      if (u.searchParams.get("v")) {
        return u.searchParams.get("v");
      }
      const paths = u.pathname.split("/").filter(Boolean);
      const embedIndex = paths.findIndex((p) => p === "embed");
      if (embedIndex !== -1 && paths[embedIndex + 1]) {
        return paths[embedIndex + 1];
      }
      if (paths.length > 0) {
        return paths[paths.length - 1];
      }
      return "";
    } catch {
      return "";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Resources</h1>

        {isAdmin && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-4 h-4" />{" "}
                {editingId ? "Edit resource" : "Add new resource"}
              </CardTitle>
              <CardDescription>
                Admins can create, update and delete resources.
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
                <div>
                  <Input
                    placeholder="Track (e.g. Frontend, Java, Cybersecurity)"
                    value={form.track}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, track: e.target.value }))
                    }
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Provider"
                    value={form.provider}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, provider: e.target.value }))
                    }
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Input
                    placeholder="YouTube URL"
                    type="url"
                    value={form.url}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, url: e.target.value }))
                    }
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Input
                    placeholder="Image URL (optional)"
                    type="url"
                    value={form.imageUrl}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, imageUrl: e.target.value }))
                    }
                  />
                </div>
                <div className="md:col-span-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) {
                        const url = URL.createObjectURL(f);
                        setForm((s) => ({ ...s, imageUrl: url }));
                      }
                    }}
                  />
                </div>
                {form.imageUrl ? (
                  <div className="md:col-span-2">
                    <img
                      src={form.imageUrl}
                      alt="Preview"
                      className="w-full rounded-md border max-h-64 object-cover"
                    />
                  </div>
                ) : null}
                <div className="flex items-center gap-2 md:col-span-2">
                  <Button type="submit">
                    {editingId ? "Save changes" : "Add resource"}
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
          {resources.map((resource) => (
            <Card
              key={resource.id}
              className="hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getTrackIcon(resource.track)}
                    <Badge variant="outline">{resource.track}</Badge>
                  </div>
                  {isAdmin && (
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => startEdit(resource)}
                        aria-label="Edit"
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => remove(resource.id)}
                        aria-label="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>

                <CardTitle className="text-lg">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>

              <CardContent>
                {resource.imageUrl ? (
                  <img
                    src={resource.imageUrl}
                    alt={resource.title}
                    className="mb-4 w-full rounded-md border max-h-64 object-cover"
                  />
                ) : null}
                <Collapsible>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      by {resource.provider}
                    </span>
                    <CollapsibleTrigger asChild>
                      <Button size="sm" variant="outline">
                        Watch <ChevronDown className="w-3 h-3 ml-1" />
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent className="mt-4">
                    <AspectRatio ratio={16 / 9}>
                      <iframe
                        src={`https://www.youtube.com/embed/${extractYouTubeId(resource.url)}?rel=0`}
                        title={resource.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="h-full w-full rounded-md border"
                      />
                    </AspectRatio>
                    <div className="mt-2 flex justify-end">
                      <Button variant="link" size="sm" asChild>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open on YouTube for fullscreen{" "}
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </Button>
                    </div>
                    <ChatSection resourceId={resource.id} />
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
