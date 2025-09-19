import type { Project } from "@/data/projects";
import { Separator } from "./ui/separator";

type ProjectFactsProps = {
  metrics: Project["metrics"];
  specs: Project["specs"];
};

export function ProjectFacts({ metrics, specs }: ProjectFactsProps) {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Metrics Column */}
          <div className="lg:col-span-1 flex flex-col gap-12">
            <div>
              <p className="text-4xl md:text-5xl font-light text-[#0B0B0B]">
                {metrics.year}
              </p>
              <p className="mt-2 text-sm uppercase tracking-widest text-gray-500">
                Year of completion
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-light text-[#0B0B0B]">
                {metrics.area.split(" ")[0]}
                <sup className="text-2xl md:text-3xl ml-1">
                  {metrics.area.split(" ")[1]}
                </sup>
              </p>
              <p className="mt-2 text-sm uppercase tracking-widest text-gray-500">
                Built-up area
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-light text-[#0B0B0B]">
                {metrics.floors}
              </p>
              <p className="mt-2 text-sm uppercase tracking-widest text-gray-500">
                Floors
              </p>
            </div>
          </div>

          {/* Specs Column */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                    <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Location</h3>
                    <p className="text-base text-gray-800">{specs.location}</p>
                </div>
                <div>
                    <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Type</h3>
                    <p className="text-base text-gray-800">{specs.type}</p>
                </div>
            </div>

            <Separator className="my-8 bg-[#E4E6E7]" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                    <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Project</h3>
                    <p className="text-base text-gray-800">{specs.project}</p>
                </div>
                <div>
                    <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Details</h3>
                    <p className="text-base text-gray-800">{specs.details}</p>
                </div>
            </div>

            <Separator className="my-8 bg-[#E4E6E7]" />

            <div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Scope</h3>
                <div className="flex flex-wrap gap-2">
                    {specs.scope.map((item) => (
                        <button key={item} className="px-3 py-1.5 text-sm border border-gray-300 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-ring">
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            <Separator className="my-8 bg-[#E4E6E7]" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                    <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Client</h3>
                    <p className="text-base text-gray-800">{specs.client}</p>
                </div>
                <div>
                    <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Architect</h3>
                    <p className="text-base text-gray-800">{specs.architect}</p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
