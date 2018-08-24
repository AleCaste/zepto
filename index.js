// [Alex] - Instead of jQuery we will be using Zepto lib which is much smaller
var Zepto = require('zepto.min');

// Zepto.js | Selectors. See: https://github.com/madrobby/zepto/blob/master/src/selector.js#files
;(function(e){function g(a){a=e(a);return!(!a.width()&&!a.height())&&"none"!==a.css("display")}function m(a,c){a=a.replace(/=#\]/g,'="#"]');var b=p.exec(a);if(b&&b[2]in n){var h=n[b[2]];var d=b[3];a=b[1];d&&(b=Number(d),d=isNaN(b)?d.replace(/^["']|["']$/g,""):b)}return c(a,h,d)}var f=e.zepto,q=f.qsa,r=f.matches,n=e.expr[":"]={visible:function(){if(g(this))return this},hidden:function(){if(!g(this))return this},selected:function(){if(this.selected)return this},checked:function(){if(this.checked)return this},
parent:function(){return this.parentNode},first:function(a){if(0===a)return this},last:function(a,c){if(a===c.length-1)return this},eq:function(a,c,b){if(a===b)return this},contains:function(a,c,b){if(-1<e(this).text().indexOf(b))return this},has:function(a,c,b){if(f.qsa(this,b).length)return this}},p=/(.*):(\w+)(?:\(([^)]+)\))?$\s*/,t=/^\s*>/,k="Zepto"+ +new Date;f.qsa=function(a,c){return m(c,function(b,h,d){try{if(!b&&h)b="*";else if(t.test(b)){var g=e(a).addClass(k);b="."+k+" "+b}var l=q(a,b)}catch(u){throw console.error("error performing selector: %o",
c),u;}finally{g&&g.removeClass(k)}return h?f.uniq(e.map(l,function(a,b){return h.call(a,b,l,d)})):l})};f.matches=function(a,c){return m(c,function(b,c,d){return(!b||r(a,b))&&(!c||c.call(a,null,d)===a)})}})(Zepto);

// Zepto.js | getScript. See: https://stackoverflow.com/a/11545877/3621841
;(function($){
  
  $.ajaxSetup = function(options) {
    $.ajaxSettings = $.extend($.ajaxSettings, options);
  };
  
  /*
  $.getScript = function (url, onload, onerror) {
    var script = document.createElement('script'),
        $script = $(script);

    // You only need to use setAttribute for non-standard attributes.
    // Use:          script.src = url; 
    // Instead of:   script.setAttribute('src', url); 
    script.type = 'text/javascript';
    script.async = true;
    script.src = url;
    
    $.ajaxSettings.cache

    $('head').append(script);
    $script.bind('load', onload);
    $script.bind('error', onerror);
  };
  */
  
  $.getScript = function(/* url, success, error, options */){
    // See Zepto $.getJSON code. This is very similar.
    function parseArguments(url, success, error, options) {
      return $.extend({
        cache: $.ajaxSettings.cache
      }, options, {
        url: url,
        success: success,
        error: error
      });
    };
    var options = parseArguments.apply(null, arguments);
    options.dataType = 'script';
    return $.ajax(options);
  };
  
  $.fn.outerWidth = function() {
    return $(this).width();  // In Zepto, width is the jQuery equivalent to outerWidth
  };
  
  $.fn.outerHeight = function() {
    return $(this).height();  // In Zepto, height is the jQuery equivalent to outerHeight
  };
  
})(Zepto);



module.exports = Zepto;