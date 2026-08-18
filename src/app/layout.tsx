import type { Metadata } from "next";
import "./globals.css";
import { ThemeScript } from "@/components/theme-script";

export const metadata: Metadata = {
  title: "India-Shine Business Support Services — Tech Products",
  description:
    "India-Shine Business Support Services builds and operates SaaS products for teams across the US, UK, Sri Lanka, Brazil and beyond, including WATU, a WhatsApp CRM built on Meta's official Cloud API.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
