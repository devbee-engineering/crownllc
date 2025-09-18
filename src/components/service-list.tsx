"use client";

import { ServiceRow } from "@/components/service-row";
import {
  Accordion
} from "@/components/ui/accordion";

const services = [
  {
    value: "item-1",
    title: "Full Design & Build",
    description:
      "Our comprehensive Design & Build service offers a seamless, integrated approach to your project. From initial concept and architectural design to final construction and finishing touches, we handle every aspect to ensure your vision is realized to the highest standards.",
  },
  {
    value: "item-2",
    title: "General Contracting & Construction Management",
    description:
      "With decades of experience, we provide top-tier general contracting and construction management. We oversee all phases of the construction process, ensuring projects are delivered on time, within budget, and with uncompromising quality and safety.",
  },
  {
    value: "item-3",
    title: "Interior Design & Furnishing",
    description:
        "Our team of talented interior designers creates spaces that are not only beautiful but also functional. We manage everything from space planning and material selection to procuring and installing custom furnishings, delivering a turnkey solution for your interiors.",
  },
];

export function ServiceList() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {services.map((service) => (
        <ServiceRow
          key={service.value}
          value={service.value}
          title={service.title}
          description={service.description}
        />
      ))}
    </Accordion>
  );
}
