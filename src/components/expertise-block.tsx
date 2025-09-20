type ExpertiseBlockProps = {
    index: string;
    title: string;
    col1?: string;
    col2?: string;
};

export function ExpertiseBlock({ index, title, col1, col2 }: ExpertiseBlockProps) {
    const titleParts = title.split(' / ');

    return (
        <section className="py-12 md:py-20 lg:py-24">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-1">
                        <p className="text-sm text-gray-400 tracking-wider">{index}</p>
                    </div>
                    <div className="lg:col-span-4">
                        <h3 className="text-3xl md:text-4xl font-medium text-[#0B0B0B]">
                            {titleParts.map((part, i) => (
                                <span key={i} className="block">{part}</span>
                            ))}
                        </h3>
                    </div>
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {col1 && <p className="text-base text-gray-700 leading-relaxed">{col1}</p>}
                        {col2 && <p className="text-base text-gray-700 leading-relaxed">{col2}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
}
