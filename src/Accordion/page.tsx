import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Define types for the props
interface AccordionItemProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

interface AccordionComponentProps {
  items: AccordionItemProps[];
}

// Define the AccordionComponent using the defined types
const AccordionComponent: React.FC<AccordionComponentProps> = ({ items }) => {
  return (
    <div className="text-black">
      <Accordion type="multiple" >
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger><h1 className='text-2xl font-bold' >{item.title}</h1></AccordionTrigger>
            <AccordionContent><h1 className='text-base  font-normal' >{item.content}</h1></AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
