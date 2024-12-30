export function Pill({ label }: { label: string }) {
  return (
    <span className="bg-slate-700 text-white rounded-full px-2 py-1 text-sm">
      {label[0].toUpperCase() + label.slice(1)}
    </span>
  );
}
