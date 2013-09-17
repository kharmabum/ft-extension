function toggle() {
  var self = this;
  this.injected = false;

  // chrome.tabs.sendMessage(tabs[0].id, {directive: "toggle"}, function(response) {
  //   console.log(response);
  //   self.injected = true;
  // });

  setTimeout(function(){
    // if (!self.injected) {
    if (true) {
      chrome.tabs.executeScript(null, {file: "js/jquery-1.9.1.min.js"});
      chrome.tabs.executeScript(null, {file: "js/ft-ext-injection.js"});
      chrome.tabs.insertCSS(null, {file: "css/ft-ext-shell.css"});
    }
  }, 30);
}

chrome.commands.onCommand.addListener(function(command) {
  toggle();
});

chrome.browserAction.onClicked.addListener(function(tab) {
  toggle();
});

