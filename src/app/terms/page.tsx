import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { LegalSection } from "@/components/LegalSection";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions that govern your use of the AgentDesk platform and websites built on it.",
  alternates: { canonical: "/terms" },
};

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service" updated="27 June 2026">
      <p className="text-muted">
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of AgentDesk&apos;s
        software platform, including any websites, dashboards, and related services (collectively,
        the &quot;Service&quot;). By creating a workspace or otherwise using the Service, you agree
        to these Terms on behalf of yourself and the agency you represent.
      </p>

      <LegalSection title="1. Using the Service">
        <p>
          You must be authorised to act on behalf of your agency to create a workspace. You are
          responsible for the accuracy of the information you enter, for keeping your login
          credentials secure, and for all activity that occurs under your account.
        </p>
      </LegalSection>

      <LegalSection title="2. Subscriptions and billing">
        <ul className="list-disc space-y-2 pl-5">
          <li>Paid plans are billed in advance on a recurring basis until cancelled.</li>
          <li>Fees are non-refundable except where required by law or stated otherwise at signup.</li>
          <li>
            We may change pricing or plan features with reasonable advance notice; continued use of
            the Service after a change takes effect constitutes acceptance of the new terms.
          </li>
          <li>Failure to pay outstanding fees may result in suspension or termination of access.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Your content">
        <p>
          You retain ownership of all property listings, tenant records, financial data, and other
          content you upload to the Service (&quot;Customer Content&quot;). You grant AgentDesk a
          limited licence to host, process, and display Customer Content solely to provide and
          improve the Service. You are responsible for ensuring you have the right to submit any
          Customer Content, including data about tenants and prospects.
        </p>
      </LegalSection>

      <LegalSection title="4. Acceptable use">
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Use the Service for any unlawful purpose or to violate another party&apos;s rights.</li>
          <li>Attempt to disrupt, reverse engineer, or gain unauthorised access to the Service.</li>
          <li>Upload content that is fraudulent, defamatory, or infringes third-party rights.</li>
          <li>Resell or sublicense the Service without our prior written consent.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Public websites and listings">
        <p>
          Where AgentDesk is used to publish a public-facing website or property listings, you are
          solely responsible for the accuracy, legality, and appropriateness of that published
          content, including compliance with applicable advertising and consumer protection laws.
        </p>
      </LegalSection>

      <LegalSection title="6. Intellectual property">
        <p>
          The Service, including its software, design, and branding, is owned by AgentDesk and
          protected by intellectual property laws. These Terms do not grant you any rights to
          AgentDesk&apos;s trademarks or proprietary technology beyond what is necessary to use the
          Service as intended.
        </p>
      </LegalSection>

      <LegalSection title="7. Termination">
        <p>
          You may cancel your subscription at any time. We may suspend or terminate access to the
          Service if these Terms are breached, if fees remain unpaid, or if required to protect the
          security or integrity of the Service. Upon termination, we will provide a reasonable
          opportunity to export Customer Content before it is deleted.
        </p>
      </LegalSection>

      <LegalSection title="8. Disclaimers and limitation of liability">
        <p>
          The Service is provided &quot;as is&quot; without warranties of any kind, express or
          implied. To the maximum extent permitted by law, AgentDesk will not be liable for any
          indirect, incidental, or consequential damages arising from your use of the Service, and
          our total liability for any claim will not exceed the fees paid by you in the three months
          preceding the claim.
        </p>
      </LegalSection>

      <LegalSection title="9. Governing law">
        <p>
          These Terms are governed by the laws of Zimbabwe, without regard to conflict-of-law
          principles. Any disputes arising from these Terms or the Service will be subject to the
          exclusive jurisdiction of the courts of Zimbabwe.
        </p>
      </LegalSection>

      <LegalSection title="10. Changes to these Terms">
        <p>
          We may update these Terms from time to time. We will update the &quot;Last updated&quot;
          date above and, for material changes, notify account holders directly. Continued use of
          the Service after changes take effect constitutes acceptance of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection title="11. Contact us">
        <p>
          Questions about these Terms can be sent to{" "}
          <a href="mailto:hello@agentdesk.co.zw" className="text-foreground underline underline-offset-2">
            hello@agentdesk.co.zw
          </a>
          . AgentDesk is based in Harare, Zimbabwe.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
