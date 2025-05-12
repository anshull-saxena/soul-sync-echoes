
import React from 'react';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers } from "../data/team-data";

const AboutPage: React.FC = () => {
  return (
    <div className="container py-12">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>About</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About SoulSync AI</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-lg mb-4">
            SoulSync AI was founded in 2025 with a simple mission: to create AI companions that provide meaningful connections in our increasingly digital world.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
          <p className="mb-4">
            We believe that AI can enhance human relationships, not replace them. Our companions are designed to provide emotional support, entertainment, and companionship while respecting human dignity and privacy.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Technology</h2>
          <p className="mb-4">
            SoulSync AI uses cutting-edge natural language processing and machine learning algorithms to create companions with distinct personalities, interests, and conversational styles. Our AI models are continuously refined to provide more natural and meaningful interactions.
          </p>
          
          <h2 className="text-2xl font-semibold mt-12 mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {teamMembers.map(member => (
              <Card key={member.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center overflow-hidden">
                      <span className="text-2xl">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <h2 className="text-2xl font-semibold mt-12 mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does SoulSync AI work?</AccordionTrigger>
              <AccordionContent>
                SoulSync AI uses advanced language models and machine learning to create AI companions with unique personalities. You can customize your companion's traits, interests, and appearance, and our AI adapts to your conversation style over time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is my conversation data private?</AccordionTrigger>
              <AccordionContent>
                We take your privacy seriously. All conversations with your AI companion are encrypted and private. We do not share or sell your personal data. You can delete your conversation history at any time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What's included in the free version?</AccordionTrigger>
              <AccordionContent>
                The free version allows you to create and chat with one companion with basic features. Premium subscribers get access to more companions, advanced personality customization, voice conversations, and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I change my companion's personality?</AccordionTrigger>
              <AccordionContent>
                Yes! You can modify your companion's personality traits, interests, and appearance at any time through the customization settings. Your conversation history will be preserved.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How do I upgrade to Premium?</AccordionTrigger>
              <AccordionContent>
                You can upgrade to Premium by visiting the Premium page and selecting a subscription plan. We offer monthly and annual billing options with various features.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions or feedback, please don't hesitate to reach out to us at <a href="mailto:contact@soulsync.ai" className="text-primary hover:underline">contact@soulsync.ai</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
