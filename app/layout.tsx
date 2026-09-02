import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahesh Mokalkar | PWD Engineer & Past District Governor RID 3030",
  description: "Official portal of Mahesh Mokalkar — Assistant Engineer Gr-II (PWD Maharashtra), Past District Governor (Rotary District 3030), author of GENIUS handbook, and social worker based in Wardha, Maharashtra.",
  icons: {
    icon: [
      { url: "/logo-01.svg", type: "image/svg+xml" }
    ],
    apple: "/logo-01.svg",
  },
  keywords: [
    "Mahesh Mokalkar",
    "PWD Engineer Maharashtra",
    "District Governor RID 3030",
    "Rotary Wardha",
    "Sapne Sach Hue",
    "105 Heart Surgeries Rotary",
    "GENIUS Handbook Civil Engineering"
  ],
  authors: [{ name: "Mahesh Mokalkar" }],
  openGraph: {
    title: "Mahesh Mokalkar — Official Website",
    description: "Assistant Engineer Gr-II (PWD Maharashtra) & Past District Governor (Rotary District 3030)",
    url: "https://maheshmokalkar.in",
    siteName: "Mahesh Mokalkar",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex flex-col min-h-screen antialiased bg-surface-alt text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
