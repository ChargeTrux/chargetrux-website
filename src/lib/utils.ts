
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function openCalendlySchedule() {
  window.open("https://calendly.com/specialists-chargetrux/30min", "_blank");
}
