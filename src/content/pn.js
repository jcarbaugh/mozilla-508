function pn() {
	styleInput = '3px solid red;';
	styleSelect = 'yellow;';
	doc	= window.content.document;
	
	treeInput = document.getElementById('pnInputTree');
	treeSelect = document.getElementById('pnSelectTree');
	
	signal('n', 'green');
	
	clearTree(treeInput);
	clearTree(treeSelect);
	
	elems = doc.getElementsByTagName('input');
	labels = doc.getElementsByTagName('label');
	for (var i = 0; i < elems.length; i++) {
		inputType = elems[i].getAttribute('type');
		if (inputType == 'text'
					|| inputType == 'radio'
					|| inputType == 'checkbox') {
			idattr = elems[i].getAttribute('id')
			if (idattr == null) {
				addTreeElement(elems[i], treeInput);
			} else {
				labelMissing = true;
				for (var l = 0; l < labels.length; l++) {
					if (labels[l].getAttribute('for') == idattr)
						labelMissing = false;
				}
				if (labelMissing) {
					addTreeElement(elems[i], treeInput);
				}
			}
		}
	}
	
	elems = doc.getElementsByTagName('select');
	labels = doc.getElementsByTagName('label');
	for (var i = 0; i < elems.length; i++) {
		idattr = elems[i].getAttribute('id')
		if (idattr == null) {
			addTreeElement(elems[i], treeSelect);
		} else {
			labelMissing = true;
			for (var l = 0; l < labels.length; l++) {
				if (labels[l].getAttribute('for') == idattr)
					labelMissing = false;
			}
			if (labelMissing) {
				addTreeElement(elems[i], treeSelect);
			} 
		}
	}
	
}

function pnOutlineLabels() {
	var childNodes = null;
	var doc	= window.content.document;
	elems = doc.getElementsByTagName('label');
	for (var i = 0; i < elems.length; i++) {
		elems[i].style.border = '1px solid orange;';
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

function addTreeElement(elem, tree) {
	var treeItem	= document.createElement('treeitem');
	var treeRow = document.createElement('treerow');
	
	var treeType	= document.createElement('treecell');
	if (elem.tagName == 'INPUT') {
		treeType.setAttribute('label', elem.getAttribute('type'));
	} else {
		treeType.setAttribute('label', 'select');	
	}
	
	var treeName	= document.createElement('treecell');
	treeName.setAttribute('label', elem.getAttribute('name'));
	
	treeRow.appendChild(treeType);
	treeRow.appendChild(treeName);
	treeItem.appendChild(treeRow);
	tree.appendChild(treeItem);
	
	signal('n', 'red');
	
}