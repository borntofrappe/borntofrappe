module.exports = (eleventyConfig) => {
  eleventyConfig.addCollection('blog', function(collection) {
    return collection.getFilteredByGlob('./src/blog/*.md').sort(function(a, b) {
      return b.data.datetime - a.data.datetime;
    });
  });

  eleventyConfig.addFilter("formatdate", function(datetime) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const year = datetime.getFullYear();
    const month = datetime.getMonth();
    const day = datetime.getDate();

    return `${months[month]} ${day}, ${year}`;
  });


  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};