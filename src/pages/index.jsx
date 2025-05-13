import React, { useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { motion } from "framer-motion";

export default function Home() {
  const demoRef = useRef();
  const [demoRequested, setDemoRequested] = useState(false);

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDemoRequest = () => {
    setDemoRequested(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-5xl font-bold mb-4">GroupFlow</h1>
        <p className="text-xl mb-8">
          Manage your Roblox group operations effortlessly with activity tracking, staff quotas, and session automation.
        </p>
        <Button onClick={scrollToDemo} className="text-lg px-6 py-3 rounded-2xl shadow-lg">
          Get Started
        </Button>
      </motion.div>

      <section className="grid gap-8 mt-20 max-w-5xl mx-auto">
        <FeatureCard title="Activity Tracking" description="Track staff playtime, session logs, and real-time activity stats." />
        <FeatureCard title="Assignments" description="Set quotas like minutes or sessions and monitor staff progress." />
        <FeatureCard title="Session Management" description="Create and manage training or shift sessions with attendance records." />
      </section>

      <section ref={demoRef} className="mt-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Request a Demo</h2>
        {demoRequested ? (
          <p className="text-green-400">Thank you! We will contact you soon.</p>
        ) : (
          <>
            <p className="mb-4">Enter your email to receive a personalized demo link.</p>
            <div className="flex justify-center gap-2">
              <Input placeholder="you@example.com" className="w-64" />
              <Button onClick={handleDemoRequest}>Request Demo</Button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

function FeatureCard({ title, description }) {
  return (
    <Card className="bg-gray-800 border-none shadow-md rounded-2xl">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
