
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
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
          <p className="mb-4">
            Our diverse team includes AI researchers, psychologists, ethicists, and designers who work together to create companions that are engaging, helpful, and ethically designed.
          </p>
          
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
