// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function toggle() {
  chrome.tabs.executeScript(null, {file: "js/jquery-1.9.1.min.js"});
  chrome.tabs.executeScript(null, {file: "js/ft-ext-injection.js"});
  chrome.tabs.insertCSS(null, {file: "css/ft-ext-shell.css"});
}

chrome.commands.onCommand.addListener(function(command) {
  toggle();
});

chrome.browserAction.onClicked.addListener(function(tab) {
  toggle();
});
