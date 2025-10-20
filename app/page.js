import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsHero from "@/components/ProjectsHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import CollabSection from "@/components/CollabSection";

export default function HomePage() {
  return (
    <>
    <main>  
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsHero />
        <ProjectsGrid />
        <CollabSection />
    </main>
    </>
  );
}