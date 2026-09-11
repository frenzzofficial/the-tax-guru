import "@/styles/globals.css";
import type { Metadata } from "next";
import AppClientLayout from "@/components/layouts/AppClientLayout";
import { fontVariables } from "@/packages/configs/fonts.config";

export const metadata: Metadata = {
  title: "The Tax Guru",
  description: "Tax and compliance services for businesses and professionals.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <AppClientLayout>{children}</AppClientLayout>
      </body>
    </html>
  );
}
