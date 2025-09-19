import { cn } from "@/lib/utils";

type StatItem = {
    value: string;
    label: string;
}

type StatsRowProps = {
    items: StatItem[];
    className?: string;
}

export function StatsRow({ items, className }: StatsRowProps) {
    return (
        <div className={cn("flex flex-col sm:flex-row gap-8 sm:gap-16 md:gap-20", className)}>
            {items.map((item) => (
                <div key={item.label} className="text-center sm:text-left">
                    <p className="text-5xl md:text-6xl font-light text-[#0B0B0B]">{item.value}</p>
                    <p className="mt-2 text-sm uppercase tracking-widest text-gray-500">
                        {item.label}
                    </p>
                </div>
            ))}
        </div>
    );
}
