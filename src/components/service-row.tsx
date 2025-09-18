import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  type ServiceRowProps = {
    value: string;
    title: string;
    description: string;
  };
  
  export function ServiceRow({ value, title, description }: ServiceRowProps) {
    return (
      <AccordionItem value={value} className="border-b-0">
         <div className="border-t border-[#DFE1E3] group">
            <AccordionTrigger className="py-14 md:py-16 text-2xl md:text-3xl font-medium text-left hover:no-underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-8 focus-visible:ring-offset-[#F6F7F7] rounded-sm text-[#0B0B0B] data-[state=open]:text-gray-500 transition-colors">
             {title}
            </AccordionTrigger>
         </div>
        <AccordionContent className="pb-16">
          <p className="text-base text-gray-600 max-w-2xl">{description}</p>
        </AccordionContent>
      </AccordionItem>
    );
  }
  