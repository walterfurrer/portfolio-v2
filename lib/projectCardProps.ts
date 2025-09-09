export interface ProjectCardProps {
  title: string;
  description: string;
  techLogos: { src: string; alt: string }[];
  githubUrl?: string;
  liveUrl?: string;
}
