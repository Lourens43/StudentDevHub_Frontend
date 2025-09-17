import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Pencil, Trash2, Link as LinkIcon, Plus } from "lucide-react";

export default function AdminResourcesSection({
  storageKey,
  isAdmin,
  variant = "link",
}) {
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(
    variant === "rich"
      ? { title: "", explanation: "", exampleCode: "", expectedOutput: "", imageUrl: "" }
      : { title: "", url: "", note: "", imageUrl: "" },
  );

  const submit = (e) => {
    e.preventDefault();
    if (!isAdmin) return;
    if (editingId) {
      setItems((prev) =>
        prev.map((it) => (it.id === editingId ? { ...it, ...form } : it)),
      );
    } else {
      const id = `${Date.now()}_${Math.random().toString(36).slice(2)}`;
      setItems((prev) => [...prev, { id, ...form }]);
    }
    setForm(
      variant === "rich"
      ? { title: "", explanation: "", exampleCode: "", expectedOutput: "", imageUrl: "" }
      : { title: "", url: "", note: "", imageUrl: "" },
    );
    setEditingId(null);
  };

  const startEdit = (it) => {
    if (!isAdmin) return;
    setEditingId(it.id);
    if (variant === "rich") {
      setForm({
        title: it.title || "",
        explanation: it.explanation || "",
        exampleCode: it.exampleCode || "",
        expectedOutput: it.expectedOutput || "",
        imageUrl: it.imageUrl || "",
      });
    } else {
      setForm({ title: it.title, url: it.url, note: it.note || "", imageUrl: it.imageUrl || "" });
    }
  };

  const remove = (id) => {
    if (!isAdmin) return;
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  if (!isAdmin && items.length === 0) {
    return null;
  }

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <LinkIcon className="w-4 h-4" /> Resources
        </CardTitle>
        <CardDescription>Helpful materials for this item.</CardDescription>
      </CardHeader>
      <CardContent>
        {items.length === 0 ? (
          <div className="text-sm text-muted-foreground">No resources yet.</div>
        ) : (
          <ul className="space-y-2">
            {items.map((it) => (
              <li key={it.id} className="rounded-md border p-3">
                {variant === "rich" ? (
                  <div className="space-y-2">
                    <div className="font-medium">{it.title}</div>
                    {it.imageUrl ? (
                      <img
                        src={it.imageUrl}
                        alt={it.title}
                        className="w-full rounded-md border max-h-64 object-cover"
                      />
                    ) : null}
                    {it.explanation ? (
                      <div className="text-sm whitespace-pre-wrap break-words">
                        {it.explanation}
                      </div>
                    ) : null}
                    {it.exampleCode ? (
                      <pre className="bg-muted p-2 rounded-md text-xs overflow-auto font-mono">
                        <code>{it.exampleCode}</code>
                      </pre>
                    ) : null}
                    {it.expectedOutput ? (
                      <div>
                        <div className="text-xs font-medium text-muted-foreground">
                          Expected Result / Outcome
                        </div>
                        <pre className="bg-muted p-2 rounded-md text-xs overflow-auto font-mono">
                          <code>{it.expectedOutput}</code>
                        </pre>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <a
                        href={it.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium truncate block"
                      >
                        {it.title}
                      </a>
                      {it.note ? (
                        <div className="text-xs text-muted-foreground whitespace-pre-wrap break-words">
                          {it.note}
                        </div>
                      ) : null}
                      {it.imageUrl ? (
                        <img
                          src={it.imageUrl}
                          alt={it.title}
                          className="mt-2 w-full rounded-md border max-h-64 object-cover"
                        />
                      ) : null}
                    </div>
                    {isAdmin && (
                      <div className="flex items-center gap-2 shrink-0">
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => startEdit(it)}
                          aria-label="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="destructive"
                          onClick={() => remove(it.id)}
                          aria-label="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                )}
                {variant === "rich" && isAdmin && (
                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => startEdit(it)}
                      aria-label="Edit"
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={() => remove(it.id)}
                      aria-label="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}

        {isAdmin && (
          <form onSubmit={submit} className="grid gap-2 mt-4">
            <Input
              placeholder="Resource Title"
              value={form.title}
              onChange={(e) =>
                setForm((s) => ({ ...s, title: e.target.value }))
              }
              required
            />
            {variant === "rich" ? (
              <>
                <Textarea
                  placeholder="Explanation (plain language)"
                  value={form.explanation}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, explanation: e.target.value }))
                  }
                />
                <Textarea
                  placeholder="Example / Work Demonstration (code, steps, commands, or text)"
                  value={form.exampleCode}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, exampleCode: e.target.value }))
                  }
                  className="font-mono"
                  rows={6}
                />
                <Textarea
                  placeholder="Expected Result / Outcome (optional)"
                  value={form.expectedOutput}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, expectedOutput: e.target.value }))
                  }
                  className="font-mono"
                  rows={4}
                />
                <Input
                  placeholder="Image URL (optional)"
                  type="url"
                  value={form.imageUrl || ""}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, imageUrl: e.target.value }))
                  }
                />
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
                {form.imageUrl ? (
                  <img
                    src={form.imageUrl}
                    alt="Preview"
                    className="w-full rounded-md border max-h-64 object-cover"
                  />
                ) : null}
              </>
            ) : (
              <>
                <Input
                  placeholder="URL (https://...)"
                  type="url"
                  value={form.url}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, url: e.target.value }))
                  }
                  required
                />
                <Textarea
                  placeholder="Optional note"
                  value={form.note}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, note: e.target.value }))
                  }
                />
                <Input
                  placeholder="Image URL (optional)"
                  type="url"
                  value={form.imageUrl || ""}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, imageUrl: e.target.value }))
                  }
                />
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
                {form.imageUrl ? (
                  <img
                    src={form.imageUrl}
                    alt="Preview"
                    className="w-full rounded-md border max-h-64 object-cover"
                  />
                ) : null}
              </>
            )}
            <div className="flex items-center gap-2">
              <Button type="submit">
                <Plus className="w-4 h-4 mr-2" />
                {editingId ? "Save resource" : "Add resource"}
              </Button>
              {editingId && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setEditingId(null);
                    setForm(
                      variant === "rich"
                        ? {
                            title: "",
                            explanation: "",
                            exampleCode: "",
                            expectedOutput: "",
                          }
                        : { title: "", url: "", note: "" },
                    );
                  }}
                >
                  Cancel
                </Button>
              )}
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
