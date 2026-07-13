import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yushizehuohuo-gif.github.io/huohuoweb/"),
  title: {
    default: "HuoHuoOvO",
    template: "%s | HuoHuoOvO",
  },
  applicationName: "HuoHuoOvO",
  creator: "YUSHIZE",
  category: "portfolio",
  keywords: [
    "HuoHuoOvO",
    "YUSHIZE",
    "game community",
    "AI workflow",
    "visual system",
    "field notes",
  ],
  description: "一些低温燃烧的东西。",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f3f3ef",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

