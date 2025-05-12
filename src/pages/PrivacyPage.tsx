
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
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-lg mb-4">
            Last updated: May 12, 2025
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            At SoulSync AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
          <p className="mb-4">
            We collect information that you provide directly to us when you:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Create an account</li>
            <li>Create a companion</li>
            <li>Communicate with your companion</li>
            <li>Provide feedback or contact us</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide, maintain, and improve our services</li>
            <li>Personalize your experience</li>
            <li>Communicate with you about our services</li>
            <li>Monitor and analyze trends and usage</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@soulsync.ai" className="text-primary hover:underline">privacy@soulsync.ai</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
