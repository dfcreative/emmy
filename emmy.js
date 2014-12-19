(function(){function U(a){return(a+"").toLowerCase()}function G(a,b){if(H)return H.call(a,b);for(var c=a.parentNode.querySelectorAll(b),d=0;d<c.length;d++)if(c[d]==a)return!0;return!1}function m(a,b){var c=r.get(a);return b?c&&c[b]||[]:c||{}}function p(a,b,c){if(a){var d,e;if(void 0===c){var f=a.removeAll||a.removeAllListeners;f&&f.call(a,b,c);d=I(a);if(void 0===b)for(b in d)p(a,b);else b.split(/\s+/).forEach(function(b){if(d[b])for(var c=d[b].length;c--;)p(a,b,d[b][c])})}else{var l=a.off||a.removeEventListener||
a.removeListener;b.split(/\s+/).forEach(function(b){if(l)if(J.freeze(a,"off"+b))l.call(a,b,c),J.a(a,"off"+b);else return;b=I(a,b);for(e=0;e<b.length;e++)if(b[e]===c||b[e].fn===c){b.splice(e,1);break}})}}}function k(a,b,c,d){if(a){var e=a.on||a.addEventListener||a.addListener,f;f=d?k.wrap(c,d):c;b.split(/\s+/).forEach(function(b){if(e)if(K.freeze(a,"on"+b))e.call(a,b,f),K.a(a,"on"+b);else return f;V.add(a,b,f,d)});return f}}function v(a,b,c,d){return W(a,b,v.wrap(a,b,c,d))}function L(a,b,c,d){var e,
f=b;a.nodeType||a===X||a===Y?(b instanceof Event?f=b:(f=document.createEvent("CustomEvent"),f.initCustomEvent(b,d,!0,c)),e=a.dispatchEvent):w&&a instanceof w?(f=w.Event(b,c),f.detail=c,e=d?targte.trigger:a.triggerHandler):e=a.emit||a.trigger||a.fire||a.dispatchEvent;if(e&&M.freeze(a,"emit"+b))e.call(a,f,c,d),M.a(a,"emit"+b);else{e=Z(a,f);e=x(e);for(var f=x(arguments,2),l=0;l<e.length;l++)e[l]&&e[l].apply(a,f)}}function y(a,b,c,d){return N(a,b,y.wrap(a,b,c,d))}function z(a,b,c,d){return O(a,b,z.wrap(a,
b,c,d))}function A(a,b,c,d){return P(a,b,A.wrap(a,b,c,d))}function s(a,b,c){if(a){var d=a.once||a.one||a.addOnceEventListener||a.addOnceListener,e;e=s.wrap(a,b,c,aa);b.split(/\s+/).forEach(function(b){if(d&&Q.freeze(a,"one"+b)){var l=d.call(a,b,c);Q.a(a,"one"+b);return l}ba(a,b,e)});return e}}function B(a,b,c,d){return R(a,b,B.wrap(a,b,c,d))}function g(a){if(a){for(var b in n)a[b]=n[b];return a}}window.Emitter=g;var q,C,h,D,t,E;q=function(a){return!(!a||!a.apply)};"use strict";h=Element.prototype;
var H=h.matches||h.matchesSelector||h.webkitMatchesSelector||h.mozMatchesSelector||h.msMatchesSelector||h.b;C=function(a){return"string"===typeof a||a instanceof String};var r=new WeakMap;m.add=function(a,b,c){r.has(a)||r.set(a,{});a=r.get(a);(a[b]=a[b]||[]).push(c)};h={freeze:function(a,b){var c=u.get(a);if(c&&c[b])return!1;c||(c={},u.set(a,c));return c[b]=!0},a:function(a,b){var c=u.get(a);if(!c||!c[b])return!1;c[b]=null;return!0},isFrozen:function(a,b){var c=u.get(a);return c&&c[b]}};var u=new WeakMap,
F=document,ca=F.documentElement;D=function(a,b){if(a===F)return ca;if(!b||(b instanceof Node?a==b:G(a,b)))return a;for(;(a=a.parentNode)!==F;)if(!b||(b instanceof Node?a==b:G(a,b)))return a};t=t=function(a,b,c){var d=[],e=a.length;if(0===e)return d;b=0>b?Math.max(0,b+e):b||0;for(void 0!==c&&(e=0>c?c+e:c);e-- >b;)d[e-b]=a[e];return d};var J=h,I=m,K=h,V=m;k.wrap=function(a,b,c,d){function e(){if(d.apply(a,arguments))return c.apply(a,arguments)}e.fn=c;return e};var W=k;v.wrap=function(a,b,c,d){function e(){var a=
arguments,b=this;setTimeout(function(){c.apply(b,a)},d)}q(d)&&(a=d,d=c,c=a);e.fn=c;return e};var M=h,Z=m,x=t;E=function(a,b){if(a){var c=arguments;if(C(b))b.split(/\s+/).forEach(function(b){L.apply(this,[a,b].concat(x(c,2)))});else return L.apply(this,arguments)}};var w="undefined"===typeof jQuery?void 0:jQuery,X="undefined"===typeof document?void 0:document,Y="undefined"===typeof window?void 0:window,N=k,S="undefined"!==typeof document?D:null;y.wrap=function(a,b,c,d){if(S){if(q(d)){var e=d;d=c;c=
e}return N.wrap(a,b,c,function(b){var c=b.target;if(c!==a){var e=S(c,d);if(a!==e&&a.contains(e))return b.delegateTarget=c,!0}})}};var O=k,T="undefined"!==typeof document?D:null;z.wrap=function(a,b,c,d){if(T){if(q(d)){var e=d;d=c;c=e}return O.wrap(a,b,c,function(b){b=b.target;return document.contains(b)?(b=T(b,d))&&a.contains(b)?!1:!0:!1})}};var da={"\u2325":18,alt:18,option:18,backspace:8,capslock:20,caps:20,clear:12,context:93,"\u2318":91,cmd:91,command:91,"\u2303":17,ctrl:17,control:17,del:46,"delete":46,
down:40,end:35,"\u2386":13,enter:13,"return":13,esc:27,escape:27,home:36,insert:45,left:37,pagedown:34,"pg-down":34,pageup:33,"pg-up":33,pause:19,right:39,"\u21e7":16,shift:16,space:32,tab:9,up:38,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,leftmouse:1,rightmouse:3,middlemouse:2,"*":106,"+":107,plus:107,"-":109,minus:109,";":186,semicolon:186,"=":187,equals:187,",":188,dash:189,".":190,"/":191,"`":192,"~":192,"[":219,"\\":220,"]":221,"'":222},P=k;A.wrap=
function(a,b,c,d){if(d)return d=d instanceof Array?d:C(d)?d.split(/\s*,\s*/):[d],d=d.map(U),P.wrap(a,b,c,function(a){for(var b=void 0!==a.which?a.which:a.keyCode,c=d.length;c--;)if(a=d[c],b==a||da[a]==b)return!0})};var Q=h,ba=k,aa=p;s.wrap=function(a,b,c,d){function e(){d(a,b,e);c.apply(a,arguments)}e.fn=c;return e};var R=k;B.wrap=function(a,b,c,d){function e(){c.apply(a,arguments);p(a,b,e);setTimeout(function(){R(a,b,e)},d)}if(q(d)){var f=d;d=c;c=f}e.fn=c;return e};var ea=t,n=g.prototype;n.on=function(a,
b,c){k(this,a,b,c);return this};n.once=function(a,b){s(this,a,b);return this};n.off=function(a,b){p(this,a,b);return this};n.emit=function(){E.apply(this,[this].concat(ea(arguments)));return this};n.listeners=function(a){return m(this,a)};n.hasListeners=function(a){return!!m(this,a).length};g.on=function(a,b,c,d){k(a,b,c,d);return this};g.once=function(a,b,c){s(a,b,c);return this};g.off=function(a,b,c){p(a,b,c);return this};g.emit=function(){E.apply(this,arguments);return this};g.delegate=function(a,
b,c,d){y(a,b,c,d);return this};g.later=function(a,b,c,d){v(a,b,c,d);return this};g.keypass=function(a,b,c,d){A(a,b,c,d);return this};g.throttle=function(a,b,c,d){B(a,b,c,d);return this};g.not=function(a,b,c,d){z(a,b,c,d);return this};g.listeners=m;g.hasListeners=function(a,b){return!!m(a,b).length}})();
