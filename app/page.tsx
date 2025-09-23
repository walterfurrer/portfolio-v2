import Background from "@/components/Background";
import Currently from "@/components/Currently";
import Header from "@/components/Header";
import ModeToggle from "@/components/ModeToggle";
import Projects from "@/components/Projects";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 px-4 font-sans transition-all duration-150 ease-in-out md:gap-24 md:px-0 lg:gap-32">
      <ModeToggle />
      <Header />
      <Currently />
      <Projects />
      <Background />
      <ContactSection />
    </div>
  );
}
