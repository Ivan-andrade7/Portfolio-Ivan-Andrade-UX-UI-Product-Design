import type { Metadata } from "next";
import "./globals.css";
import "./controls.css";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-ivan-andrade-ux-ui-produc.vercel.app"),
  title: "Iván Andrade — Product Designer UX/UI · IA aplicada",
  description:
    "Portfolio de Iván Andrade: Product Designer UX/UI con IA aplicada al diseño, al prototipado y a la automatización.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Iván Andrade — UX/UI Designer · Product Design",
    description:
      "Casos de UX/UI y Product Design en productos digitales, con IA aplicada al proceso de diseño.",
    locale: "es_AR",
    siteName: "Iván Andrade — UX/UI Designer · Product Design",
  },
  twitter: {
    card: "summary",
    title: "Iván Andrade — UX/UI Designer · Product Design",
    description:
      "Casos de UX/UI y Product Design en productos digitales, con IA aplicada al proceso de diseño.",
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
