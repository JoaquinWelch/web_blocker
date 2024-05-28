chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return { cancel: isBlocked(details.url) };
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
  
  function isBlocked(url) {
    '43things.com', 'tiktok.com', 'twitter.com', '4chan.org' 
    var blockedWebsites = [
        '43things.com', 'tiktok.com', 'twitter.com', '4chan.org' 
    ];
  
    return blockedWebsites.some(function(website) {
      return url.includes(website);
    });
  }
  