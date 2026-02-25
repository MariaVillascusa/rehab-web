import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = "rehab-web";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
        images: {
          unoptimized: true,
        },
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
