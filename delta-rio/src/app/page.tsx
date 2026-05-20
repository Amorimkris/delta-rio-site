import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DifferentialsSection from "@/components/sections/DifferentialsSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import PhoneFloat from "@/components/ui/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Delta Rio Produtos Agrícolas | Rio Verde — GO",
  description:
    "Insumos agrícolas premium, defensivos, fertilizantes, sementes e consultoria agronômica em Rio Verde, GO. Mais de 13 anos transformando o campo.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DifferentialsSection />
        <GallerySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <PhoneFloat />
    </>
  );
}
