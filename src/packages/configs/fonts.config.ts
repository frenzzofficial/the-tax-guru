import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const fonts = {
  sans: inter,
  heading: jakarta,
  mono: jetbrainsMono,
} as const;

export const fontVariables = [
  fonts.sans.variable,
  fonts.heading.variable,
  fonts.mono.variable,
].join(" ");
