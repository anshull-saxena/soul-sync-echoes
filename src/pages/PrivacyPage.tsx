
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPage: React.FC = () => {
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
            <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <div className="text-sm text-muted-foreground mb-6">
          Last updated: May 12, 2025
        </div>
        
        <Tabs defaultValue="overview" className="w-full mb-8">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="data">Your Data</TabsTrigger>
            <TabsTrigger value="ai">AI Usage</TabsTrigger>
            <TabsTrigger value="choices">Your Choices</TabsTrigger>
          </TabsList>
          
          <Card>
            <CardContent className="pt-6">
              <TabsContent value="overview" className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4">Policy Overview</h2>
                <p>
                  At SoulSync AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
                </p>
                
                <p className="mt-4">
                  We understand the importance of protecting your personal information and are committed to transparency about our data practices. Please read this policy carefully to understand how we handle your data.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Key Principles</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We only collect information necessary to provide and improve our services</li>
                  <li>Your conversations with companions are private and encrypted</li>
                  <li>We do not sell your personal data to third parties</li>
                  <li>You can request deletion of your data at any time</li>
                </ul>
              </TabsContent>
              
              <TabsContent value="data" className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Account Information</h3>
                    <p>
                      When you create an account, we collect your email address, name, and password. This information is used to identify you and provide access to your companions and conversations.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Companion Data</h3>
                    <p>
                      When you create a companion, we store their characteristics, personality traits, and preferences as defined by you during the creation process.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Conversation History</h3>
                    <p>
                      We store conversations between you and your companions to provide continuity and improve the companion's responses. These conversations are encrypted and private.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Usage Information</h3>
                    <p>
                      We collect data about how you use our service, including features you access, time spent, and interaction patterns. This helps us improve our service and identify potential issues.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="ai" className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4">AI & Data Processing</h2>
                
                <p>
                  SoulSync AI uses advanced machine learning and natural language processing to power your companions. Here's how we use and process your data with AI:
                </p>
                
                <div className="space-y-6 mt-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Conversational Learning</h3>
                    <p>
                      Our AI learns from your conversations to better understand your preferences and provide more personalized responses. This processing happens within our secure systems.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Model Training</h3>
                    <p>
                      With your consent, we may use anonymized conversation data to improve our AI models. All personal identifiers are removed before any data is used for training.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Data Retention</h3>
                    <p>
                      Your conversation data is stored only as long as necessary to provide our services and can be deleted at your request at any time.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="choices" className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4">Your Privacy Choices</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Access Your Data</h3>
                    <p>
                      You can request a copy of all personal data we have about you. Simply contact our support team to initiate this process.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Delete Your Data</h3>
                    <p>
                      You can delete your account and all associated data at any time through your account settings or by contacting us.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Opt Out of AI Training</h3>
                    <p>
                      You can opt out of having your anonymized data used for AI model improvement by updating your privacy preferences in your account settings.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                    <p>
                      For any privacy concerns or questions, please contact our Data Protection Officer at <a href="mailto:privacy@soulsync.ai" className="text-primary hover:underline">privacy@soulsync.ai</a>.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </CardContent>
          </Card>
        </Tabs>
        
        <div className="prose prose-lg dark:prose-invert">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@soulsync.ai" className="text-primary hover:underline">privacy@soulsync.ai</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
