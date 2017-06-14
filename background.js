function trashIt(info, tab) {
    chrome.tabs.sendMessage(tab.id, "getClickedEl", function(clickedEl) {});
}

// Create one test item for each context type.
var contexts = ["page", "selection", "link", "editable", "image", "video", "audio"];
for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    var title = "This is TRASH.";
    var id = chrome.contextMenus.create({
        "title": title,
        "contexts": [context],
        "onclick": trashIt
    });
}