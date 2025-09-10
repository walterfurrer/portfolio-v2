import Background from "@/components/Background";
import Currently from "@/components/Currently";
import Header from "@/components/Header";
import ModeToggle from "@/components/ModeToggle";
import Projects from "@/components/Projects";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 px-4 font-sans md:px-0">
      <ModeToggle />
      <Header />
      <Currently />
      <Projects />
      <Background />
      <ContactSection />
    </div>
  );
}
