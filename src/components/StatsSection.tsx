import React from "react";
import ScrollableMockup from "./ScrollableMockup";
import { Bot, MessageCircle, Target, Brain } from "lucide-react";

const stats = [
  {
    icon: <Bot className="w-10 h-10 text-white" />,
    title: "🤖 Adaptive Learning",
    description:
      "Our AI studies your progress and tailors each quiz to your level — smarter practice, faster improvement.",
    bg: "bg-blue-600 hover:bg-blue-700",
  },
  {
    icon: <MessageCircle className="w-10 h-10 text-white" />,
    title: "💬 AI Doubt Solver",
    description: "Got stuck? Ask your AI assistant to explain concepts instantly.",
    bg: "bg-green-600 hover:bg-green-700",
  },
  {
    icon: <Target className="w-10 h-10 text-white" />,
    title: "🎯 AI Recommendations",
    description:
      "Get personalized tips on weaker topics, best chapters to focus on, and how to improve your overall rank.",
    bg: "bg-yellow-500 hover:bg-yellow-600",
  },
  {
    icon: <Brain className="w-10 h-10 text-white" />,
    title: "⚡ Smart Progress",
    description: "Track your learning curve and stay motivated with visual progress updates.",
    bg: "bg-red-500 hover:bg-red-600",
  },
];

const StatsSection: React.FC = () => {
  return (
    <section id="Ailearns" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {/* ---------- LEFT (MOBILE MOCKUP) ---------- */}
          <div className="order-2 lg:order-1 flex items-center ml-6 md:ml-0 justify-center relative">
            <div className="relative">
              <ScrollableMockup
                imageUrl="/slider.png"
                alt="App Statistics"
                className="relative z-10 w-[260px] sm:w-[300px] md:w-[340px]"
              />
            </div>
          </div>

          {/* ---------- RIGHT (TEXT CONTENT) ---------- */}
          <div className="order-1 lg:order-2 space-y-8 text-center lg:text-left">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                AI That Learns You
              </h2>
              <p className="text-muted-foreground text-lg">
                Access your learning materials on the go and experience smarter, AI-powered growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`${stat.bg} rounded-2xl p-6 flex flex-col items-start space-y-4 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 text-white`}
                >
                  <div className="p-3 rounded-full bg-white/20">{stat.icon}</div>
                  <h3 className="text-xl font-semibold">{stat.title}</h3>
                  <p className="leading-relaxed opacity-90">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
