
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
        
        <div className="text-sm text-muted-foreground mb-6">
          Last updated: May 12, 2025
        </div>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-lg mb-4">
            Please read these Terms of Service carefully before using SoulSync AI. By accessing or using our service, you agree to be bound by these terms.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using SoulSync AI, you agree to these Terms of Service and our Privacy Policy. If you do not agree to these terms, you may not use our service.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Service</h2>
          <p className="mb-4">
            SoulSync AI provides AI companion services through our website and mobile applications. Our services include companion creation, text-based conversations, and premium features as described on our website.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
          <p className="mb-4">
            You may need to create an account to access certain features of our service. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>
          <p className="mb-4">
            You must provide accurate and complete information when creating an account and keep your account information updated. You must be at least 18 years old to use our service.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Subscription and Billing</h2>
          <p className="mb-4">
            Some features of SoulSync AI require a paid subscription. By subscribing to our premium service, you agree to pay all fees in accordance with the billing terms in effect at the time of your subscription.
          </p>
          <p className="mb-4">
            Subscription fees are billed in advance and are non-refundable. You may cancel your subscription at any time, but no refunds will be provided for any unused portion of your subscription period.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. User Conduct</h2>
          <p className="mb-4">
            You agree not to use our service to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Violate any laws or regulations</li>
            <li>Harass, abuse, or harm others</li>
            <li>Impersonate others or provide false information</li>
            <li>Interfere with the operation of our service</li>
            <li>Engage in any activity that could damage, disable, or impair our service</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Content and Intellectual Property</h2>
          <p className="mb-4">
            SoulSync AI and its licensors own all intellectual property rights in the service and its content. You may not copy, modify, distribute, sell, or lease any part of our service or its content without our explicit permission.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
          <p className="mb-4">
            To the maximum extent permitted by law, SoulSync AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these Terms of Service at any time. We will notify users of significant changes by posting a notice on our website or sending an email.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Termination</h2>
          <p className="mb-4">
            We may terminate or suspend your account and access to our service at any time, without prior notice or liability, for any reason, including if you violate these Terms of Service.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law</h2>
          <p className="mb-4">
            These Terms of Service shall be governed by the laws of the State of California, without regard to its conflict of law provisions.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please contact us at <a href="mailto:legal@soulsync.ai" className="text-primary hover:underline">legal@soulsync.ai</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
