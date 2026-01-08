export default function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    normal: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    critical: "bg-red-100 text-red-800",
  };
  return (
    <span className={`px-2 py-1 rounded text-sm font-medium ${styles[status]}`}>
      {status.toUpperCase()}
    </span>
  );
}
