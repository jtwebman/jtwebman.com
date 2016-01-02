---
title: test post 2
layout: posts.hbt
data: 2016-01-01 17:45:00Z-0800
---
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo, leo nec elementum congue, mauris turpis rutrum odio, nec sollicitudin arcu ex sed sem. Fusce non risus non sapien placerat finibus a sed nisl. Curabitur vehicula ultrices turpis, eu pharetra dui elementum a. Vivamus interdum tristique lorem in pulvinar. Proin imperdiet mi egestas neque dictum, facilisis convallis ligula lacinia. Etiam maximus gravida volutpat. Duis feugiat felis vitae facilisis vulputate. Curabitur pretium mauris sed nibh facilisis pellentesque. Cras accumsan volutpat dignissim.


```js
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

let metalsmith = new Metalsmith(__dirname)
.metadata({
  site: {
    title: 'JTWebMan',
    url: 'https://jtwebman.com/',
    author: 'JT Turner'
  }
})
.use(draft())
.use(more())
.use(excerpts());
```

Vivamus elementum malesuada metus ut fermentum. Etiam non gravida libero. Aenean a nisi ultrices, rhoncus ex eu, sagittis dolor. Pellentesque ullamcorper hendrerit leo a efficitur. Quisque et quam vulputate, ultrices dolor eu, pulvinar erat. Aenean a lacinia diam, quis interdum ligula. Suspendisse sit amet odio fringilla, molestie lectus in, tristique dolor. Morbi sollicitudin pulvinar neque, sed aliquet lorem. Curabitur non sem fringilla ante consectetur rutrum. Quisque efficitur leo at diam ultricies, sed faucibus nisl viverra. Vestibulum consequat quam vel orci venenatis consequat. Praesent nulla velit, bibendum vel dolor sed, rutrum consequat tellus.

Donec euismod arcu nisl, sit amet pellentesque justo ultrices ac. Curabitur augue risus, sodales fringilla dapibus gravida, lacinia eget augue. Nulla ut sem vitae sem molestie sagittis et a lectus. Quisque et lorem eget quam iaculis cursus sit amet dignissim augue. Mauris elit libero, faucibus et tincidunt at, vestibulum eu nunc. Sed consequat sapien vitae ultricies ornare. Suspendisse sem est, luctus vitae placerat eget, sollicitudin id diam. Etiam consequat nec metus at commodo. Duis bibendum mattis nibh, et vulputate mauris blandit auctor. Quisque ac sodales risus. Phasellus id elit sed urna imperdiet volutpat. In facilisis ac turpis at egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eget porta mi. Pellentesque urna nunc, accumsan sit amet consequat eget, finibus non tortor. Aliquam at nisi et nulla sagittis hendrerit.

Aenean in dignissim ligula. Proin ullamcorper dolor nec turpis eleifend hendrerit. Nulla dictum suscipit diam et tristique. Sed nunc lectus, ornare sit amet volutpat ac, finibus quis dolor. Quisque vulputate est quis magna scelerisque consequat. Cras vehicula est quis fermentum rutrum. Morbi at ultrices purus.

Mauris posuere non augue nec rhoncus. Duis et convallis magna. Fusce in pretium est. Nunc urna risus, pharetra ac pellentesque quis, porta nec ligula. Nullam felis mauris, commodo et mi sed, rhoncus venenatis ex. Vestibulum aliquet nisl eget nisl elementum, ut ornare risus pharetra. In porttitor laoreet urna ac condimentum. Suspendisse id sem vehicula, volutpat augue quis, maximus justo. Praesent at lorem vitae purus sollicitudin mollis. Ut porttitor nunc quam, et mattis nisl consequat suscipit. Sed ut bibendum dolor. Praesent viverra tincidunt viverra. Mauris sed ex in tortor lacinia placerat vitae id turpis. Donec condimentum tempus nisi, a venenatis odio dignissim et.
