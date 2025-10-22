import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Open Mcq free to use?",
    answer: "Yes! You can try our demo quiz for free, and get early access when the full app launches.",
  },
  {
    question: "What makes Open Mcq different?",
    answer: "It’s not just another quiz app — it’s an AI-powered learning partner that tracks your progress, adapts to your level, and even helps guide your career path"

  },
  {
    question: "How can I upgrade my account to paid?",
    answer: "You can upgrade your account anytime from the settings page. Choose from our monthly or annual plans and unlock premium features instantly.",
  },
  {
    question: "Will I get previous year questions?",
    answer: "Yes! Open Mcq includes CBSE, NEET, and JEE previous-year questions with accurate solutions.",
  },
  {
    question: "Can I track my weak areas?",
    answer: "Absolutely! Our AI automatically highlights weaker topics and suggests focused quizzes to improve them",
  },
  {
    question: "Can I access it from mobile and web?",
    answer: "The web demo is live, and the mobile app is launching soon for both Android and iOS!.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A lot of people don't appreciate the moment until it's passed. I'm not trying my 
            hardest, and I'm not trying to do
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
