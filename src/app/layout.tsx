import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://huohuoovo.com"),
  title: {
    default: "HuoHuoOvO",
    template: "%s | HuoHuoOvO",
  },
  description: "一些低温燃烧的东西。",
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

