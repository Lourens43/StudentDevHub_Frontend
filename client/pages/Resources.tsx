import { Layout } from "@/components/Layout";
import { useEffect, useMemo, useState } from "react";
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
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { useUser } from "@/contexts/UserContext";
import { Search, Coffee, Laptop, Shield, ChevronDown, ExternalLink } from "lucide-react";

type ChatMessage = {
  id: string;
  text: string;
  ts: number;
  authorName: string;
  authorEmail: string;
};

function ChatSection({ resourceId }: { resourceId: number }) {
  const { user } = useUser();
  const storageKey = useMemo(() => `resource_chat_${resourceId}`, [resourceId]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setMessages(JSON.parse(raw));
    } catch {
      setMessages([]);
    }
  }, [storageKey]);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(messages));
    } catch {}
  }, [messages, storageKey]);

  const send = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const msg: ChatMessage = {
      id: `${Date.now()}_${Math.random().toString(36).slice(2)}`,
      text: trimmed,
      ts: Date.now(),
      authorName: user ? `${user.firstName} ${user.lastName}` : "Guest",
      authorEmail: user ? user.email : "",
    };
    setMessages((prev) => [...prev, msg]);
    setText("");
  };

  return (
    <div className="mt-4 border-t pt-4 space-y-3">
      <div className="font-medium">Community Q&A</div>
      <div className="max-h-64 overflow-y-auto space-y-3 pr-1">
        {messages.length === 0 ? (
          <div className="text-sm text-muted-foreground">No messages yet. Be the first to ask a question.</div>
        ) : (
          messages.map((m) => (
            <div key={m.id} className="rounded-md border p-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="truncate">
                  {m.authorName}
                  {m.authorEmail ? ` • ${m.authorEmail}` : ""}
                </span>
                <span>{new Date(m.ts).toLocaleString()}</span>
              </div>
              <div className="mt-1 text-sm whitespace-pre-wrap break-words">{m.text}</div>
            </div>
          ))
        )}
      </div>
      <div className="flex items-start gap-2">
        <Textarea
          placeholder={user ? "Ask a question or share a tip..." : "Sign in to post. You can still type here."}
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
        <div className="text-xs text-muted-foreground">Posts are saved only on your device. Sign in for attribution.</div>
      )}
    </div>
  );
}

export default function Resources() {

  const mockResources = [
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

  const getTrackIcon = (track: string) => {
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

  const extractYouTubeId = (url: string) => {
    try {
      const u = new URL(url);
      if (u.hostname === "youtu.be") {
        return u.pathname.slice(1);
      }
      if (u.searchParams.get("v")) {
        return u.searchParams.get("v") as string;
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
        <h1 className="text-3xl font-bold mb-8">Resources</h1>

        <div className="relative mb-8 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder="Search resources..." className="pl-10" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {mockResources.map((resource) => (
            <Card key={resource.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {getTrackIcon(resource.track)}
                  <Badge variant="outline">{resource.track}</Badge>
                </div>

                <CardTitle className="text-lg">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <Collapsible>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">by {resource.provider}</span>
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
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          Open on YouTube for fullscreen <ExternalLink className="w-3 h-3 ml-1" />
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
