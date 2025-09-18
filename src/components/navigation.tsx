import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavigationProps = {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
};

export function Navigation({
  onPrev,
  onNext,
  canGoPrev,
  canGoNext,
}: NavigationProps) {
  return (
    <div className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 z-20 flex flex-col gap-3">
      <Button
        variant="outline"
        size="icon"
        onClick={onPrev}
        disabled={!canGoPrev}
        aria-label="Previous slide"
        className="bg-transparent border-primary/50 text-primary hover:bg-primary/10 hover:text-primary rounded-full size-12 backdrop-blur-sm"
      >
        <ArrowLeft className="size-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={onNext}
        disabled={!canGoNext}
        aria-label="Next slide"
        className="bg-transparent border-primary/50 text-primary hover:bg-primary/10 hover:text-primary rounded-full size-12 backdrop-blur-sm"
      >
        <ArrowRight className="size-6" />
      </Button>
    </div>
  );
}
