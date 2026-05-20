import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

export const metadata: Metadata = {
  title: {
    default: "Delta Rio Produtos Agrícolas | Rio Verde — GO",
    template: "%s | Delta Rio Agro",
  },
  description:
    "Delta Rio Produtos Agrícolas LTDA — Defensivos, fertilizantes, sementes, corretivos e consultoria agronômica em Rio Verde, GO. Mais de 13 anos servindo o produtor rural com qualidade e expertise.",
  keywords: [
    "delta rio agro", "produtos agrícolas Rio Verde GO", "defensivos agrícolas",
    "fertilizantes Goiás", "sementes soja milho", "consultoria agronômica",
    "insumos agrícolas cerrado", "agronegócio Rio Verde",
  ],
  authors: [{ name: "Delta Rio Produtos Agrícolas LTDA" }],
  creator: "Delta Rio Agro",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://deltario.com.br",
    siteName: "Delta Rio Produtos Agrícolas",
    title: "Delta Rio Produtos Agrícolas | Rio Verde — GO",
    description:
      "Insumos agrícolas, consultoria agronômica e suporte técnico para o produtor rural do sudoeste goiano.",
    images: [{ url: "/hero.png", width: 1200, height: 630, alt: "Delta Rio Produtos Agrícolas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delta Rio Produtos Agrícolas",
    description: "Insumos agrícolas premium para o produtor rural de Rio Verde — GO.",
    images: ["/hero.png"],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://deltario.com.br"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060a07",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="font-body antialiased">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
