import * as THREE from 'three';

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
  tools: string[];
}

export interface PortfolioItem {
  slug: string;
  title: string;
  category: 'web' | 'mobile' | 'design';
  description: string;
  image: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  gallery: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Distortion {
  uniforms: Record<string, { value: unknown }>;
  getDistortion: string;
  getJS?: (progress: number, time: number) => THREE.Vector3;
}

export interface Colors {
  roadColor: number;
  islandColor: number;
  background: number;
  shoulderLines: number;
  brokenLines: number;
  leftCars: number[];
  rightCars: number[];
  sticks: number;
}

export interface HyperspeedOptions {
  onSpeedUp?: (ev: MouseEvent | TouchEvent) => void;
  onSlowDown?: (ev: MouseEvent | TouchEvent) => void;
  distortion?: string | Distortion;
  length: number;
  roadWidth: number;
  islandWidth: number;
  lanesPerRoad: number;
  fov: number;
  fovSpeedUp: number;
  speedUp: number;
  carLightsFade: number;
  totalSideLightSticks: number;
  lightPairsPerRoadWay: number;
  shoulderLinesWidthPercentage: number;
  brokenLinesWidthPercentage: number;
  brokenLinesLengthPercentage: number;
  lightStickWidth: [number, number];
  lightStickHeight: [number, number];
  movingAwaySpeed: [number, number];
  movingCloserSpeed: [number, number];
  carLightsLength: [number, number];
  carLightsRadius: [number, number];
  carWidthPercentage: [number, number];
  carShiftX: [number, number];
  carFloorSeparation: [number, number];
  colors: Colors;
}
