import type { Metadata } from "next";
import ArchiveFooter from "@/components/home/archive-footer";
import CoverHero from "@/components/home/cover-hero";
import MotionObserver from "@/components/home/motion-observer";
import NotesFragments from "@/components/home/notes-fragments";
import PersonalIndex from "@/components/home/personal-index";
import VisualField from "@/components/home/visual-field";
import WorkTrace from "@/components/home/work-trace";
import GrainOverlay from "@/components/grain-overlay";
import SiteFooter from "@/components/site-footer";
import SiteNav from "@/components/site-nav";
import {
  coverCopy,
  personalIndex,
  toolFootnotes,
  workTraces,
} from "@/lib/homepage-content";
import { getAllNotes } from "@/lib/notes";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://yushizehuohuo-gif.github.io/huohuoweb/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://yushizehuohuo-gif.github.io/huohuoweb/",
    siteName: "HuoHuoOvO",
    title: "HuoHuoOvO",
    description:
      "A personal index of player signals, agent tools, visual fragments and field notes.",
  },
};

export default async function Home() {
  const notes = await getAllNotes();

  return (
    <>
      <MotionObserver />
      <GrainOverlay />
      <SiteNav />
      <main
        id="main-content"
        tabIndex={-1}
        className="relative z-10 overflow-x-clip bg-paper"
      >
        <CoverHero copy={coverCopy} index={personalIndex} />
        <PersonalIndex entries={personalIndex} tools={toolFootnotes} />
        <WorkTrace items={workTraces} />
        <VisualField />
        <NotesFragments notes={notes} />
        <ArchiveFooter />
      </main>
      <SiteFooter />
    </>
  );
}
