export interface Project {
  id: number;
  brand: string;
  title: string;
  agency: string;
  team: string[];
  date: string;
  description: string;
  images: string[];
  logo: string;
  videoUrl: string;
}

export type ViewState = 'home' | 'about' | 'works' | 'project-detail';