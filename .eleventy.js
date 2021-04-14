module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");

  // You can return your Config object (optional).
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
