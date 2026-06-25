import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";

const components = {
  h1: ({ children }: ComponentPropsWithoutRef<"h1">) => (
    <h1 className="font-display text-4xl font-bold text-ink">{children}</h1>
  ),
  h2: ({ children }: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="font-display text-2xl font-semibold text-ink mt-8 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="font-display text-xl font-medium text-ink mt-6 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }: ComponentPropsWithoutRef<"p">) => (
    <p className="font-cjk text-base leading-[1.85] text-ink my-4">
      {children}
    </p>
  ),
  a: ({ href, children }: ComponentPropsWithoutRef<"a">) => (
    <a
      href={href}
      className="text-accent underline underline-offset-2 hover:text-ink transition-colors"
    >
      {children}
    </a>
  ),
  img: ({ src, alt }: ComponentPropsWithoutRef<"img">) => (
    <img
      src={src}
      alt={alt || ""}
      loading="lazy"
      className="max-w-full h-auto my-6"
    />
  ),
  pre: ({ children }: ComponentPropsWithoutRef<"pre">) => (
    <pre className="bg-neutral-rule/30 p-4 overflow-x-auto text-sm my-4 font-mono">
      {children}
    </pre>
  ),
  code: ({ children }: ComponentPropsWithoutRef<"code">) => (
    <code className="font-mono text-sm bg-neutral-rule/30 px-1 py-0.5">
      {children}
    </code>
  ),
  blockquote: ({ children }: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className="border-l-2 border-accent pl-4 italic text-muted my-6">
      {children}
    </blockquote>
  ),
  ul: ({ children }: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc pl-6 my-4 space-y-2 font-cjk text-ink">
      {children}
    </ul>
  ),
  ol: ({ children }: ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal pl-6 my-4 space-y-2 font-cjk text-ink">
      {children}
    </ol>
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
