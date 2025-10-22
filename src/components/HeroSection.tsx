"use client";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Apple, Play, Heart, Share2, MessageCircle, MoreHorizontal, Zap, Clock, Square } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection: FC = () => {
  return (
    <section className="relative bg-[#111111] text-white overflow-hidden min-h-screen">
      {/* ---------- MAIN CONTAINER ---------- */}
      <div className="container mx-auto px-16 py-36 mt-[-60px] md:py-32 md:mt-[-60px] grid md:grid-cols-2 gap-12 items-center min-h-screen">

        {/* ---------- LEFT CONTENT ---------- */}
        <div className="text-center md:text-left space-y-6 ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            OPEN MCQ - Your Smart MCQ Quiz Buddy
          </h1>

          <p className="text-gray-300 text-lg max-w-md mx-auto p-2  md:mx-0">
            Ace your exams with confidence!
            From CBSE 10th & 12th to NEET and JEE, Open Mcq makes learning fun, fast, and focused
            — powered by smart AI that knows exactly how you learn best.
          </p>

          <p className="text-white font-bold text-sm">Get the app</p>

          {/* ---------- APP BUTTONS ---------- */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              variant="default"
              size="lg"
              className="bg-white text-black hover:bg-gray-800 flex items-center font-bold gap-2  rounded-lg"
            >
              <img src="/logo-apple.png" className="w-5 h-5" />
              APP STORE
            </Button>

            <Button
              variant="default"
              size="lg"
              className="bg-white text-black hover:bg-gray-800 flex items-center gap-2  font-bold rounded-lg"
            >
              <img src="/logo-google.png" className="w-5 h-5" />
              GOOGLE PLAY
            </Button>
          </div>
        </div>

        {/* ---------- RIGHT CONTENT (PHONES) ---------- */}
        <div className="relative flex justify-center py-16 mt-[-80px] md:mt-[-55px] md:justify-end">
          {/* Left Phone - Profile Screen (iPhone 17 Pro Max) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative  md:flex w-[260px] h-[520px] md:w-[300px] md:h-[580px] rounded-[3rem] iphone-frame border-[8px] border-gray-900 shadow-2xl overflow-hidden z-10"
          >
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-8 dynamic-island rounded-full z-20"></div>

            <div className="h-full bg-white overflow-y-scroll mobile-scrollbar mobile-scroll pt-6">
              {/* Dashboard Image */}
              <img
                src="/dashboard.png"
                alt="App dashboard preview"
                className="w-full h-auto block"
              />
            </div>
          </motion.div>

          {/* Back Phone - secondary screen for overlap */}
          

        </div>
      </div>

      {/* ---------- WHITE CARD BELOW ---------- */}
      <div className="absolute bottom-0 left-0 right-0 bg-white text-black  md:py-45 px-6 md:px-12 rounded-t-3xl shadow-lg">
        <div className="max-w-6xl mx-auto md:mt-10 mt-3 space-y-2">
          <h2 className="text-2xl font-semibold">Why Open Mcq ?</h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            Your all-in-one Mcq Quiz App designed for students who want more than just practice
            questions.
            We’ve combined AI, gamification, and smart analytics to make your prep journey exciting
            and result-driven.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
