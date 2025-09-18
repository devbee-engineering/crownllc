type CaptionOverlayProps = {
    caption: string;
  };
  
  export function CaptionOverlay({ caption }: CaptionOverlayProps) {
    return (
      <div className="absolute bottom-8 left-8 z-10 text-white text-sm bg-black/20 px-2 py-1 rounded">
        <p>{caption}</p>
      </div>
    );
  }
  