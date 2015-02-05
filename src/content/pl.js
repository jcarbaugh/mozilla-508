function pl() {

	var doc	= window.content.document;
	var jscripts = doc.getElementsByTagName('script');
	var noscripts = doc.getElementsByTagName('noscript');
	var alertMsg = '';
	
	if (jscripts.length == 0) {
		alertMsg += 'No <script> elements found.';
		signal('l', 'green');
	} else {
		if (noscripts.length == 0) {
			alertMsg += '<script> elements exist, but no <noscript> elements were found.';
			signal('l', 'red');
		} else {
			if (jscripts.length != noscripts.length) {
				alertMsg += 'Both <script> and <noscript> elements were found, but the counts of each element are not equal.';
			} else {
				alertMsg += 'A <noscript> element exists for each <script> element.';
			}
			signal('l', 'yellow');
		}	
	}
	
	alertMsg += '\n\nParagraph L will require additional'
		+ ' verification.  Please ensure all navigation that'
		+ ' utilizes javascript functions correctly for those that use'
		+ ' assistive technologies.'
	
	document.getElementById('plResults').value = alertMsg;
	
	/*
	alert(alertMsg);
	*/
	
}