"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <NextThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        {children}
      </NextThemeProvider>
    </SessionProvider>
  );
} 