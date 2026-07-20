import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Noto_Sans_SC, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk-next",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-mono-next",
});

const notoSansSc = Noto_Sans_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-sc-next",
});

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
    <html
      lang="zh-CN"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} ${notoSansSc.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          id="html-js-class"
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

