"use client";

import { ServiceRow } from "@/components/service-row";
import {
  Accordion
} from "@/components/ui/accordion";

const services = [
  {
    value: "item-1",
    title: "Commercial & Industrial Buildings",
    description:
      "Our Commercial & Industrial Buildings Division specializes in delivering high-performance spaces that support business operations and drive efficiency. From office buildings and retail outlets to warehouses, factories, and showrooms, we offer complete turnkey solutions that include design coordination, structural works, MEP installations, and interior finishing.We work closely with consultants and business owners to ensure that every facility is functional, compliant with UAE regulations, and optimized for productivity. Whether you need a single warehouse or a full-scale industrial facility, we provide robust, durable, and cost-efficient solutions that meet your business goals.",
  },
  {
    value: "item-2",
    title: "Renovation & Fit-Out Works",
    description:
      "Interior finishing and upgrades",
  },
  {
    value: "item-3",
    title: "Project Management",
    description:
        "End-to-end coordination for smooth execution.",
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
