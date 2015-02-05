function pa() {

	var doc	= window.content.document;
	var elem = null;
	var altTag = null;
	var paTree = null;
	
	signal('a', 'green');
	
	paTree = document.getElementById('imgtree');
	clearTree(paTree);
	
	elems = doc.getElementsByTagName('img');
	for (var i = 0; i < elems.length; i++) {
		elem = elems[i];
		addElement(elem, paTree)
	}

	paTree = document.getElementById('inputtree');
	clearTree(paTree);
	
	elems = doc.getElementsByTagName('input');
	for (var i = 0; i < elems.length; i++) {
		elem = elems[i];
		if (elems[i].getAttribute('type') != 'hidden')
			addElement(elem, paTree);
	}
	
	paTree = document.getElementById('applettree');
	clearTree(paTree);
	
	elems = doc.getElementsByTagName('applet');
	for (var i = 0; i < elems.length; i++) {
		elem = elems[i];
		addElement(elem, paTree)
	} 
		
}

function paOutline() {
	var childNodes = null;
	var doc	= window.content.document;
	elems = doc.getElementsByTagName('img');
	for (var i = 0; i < elems.length; i++) {
		if (elems[i].getAttribute('alt') == null)
			elems[i].style.border = '1px solid red;';
	}
}

function clearTree(treenode) {
	elems = treenode.childNodes;
	for (var i = 0; i < elems.length; i++) {
		elem = elems[i];
		if (elem.nodeName == 'treeitem') {
			treenode.removeChild(elem);
		}
	}
}

function addElement(elem, tree) {
	if (elem.getAttribute('alt') != null && document.getElementById('onlynull').checked == true) return;
	var treeItem	= document.createElement('treeitem');
	var treeRow = document.createElement('treerow');
		
	var treeValue	= document.createElement('treecell');
	if (elem.tagName == 'IMG') {
		treeValue.setAttribute('label', elem.getAttribute('src'));
	} else if (elem.tagName == 'APPLET') {
		treeValue.setAttribute('label', elem.getAttribute('code'));
	} else {
		treeValue.setAttribute('label', elem.getAttribute('value'));
	}
			
	var treeAttr		= document.createElement('treecell');
	altTag = elem.getAttribute('alt');
	
	if (altTag == null) {
		treeAttr.setAttribute('label','---');
	} else {
		treeAttr.setAttribute('label',altTag);
	}
			
	treeRow.appendChild(treeValue);
	treeRow.appendChild(treeAttr);
	
	treeItem.appendChild(treeRow);
	tree.appendChild(treeItem);
	
	signal('a', 'red');
	
}