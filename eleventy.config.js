export default function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./assets/"); // Watch /assets for changes
  eleventyConfig.addPassthroughCopy("assets/images"); // Ensure images are copied to _site
};