import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Target, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollableMockup from "./ScrollableMockup";

const AboutUsSection = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "AI That Adapts",
      description: "Every quiz gets smarter as you do better improve your skill 10x."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Game-Style Learning",
      description: "Streaks, ranks & rewards that make study sessions addictive."
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Career Clarity",
      description: "Because learning should lead somewhere meaningful."
    }
  ];

  return (
    <section className="py-10 md:py-20 bg-white text-foreground overflow-hidden">
      <div className="container mx-auto px-6 md:px-16">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-10  mb-16">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-6xl font-bold md:mt-3  mb-3">
              About Open Mcq
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mt-8 mb-6">
              “Where practice meets progress.”
            </p>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              <p>Studying doesn’t have to be stressful — or boring. At Open Mcq, we’re turning exam prep into a challenge you’ll actually enjoy.</p>
              <p>From CBSE 10th & 12th to NEET and JEE, our AI-powered app helps you learn smarter, track your growth, and even discover your ideal career path.</p>
              <p>Every quiz adapts to your level, ensuring questions get tougher as you improve — so you’re always challenged, never overwhelmed.</p>
              <p>With instant AI explanations, smart progress tracking, and personalized topic suggestions, Open Mcq is your ultimate study companion.</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* <Button size="lg" className="px-6 py-5 text-base">
                Try our 3-Question Demo Quiz – feel how fast learning can be.
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="px-6 py-5 text-base">
                Join the Waitlist – be first to download the app when it drops!
              </Button> */}
            </div>
          </motion.div>

          {/* Right mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="order-2 md:order-2 mx-auto"
          >
            <ScrollableMockup imageUrl="/dashboard.png" alt="Open MCQ app" />
          </motion.div>
        </div>

        {/* Why Students Choose Open MCQ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Students <span className="text-pink-600">Likes</span> Open Mcq
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Clear, motivating reasons students stick with Open Mcq.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              >
                <Card className="p-6 bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300">
                  <div className="text-left">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { number: "50K+", label: "Students" },
            { number: "95%", label: "Success Rate" },
            { number: "10+", label: "Subjects" },
            { number: "24/7", label: "AI Support" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center"
        >
          <Card className="p-10 bg-white border border-gray-200">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Our Mission
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                To revolutionize education by making learning engaging, personalized, and accessible.
                We believe every student deserves a platform that adapts to their unique learning style
                and helps them discover their true potential.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
