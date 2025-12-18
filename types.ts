
export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  process: string[];
  pricing?: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  service: string;
  quote: string;
  rating: number;
}

export enum AIServiceType {
  IMAGE_GEN = 'IMAGE_GEN',
  SEARCH = 'SEARCH',
  VIDEO_ANIMATE = 'VIDEO_ANIMATE',
  MAP_LOCATOR = 'MAP_LOCATOR'
}
