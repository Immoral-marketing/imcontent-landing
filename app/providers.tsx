"use client";

import { ThemeProvider } from "next-themes";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <DndProvider backend={HTML5Backend}>
          {children}
          <Toaster position="top-right" richColors />
        </DndProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
