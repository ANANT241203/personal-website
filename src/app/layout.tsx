import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anant Aggarwal - AI Engineer & Data Scientist",
  description: "AI Engineer at GPT Integrators | MS Data Science @ UPenn | Published Researcher with 7+ papers | Building practical machine learning systems that solve real-world problems",
  keywords: [
    "AI Engineer",
    "Data Scientist",
    "Machine Learning",
    "UPenn",
    "University of Pennsylvania",
    "Anant Aggarwal",
    "Medical AI",
    "Deep Learning",
    "TensorFlow",
    "PyTorch",
    "React",
    "Full Stack AI",
    "Research",
    "Published Papers"
  ],
  authors: [{ name: "Anant Aggarwal" }],
  creator: "Anant Aggarwal",
  publisher: "Anant Aggarwal",
  metadataBase: new URL('https://anant.upenn.domains'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anant.upenn.domains',
    title: 'Anant Aggarwal - AI Engineer & Data Scientist',
    description: 'AI Engineer at GPT Integrators | MS Data Science @ UPenn | Published Researcher with 7+ papers | Building practical machine learning systems that solve real-world problems',
    siteName: 'Anant Aggarwal Portfolio',
    images: [
      {
        url: '/assets/images/main_photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Anant Aggarwal - AI Engineer & Data Scientist',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anant Aggarwal - AI Engineer & Data Scientist',
    description: 'AI Engineer at GPT Integrators | MS Data Science @ UPenn | Published Researcher with 7+ papers',
    images: ['/assets/images/main_photo.jpg'],
    creator: '@anant241203',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code if you have one
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0f0f23" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Anant Aggarwal" />
        <link rel="apple-touch-icon" href="/assets/images/main_photo.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
