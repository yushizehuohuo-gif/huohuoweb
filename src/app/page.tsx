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
  noteFragments,
  personalIndex,
  toolFootnotes,
  workTraces,
} from "@/lib/homepage-content";

export default function Home() {
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
        <NotesFragments notes={noteFragments} />
        <ArchiveFooter />
      </main>
      <SiteFooter />
    </>
  );
}
