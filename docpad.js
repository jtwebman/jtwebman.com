var docpadConfig;

docpadConfig = {
  poweredByDocPad: false,
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
      return this.getCollection("html").findAllLive({ isPage: true },[ { pageSort: 1 } ]).on("add", function(model) {
        return model.setMetaDefaults({
          layout: "default"
        });
      });
    }
  }
};

module.exports = docpadConfig;
