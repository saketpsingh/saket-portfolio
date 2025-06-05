export interface Projects {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image?: string;
  technologies?: string[];
  duration?: string;
  githubUrl?: string;
  liveUrl?: string;
}