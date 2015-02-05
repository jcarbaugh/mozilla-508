function pm() {

	var doc	= window.content.document;
	var japplets = doc.getElementsByTagName('applet').length;
	var jobjects = doc.getElementsByTagName('object').length;
	var alertMsg = '';
	
	if (japplets + jobjects > 0) {
		alertMsg = 'A plug-in may be used on this page.  Verify that a link to the plug-in download site is provided.'
		signal('m', 'yellow');
	} else {
		alertMsg = 'No plug-in is used on this page.'
		signal('m', 'green');
	}
	
	document.getElementById('pmResults').value = alertMsg;
	
}