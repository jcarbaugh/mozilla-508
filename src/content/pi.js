function pi() {

	var alertMsg = '';
	doc	= window.content.document;
	
	iframes = doc.getElementsByTagName('frame');
	if (iframes.length > 0) {
		for (var i = 0; i < iframes.length; i++) {
			frameTitle = iframes[i].getAttribute('title');
			if (frameTitle == null) {
				alertMsg = 'The frames used on this page do not have title attributes.\n\n'
					+ 'Frames shall be titled with text that facilitates frame identification and navigation.';
				signal('i', 'red');
			} else {
				alertMsg = 'Titled frames are used on this page.';
				signal('i', 'green');
			}
		}
	} else {
		alertMsg = 'Frames are not used on this page.';
		signal('i', 'green');
	}
	
	document.getElementById('piResults').value = alertMsg;
	
}