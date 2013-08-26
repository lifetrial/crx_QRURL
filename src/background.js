function open(tab) {
	chrome.browserAction.setPopup({
		"popup" : "html/popup.html"
	});
}

chrome.browserAction.onClicked.addListener(open);
