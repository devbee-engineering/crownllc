type SlideIndicatorProps = {
  current: number;
  total: number;
};

export function SlideIndicator({ current, total }: SlideIndicatorProps) {
  const formatNumber = (n: number) => n.toString().padStart(2, "0");
  return (
    <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-20 text-lg font-medium text-primary">
      <span>{formatNumber(current)}</span>
      <span className="mx-2 text-primary/50">/</span>
      <span>{formatNumber(total)}</span>
    </div>
  );
}
