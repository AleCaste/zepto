// [Alex] - Instead of jQuery we will be using Zepto lib which is much smaller
var Zepto = require('zepto.min');

// Zepto.js | Selectors. See: https://github.com/madrobby/zepto/blob/master/src/selector.js#files
;(function(e){function g(a){a=e(a);return!(!a.width()&&!a.height())&&"none"!==a.css("display")}function m(a,c){a=a.replace(/=#\]/g,'="#"]');var b=p.exec(a);if(b&&b[2]in n){var h=n[b[2]];var d=b[3];a=b[1];d&&(b=Number(d),d=isNaN(b)?d.replace(/^["']|["']$/g,""):b)}return c(a,h,d)}var f=e.zepto,q=f.qsa,r=f.matches,n=e.expr[":"]={visible:function(){if(g(this))return this},hidden:function(){if(!g(this))return this},selected:function(){if(this.selected)return this},checked:function(){if(this.checked)return this},
parent:function(){return this.parentNode},first:function(a){if(0===a)return this},last:function(a,c){if(a===c.length-1)return this},eq:function(a,c,b){if(a===b)return this},contains:function(a,c,b){if(-1<e(this).text().indexOf(b))return this},has:function(a,c,b){if(f.qsa(this,b).length)return this}},p=/(.*):(\w+)(?:\(([^)]+)\))?$\s*/,t=/^\s*>/,k="Zepto"+ +new Date;f.qsa=function(a,c){return m(c,function(b,h,d){try{if(!b&&h)b="*";else if(t.test(b)){var g=e(a).addClass(k);b="."+k+" "+b}var l=q(a,b)}catch(u){throw console.error("error performing selector: %o",
c),u;}finally{g&&g.removeClass(k)}return h?f.uniq(e.map(l,function(a,b){return h.call(a,b,l,d)})):l})};f.matches=function(a,c){return m(c,function(b,c,d){return(!b||r(a,b))&&(!c||c.call(a,null,d)===a)})}})(Zepto);

// Zepto.js | getScript. See: https://stackoverflow.com/a/11545877/3621841
;(function(a){a.ajaxSetup=function(b){a.ajaxSettings=a.extend(a.ajaxSettings,b)};a.getScript=function(){var b=function(b,c,d,e){return a.extend({cache:a.ajaxSettings.cache},e,{url:b,success:c,error:d})}.apply(null,arguments);b.dataType="script";return a.ajax(b)};a.fn.outerWidth=function(){return a(this).width()};a.fn.outerHeight=function(){return a(this).height()}})(Zepto);

module.exports = Zepto;