export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  accentColor: "blue" | "purple" | "gold";
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  suffix?: string;
  icon: string;
  accentColor: "blue" | "purple" | "gold";
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Client {
  id: string;
  name: string;
  logo?: string;
  industry: string;
  result?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}
