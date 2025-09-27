import { CheckCircle } from "lucide-react";
import { SectionEyebrow } from "@/components/section-eyebrow";

const whyChooseUsItems = [
  {
    title: "Licensed & Experienced",
    description: "Fully compliant with UAE regulations"
  },
  {
    title: "Skilled Team",
    description: "Engineers, foremen, and workforce with years of experience"
  },
  {
    title: "On-Time Delivery",
    description: "Projects completed as per schedule"
  },
  {
    title: "Competitive Pricing",
    description: "Value-engineered solutions without compromising quality"
  },
  {
    title: "Trusted Partnerships",
    description: "Strong relationships with suppliers and subcontractors"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-[#F5F6F6]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <SectionEyebrow>WHY CHOOSE US</SectionEyebrow>
        </div>
        
        <div className="mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-blue-600" style={{ lineHeight: 0.95 }}>
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-[#0B0B0B]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}