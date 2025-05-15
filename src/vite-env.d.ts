
/// <reference types="vite/client" />

// Add Calendly widget type definitions
interface Window {
  Calendly?: {
    initInlineWidget: (options: {
      url: string;
      parentElement: HTMLElement;
      prefill?: Record<string, string>;
      utm?: Record<string, string>;
    }) => void;
    showPopupWidget: (url: string) => void;
    closePopupWidget: () => void;
    initBadgeWidget: (options: {
      url: string;
      text: string;
      color: string;
      textColor: string;
    }) => void;
  };
}
