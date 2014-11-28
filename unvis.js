chrome.contextMenus.create({
    "title": "Open in unvis.it",
    "contexts": ["page","link"],
    "onclick" : function(e) {
      var url = e.pageUrl;
      var unvisItUrl = "http://www.unvis.it/";
      
      if (e.linkUrl) {
        url = e.linkUrl;
      }
      
      unvisItUrl += url.replace(/.*?:\/\//g, "");
      
      // Open the page up.
       chrome.tabs.create(
          {"url" : unvisItUrl });
       console.log(unvisItUrl);
    }
  });