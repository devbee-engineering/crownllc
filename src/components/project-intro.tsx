import type { Project } from "@/data/projects";

type ProjectIntroProps = {
    intro: Project["intro"];
}

export function ProjectIntro({ intro }: ProjectIntroProps) {
    return (
        <section className="py-12 md:py-20 lg:py-24 bg-white">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#0B0B0B]">
                            About the project
                        </h2>
                    </div>
                    <div className="lg:col-span-1">
                        <p className="text-base text-gray-700 leading-relaxed">
                            {intro.left}
                        </p>
                    </div>
                    <div className="lg:col-span-1">
                        <p className="text-base text-gray-700 leading-relaxed">
                            {intro.right1}
                        </p>
                        {intro.right2 && (
                            <p className="mt-4 text-base text-gray-700 leading-relaxed">
                                {intro.right2}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
