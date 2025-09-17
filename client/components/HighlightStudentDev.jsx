export function HighlightStudentDev({ text, className }) {
  const parts = String(text ?? "").split(/(StudentDev)/g);
  return (
    <span className={className}>
      {parts.map((part, i) =>
        part === "StudentDev" ? (
          <span key={i} className="text-blue-700">
            StudentDev
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </span>
  );
}
