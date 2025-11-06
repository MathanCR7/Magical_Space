import type { Metadata } from 'next';
import { HeroSection } from "./components/landing/HeroSection";
import { WhyUsSection } from "./components/landing/WhyUsSection";
import { HowWeWorkSection } from "./components/landing/HowWeWorkSection";
import { ProductsSection } from "./components/landing/ProductsSection";
import { StatsSection } from "./components/landing/StatsSection";
import { PortfolioSection } from "./components/landing/PortfolioSection";
import { TestimonialsSection } from "./components/landing/TestimonialsSection";
import { QuoteFormSection } from "./components/landing/QuoteFormSection";
import { FAQSection } from './components/landing/FAQSection'; // SEO UPDATE: Import new FAQ component

// SEO UPDATE: Homepage specific metadata to override the layout default.
export const metadata: Metadata = {
  title: "Best Interior Designers in Bangalore | Home & Office | Magical Space",
  description: "Discover top interior design ideas for modern homes in Bangalore. Magical Space offers affordable turnkey solutions for living rooms, modular kitchens, and bedrooms. Get your free design quote now!",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyUsSection />
      <HowWeWorkSection />
      <ProductsSection />
      <StatsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <QuoteFormSection />
      <FAQSection /> {/* SEO UPDATE: Add new FAQ component to the page */}
    </>
  );
}