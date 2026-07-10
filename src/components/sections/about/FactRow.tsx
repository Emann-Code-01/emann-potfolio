interface Props {
  label: string;
  value: string;
}

export default function FactRow({ label, value }: Props) {
  return (
    <div className="flex justify-between border-b border-border py-4">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
        {label}
      </span>
      <span className="text-sm text-white/75">{value}</span>
    </div>
  );
}
