import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: "Multiple Creators - Music Video Director Portfolio",
  description:
    "The official portfolio for Multiple Creators, showcasing a curated collection of works and AI-enhanced video descriptions.",
  keywords: [
    "music video",
    "director",
    "portfolio",
    "cinematography",
    "creative",
    "film",
    "visual storytelling",
    "bloopers",
    "behind the scenes",
    "art",
    "production",
    "music",
    "video gallery",
    "multiple creators",
  ],
  openGraph: {
    title: "Multiple Creators - Music Video Director Portfolio",
    description:
      "Discover the creative world of Multiple Creators. Explore our music video gallery, behind-the-scenes, and more.",
    url: "https://multiplecreators.com",
    siteName: "Multiple Creators",
    images: [
      {
        url: "/ghost.jpg",
        width: 1200,
        height: 630,
        alt: "Multiple Creators Portfolio Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multiple Creators - Music Video Director Portfolio",
    description:
      "Discover the creative world of Multiple Creators. Explore our music video gallery, behind-the-scenes, and more.",
    images: ["/ghost.jpg"],
    creator: "@multicreators",
  },
  metadataBase: new URL("https://multiplecreators.com"),
  alternates: {
    canonical: "https://multiplecreators.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
