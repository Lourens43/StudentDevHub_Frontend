import { useRef, useState } from "react";
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
import { Input } from "@/components/ui/input";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Search, ExternalLink, Coffee, Laptop, Shield, Maximize2 } from "lucide-react";

export default function Resources() {
  const [playerOpen, setPlayerOpen] = useState(false);
  const playerContainerRef = useRef<HTMLDivElement | null>(null);
  const [currentVideo, setCurrentVideo] = useState<
    | {
        id: number;
        title: string;
        provider: string;
        track: string;
        videoId: string;
      }
    | null
  >(null);

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

  const openInPlayer = (resource: {
    id: number;
    title: string;
    provider: string;
    track: string;
    url: string;
  }) => {
    const videoId = extractYouTubeId(resource.url);
    if (!videoId) return;
    setCurrentVideo({
      id: resource.id,
      title: resource.title,
      provider: resource.provider,
      track: resource.track,
      videoId,
    });
    setPlayerOpen(true);
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
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">by {resource.provider}</span>
                  <Button size="sm" variant="outline" onClick={() => openInPlayer(resource)}>
                    View <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={playerOpen} onOpenChange={setPlayerOpen}>
        <DialogContent className="sm:max-w-5xl">
          <DialogHeader>
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <DialogTitle className="truncate">{currentVideo?.title}</DialogTitle>
                {currentVideo && (
                  <DialogDescription className="truncate">
                    {currentVideo.track} • {currentVideo.provider}
                  </DialogDescription>
                )}
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  const el = playerContainerRef.current;
                  if (!el) return;
                  if (document.fullscreenElement) {
                    document.exitFullscreen().catch(() => {});
                  } else if (el.requestFullscreen) {
                    el.requestFullscreen().catch(() => {});
                  }
                }}
                title="Fullscreen"
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>
          {currentVideo && (
            <div ref={playerContainerRef} className="w-full">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=1&rel=0`}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="h-full w-full rounded-md border"
                />
              </AspectRatio>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
