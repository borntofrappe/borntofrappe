module.exports = url => url.includes('/') ?
  url
    .split('/')
    .slice(1)
    .map((value, index, items) => ({
      value,
      href: `/${items.slice(0, index + 1).join('/')}`,
    })) : null;
