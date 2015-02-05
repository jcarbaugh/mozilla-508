function pef() {

	var doc	= window.content.document;
	var maps = doc.getElementsByTagName('map').length;
	var areas = doc.getElementsByTagName('area').length;
	var alertMsg = '';
	
	if (maps + areas > 0) {
		alertMsg = 'An image map is used on this page.  Verify that a redundant link is provided for each clickable area on the map.'
		signal('ef', 'yellow');
	} else {
		alertMsg = 'No image map is used on this page.'
		signal('ef', 'green');
	}
	
	document.getElementById('pefResults').value = alertMsg;
	
}