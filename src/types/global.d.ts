// src/types/global.d.ts

// This tells TypeScript that the global 'window' object can have a 'gtag' property,
// which is added by the Google Analytics script. This fixes the build error.
interface Window {
  gtag: (
    event: 'config' | 'event',
    action: string,
    params?: { [key: string]: any }
  ) => void;
}