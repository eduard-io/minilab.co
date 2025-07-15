export default function(eleventyConfig) {
  // Format dates in English (e.g., "January 1, 2024")
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (typeof dateObj === "string") {
      dateObj = new Date(dateObj);
    }
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long", 
      day: "numeric"
    });
  });
  eleventyConfig.addWatchTarget("./assets/"); // Watch /assets for changes
  eleventyConfig.addPassthroughCopy("assets/images"); // Ensure images are copied to _site
  eleventyConfig.addPassthroughCopy("assets/js"); // Ensure images are copied to _site

  // Create a collection for eduard/notes
  eleventyConfig.addCollection("notes", function (collection) {
    return collection.getFilteredByGlob("eduard/notes/*.md").reverse();
  });


  // Custom excerpt filter (first 200 characters, no HTML)
  eleventyConfig.addFilter("excerpt", (content, length = 200) => {
    if (!content) return "";
    let cleanContent = content.replace(/(<([^>]+)>)/gi, ""); // Strip HTML
    return cleanContent.length > length
      ? cleanContent.substring(0, length).trim() + "…"
      : cleanContent;
  });

  /*return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  }*/
};