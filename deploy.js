const ghpages = require('gh-pages');

ghpages.publish('dist', (err) => {
  if (err) console.error(err);
  process.exit(0);
});
