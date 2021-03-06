/*
 * Ample SDK - JavaScript GUI Framework
 *
 * Copyright (c) 2010 Sergey Ilinsky
 * Dual licensed under the MIT and GPL licenses.
 * See: http://www.amplesdk.com/about/licensing/
 *
 */

cQuery.prototype.css	= function(sName, sValue) {
//->Guard
	fGuard(arguments, [
		["name",	cString],
		["value",	cObject,	true,	true]
	]);
//<-Guard

	if (arguments.length > 1) {
		sValue	= sValue == null ? '' : cString(sValue);
		fQuery_each(this, function() {
			this.$setStyle(sName, sValue);
		});
		return this;
	}
	else
	if (this.length)
		return this[0].$getStyleComputed(sName);
	return null;
};