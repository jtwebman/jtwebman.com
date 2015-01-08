var docpadConfig;

docpadConfig = {
  poweredByDocPad: true,
  templateData: {
    site: {
      title: "JTWebMan"
    },
    getPreparedTitle: function() {
      if (this.document.title) {
        return this.document.title + " | " + this.site.title;
      } else {
        return this.site.title;
      }
    },
    getCuttedContent: function(content) {
      var i = content.search('<!-- Read more -->');
      if (i >= 0) {
        return content.slice(0, +(i - 1) + 1 || 9e9);
      } else {
        return content;
      }
    },
    hasReadMore: function(content) {
      return content.search('<!-- Read more -->') >= 0;
    }
  },
  collections: {
    pages: function() {
      return this.getCollection("html").findAllLive({ 
        layout: { $has: 'page' },
        isPagedAuto: { $ne: true }
      }, [ 
        { sort: 1 } 
      ]);
    },
    posts: function() {
      return this.getCollection("html").findAllLive({ 
        layout: { $has: 'blog' } 
      }, [ 
        { date: -1 } 
      ]);
    }
  },
  plugins: {
    cleanurls: {
        trailingSlashes: true
    }
  }
};

module.exports = docpadConfig;
