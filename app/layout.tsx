import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

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
      className="h-full antialiased dark"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
