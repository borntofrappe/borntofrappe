module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("crazycase", function (text) {
    return text
      .split("")
      .map((letter) => (Math.random() > 0.5 ? letter.toUpperCase() : letter.toLowerCase()))
      .join("");
  });
};