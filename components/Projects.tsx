import BullshitCornerProjectCard from "./project-cards/BullshitCornerProjectCard";
import HavenHealthProjectCard from "./project-cards/HavenHealthProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-header">projects</h2>
      <BullshitCornerProjectCard />
      <HavenHealthProjectCard />
    </section>
  );
}
