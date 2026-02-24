import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="  mt-5 mx-20 w-full px-20 ">
      <h1 className=" text-2xl animate-slidein [--slidein-delay:300ms] opacity-0">
        FAQs
      </h1>
      <br />

      <Accordion
        type="single"
        collapsible
        className="ml-2 animate-slidein [--slidein-delay:500ms] opacity-0"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Is it free?</AccordionTrigger>
          <AccordionContent>Yes.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Can I get all words?</AccordionTrigger>
          <AccordionContent>
            No, only new words are listed here.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>What is the goal of this website?</AccordionTrigger>
          <AccordionContent>...</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
