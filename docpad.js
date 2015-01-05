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
    }
  },
  collections: {
    pages: function() {
      return this.getCollection("html").findAllLive({ 
        layout: { $has: 'page' } 
      }, [ 
        { sort: 1 } 
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
