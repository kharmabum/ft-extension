// https://github.com/kippt/kippt-chrome/blob/master/js/kippt_extension.js

$(function() {

    ///////////////////////////
    // Chrome Messaging
    ///////////////////////////
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            if (request.method === "activeTabInfo") {
                Kippt.activeTabReceived(request.tab, request.selection);
            }
        }
    );

    var chrome_createNewClip = function (data) {
        chrome.runtime.sendMessage({method: 'createNewClip', data: data});
    };

    var chrome_openTab = function (url) {
        chrome.runtime.sendMessage({method: 'openTab', url: url});
    };

    var chrome_closePopover = function() {
        chrome.runtime.sendMessage({method: 'toggle'});
    };

    var chrome_getActiveTab = function() {
        chrome.runtime.sendMessage({method: 'getActiveTab'});
    };

    ///////////////////////////
    // Helper Functions
    ///////////////////////////
    ///
    var Kippt = {
        userId: null,
        existingClipId: null
    };

    Kippt.setClipData = function (tab, selection) {

        var selected_note = (selection) ? selection.note : '';
        var kippt_url = 'https://kippt.com/extensions/new';
        var tab_url = tab.url;
        var tab_title = tab.title;

        $('#id_title').val(tab_title.trim());
        $('#id_notes').val(selected_note.trim());
    };

    Kippt.activeTabReceived = function (tab, selection) {
        // Empty tab - open Kippt.com
        if (tab.url.indexOf('chrome://') === 0) {
            chrome_openTab("https://kippt.com/");
            chrome_closePopover();
            return;
        }

        Kippt.setClipData(tab, selection);
    };

    chrome_getActiveTab();
});
