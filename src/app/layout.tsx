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
    "游戏社区",
    "内容运营",
    "玩家反馈",
    "game community",
    "AI workflow",
    "visual system",
    "field notes",
  ],
  description:
    "YUSHIZE（火火）的个人网站：游戏社区与内容工作、AI 工作流、视觉实验与个人写作。",
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

