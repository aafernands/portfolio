'use client'; // This directive tells Next.js that this file should be treated as a client-side component

import { ThemeProvider } from 'next-themes'; // Importing the ThemeProvider from next-themes package to manage theme context
import { ReactNode } from 'react'; // Importing ReactNode to type the children prop

// Providers component definition
export function Providers({ children }: { children: ReactNode }) {
  return (
    // Wrapping the children components with ThemeProvider to manage dark/light theme globally
    <ThemeProvider attribute="class">
      {children} {/* Rendering the children components passed to Providers */}
    </ThemeProvider>
  );
}
