$(function() {

    var isVisible = false;
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            if (request.method === "toggle") {
                if ($(".ft-ext-shell").length === 0) {
                    var url = chrome.extension.getURL("../ft-ext.html");
                    $("body").append("<div class='ft-ext-shell'><iframe src='" + url + "' height='100%' width='100%' name='ft-ext'></iframe></div>");
                    $(".ft-ext-shell").animate({ 'height': "360px" }, 200);
                    isVisible = true;
                } else {
                    if (isVisible) {
                        $(".ft-ext-shell").animate({ 'height': "0px" }, 100);
                        isVisible = false;
                    } else {
                        $(".ft-ext-shell").animate({ 'height': "360px" }, 200);
                        isVisible = true;
                    }
                }
            } else if (request.method === "getSelection"){
                sendResponse({note: document.getSelection().toString()});
            }
        }
    );
});
