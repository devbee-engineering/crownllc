import { Logo } from "@/components/logo";
import { HamburgerIcon } from "@/components/hamburger-icon";
import { ServiceList } from "@/components/service-list";

export function ExpertiseSection() {
  return (
    <section
      aria-labelledby="expertise-heading"
      className="bg-[#F6F7F7] text-black py-12 md:py-16 lg:py-24"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 relative">
             <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full hidden lg:block pl-4">
                
            </div>
            <div className="flex flex-col h-full">
              <div className="flex-shrink-0">
                {/* <Logo className="border-gray-800 text-gray-800" /> */}
                <p className="mt-8 text-sm uppercase tracking-widest text-gray-500">
                  What we do
                </p>
                <h2
                  id="expertise-heading"
                  className="mt-4 text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#0B0B0B]"
                  style={{ lineHeight: 0.95 }}
                >
                  Expertise
                </h2>
              </div>
              <div className="mt-8">
                 <p className="text-base text-gray-600 max-w-[420px]">
                    DCC as a family have been expert in the construction industry for over 60 years - it&apos;s in our DNA. We&apos;ve expanded beyond construction to design, interiors and furnishings - from concept to completion.
                 </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 mt-12 lg:mt-0">
            <ServiceList />
          </div>
        </div>
      </div>
    </section>
  );
}
