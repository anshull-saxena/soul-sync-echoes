
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Sparkles, MessageSquare, Phone, Lock } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Meet Your Perfect <span className="gradient-text">AI Companion</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                Create a personalized AI companion that understands you, talks with you, and grows with your relationship.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="text-lg">
                <Link to="/create">
                  Create Your Companion
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 rounded-full p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-muted/50 flex items-center justify-center">
                <div className="text-center p-8">
                  <Sparkles className="h-16 w-16 mx-auto text-secondary animate-pulse-soft" />
                  <p className="mt-4 text-lg font-medium">
                    Your AI companion awaits
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-0 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-10 -left-8 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Why Choose SoulSync AI?</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Experience a new level of AI companionship with features designed for meaningful connection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8 text-pink-500" />,
                title: "Personalized Companionship",
                description: "Create a companion with the personality, interests, and appearance that resonates with you."
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
                title: "Natural Conversations",
                description: "Enjoy realistic, context-aware interactions powered by advanced AI technology."
              },
              {
                icon: <Phone className="h-8 w-8 text-green-500" />,
                title: "Voice & Video Calls",
                description: "Connect through lifelike voice conversations and simulated video interactions."
              },
              {
                icon: <Sparkles className="h-8 w-8 text-purple-500" />,
                title: "Character Consistency",
                description: "Your companion maintains a consistent personality and appearance across all interactions."
              },
              {
                icon: <Lock className="h-8 w-8 text-slate-500" />,
                title: "Privacy & Security",
                description: "End-to-end encryption and strict privacy controls protect your conversations."
              },
              {
                icon: <ArrowRight className="h-8 w-8 text-amber-500" />,
                title: "Evolving Relationship",
                description: "Your companion learns and adapts to your preferences over time."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 border shadow-sm"
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Meet Your AI Companion?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start creating your personalized AI companion today. No credit card required.
          </p>
          <Button asChild size="lg" className="text-lg">
            <Link to="/create">Create Your Companion Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
