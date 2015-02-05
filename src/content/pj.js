function pj() {

	var doc	= window.content.document;
	var imgs = doc.getElementsByTagName('img').length;
	var japplets = doc.getElementsByTagName('applet').length;
	var jobjects = doc.getElementsByTagName('object').length;
	var blinkers = doc.getElementsByTagName('blink').length;
	var alertMsg = '';
	
	if (imgs + japplets + jobjects + blinkers > 0) {
		alertMsg = 'Elements that may fail Paragraph J verification exist in this document.'
		signal('j', 'yellow');
	} else {
		alertMsg = 'No blinking elements found.'
		signal('j', 'green');
	}
	
	alertMsg += '\n\nPlease view the document to ensure there are no elements flicker with a'
		+ ' frequency greater than 2 Hz or lower than 55 Hz'
		+ '\n\n';
	
	document.getElementById('pjResults').value = alertMsg;
	
}