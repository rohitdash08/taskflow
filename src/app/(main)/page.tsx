"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import FeatureCard from "../components/FeatureCard";
import { ArrowRight, CheckCircle, Users, Zap } from "lucide-react";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white">
      <Header />

      <main className="container mx-auto px-6 py-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-gray-800 mb-6"
        >
          Visualize Your Workflow, Boost Your Productivity
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 mb-8"
        >
          TaskFlow helps teams collaborate seamlessly and achieve more with
          intuitive task management.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/signup"
            className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center"
          >
            Get Started <ArrowRight className="ml-2" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <FeatureCard
            icon={<CheckCircle className="w-12 h-12 text-indigo-600" />}
            title="Intuitive Task Management"
            description="Easily create, assign, and track tasks with our user-friendly interface."
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-indigo-600" />}
            title="Team Collaboration"
            description="Work together seamlessly with real-time updates and comments."
          />
          <FeatureCard
            icon={<Zap className="w-12 h-12 text-indigo-600" />}
            title="Workflow Automation"
            description="Automate repetitive tasks and focus on what matters most."
          />
        </motion.div>
      </main>
    </div>
  );
}
