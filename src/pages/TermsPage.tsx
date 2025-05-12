
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

const TermsPage: React.FC = () => {
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
            <BreadcrumbPage>Terms of Service</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-lg mb-4">
            Last updated: May 12, 2025
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">
            By accessing or using SoulSync AI, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Service</h2>
          <p className="mb-4">
            SoulSync AI provides a platform for creating and interacting with AI companions. You are responsible for your use of the service and any content you provide.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
          <p className="mb-4">
            When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the security of your account.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Subscription and Payments</h2>
          <p className="mb-4">
            Some features of SoulSync AI require a paid subscription. By subscribing to a premium plan, you agree to pay the subscription fees as described at the time of purchase.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Content and Conduct</h2>
          <p className="mb-4">
            You agree not to use the service to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Violate any laws or regulations</li>
            <li>Infringe on the rights of others</li>
            <li>Harass, abuse, or harm others</li>
            <li>Upload or transmit malware or other malicious code</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Termination</h2>
          <p className="mb-4">
            We may terminate or suspend your account and access to the service without prior notice or liability, for any reason, including if you breach these Terms.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these terms at any time. We will provide notice of significant changes by posting the new Terms on this page and updating the "Last updated" date.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at <a href="mailto:terms@soulsync.ai" className="text-primary hover:underline">terms@soulsync.ai</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
