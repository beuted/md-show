var sendMessage = function(message) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: message}, function(response) {
            console.log(response.farewell);
        });
    });
}

chrome.commands.onCommand.addListener(function (command) {
    if (command === "next") {
        sendMessage("next");
    } else if (command === "prev") {
        sendMessage("prev");
    }
});

