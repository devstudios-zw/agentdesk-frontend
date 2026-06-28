import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://agentdesk.co.zw";
const TITLE = "AgentDesk — Run and grow your real estate agency from one platform";
const DESCRIPTION =
  "AgentDesk is the all-in-one workspace for real estate agencies to manage properties, tenants, leases, finances and their website.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: TITLE,
    template: "%s · AgentDesk",
  },
  description: DESCRIPTION,
  keywords: [
    "real estate agency software",
    "property management software",
    "tenant and lease management",
    "real estate agency website builder",
    "Zimbabwe real estate software",
    "AgentDesk",
  ],
  authors: [{ name: "AgentDesk" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "AgentDesk",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/agent_desk_agency.png", width: 1536, height: 1024, alt: "AgentDesk" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/agent_desk_agency.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AgentDesk",
  url: BASE_URL,
  logo: `${BASE_URL}/icon.svg`,
  email: "hello@agentdesk.co.zw",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Harare",
    addressCountry: "ZW",
  },
  sameAs: [],
};

const SOFTWARE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AgentDesk",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: DESCRIPTION,
  url: BASE_URL,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "19",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_JSON_LD) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
