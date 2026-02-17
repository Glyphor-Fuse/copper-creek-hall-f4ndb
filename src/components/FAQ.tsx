import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto max-w-3xl">
        <h2 className="font-display text-4xl md:text-5xl text-primary mb-12 text-center">
          Common Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-medium font-display text-primary hover:text-accent text-left">
              Do I need a reservation to get in?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-lg leading-relaxed font-body">
              General admission is first-come, first-served. However, for guaranteed seating and table service, we highly recommend booking a VIP booth, especially on Friday and Saturday nights.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-medium font-display text-primary hover:text-accent text-left">
              Is there a cover charge?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-lg leading-relaxed font-body">
              We charge a modest cover starting at 8 PM on weekends to support our live artists. There is no cover for VIP booth holders.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-medium font-display text-primary hover:text-accent text-left">
              What is the dress code?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-lg leading-relaxed font-body">
              "Honky Tonk Smart." We welcome boots and denim, but please keep it tidy. No athletic wear, gym shorts, or flip-flops after 6 PM.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-medium font-display text-primary hover:text-accent text-left">
              Are you 21+ only?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-lg leading-relaxed font-body">
              Copper Creek Hall is 21+ after 7 PM. Families are welcome for lunch and early dinner service.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-16 bg-muted p-8 rounded-xl text-center space-y-4">
          <h3 className="text-2xl font-bold text-primary">Still have questions?</h3>
          <p className="text-muted-foreground">Give us a holler or drop us a line.</p>
          <Button size="lg" className="mt-4">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
