export default function Handoff() {
  return (
    <section
      id="handoff"
      aria-labelledby="handoff-title"
      className="bg-surface-ops px-6 py-20 text-ink-on-dark md:px-10 md:py-24 lg:px-16"
    >
      <div className="grid gap-10 border-t border-rule-dark pt-10 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal-cyan">
            handoff
          </p>
          <h2
            id="handoff-title"
            className="mt-4 font-display text-4xl font-bold leading-tight"
          >
            Open fields.
          </h2>
        </div>
        <div>
          <p className="max-w-3xl font-cjk text-lg leading-[1.9] text-[#d8ccba]">
            Open to conversations around game communities, AI-assisted
            workflows, visual systems, tool-building, and the parts of digital
            work that still need human judgment.
          </p>
          <p className="mt-6 font-cjk text-base leading-8 text-[#a99c8b]">
            这里不是简历的结尾。它只是把可以继续发生的方向留出来。
          </p>
        </div>
      </div>
    </section>
  );
}

