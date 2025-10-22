import { GraduationCap, Lightbulb, Trophy, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { 
  Shuffle, 
  XCircle, 
  FileText, 
  Bookmark, 
  Clock, 
  Settings, 
  History, 
  Brain 
} from "lucide-react";

const features = [
  {
    icon: Shuffle,
    title: "Random Questions",
    description: "Test yourself with a fresh mix of questions every time — no two quizzes are ever the same!",
  },
  {
    icon: XCircle,
    title: "Missed Questions",
    description: "Go back and conquer the questions you got wrong before. Learn, reattempt, and never miss them again!",
  },
  {
    icon: FileText,
    title: "Mock Exam Quiz",
    description: "Simulate real exam conditions with mock tests for your selected subject — feel the real-time pressure, minus the panic.",
  },
  {
    icon: Bookmark,
    title: "Collected Questions Quiz",
    description: "Revisit your flagged questions anytime for deeper revision and stronger recall.",
  },
  {
    icon: Clock,
    title: "Timed Quiz",
    description: "Challenge yourself under pressure! Set custom time limits and decide how many mistakes are allowed — perfect for serious prep.",
  },
  {
    icon: Settings,
    title: "Customized Quiz",
    description: "Create your own quiz with topics, chapters, or difficulty levels of your choice — total control, your way.",
  },
  {
    icon: History,
    title: "Previous Year Questions",
    description: "Access actual exam questions from past years and test your readiness for what’s coming next.",
  },
  {
    icon: Brain,
    title: "Psychometric Test (AI-Powered)",
    description: "Discover your strengths, interests, and ideal career path — guided by our AI-powered psychometric analysis.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            YOUR LEARNING APP
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Powerful Quiz Modes
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Explore Powerful Quiz Modes that make learning interactive and fun. Challenge yourself with Open MCQ, where each question offers multiple choices and real-time feedback to boost your understanding. Experience adaptive quizzes that adjust to your skill level, ensuring every session helps you learn smarter and faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 bg-card hover:shadow-lg transition-shadow animate-fade-in border-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-foreground flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
