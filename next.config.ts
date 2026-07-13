import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({
  options: {
    // Turbopack requires remark plugin names to be serializable strings.
    remarkPlugins: ["remark-frontmatter"],
  },
});

const isGithubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = "/huohuoweb";

const nextConfig: NextConfig = {
  basePath: isGithubPages ? githubPagesBasePath : undefined,
  assetPrefix: isGithubPages ? `${githubPagesBasePath}/` : undefined,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default withMDX(nextConfig);
