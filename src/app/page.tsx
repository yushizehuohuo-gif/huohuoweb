import GrainOverlay from "@/components/grain-overlay";
import SiteFooter from "@/components/site-footer";
import SiteNav from "@/components/site-nav";

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <SiteNav />
      <main className="relative z-10 overflow-x-clip">
        <section
          aria-labelledby="home-title"
          className="relative min-h-[100svh] px-6 pb-10 pt-24 md:px-10 lg:px-16"
        >
          <div className="absolute left-6 top-[18svh] max-w-[calc(100vw-3rem)] md:left-[7vw] md:top-[24svh] md:max-w-[980px] xl:left-[9vw] xl:top-[22svh]">
            <h1
              id="home-title"
              className="animate-text-reveal font-display text-3xl font-bold leading-[1.02] text-ink sm:text-4xl md:text-[4.5rem] md:leading-none xl:text-[6rem] xl:leading-[0.95]"
            >
              HuoHuoOvO
            </h1>
            <p className="animate-text-reveal animate-delay-1 mt-5 font-cjk text-3xl font-bold leading-[1.25] text-ink md:mt-7 md:text-4xl">
              火火
            </p>
            <p className="animate-text-reveal animate-delay-2 mt-5 max-w-[20rem] font-cjk text-base leading-[1.85] text-muted md:mt-6 md:max-w-none md:text-xl md:leading-[1.75]">
              这里是一些低温燃烧的东西。
            </p>
          </div>
          <div className="absolute bottom-[8svh] left-6 font-display text-sm leading-none text-muted md:left-[7vw] xl:left-[9vw]">
            — 私人档案馆
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
