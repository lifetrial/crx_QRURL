chrome.tabs.getSelected(function(tab) {

	$(function() {
		var url = tab.url;
		var api = 'https://chart.googleapis.com/chart?';
		api += 'cht=qr';
		api += '&chs=200x200';
		api += '&choe=UTF-8';
		api += '&chld=L|1';
		api += '&chl=' + url;

		$('#J-img').attr('src', api);
	});
});

