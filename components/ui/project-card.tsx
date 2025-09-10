import { ProjectCardProps } from "@/lib/projectCardProps";
import {
  GithubLogoIcon,
  GlobeSimpleIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  techLogos,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div id="project-title" className="project-card">
      <div className="card-content">
        <h3 className="project-title">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="project-tech-links">
        {techLogos.map((logo, idx) => (
          <Image key={logo.alt || idx} src={logo.src} alt={logo.alt} />
        ))}
      </div>
      <div className="project-links">
        {githubUrl && (
          <Link target="_blank" href={githubUrl}>
            <GithubLogoIcon size={24} />
          </Link>
        )}
        {liveUrl && (
          <Link target="_blank" href={liveUrl}>
            <GlobeSimpleIcon size={24} />
          </Link>
        )}
      </div>
    </div>
  );
}
