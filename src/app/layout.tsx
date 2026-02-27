import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

const siteUrl = "https://punchforpurpose.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Punch For Purpose | Charity Boxing Event UK",
  description:
    "Step into the ring for a purpose-driven charity boxing event in the UK. 8 weeks free training, live fight night, and fundraising impact.",
  keywords: [
    "Charity boxing event UK",
    "Ultra white collar boxing alternative",
    "Boxing fundraiser event",
    "White collar boxing near me",
    "Train for a boxing fight",
  ],
  openGraph: {
    title: "Punch For Purpose",
    description: "Fight for a cause with 8 weeks of free boxing training and a live UK fight night experience.",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Punch For Purpose",
    description: "Charity boxing event UK. Train hard. Raise funds. Fight night awaits.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="min-h-screen font-[var(--font-inter)] antialiased">
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-script" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
