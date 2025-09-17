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
import { useUser } from "@/contexts/UserContext";
import { Pencil, Trash2 } from "lucide-react";

export default function ModuleSubmissions({ storageKey }) {
  const { user } = useUser();
  const [items, setItems] = useState([]);

  const [form, setForm] = useState({
    title: "",
    notes: "",
    work: "",
    result: "",
  });
  const [replyText, setReplyText] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    notes: "",
    work: "",
    result: "",
  });
  const [editingResponseId, setEditingResponseId] = useState(null);
  const [editResponseText, setEditResponseText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const id = `${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const author = user
      ? `${user.firstName || ""} ${user.lastName || ""}`.trim() || user.email
      : "Guest";
    const email = user?.email || "";
    setItems((prev) => [
      ...prev,
      { id, ...form, author, email, ts: Date.now(), responses: [] },
    ]);
    setForm({ title: "", notes: "", work: "", result: "" });
  };

  const isAdmin = user?.role === "admin";
  const canEdit = (item) =>
    !!user?.email && item.email && user.email === item.email;

  const beginEdit = (item) => {
    if (!canEdit(item)) return;
    setEditingId(item.id);
    setEditForm({
      title: item.title,
      notes: item.notes || "",
      work: item.work || "",
      result: item.result || "",
    });
  };

  const saveEdit = (e) => {
    e.preventDefault();
    if (!editingId) return;
    setItems((prev) =>
      prev.map((it) => (it.id === editingId ? { ...it, ...editForm } : it)),
    );
    setEditingId(null);
    setEditForm({ title: "", notes: "", work: "", result: "" });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({ title: "", notes: "", work: "", result: "" });
  };

  const removeSubmission = (id) => {
    if (!isAdmin) return;
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const addResponse = (id) => {
    const text = (replyText[id] || "").trim();
    if (!text) return;
    const author = user
      ? `${user.firstName || ""} ${user.lastName || ""}`.trim() || user.email
      : "Guest";
    const email = user?.email || "";
    setItems((prev) =>
      prev.map((it) =>
        it.id === id
          ? {
              ...it,
              responses: [
                ...(it.responses || []),
                {
                  id: `${Date.now()}_${Math.random().toString(36).slice(2)}`,
                  text,
                  author,
                  email,
                  ts: Date.now(),
                },
              ],
            }
          : it,
      ),
    );
    setReplyText((s) => ({ ...s, [id]: "" }));
  };

  const canEditResponse = (r) =>
    !!user?.email && r.email && user.email === r.email;

  const beginEditResponse = (r) => {
    if (!canEditResponse(r)) return;
    setEditingResponseId(r.id);
    setEditResponseText(r.text || "");
  };

  const saveEditResponse = (e, submissionId) => {
    e.preventDefault();
    if (!editingResponseId) return;
    const newText = editResponseText.trim();
    setItems((prev) =>
      prev.map((it) =>
        it.id !== submissionId
          ? it
          : {
              ...it,
              responses: (it.responses || []).map((r) =>
                r.id === editingResponseId ? { ...r, text: newText } : r,
              ),
            },
      ),
    );
    setEditingResponseId(null);
    setEditResponseText("");
  };

  const cancelEditResponse = () => {
    setEditingResponseId(null);
    setEditResponseText("");
  };

  const removeResponse = (submissionId, responseId) => {
    if (!isAdmin) return;
    setItems((prev) =>
      prev.map((it) =>
        it.id !== submissionId
          ? it
          : {
              ...it,
              responses: (it.responses || []).filter(
                (r) => r.id !== responseId,
              ),
            },
      ),
    );
  };

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="text-base">Submissions & Discussion</CardTitle>
        <CardDescription>
          Share your work or ask a question. Others can respond.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={submit} className="grid gap-2 mb-6">
          <Input
            placeholder="Submission Title"
            value={form.title}
            onChange={(e) => setForm((s) => ({ ...s, title: e.target.value }))}
            required
          />
          <Textarea
            placeholder="Description / Notes"
            value={form.notes}
            onChange={(e) => setForm((s) => ({ ...s, notes: e.target.value }))}
          />
          <Textarea
            placeholder="Your Work (code, steps, answers, configs)"
            value={form.work}
            onChange={(e) => setForm((s) => ({ ...s, work: e.target.value }))}
            rows={6}
            className="font-mono"
          />
          <Textarea
            placeholder="Result / Evidence (optional)"
            value={form.result}
            onChange={(e) => setForm((s) => ({ ...s, result: e.target.value }))}
            rows={3}
            className="font-mono"
          />
          <div>
            <Button type="submit">Post Submission</Button>
          </div>
        </form>

        {items.length === 0 ? (
          <div className="text-sm text-muted-foreground">
            No submissions yet.
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((it) => (
              <div key={it.id} className="rounded-md border p-3 space-y-2">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="truncate">
                    {it.author}
                    {it.email ? ` • ${it.email}` : ""}
                  </span>
                  <div className="flex items-center gap-2">
                    <span>{new Date(it.ts).toLocaleString()}</span>
                    {canEdit(it) && (
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => beginEdit(it)}
                        aria-label="Edit submission"
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                    )}
                    {isAdmin && (
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => removeSubmission(it.id)}
                        aria-label="Delete submission"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>

                {editingId === it.id ? (
                  <form onSubmit={saveEdit} className="grid gap-2">
                    <Input
                      placeholder="Submission Title"
                      value={editForm.title}
                      onChange={(e) =>
                        setEditForm((s) => ({ ...s, title: e.target.value }))
                      }
                      required
                    />
                    <Textarea
                      placeholder="Description / Notes"
                      value={editForm.notes}
                      onChange={(e) =>
                        setEditForm((s) => ({ ...s, notes: e.target.value }))
                      }
                    />
                    <Textarea
                      placeholder="Your Work (code, steps, answers, configs)"
                      value={editForm.work}
                      onChange={(e) =>
                        setEditForm((s) => ({ ...s, work: e.target.value }))
                      }
                      rows={6}
                      className="font-mono"
                    />
                    <Textarea
                      placeholder="Result / Evidence (optional)"
                      value={editForm.result}
                      onChange={(e) =>
                        setEditForm((s) => ({ ...s, result: e.target.value }))
                      }
                      rows={3}
                      className="font-mono"
                    />
                    <div className="flex items-center gap-2">
                      <Button type="submit">Save</Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={cancelEdit}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                ) : (
                  <>
                    <div className="font-medium">{it.title}</div>
                    {it.notes ? (
                      <div className="text-sm whitespace-pre-wrap break-words">
                        {it.notes}
                      </div>
                    ) : null}
                    {it.work ? (
                      <div>
                        <div className="text-xs font-medium text-muted-foreground">
                          Your Work
                        </div>
                        <pre className="bg-muted p-2 rounded-md text-xs overflow-auto font-mono">
                          <code>{it.work}</code>
                        </pre>
                      </div>
                    ) : null}
                    {it.result ? (
                      <div>
                        <div className="text-xs font-medium text-muted-foreground">
                          Result / Evidence
                        </div>
                        <pre className="bg-muted p-2 rounded-md text-xs overflow-auto font-mono">
                          <code>{it.result}</code>
                        </pre>
                      </div>
                    ) : null}
                  </>
                )}

                <div className="mt-2 space-y-2">
                  {(it.responses || []).map((r) => (
                    <div key={r.id} className="rounded border p-2">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="truncate">
                          {r.author}
                          {r.email ? ` • ${r.email}` : ""}
                        </span>
                        <div className="flex items-center gap-2">
                          <span>{new Date(r.ts).toLocaleString()}</span>
                          {canEditResponse(r) && (
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() => beginEditResponse(r)}
                              aria-label="Edit response"
                            >
                              <Pencil className="w-4 h-4" />
                            </Button>
                          )}
                          {isAdmin && (
                            <Button
                              size="icon"
                              variant="destructive"
                              onClick={() => removeResponse(it.id, r.id)}
                              aria-label="Delete response"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                      {editingResponseId === r.id ? (
                        <form
                          onSubmit={(e) => saveEditResponse(e, it.id)}
                          className="mt-2 grid gap-2"
                        >
                          <Textarea
                            value={editResponseText}
                            onChange={(e) =>
                              setEditResponseText(e.target.value)
                            }
                            rows={3}
                          />
                          <div className="flex items-center gap-2">
                            <Button type="submit">Save</Button>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={cancelEditResponse}
                            >
                              Cancel
                            </Button>
                          </div>
                        </form>
                      ) : (
                        <div className="text-sm whitespace-pre-wrap break-words">
                          {r.text}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="flex items-start gap-2">
                    <Textarea
                      placeholder="Add a response"
                      value={replyText[it.id] || ""}
                      onChange={(e) =>
                        setReplyText((s) => ({ ...s, [it.id]: e.target.value }))
                      }
                      rows={2}
                    />
                    <Button
                      type="button"
                      onClick={() => addResponse(it.id)}
                      className="shrink-0"
                    >
                      Respond
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
