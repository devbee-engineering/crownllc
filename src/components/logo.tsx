import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center size-19 border-2 border-primary",
        className
      )}
    >
      <span className="text-xl font-bold tracking-tighter text-yellow-500">
        Crown LLC
      </span>
    </div>
  );
}
