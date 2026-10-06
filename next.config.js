const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

module.exports = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isGitHubActions ? { basePath: "/miniproject_CC" } : {}),
};