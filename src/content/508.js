var globalURL;
var mozDoc;

function init() {
	
	setListeners();
		
	document.getElementById('pbResults').value = 'Equivalent alternatives for '
		+ 'any multimedia presentation shall be synchronized with the presentation.\n\n'
		+ 'Please verify that the page contains accessible elements such as:\n\n'
		+ '- Audio files must include transcripts\n\n'
	  + '- Video files must include captions\n\n'
	  + '- Slide shows must have alternative text for images\n\n';
	document.getElementById('pcResults').value = 'Web pages shall be designed so that '
		+ 'all information conveyed with color is also available without color, '
		+ 'for example from context or markup.\n\n'
		+ 'Verify that the site will still be accessible if viewed on a black and white monitor.\n\n';
	document.getElementById('pdResults').value = 'Documents shall be organized so they are '
		+ 'readable without requiring an associated style sheet.\n\n'
		+ 'Use the button below to verify that the page can be read without stylesheets.';
	document.getElementById('pghResults').value = 'Row and column headers shall '
		+ 'be identified for data tables.\n\n'
		+ 'Markup shall be used to associate data cells and header cells for data tables '
		+ 'that have two or more logical levels of row or column headers.\n\n';
	document.getElementById('pkResults').value = 'A text-only page, with equivalent information '
		+ 'or functionality, shall be provided to make a web site comply with the provisions '
		+ 'of these standards, when compliance cannot be accomplished in any other way. '
		+ 'The content of the text-only page shall be updated whenever the primary page changes.\n\n'
		+ 'Verify that a text-only page is provided if this page cannot be made accessible.';
	document.getElementById('poResults').value = 'A method shall be provided that permits users '
		+ 'to skip repetitive navigation links.\n\n'
		+ 'Verify that a link is provided that will allow users to skip repetitive navigation links';
	document.getElementById('ppResults').value = 'When a timed response is required, '
		+ 'the user shall be alerted and given sufficient time to indicate more time is required.\n\n'
		+ 'Allow disabled users an option for additional time so they can complete forms.';
		
}

function setListeners() {
	var mozWin = window.parent;
	mozWin.addEventListener("load", run508, true);
	mozWin.addEventListener("focus", run508focus, true);
}

function run508() {
	
	var now = new Date();
	var dateTime = '';
	
	mozDoc = window.content.document;
	
	pa();
	pb();
	pc();
	pd();
	pef();
	pgh();
	pi();
	pj();
	pk();
	pl();
	pm();
	pn();
	po();
	pp();
	
	dateTime += pad(now.getMonth() + 1) + '/';
	dateTime += pad(now.getDay()) + '/';
	dateTime += (now.getYear() + 1900) + ' ';
	dateTime += pad(now.getHours()) + ':';
	dateTime += pad(now.getMinutes()) + ':';
	dateTime += pad(now.getSeconds());
	
	document.getElementById('urlLabel').value = window._content.location.href;
	document.getElementById('runTimeLabel').value = 'Last tested on ' + dateTime;
	
	/*
	alert('508 test results are now available in sidebar.'
		+ '\n\n'
		+ 'The following paragraphs will require additional verification:'
		+ '\n\nB, C, G, H, J, L');
	*/
	
	globalURL = window._content.location.href;
	
	setListeners();
	
}

function run508focus() {
	if (globalURL != window._content.location.href)
		run508();
}

function pad(val) {
	return ((val < 10)?'0':'') + val;
}

function signal(paragraph, color) {
	var styleBG = 'background-color: ' + color + ';';
	var styleColor = 'color: ' + color + ';';
	var signalElem = document.getElementById('p' + paragraph + 'Signal');
	var tabElem = document.getElementById('p' + paragraph + 'Tab');
	signalElem.setAttribute('style',styleBG);
	tabElem.setAttribute('style',styleColor);
}

function outline(element, weight, decoration, color) {
	element.style.border = weight + 'px ' + decoration + ' ' + color;
}

function outlineTag(tag, weight, decoration, color) {
	elems = mozDoc.getElementsByTagName(tag);
	for (var i = 0; i < elems.length; i++) {
		outline(elems[i], weight, decoration, color);
	}
}