import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { LegalSection } from "@/components/LegalSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How AgentDesk collects, uses, stores and protects the personal data of agencies, agents, tenants and website visitors.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="27 June 2026">
      <p className="text-muted">
        AgentDesk (&quot;AgentDesk&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) provides a
        software platform that helps real estate agencies manage properties, enquiries, tenants,
        leases, finances and branded websites. This Privacy Policy explains what personal data we
        collect, how we use it, and the choices you have, whether you are an agency using AgentDesk,
        a member of an agency&apos;s team, or a visitor to an agency&apos;s public website built on
        AgentDesk.
      </p>

      <LegalSection title="1. Information we collect">
        <p>We collect information in the following ways:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">Account information</strong> — name, email address,
            phone number, agency name, and billing details provided when you create a workspace or
            subscribe to a plan.
          </li>
          <li>
            <strong className="text-foreground">Customer content</strong> — property listings,
            tenant and lease records, enquiries, financial entries, and other data agencies enter
            into the platform to run their business.
          </li>
          <li>
            <strong className="text-foreground">Enquiry data</strong> — name, contact details, and
            messages submitted by prospective tenants or buyers through an agency&apos;s public
            website or enquiry forms.
          </li>
          <li>
            <strong className="text-foreground">Usage data</strong> — log data, device and browser
            information, IP address, and how you interact with our website and product, collected
            automatically via cookies and similar technologies.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. How we use information">
        <ul className="list-disc space-y-2 pl-5">
          <li>To provide, operate, and maintain the AgentDesk platform and the websites it powers.</li>
          <li>To process payments, manage subscriptions, and send billing communications.</li>
          <li>To respond to support requests and communicate important service updates.</li>
          <li>To monitor, secure, and improve the performance and reliability of our product.</li>
          <li>To comply with legal obligations and enforce our Terms of Service.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Who can see your data">
        <p>
          Customer content (such as property listings, tenant records, and enquiries) belongs to
          the agency that created it. AgentDesk staff do not access this data except where necessary
          to provide support, investigate a reported issue, or maintain the security of the
          platform. We do not sell personal data to third parties.
        </p>
        <p>
          We share data with a limited number of service providers who help us operate the
          platform — for example, hosting, email delivery, analytics, and payment processing
          providers — bound by confidentiality and data protection obligations.
        </p>
      </LegalSection>

      <LegalSection title="4. Data retention">
        <p>
          We retain account and customer content for as long as a workspace remains active, and for
          a reasonable period afterwards to allow recovery of an account or to meet legal,
          accounting, or reporting requirements. Agencies may request deletion of their data by
          contacting us at the address below.
        </p>
      </LegalSection>

      <LegalSection title="5. Data security">
        <p>
          We use industry-standard technical and organisational measures — including encryption in
          transit, access controls, and regular backups — to protect data against unauthorised
          access, loss, or misuse. No system is completely secure, and we encourage agencies to use
          strong, unique passwords and to limit team access appropriately.
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies">
        <p>
          We use cookies and similar technologies to keep you signed in, remember preferences, and
          understand how our website and product are used. You can control cookies through your
          browser settings; disabling some cookies may affect how the platform functions.
        </p>
      </LegalSection>

      <LegalSection title="7. Your rights">
        <p>
          Depending on your location, you may have the right to access, correct, export, or request
          deletion of your personal data. If you are a tenant or prospect who submitted an enquiry
          through an agency&apos;s website, please contact that agency directly, as they control the
          data; we will assist agencies in fulfilling such requests where required.
        </p>
      </LegalSection>

      <LegalSection title="8. Children's privacy">
        <p>
          AgentDesk is intended for business use by real estate agencies and is not directed at
          children. We do not knowingly collect personal data from children.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. Material changes will be reflected by
          updating the &quot;Last updated&quot; date above, and where appropriate, we will notify
          account holders directly.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact us">
        <p>
          Questions about this Privacy Policy or how we handle your data can be sent to{" "}
          <a href="mailto:hello@agentdesk.co.zw" className="text-foreground underline underline-offset-2">
            hello@agentdesk.co.zw
          </a>
          . AgentDesk is based in Harare, Zimbabwe.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
