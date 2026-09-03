import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-ivan-andrade-ux-ui-produc.vercel.app"),
  title: "Ivan Andrade — Product Designer",
  description:
    "Portfolio de Ivan Andrade. Product Designer especializado en SaaS B2B, Fintech y Design Systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Ivan Andrade — Product Designer",
    description:
      "Product Designer especializado en SaaS B2B, Fintech, Analytics Dashboards y Design Systems.",
    locale: "es_AR",
    siteName: "Ivan Andrade — Product Designer",
  },
  twitter: {
    card: "summary",
    title: "Ivan Andrade — Product Designer",
    description:
      "Product Designer especializado en SaaS B2B, Fintech, Analytics Dashboards y Design Systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
