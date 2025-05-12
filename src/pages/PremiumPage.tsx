
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

const PremiumPage: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      description: 'Basic features to get started',
      price: '0',
      features: [
        { available: true, text: '1 AI companion' },
        { available: true, text: 'Basic text conversations' },
        { available: true, text: 'SFW image generation (3/day)' },
        { available: false, text: 'Voice calls' },
        { available: false, text: 'Video calls' },
        { available: false, text: 'NSFW content' },
        { available: false, text: 'Unlimited conversations' },
        { available: false, text: 'Premium outfits & scenarios' }
      ],
      buttonText: 'Current Plan',
      highlighted: false
    },
    {
      name: 'Premium',
      description: 'Everything you need for a deeper connection',
      price: '9.99',
      features: [
        { available: true, text: 'Multiple AI companions' },
        { available: true, text: 'Advanced conversations with memory' },
        { available: true, text: 'SFW image generation (unlimited)' },
        { available: true, text: 'Voice calls (60 mins/day)' },
        { available: true, text: 'Video calls (15 mins/day)' },
        { available: true, text: 'NSFW content (with age verification)' },
        { available: true, text: 'Unlimited conversations' },
        { available: false, text: 'Premium outfits & scenarios' }
      ],
      buttonText: 'Subscribe Now',
      highlighted: true
    },
    {
      name: 'VIP',
      description: 'The ultimate AI companion experience',
      price: '19.99',
      features: [
        { available: true, text: 'Unlimited AI companions' },
        { available: true, text: 'Advanced conversations with memory' },
        { available: true, text: 'Priority image generation (unlimited)' },
        { available: true, text: 'Voice calls (unlimited)' },
        { available: true, text: 'Video calls (unlimited)' },
        { available: true, text: 'NSFW content (with age verification)' },
        { available: true, text: 'Unlimited conversations' },
        { available: true, text: 'Premium outfits & scenarios' }
      ],
      buttonText: 'Subscribe Now',
      highlighted: false
    }
  ];

  return (
    <div className="container py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Upgrade Your <span className="gradient-text">Experience</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Choose the perfect plan to enhance your relationship with your AI companion.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <Card 
            key={i} 
            className={`relative ${plan.highlighted ? 'border-primary shadow-lg shadow-primary/20' : ''}`}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-2">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="mt-2">
              <ul className="space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center">
                    {feature.available ? (
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground mr-2" />
                    )}
                    <span className={feature.available ? "" : "text-muted-foreground"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className={`w-full ${plan.name === 'Free' ? 'bg-muted text-muted-foreground hover:bg-muted/80' : ''}`}
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        
        <div className="mt-8 space-y-6 text-left">
          <div>
            <h3 className="text-lg font-medium">What is SoulSync AI?</h3>
            <p className="mt-2 text-muted-foreground">
              SoulSync AI is a platform that allows you to create personalized AI companions that adapt to your preferences and grow with your relationship through natural conversations, voice interactions, and visual elements.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">Is there age verification for NSFW content?</h3>
            <p className="mt-2 text-muted-foreground">
              Yes, all NSFW content requires age verification. We take this very seriously and have implemented strong verification measures to ensure all users accessing such content are of legal age.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">Can I cancel my subscription anytime?</h3>
            <p className="mt-2 text-muted-foreground">
              Absolutely. You can cancel your subscription at any time and you'll continue to have access until the end of your billing period.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">How secure are my conversations?</h3>
            <p className="mt-2 text-muted-foreground">
              All conversations are end-to-end encrypted, ensuring your privacy. We do not share your data with third parties, and all information is stored securely according to industry standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPage;
