import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface CostumeItem {
  label: string;
  tag: string;
  icon: LucideIcon;
  gradient: string;
  iconColor: string;
}

export enum ThemeColor {
  ORANGE = 'text-groovy-orange',
  MUSTARD = 'text-groovy-mustard',
  PURPLE = 'text-groovy-purple',
  RED = 'text-groovy-red',
}
