import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MessageCircle, Users, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import ScrollableMockup from "./ScrollableMockup";

const ContactUsSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: "General Inquiries",
      description: "Have feedback, questions, or just want to say hi?",
      contact: "Email us at support@openmcq.com"
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "Partnerships & Collaborations",
      description: "Want to collaborate, feature us, or work together?",
      contact: "Reach out at partners@openmcq.com"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-purple-500" />,
      title: "Student Help",
      description: "Need help with a quiz or sign-in issue?",
      contact: "Our friendly support team's just a message away! (Chat assistant launching soon.)"
    },
    {
      icon: <MapPin className="w-6 h-6 text-orange-500" />,
      title: "Our Base",
      description: "Open Mcq Labs",
      contact: "Kochi, Kerala, India"
    }
  ];

  const quickActions = [
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: "Try Demo Quiz — Experience Open Mcq in action."
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: "Read FAQs — Instant answers to common questions."
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: "Join Waitlist — Get early access when the app drops."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-5 md:py-10 bg-white text-foreground overflow-hidden">
      <div className="container mx-auto px-6 md:px-16">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              "Got a Question? Let's Talk!"
            </p>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              <p>
                Hey there 👋 — whether you're a student exploring Open Mcq, a parent curious about our app, 
                or someone who just loves great quiz ideas — we'd love to hear from you!
              </p>
              <p>
                Our team's always ready to chat, guide, or just geek out about learning.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* <Button size="lg" className="px-6 py-3 text-base">
                Try Demo Quiz
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="px-6 py-3 text-base">
                Send Us a Message
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

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ⚡ Reach the Right Team
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="p-6 bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 h-full">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                    <p className="text-sm font-medium text-blue-600">{method.contact}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              📝 Quick Contact Form
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              "Drop your message below — we'll get back faster than you can finish a quiz!"
            </p>
          </div>

          <Card className="max-w-2xl mx-auto p-8 bg-white border border-gray-200">
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Thanks! Your message has reached Team Open Mcq.</h3>
                <p className="text-muted-foreground">
                  We'll reply soon — usually quicker than your next streak 🔥
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email / Phone</label>
                    <Input placeholder="your@email.com or +91 12345 67890" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Topic</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="tech-support">Tech Support</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your Message</label>
                  <Textarea 
                    placeholder="Tell us what's on your mind..." 
                    className="min-h-[120px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 w-4 h-4" />
                  Send Message
                </Button>
              </form>
            )}
          </Card>
        </motion.div>

        {/* Before You Contact Us */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Before You Contact Us
            </h2>
            <p className="text-muted-foreground">
              You might find what you need right away
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
              >
                {action.icon}
                <span className="text-sm md:text-base">{action.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                🚀 Let's Keep Learning Together
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                At Open Mcq, every message counts — because every great feature starts with a student's idea.
                Got something to say?
              </p>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                Fill out the form above or email us directly — we're listening!
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span>Follow Us: Instagram | LinkedIn | Twitter | YouTube</span>
              </div>
              <div className="mt-6 text-sm text-muted-foreground italic">
                "Every question you ask is one step closer to mastery"
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUsSection;
