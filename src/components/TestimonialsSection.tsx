import { Card } from "@/components/ui/card";
import { Trophy, Target, Users, BarChart3, Gamepad2, Link } from "lucide-react";

const features = [
  {
    icon: <Gamepad2 className="w-8 h-8 text-yellow-500" />,
    title: "Learn. Play. Win!",
    description: "Keep your motivation high with:",
    details: [
      "Streaks to reward consistency",
      "Credits to unlock challenges", 
      "Rankings to compete with friends",
      "Fun gamification that keeps learning exciting!"
    ]
  },
  {
    icon: <Link className="w-8 h-8 text-blue-500" />,
    title: "Parent Linking",
    description: "Parents can connect to track performance, quiz results, and progress — so they stay in the loop while you stay in control.",
    details: []
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-green-500" />,
    title: "Subject-Wise Analysis",
    description: "Get detailed performance reports for every subject and chapter. Know exactly where you shine and where to focus next.",
    details: []
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            App Features
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Discover the powerful features that make Open MCQ the perfect learning companion 
            for students preparing for competitive exams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-0 hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-full bg-gray-100 flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-xl mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  {feature.details.length > 0 && (
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
