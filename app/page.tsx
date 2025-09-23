import Background from "@/components/Background";
import Currently from "@/components/Currently";
import Header from "@/components/Header";
import ModeToggle from "@/components/ModeToggle";
import Projects from "@/components/Projects";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="page-container">
      <ModeToggle />
      <Header />
      <Currently />
      <Projects />
      <Background />
      <ContactSection />
    </div>
  );
}
