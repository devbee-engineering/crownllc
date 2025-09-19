import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
  
type ServiceAccordionProps = {
    items: {
        title: string;
        body: string;
    }[];
};
  
export function ServiceAccordion({ items }: ServiceAccordionProps) {
    return (
      <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
        {items.map((item, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index} className="border-b border-[#E4E6E7]">
            <AccordionTrigger className="text-xl md:text-2xl font-medium text-left py-8 group hover:no-underline">
                <span className="flex-1">{item.title}</span>
                <Plus className="size-6 transition-transform duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:opacity-0" />
                <Minus className="size-6 absolute right-4 transition-transform duration-300 opacity-0 group-data-[state=open]:opacity-100" />
            </AccordionTrigger>
            <AccordionContent className="pb-8">
              <p className="text-base text-gray-600 max-w-prose">{item.body}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
}
  
