type StatBlockProps = {
    number: string;
    label: string;
  };
  
  export function StatBlock({ number, label }: StatBlockProps) {
    return (
      <div>
        <p className="text-7xl font-light text-[#0B0B0B]">{number}</p>
        <p className="mt-2 text-sm uppercase tracking-widest text-gray-500">
          {label}
        </p>
      </div>
    );
  }
  