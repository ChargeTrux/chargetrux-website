
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add a utility function to open Calendly
export function openCalendly() {
  if (window.Calendly) {
    window.Calendly.showPopupWidget('https://calendly.com/specialists-chargetrux/30min');
    return true;
  }
  return false;
}
