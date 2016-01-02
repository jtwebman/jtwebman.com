'use strict';

let Metalsmith = require('metalsmith');
let draft = require('metalsmith-drafts');
let layouts = require('metalsmith-layouts');
let markdown = require('metalsmith-markdown');
let collections = require('metalsmith-collections');
let feed = require('metalsmith-feed');
let serve = require('metalsmith-serve');
let watch = require('metalsmith-watch');
let permalinks = require('metalsmith-permalinks');
let more = require('metalsmith-more');
let excerpts = require('metalsmith-excerpts');
let metallic = require('metalsmith-metallic');
let concat = require('metalsmith-concat');
let sass = require('metalsmith-sass');

let metalsmith = new Metalsmith(__dirname)
.metadata({
  site: {
    title: 'JTWebMan',
    url: 'https://jtwebman.com/',
    author: 'JT Turner'
  }
})
.use(draft())
.use(sass({
  outputStyle: 'expanded'
}))
.use(more())
.use(markdown())
.use(metallic())
.use(excerpts())
.use(layouts({
   engine: 'handlebars',
   partials: 'partials'
}))
.use(collections({
  posts: {
    pattern: 'posts/*',
    sortBy: 'date',
    reverse: true
  }
}))
.use(permalinks({
  pattern: ':title',

  linksets: [{
      match: { collection: 'posts' },
      pattern: 'posts/:title'
  }]
}))
.use(feed({
  collection: 'posts',
  limit: 20,
  destination: 'posts/rss.xml',
  postDescription: (f) => f.excerpt
}))
.use(watch({
  paths: {
    '${source}/**/*': true,
    'src/styles/**/*': '**/*.md',
    'layouts/**/*': '**/*.md',
    'partials/**/*': '**/*.md'
  },
  livereload: true,
}))
.use(serve({
    port: 8081,
    verbose: true
  }))
.build(function(err){
  if (err) throw err;
  console.log('site built!');
});
