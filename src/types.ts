export type CategoryType =
  | 'All'
  | 'AI Video'
  | 'AI Images'
  | 'Advertising'
  | 'Cinematic'
  | 'Product Visuals'
  | 'Storytelling';

export interface Project {
  id: string;
  title: string;
  category: CategoryType;
  subCategory: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  videoUrl?: string;
  client?: string;
  year: string;
  aspectRatio: '16:9' | '4:3' | '3:4' | '1:1' | '9:16';
  tools: string[];
  promptConcept: string;
  duration?: string;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  aspectRatio: '16:9' | '4:3' | '3:4' | '1:1' | '9:16';
  image: string;
  category: string;
  promptConcept: string;
  lensInfo: string;
  colorGrade: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  timeline: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  projectHighlight: string;
}
