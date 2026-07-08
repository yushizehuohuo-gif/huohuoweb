export default function ResidueSection() {
  return (
    <section
      id="emotion"
      aria-labelledby="emotion-title"
      className="bg-surface-archive px-6 py-24 text-ink md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-memory-olive">
          emotion / residue
        </p>
        <h2
          id="emotion-title"
          className="mt-6 font-cjk text-4xl font-semibold leading-[1.35] md:text-5xl md:leading-[1.3]"
        >
          不是所有留下来的东西都有用。
          <br />
          有些东西留下来，只是因为它曾经重要过。
        </h2>
        <p className="mt-8 max-w-2xl font-display text-lg leading-8 text-deep">
          Not everything I keep is useful. Some things stay because they once
          meant something.
        </p>
      </div>
    </section>
  );
}

