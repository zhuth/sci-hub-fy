// Copyright (c) 2014 Allan Costa.

function sciHubFy(link, sciHubDomain) {
  // Append Sci-Hub domain to link's domain
  var matches = link.match(/:\/\/(?:www\.)?(.[^/]+)(.*)/);
  return "http://" + matches[1] + "." + sciHubDomain + matches[2];
}

function newTabSciHubFy(tab, link) {
  // Tab is the current tab and link is the link to append sci-hub.io
  browser.storage.local.get({
    domain: 'sci-hub.cc'  // Default domain
  }).then(function(items) {
    browser.tabs.query({
        active: true
      }, tabs => {
        let index = tabs[0].index;
        browser.tabs.create({index: index + 1, url: sciHubFy(link, items.domain)});
      }
    );
  });
}

function sameTabSciHubFy(tab, link) {
  // Tab is the current tab and link is the link to append sci-hub.io
  browser.storage.local.get({
    domain: 'sci-hub.cc' // Default domain
  }).then(function(items) {
    browser.tabs.update(tab.id, {url: sciHubFy(link, items.domain)});
  });
}

function openOptions(){
  if (browser.runtime.openOptionsPage) {
  // New way to open options pages, if supported (browser 42+).
  browser.runtime.openOptionsPage();
  } else {
    // Reasonable fallback.
    window.open(browser.runtime.getURL('options.html'));
  }
}
// Setup extension click action
browser.browserAction.onClicked.addListener(function(state) {
  browser.tabs.query({
        active: true
      }, tabs => {
        let index = tabs[0].index, tab = tabs[0];
        sameTabSciHubFy(tab, tab.url);
      }
    );
});

// Setup context menu actions
browser.runtime.onInstalled.addListener(function() {
    browser.contextMenus.create({
        title: 'Sci-Hub-Fy',
        id: 'page', // you'll use this in the handler function to identify this context menu item
        contexts: ['page'],
    });
    browser.contextMenus.create({
        title: 'Sci-Hub-Fy',
        id: 'link', // you'll use this in the handler function to identify this context menu item
        contexts: ['link'],
    });
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "page") { // here's where you'll need the ID
      sameTabSciHubFy(tab, tab.url);
    } else if (info.menuItemId === "link") {
      newTabSciHubFy(tab, info.linkUrl);
    }
});
