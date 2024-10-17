export const metadata = {
  title: "Home – Lucia Protocol",
  description: "Web2 & Web3 Ad Attribution Platform",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import FAQs from "@/components/FAQs";
import CaseStudies from "@/components/case-studies";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesPlanet />
      <CaseStudies />
      {/* <UseCases /> */}
      <FAQs />
      <Cta />
    </>
  );
}
