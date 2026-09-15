import "@/styles/globals.css";
import type { Metadata } from "next";
import AppClientLayout from "@/components/layouts/AppClientLayout";
import { fontVariables } from "@/packages/configs/fonts.config";
import seo from "@/packages/seo/seo.index";

export const metadata: Metadata = seo;

interface LayoutProps<_T> {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fontVariables} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <AppClientLayout>{children}</AppClientLayout>
      </body>
    </html>
  );
}
