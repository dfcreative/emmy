/**
 * @module  emmy/delegate
 */

//TODO: use jquery delegate, if possible

module.exports = delegate;

var on = require('./on');
var closest = typeof document !== 'undefined' ? require('query-relative/closest') : null;


/**
 * Bind listener to a target
 * listening for all events from it’s children matching selector
 *
 *
 * @param {string} selector A selector to match against
 *
 * @return {function} A callback
 */
function delegate(target, evt, fn, selector){
	return on(target, evt, delegate.wrap(target, evt, fn, selector));
}


delegate.wrap = function(target, evt, fn, selector){
	//ignore non-DOM
	if (!closest) return;

	return on.wrap(target, evt, fn, function(e){
		var el = e.target;

		//pass self evts instantly
		if (el === target) return true;


		//find at least one element in-between delegate target and event source
		var holderEl = closest(el, selector);

		if (target !== holderEl && target.contains(holderEl)) {
			//save source of event
			e.delegateTarget = el;

			//NOTE: PhantomJS && IE8 fails on that:
			// evt.currentTarget = el;
			// Object.defineProperty(evt, 'currentTarget', {
			// 	get: function(){
			// 		return el;
			// 	}
			// });

			return true;
		}
	});
};