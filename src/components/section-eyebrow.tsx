import { cn } from "@/lib/utils";

type SectionEyebrowProps = {
    children: React.ReactNode;
    className?: string;
}

export function SectionEyebrow({ children, className }: SectionEyebrowProps) {
    return (
        <p className={cn("text-sm uppercase tracking-widest text-gray-500 font-medium", className)}>
            {children}
        </p>
    );
}
