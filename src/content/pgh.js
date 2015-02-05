function pgh() {
	signal('gh', 'yellow');	
}

function pghOutlineTable() {
	outlineTag('table', 1, 'solid', 'purple');
}

function pghOutlineTH() {
	var headerString;
	var headers;
	var childNodes = null;
	var doc	= window.content.document;
	elems = doc.getElementsByTagName('td');
	for (var i = 0; i < elems.length; i++) {
		/* UNDER CONSTRUCTION
		headerString = elems[i].getAttribute('headers');
		if (headerString != null) {
			header = headerString.split(',');
			for (var j = 0; j < elems.length; j++) {
				if (elems[j].getAttribute('headers') != null)
					outline(elems[j], 1, 'solid', 'green');
			}	
		}
		*/
		if (elems[i].getAttribute('scope') != null)
			outline(elems[i], 1, 'solid', 'blue');
	}
	outlineTag('th', 1, 'solid', 'blue');
}

function pghOutlineTD() {
	var childNodes = null;
	var doc	= window.content.document;
	elems = doc.getElementsByTagName('td');
	for (var i = 0; i < elems.length; i++) {
		if (elems[i].getAttribute('headers') != null)
			outline(elems[i], 1, 'solid', 'green');
	}
}