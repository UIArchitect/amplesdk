/*
 * Ample SDK - JavaScript GUI Framework
 *
 * Copyright (c) 2009 Sergey Ilinsky
 * Dual licensed under the MIT and GPL licenses.
 * See: http://www.amplesdk.com/about/licensing/
 *
 */

var cXHTMLElement_fieldset	= function() {
	this.elements	= new ample.classes.NodeList;
};
cXHTMLElement_fieldset.prototype	= new cXHTMLElement("fieldset");

//Public Properties
cXHTMLElement_fieldset.prototype.elements	= null;

// Class Events Handlers
cXHTMLElement_fieldset.handlers	= {
	"DOMAttrModified":	function(oEvent) {
		if (oEvent.target == this)
			cXHTMLElement.mapAttribute(this, oEvent.attrName, oEvent.newValue);
	}
};

// Register Element
ample.extend(cXHTMLElement_fieldset);
