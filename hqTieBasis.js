/*! Sizzle v2.1.0-pre | (c) 2008, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=fb(),z=fb(),A=fb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,ab=/'|\\/g,bb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),cb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(db){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function eb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=$.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ab,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+pb(o[l]);w=_.test(a)&&nb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function fb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function gb(a){return a[u]=!0,a}function hb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ib(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function jb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function mb(a){return gb(function(b){return b=+b,gb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function nb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=eb.support={},f=eb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=eb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=hb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=hb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(e.getElementsByClassName),c.getById=hb(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(bb,cb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(bb,cb);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(e.querySelectorAll))&&(hb(function(a){a.innerHTML="<select msallowcapture=''><option id='d\f]' selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~=d]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked")}),hb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&hb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?J(k,a)-J(k,b):0;if(f===g)return jb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?jb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},eb.matches=function(a,b){return eb(a,null,null,b)},eb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return eb(b,n,null,[a]).length>0},eb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},eb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},eb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},eb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=eb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=eb.selectors={cacheLength:50,createPseudo:gb,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(bb,cb),a[3]=(a[3]||a[4]||a[5]||"").replace(bb,cb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||eb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&eb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(bb,cb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=eb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||eb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?gb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:gb(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?gb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:gb(function(a){return function(b){return eb(a,b).length>0}}),contains:gb(function(a){return a=a.replace(bb,cb),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:gb(function(a){return V.test(a||"")||eb.error("unsupported lang: "+a),a=a.replace(bb,cb).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:mb(function(){return[0]}),last:mb(function(a,b){return[b-1]}),eq:mb(function(a,b,c){return[0>c?c+b:c]}),even:mb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:mb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:mb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:mb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=kb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=lb(b);function ob(){}ob.prototype=d.filters=d.pseudos,d.setFilters=new ob,g=eb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=R.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?eb.error(a):z(a,i).slice(0)};function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c){for(var d=0,e=b.length;e>d;d++)eb(a,b[d],c);return c}function tb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function ub(a,b,c,d,e,f){return d&&!d[u]&&(d=ub(d)),e&&!e[u]&&(e=ub(e,f)),gb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||sb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:tb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=tb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=tb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function vb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=qb(function(a){return a===b},h,!0),l=qb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return ub(i>1&&rb(m),i>1&&pb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&vb(a.slice(i,e)),f>e&&vb(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function wb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=tb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&eb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?gb(f):f}h=eb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=vb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,wb(e,d)),f.selector=a}return f},i=eb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(bb,cb),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(bb,cb),_.test(j[0].type)&&nb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&pb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,_.test(a)&&nb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=hb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),hb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ib("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&hb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ib("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),hb(function(a){return null==a.getAttribute("disabled")})||ib(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),"function"==typeof define&&define.amd?define(function(){return eb}):"undefined"!=typeof module&&module.exports?module.exports=eb:a.Sizzle=eb}(window);

/*! MD5 Version 2.1 */
var hexcase=0;var b64pad="";var chrsz=8;function hex_md5(s){return binl2hex(core_md5(str2binl(s),s.length*chrsz))}function b64_md5(s){return binl2b64(core_md5(str2binl(s),s.length*chrsz))}function str_md5(s){return binl2str(core_md5(str2binl(s),s.length*chrsz))}function hex_hmac_md5(key,data){return binl2hex(core_hmac_md5(key,data))}function b64_hmac_md5(key,data){return binl2b64(core_hmac_md5(key,data))}function str_hmac_md5(key,data){return binl2str(core_hmac_md5(key,data))}function md5_vm_test(){return hex_md5("abc")=="900150983cd24fb0d6963f7d28e17f72"}function core_md5(x,len){x[len>>5]|=0x80<<((len)%32);x[(((len+64)>>>9)<<4)+14]=len;var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;for(var i=0;i<x.length;i+=16){var olda=a;var oldb=b;var oldc=c;var oldd=d;a=md5_ff(a,b,c,d,x[i+0],7,-680876936);d=md5_ff(d,a,b,c,x[i+1],12,-389564586);c=md5_ff(c,d,a,b,x[i+2],17,606105819);b=md5_ff(b,c,d,a,x[i+3],22,-1044525330);a=md5_ff(a,b,c,d,x[i+4],7,-176418897);d=md5_ff(d,a,b,c,x[i+5],12,1200080426);c=md5_ff(c,d,a,b,x[i+6],17,-1473231341);b=md5_ff(b,c,d,a,x[i+7],22,-45705983);a=md5_ff(a,b,c,d,x[i+8],7,1770035416);d=md5_ff(d,a,b,c,x[i+9],12,-1958414417);c=md5_ff(c,d,a,b,x[i+10],17,-42063);b=md5_ff(b,c,d,a,x[i+11],22,-1990404162);a=md5_ff(a,b,c,d,x[i+12],7,1804603682);d=md5_ff(d,a,b,c,x[i+13],12,-40341101);c=md5_ff(c,d,a,b,x[i+14],17,-1502002290);b=md5_ff(b,c,d,a,x[i+15],22,1236535329);a=md5_gg(a,b,c,d,x[i+1],5,-165796510);d=md5_gg(d,a,b,c,x[i+6],9,-1069501632);c=md5_gg(c,d,a,b,x[i+11],14,643717713);b=md5_gg(b,c,d,a,x[i+0],20,-373897302);a=md5_gg(a,b,c,d,x[i+5],5,-701558691);d=md5_gg(d,a,b,c,x[i+10],9,38016083);c=md5_gg(c,d,a,b,x[i+15],14,-660478335);b=md5_gg(b,c,d,a,x[i+4],20,-405537848);a=md5_gg(a,b,c,d,x[i+9],5,568446438);d=md5_gg(d,a,b,c,x[i+14],9,-1019803690);c=md5_gg(c,d,a,b,x[i+3],14,-187363961);b=md5_gg(b,c,d,a,x[i+8],20,1163531501);a=md5_gg(a,b,c,d,x[i+13],5,-1444681467);d=md5_gg(d,a,b,c,x[i+2],9,-51403784);c=md5_gg(c,d,a,b,x[i+7],14,1735328473);b=md5_gg(b,c,d,a,x[i+12],20,-1926607734);a=md5_hh(a,b,c,d,x[i+5],4,-378558);d=md5_hh(d,a,b,c,x[i+8],11,-2022574463);c=md5_hh(c,d,a,b,x[i+11],16,1839030562);b=md5_hh(b,c,d,a,x[i+14],23,-35309556);a=md5_hh(a,b,c,d,x[i+1],4,-1530992060);d=md5_hh(d,a,b,c,x[i+4],11,1272893353);c=md5_hh(c,d,a,b,x[i+7],16,-155497632);b=md5_hh(b,c,d,a,x[i+10],23,-1094730640);a=md5_hh(a,b,c,d,x[i+13],4,681279174);d=md5_hh(d,a,b,c,x[i+0],11,-358537222);c=md5_hh(c,d,a,b,x[i+3],16,-722521979);b=md5_hh(b,c,d,a,x[i+6],23,76029189);a=md5_hh(a,b,c,d,x[i+9],4,-640364487);d=md5_hh(d,a,b,c,x[i+12],11,-421815835);c=md5_hh(c,d,a,b,x[i+15],16,530742520);b=md5_hh(b,c,d,a,x[i+2],23,-995338651);a=md5_ii(a,b,c,d,x[i+0],6,-198630844);d=md5_ii(d,a,b,c,x[i+7],10,1126891415);c=md5_ii(c,d,a,b,x[i+14],15,-1416354905);b=md5_ii(b,c,d,a,x[i+5],21,-57434055);a=md5_ii(a,b,c,d,x[i+12],6,1700485571);d=md5_ii(d,a,b,c,x[i+3],10,-1894986606);c=md5_ii(c,d,a,b,x[i+10],15,-1051523);b=md5_ii(b,c,d,a,x[i+1],21,-2054922799);a=md5_ii(a,b,c,d,x[i+8],6,1873313359);d=md5_ii(d,a,b,c,x[i+15],10,-30611744);c=md5_ii(c,d,a,b,x[i+6],15,-1560198380);b=md5_ii(b,c,d,a,x[i+13],21,1309151649);a=md5_ii(a,b,c,d,x[i+4],6,-145523070);d=md5_ii(d,a,b,c,x[i+11],10,-1120210379);c=md5_ii(c,d,a,b,x[i+2],15,718787259);b=md5_ii(b,c,d,a,x[i+9],21,-343485551);a=safe_add(a,olda);b=safe_add(b,oldb);c=safe_add(c,oldc);d=safe_add(d,oldd)}return Array(a,b,c,d)}function md5_cmn(q,a,b,x,s,t){return safe_add(bit_rol(safe_add(safe_add(a,q),safe_add(x,t)),s),b)}function md5_ff(a,b,c,d,x,s,t){return md5_cmn((b&c)|((~b)&d),a,b,x,s,t)}function md5_gg(a,b,c,d,x,s,t){return md5_cmn((b&d)|(c&(~d)),a,b,x,s,t)}function md5_hh(a,b,c,d,x,s,t){return md5_cmn(b^c^d,a,b,x,s,t)}function md5_ii(a,b,c,d,x,s,t){return md5_cmn(c^(b|(~d)),a,b,x,s,t)}function core_hmac_md5(key,data){var bkey=str2binl(key);if(bkey.length>16)bkey=core_md5(bkey,key.length*chrsz);var ipad=Array(16),opad=Array(16);for(var i=0;i<16;i++){ipad[i]=bkey[i]^0x36363636;opad[i]=bkey[i]^0x5C5C5C5C}var hash=core_md5(ipad.concat(str2binl(data)),512+data.length*chrsz);return core_md5(opad.concat(hash),512+128)}function safe_add(x,y){var lsw=(x&0xFFFF)+(y&0xFFFF);var msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&0xFFFF)}function bit_rol(num,cnt){return(num<<cnt)|(num>>>(32-cnt))}function str2binl(str){var bin=Array();var mask=(1<<chrsz)-1;for(var i=0;i<str.length*chrsz;i+=chrsz)bin[i>>5]|=(str.charCodeAt(i/chrsz)&mask)<<(i%32);return bin}function binl2str(bin){var str="";var mask=(1<<chrsz)-1;for(var i=0;i<bin.length*32;i+=chrsz)str+=String.fromCharCode((bin[i>>5]>>>(i%32))&mask);return str}function binl2hex(binarray){var hex_tab=hexcase?"0123456789ABCDEF":"0123456789abcdef";var str="";for(var i=0;i<binarray.length*4;i++){str+=hex_tab.charAt((binarray[i>>2]>>((i%4)*8+4))&0xF)+hex_tab.charAt((binarray[i>>2]>>((i%4)*8))&0xF)}return str}function binl2b64(binarray){var tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var str="";for(var i=0;i<binarray.length*4;i+=3){var triplet=(((binarray[i>>2]>>8*(i%4))&0xFF)<<16)|(((binarray[i+1>>2]>>8*((i+1)%4))&0xFF)<<8)|((binarray[i+2>>2]>>8*((i+2)%4))&0xFF);for(var j=0;j<4;j++){if(i*8+j*6>binarray.length*32)str+=b64pad;else str+=tab.charAt((triplet>>6*(3-j))&0x3F)}}return str}

/*! HuanqiuTie v2.0 | 2015-02-06 | www.haunqiu.com */

/**
 * 基本功能
 */

var TIMER;
var SWITCH = true;
var HUANQIU_AJAX = "https://commentn.huanqiu.com/api/v2";
//---------------------------------------------------【构造函数 HUANQIU_TIE】
function HUANQIU_TIE(){
    var jsSrc = this.$("#hqTieJs")[0].src;
    var $body = document.getElementsByTagName("body")[0];

    //appid
    this.appid = this.getUrlCs(jsSrc,"appid");

    //sourceid
    this.sourceid = this.getUrlCs(jsSrc,"sourceid");

    //是否移动端
    this.m = this.getUrlCs(jsSrc,"mobile") ? true : false;

    //是否更多页
    this.morePage = this.$("#huanqiuTieMore").length ? true : false;

    //dom id
    this.dom = "#HQ_" + this.appid;

    //地址
    this.url = encodeURIComponent(window.location.href);

    //标题
    this.title = encodeURIComponent(this.$("title")[0].innerHTML || "");

    //网站名称
    this.siteName = decodeURIComponent(this.getUrlCs(jsSrc,"sitename"));

    //os
    //this.os = this.isMobile() ? "mobile" : "pc";
    this.os = "pc";

    //sid
    this.sid = "";
}

//继承
function extend(Child, Parent){
    var F = function(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;
}

/**
 * 拓展基础功能
 */

//DOM选择器
HUANQIU_TIE.prototype.$ = function(element){
    return Sizzle(element);
};

//绑定事件
HUANQIU_TIE.prototype.bind = function(el,name,fn){
    return el.addEventListener ? el.addEventListener(name,fn,false) : el.attachEvent('on' + name,fn);
};

//检查元素是否含有某个特定的类
HUANQIU_TIE.prototype.hasClass = function(element,className){
    if(element){
        var classNum = element.className.indexOf(" ") > -1 ? element.className.split(" ") : [element.className],
            result;
        for(var i=0;i<classNum.length;i++){
            if(classNum[i] === className){
                result = true;
                break;
            }else{
                result = false;
            }
        }
        return result;
    }
};

//为匹配的元素删除指定的类名
HUANQIU_TIE.prototype.removeClass = function(element,className){
    var classNum;
    if(element){
        if(element.length){
            for(var i=0;i<element.length;i++){
                if(this.hasClass(element[i],className)){
                    classNum = element[i].className.split(" ");
                    for(var j=0;j<classNum.length;j++){
                        if(classNum[j] === className){
                            classNum.splice(j,1);
                            element[i].className = classNum.join(" ");
                            break;
                        }
                    }
                }
            }
        }else{
            if(this.hasClass(element,className)){
                classNum = element.className.split(" ");
                for(var m=0;m<classNum.length;m++){
                    if(classNum[m] === className){
                        classNum.splice(m,1);
                        element.className = classNum.join(" ");
                        break;
                    }
                }
            }
        }
    }
};

//为匹配的元素添加指定的类名
HUANQIU_TIE.prototype.addClass = function(element,className){
    if(element && !this.hasClass(element,className)){
        element.className += " " + className;
    }
};

//判断是否在数组中
HUANQIU_TIE.prototype.inArray = function(array,s){
    for(var i=0;i<array.length;i++){
        if(array[i] === s){
            return true;
            break;
        }
    }
};

//控制匹配的元素显示隐藏
HUANQIU_TIE.prototype.show = function(element){
    if(element.length){
        for(var i=0;i<element.length;i++){
            element[i].style.display = "block";
        }
    }else{
        element.style.display = "block";
    }
};

HUANQIU_TIE.prototype.hide = function(element){
    if(element.length){
        for(var i=0;i<element.length;i++){
            element[i].style.display = "none";
        }
    }else{
        element.style.display = "none";
    }
};

//获取元素索引值
HUANQIU_TIE.prototype.index = function(current, array){
    for(var i=0;i<array.length;i++){
        if(array[i] === current){
            return i;
        }
    }
};

//为匹配的元素添加替换指定的类名
HUANQIU_TIE.prototype.replaceClass = function(element,hasClassName,replaceClassName){
    if(this.hasClass(element,hasClassName)){
        var classNum = element.className.split(" ");
        for(var i=0;i<classNum.length;i++){
            if(classNum[i] === hasClassName){
                classNum[i] = replaceClassName;
                element.className = classNum.join(" ");
                break;
            }
        }
    }
};

//删除匹配的元素
HUANQIU_TIE.prototype.remove = function(element){
    if(element){
        element.parentNode.removeChild(element);
    }
};

//插入到某个元素之后
HUANQIU_TIE.prototype.insertAfter = function(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }
    else{
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
};

//HTML插入元素
HUANQIU_TIE.prototype.insertHTML = function(el,where,html){

    //where: beforeBegin、afterBegin、beforeEnd、afterEnd

    if (!el) {
        return false;
    }

    where = where.toLowerCase();
    if (el.insertAdjacentHTML) {//IE
        el.insertAdjacentHTML(where, html);
    } else {
        var range = el.ownerDocument.createRange(),
            frag = null;

        switch (where) {
            case "beforebegin":
                range.setStartBefore(el);
                frag = range.createContextualFragment(html);
                el.parentNode.insertBefore(frag, el);
                return el.previousSibling;
            case "afterbegin":
                if (el.firstChild) {
                    range.setStartBefore(el.firstChild);
                    frag = range.createContextualFragment(html);
                    el.insertBefore(frag, el.firstChild);
                } else {
                    el.innerHTML = html;
                }
                return el.firstChild;
            case "beforeend":
                if (el.lastChild) {
                    range.setStartAfter(el.lastChild);
                    frag = range.createContextualFragment(html);
                    el.appendChild(frag);
                } else {
                    el.innerHTML = html;
                }
                return el.lastChild;
            case "afterend":
                range.setStartAfter(el);
                frag = range.createContextualFragment(html);
                el.parentNode.insertBefore(frag, el.nextSibling);
                return el.nextSibling;
        }
    }
};

//JSONP
HUANQIU_TIE.prototype.jsonp = function(options) {
    options = options || {};
    if (!options.url || !options.callback) {
        throw new Error("参数不合法");
    }

    //创建 script 标签并加入到页面中
    //var callbackName = ('jsonp_' + Math.random()).replace(".", "");
    var callbackName = options.callback;
    var oHead = document.getElementsByTagName('head')[0];
    options.data[options.callback] = callbackName;

    var oS = document.createElement('script');
    oHead.appendChild(oS);

    //创建jsonp回调函数
    var t = this;
    window[callbackName] = function (json) {
        setTimeout(function(){
            oHead.removeChild(oS);
        },10);
        clearTimeout(oS.timer);
        window[callbackName] = null;
        options.success && options.success(json);
        t.loading(0);
    };

    //发送请求
    var uid = new Date().valueOf();
    var requestId = "";
    if (this.ieSys() == 8.0 || this.ieSys() == 7.0 || this.ieSys() == 6.0){
        requestId = "&_" + (++uid).toString(36);
    }
    var ajaxData = options.data ? options.data + "&" : "";
    var sm = ajaxData ? "?" : "&";
    oS.src = options.url + sm + ajaxData + 'callback=' + options.callback + requestId;

    //超时处理
    if (options.time) {
        oS.timer = setTimeout(function () {
            window[callbackName] = null;
            oHead.removeChild(oS);
            options.fail && options.fail({ message: "超时" });
            t.loading(0);
        }, options.time);
    }
};

//COOKIE
HUANQIU_TIE.prototype.cookieUtil = {
    // get: function (name) {
    //     var cookieName = encodeURIComponent(name) + "=";
    //     var cookieStart = document.cookie.indexOf(cookieName);
    //     var cookieValue = null;
    //     if (cookieStart > -1) {
    //         var cookieEnd = document.cookie.indexOf(";", cookieStart); //从cookieStart开始检索字符串";"
    //         if (cookieEnd == -1) {//没有检索到
    //             cookieEnd = document.cookie.length;
    //         }
    //         cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
    //     }
    //     return cookieValue;
    // },

    //读取
    get : function (name){
    	var cookieValue = null;
    	var cookieArr = document.cookie.split('; ');
    	for(var i=0;i<cookieArr.length;i++){
    		var cookieName = cookieArr[i].split('=')[0];
    		if(cookieName === name){
    			cookieValue = cookieArr[i].split(name + '=')[1];
    			break;
    		}
    	}

    	return decodeURIComponent(cookieValue);
    },

    //设置
    set: function (name, value, expires, path, domain, secure) { //键名,键值,保存时间,路径,域,失效日期
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        if (expires instanceof Date) {
            cookieText += "; expires=" + expires.toGMTString();
        }
        if (path) {
            cookieText += "; path=" + path;
        }
        if (domain) {
            cookieText += "; domain=" + domain;
        }
        if (secure) {
            cookieText += "; secure";
        }
        document.cookie = cookieText;
    },
    
    //删除
    remove: function (name, path, domain, secure) {
        this.set(name, "", new Date(0), path, domain, secure);
    }
};

//将提供的值转化为对象
var stringIsIndexable = 'x'[0] === 'x';
var toObject = function(value) {
    if (value == null) {
        throw new TypeError('toObject');
    }
    if (!stringIsIndexable && typeof value === 'string') {
        return value.split('');
    }
    return Object(value);
};

//遍历数组，对数组中的每一个元素都调用一次指定的函数
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback) {
        var object = toObject(this);
        var thisArg = arguments[1];
        var length = object.length >>> 0;
        if (typeof callback !== 'function') {
            throw new TypeError('Array.prototype.forEach');
        }
        var i = 0;
        while (i < length) {
            if (i in object) {
                callback.call(thisArg, object[i], i, object);
            }
            i++;
        }
    };
}

//判断IE
HUANQIU_TIE.prototype.ieSys = function(){
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
        (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
            (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
                (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
                    (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
                        (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
    return Sys.ie;
};

/**
 * 事件
 */

//是否移动端
HUANQIU_TIE.prototype.isMobile = function(){
    var sw = false;
    var browser = {
        versions : function () {
            var u = navigator.userAgent,
                app = navigator.appVersion;
            return {
                trident : u.indexOf('Trident') > -1, //IE内核
                presto : u.indexOf('Presto') > -1, //opera内核
                webKit : u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko : u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile : !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
                ios : !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android : u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone : u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
                iPad : u.indexOf('iPad') > -1, //是否iPad
                webApp : u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                linux : u.indexOf('linux') > -1, //加mobile和这个属性一起，可以判断uc浏览器
                wp7 : (u.indexOf('WP7') > -1) || (u.indexOf('Windows Phone OS') > -1) //trident IE内核 并且包含WP7标示 windows phone7手机
            };
        }(),

        language : (navigator.browserLanguage || navigator.language).toLowerCase()
    };

    var userAgent = navigator.userAgent;

    if(browser.versions.ios || browser.versions.android){
        sw = true;
    }

    return sw;
};

//判断用户是否登陆
HUANQIU_TIE.prototype.ifLogin = function(){
    var t = this;
    this.jsonp({
        time : 10000,
        url : HUANQIU_AJAX,
        callback : "ifLogin",
        data : "a=userinfo&m=getUserinfo&os=" + t.os + "&appid=" + t.appid,
        success : function(json){
            if(json.msg === "success"){
                //登陆成功
                if(json.data.uid && json.data.openid && json.data.avatar && json.data.nickname){
                    t.cookieUtil.set("uid",json.data.uid);
                    t.cookieUtil.set("openid",json.data.openid);
                    t.cookieUtil.set("avatar",json.data.avatar);
                    t.cookieUtil.set("nickname",json.data.nickname);
                    t.userLogin();

                    if(t.morePage){
                        t.morePageUserInfo(json.data.uid);
                    }
                }

                //第三方没有登陆，但有单点登陆
                else if(!json.data.uid || !json.data.openid || !json.data.avatar || !json.data.nickname){

                    if(json.data.sso_islogin){
                        t.ifSsoLogin(json.data.sso_islogin);
                    }else{
                        //没有单点登陆
                        t.cookieUtil.remove("uid");
                        t.cookieUtil.remove("openid");
                        t.cookieUtil.remove("avatar");
                        t.cookieUtil.remove("nickname");
                    }
                }

                //输出登陆种类到最顶端的发帖框
                if(json.data.source === "huanqiu"){
                    t.$(".logined .share-to").forEach(function(e){
                        t.hide(e);
                    });
                }

                if(json.data.source){
                    var html = '';
                    if(json.data.source === "qq"){
                        //html += '<a href="javascript:void(0);" class="qq-login"></a>';
                        t.$(".share-to").forEach(function(e){
                            t.hide(e);
                        });
                    }
                    else if(json.data.source === "sina"){
                        html += '<a href="javascript:void(0);" class="weibo-login"></a>';
                    }
                    else if(json.data.source === "baidu"){
                        html += '<a href="javascript:void(0);" class="baidu-login"></a>';
                    }
                    else if(json.data.source === "weixin"){
                        html += '<a href="javascript:void(0);" class="weixin-login"></a>';
                    }
                    else if(json.data.source === "renren"){
                        html += '<a href="javascript:void(0);" class="renren-login"></a>';
                    }

                    t.openPlatform = html;
                    t.$("#huanqiu-tiePost .logined .social-login")[0].innerHTML = html;
                }

            }
            else if(json.msg === "empty"){
                //第三方没有登陆，也无单点登陆
                t.cookieUtil.remove("uid");
                t.cookieUtil.remove("openid");
                t.cookieUtil.remove("avatar");
                t.cookieUtil.remove("nickname");
            }
        }
    });
};

//判断是否单点登陆，并获取信息
HUANQIU_TIE.prototype.ifSsoLogin = function(url){
    var t = this;
    var authLogin = t.cookieUtil.get("auth_login");
    var rememberToken = "t=txzm=common_signremember_token=" + encodeURIComponent(authLogin);
    this.jsonp({
        time : 10000,
        url : url + "&remember_token=" + encodeURIComponent(authLogin) + "&sign=" + hex_md5(rememberToken),
        data : "",
        callback : "sso_islogin",
        success : function(json){
            if(json.msg == 1){
                //用户中心记录用户信息 4个cookie
                t.postCommentn(json.user_info.uid,json.user_info.avatar,json.user_info.username,authLogin);
            }else{
                //未登陆
                t.cookieUtil.remove("uid");
                t.cookieUtil.remove("openid");
                t.cookieUtil.remove("avatar");
                t.cookieUtil.remove("nickname");
            }
        }
    });
};

//单点登陆，并获取信息
HUANQIU_TIE.prototype.ssoLogin = function(username,password){
    var t = this;
    var sign = "t=txzm=loginemail=" + escape(username) + "password=" + password;

    this.jsonp({
        time : 10000,
        url : t.ssoUrl + "&email=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password) + "&sign=" + hex_md5(sign),
        data : "",
        callback : "ssoLogin",
        success : function(json){
            if(!json.msg){

            	  //实名认证提示
		            if(!json.mobile){
		            	var $realTips = $("#loginInner .real-tips")[0];
		            	t.removeClass($realTips, 'hidden');	
		            }

                //登陆成功 4个cookie
                t.postCommentn(json.uid,json.avatar,json.username,json.auth_token,json.mobile);
            }else{
                //登陆失败
                t.hqAlert('用户名或密码错误');
            }
        }
    });
};

//单点登录 用户中心记录用户信息 4个cookie
HUANQIU_TIE.prototype.postCommentn = function(uid,avatar,username,auth_token,mobile){
    var c = "openid=" + uid + "&avatar=" + avatar + "&nickname=" + username + "&auth_token=" + auth_token + "&source=" + this.source;
    var t = this;
    this.jsonp({
        url : HUANQIU_AJAX,
        callback : "addAloneUsers",
        data : "a=userinfo&m=addAloneUsers&" + c + "&appid=" + t.appid,
        success : function(json){
            //登陆
            if(json.msg === "success"){

                //单点登录 无分享
                t.openPlatform = null;

                //登录后的变化
                if(mobile){
                	var $huanqiuPopup = t.$("#huanqiu-popup")[0];
	                t.addClass(t.$("#loginInner")[0],"ui_fadeOutDown");
	                setTimeout(function(){
	                    t.remove($huanqiuPopup);
	                },100);
                }

                t.userLogin();
                if(t.morePage){
                    t.morePageUserInfo(json.data.uid);
                }

                //cookie_select();
                window.getUserStatus();
            }else{
                //登陆失败
                t.hqAlert('用户名或密码错误');
            }

        }
    });
};

//支持 +1 动画
HUANQIU_TIE.prototype.addSupport = function(e){
    if(!this.hasClass(e,"support-disabled")){
        var val = parseInt(e.children[0].innerHTML);
        var addSupport = document.createElement("div");
        addSupport.className = "add-support";
        addSupport.innerHTML = "+1";
        e.appendChild(addSupport);
        var $addSupport = e.children[1];

        var timer;
        var opacity = 1;
        var alpha = 100;
        var top = -8;
        var t = this;
        $addSupport.style.opacity = opacity;
        timer = setInterval(function(){
            opacity -= 0.1;
            alpha -= 10;
            top -= 3.7;
            $addSupport.style.opacity = opacity;
            $addSupport.style.filter = "alpha(opacity=" + alpha + ")";
            $addSupport.style.top = top + "px";
            if(opacity <= 0){
                clearInterval(timer);
                $addSupport.parentNode.removeChild($addSupport);
                t.addClass(e,"support-disabled");
                e.children[0].innerHTML = val + 1;
            }
        },20);
    }
};

//发帖字数判断
HUANQIU_TIE.prototype.chackTextarea = function(e,num){
    var t = this;
    if(!TIMER){
        TIMER = setInterval(function(){
            var newvalue = e.value;
            var $postTextarea = e.parentNode.parentNode;
            var $releaseTie = $postTextarea.children[1].lastChild;
            var $textNumTips = $postTextarea.children[1].children[0];

            if(newvalue.length >= 2){
                if (newvalue.length > num) {
                    t.addClass($releaseTie,"disabled");
                    $releaseTie.attributes["data-type"].nodeValue = "disabled";
                    if(!t.hasClass($textNumTips,"text-num-tips")){
                        t.insertHTML($postTextarea.children[1],'afterBegin','<div class="text-num-tips">跟帖须（2-500）字内</div>');
                    }
                    TIMER = undefined;
                    clearInterval(TIMER);
                }else{
                    t.removeClass($releaseTie,"disabled");
                    $releaseTie.attributes["data-type"].nodeValue = "normal";
                    if($textNumTips && t.hasClass($textNumTips,"text-num-tips")){
                        t.remove($textNumTips);
                    }
                }
            }else{
                t.addClass($releaseTie,"disabled");
                $releaseTie.attributes["data-type"].nodeValue = "disabled";
                $textNumTips = $postTextarea.children[1].children[0];
                if(t.hasClass($textNumTips,"text-num-tips")){
                    t.remove($textNumTips);
                }
            }
        },400);
    }
};

HUANQIU_TIE.prototype.clearChackTextarea = function(){
    clearInterval(TIMER);
    TIMER = undefined;
};

//返回个性化时间
HUANQIU_TIE.prototype.returnGtime = function(sTime){
    var xTime;

    //录入时间
    var newDate = new Date(parseInt(sTime) * 1000);
    var m = newDate.getTime();

    //当前时间
    var nowDate = new Date();
    var n = nowDate.getTime();

    //时间差转换成分钟
    var theMinutes = parseInt((n - m) / 1000 / 60);

    //个性化时间
    if(theMinutes < 1){
        xTime = '刚刚发表';
    }
    else if(theMinutes >= 1 && theMinutes < 60){
        xTime = theMinutes + '分钟前';
    }
    else if(theMinutes >= 60 && theMinutes < 1440){
        xTime = Math.round(theMinutes / 60) + '小时前';
    }
    else if(theMinutes >= 1440 && theMinutes < 2880){
        xTime = '1天前';
    }
    else if(theMinutes >= 2880 && theMinutes < 8640){
        xTime = parseInt(theMinutes / 1440) + '天前';
    }
    else if(theMinutes >= 8640 && theMinutes < 17280){
        xTime = '1周前';
    }
    else if(theMinutes >= 17280 && theMinutes < 34560){
        xTime = '2周前';
    }
    else if(theMinutes >= 34560 && theMinutes < 69120){
        xTime = '3周前';
    }
    else if(theMinutes >= 69120){
        xTime = newDate.getFullYear() + '年' + this.addZero(newDate.getMonth() + 1) + '月' + this.addZero(newDate.getDate()) + '日';
    }

    return xTime;
};

//日期小于10加零
HUANQIU_TIE.prototype.addZero = function(e){
    var str;
    if(e < 10){
        str = "0" + e.toString();
    }else{
        str = e;
    }
    return str;
};

//获取最热跟帖
HUANQIU_TIE.prototype.getHotTieList = function(){
    var t = this;
    this.jsonp({
        time : 10000,
        url : HUANQIU_AJAX + "/async",
        callback : "comment_hot",
        data : "a=comment&m=comment_hot&n=5&sid=" + t.sid + "&appid=" + t.appid,
        success : function(json){
            if(json.msg === "success"){
                var html = '<div class="title"><strong>热门跟贴</strong></div><ul class="tie-list">';
                for(var i=0;i<json.data.length;i++){
                    var cid = json.data[i].cid ? json.data[i].cid : json.data[i]._id;
                    var pid = json.data[i].cid ? json.data[i]._id : "";
                    var userAvatar = t.m ? '' : 'm-need-avatar';
                    var os = "";
                    var addCss = json.data[i].os === "pc" ? "" : " phone-icon";
                    if(!t.m){
                        os = json.data[i].os === "pc" ? "网友" : "手机网友";
                    }

                    html += '<li class="tie-box ' + userAvatar + '" data-pid="' + pid + '" data-cid="' + cid + '" data-id="' + json.data[i]._id + '" data-reply="' + json.data[i].n_reply + '">';
                    html += '<div class="user-avatar">';
                    if(!t.m){
                        html += '<img class="user-avatar-img" src="' + (json.data[i].user.avatar ? json.data[i].user.avatar : "https://images.huanqiu.com/ucavatar/noavatar_small.jpg") + '" data-uid="' + json.data[i].user.uid + '">';
                    }
                    html += '</div>';
                    html += '<div class="user-content">';
                    html += '<div class="tie-header">';
                    html += '<div class="post-time">' + t.returnGtime(json.data[i].ctime) + '</div>';
                    html += '<div class="user-info">';
                    html += '<a class="user-name" href="javascript:void(0);" data-uid="' + json.data[i].user.uid + '">' + json.data[i].user.nickname + '</a>';
                    html += '<span class="ip-location' + addCss + '">' + (json.data[i].loc ? (json.data[i].loc + os) : ("未知领域" + os)) + '</span>';
                    html += '</div></div>';
                    html += '<div class="tie-content">';

                    //是否有原帖
                    if(json.data[i].at){
                        if(!t.m){
                            os = json.data[i].at.os === "pc" ? "网友" : "手机网友";
                        }
                        html += '<div class="original-tie-inner">';
                        html += '<div class="tie-header">';
                        html += '<div class="user-info">';
                        html += '<div class="post-time">' + t.returnGtime(json.data[i].at.ctime) + '</div>';
                        html += '<a class="user-name" href="javascript:void(0);" data-uid="' + json.data[i].at.uid + '">' + json.data[i].at.nickname + '</a>';
                        html += '<span class="ip-location' + addCss + '">' + (json.data[i].at.loc ? (json.data[i].at.loc + os) : ("未知领域" + os)) + '</span>';
                        html += '</div></div>';
                        html += '<div class="tie-content">' + json.data[i].at.content + '</div></div>';
                        html += '<a data-uid="' + json.data[i].at.uid + '" href="javascript:void(0);" class="reply-user-name"><em>@</em>' + json.data[i].at.nickname + '</a>';
                        html += json.data[i].content;
                    }else{
                        html += json.data[i].content;
                    }

                    html += '</div>';
                    html += '<div class="tie-footer">';
                    html += t.fromOs(json.data[i].user);
                    html += '<span class="operating">';
                    html += '<a href="javascript:void(0);" class="tie-support"><var class="red">' + json.data[i].n_active + '</var></a>';
                    var reply = json.data[i].n_reply > 0 ? '回复&nbsp;(' + json.data[i].n_reply + ')' : "回复&nbsp;";
                    var m_reply = json.data[i].n_reply > 0 ? '<var>' + json.data[i].n_reply + '</var>' : '<var>0</var>';
                    html += '<a href="javascript:void(0);" class="tie-reply">' + (t.m ? m_reply : reply) + '</a>';
                    if(!t.m){
                        //html += '<span class="tie-share" onmouseenter="tieShare(this,\'show\');" onmouseleave="tieShare(this,\'hide\');">分享' + t.shareHtml(json.data[i].content) + '</span>';
                        html += '<a href="https://commentn.huanqiu.com/i/' + t.sid + '/' + json.data[i]._id + '" target="_blank" class="tie-report" title="举报"><var>举报</var></a>';
                    }
                    html += '</span></div></div></li>';
                }
                html += '</ul>';

                if(t.m && !t.morePage){
                    html += '<a class="mobile-get-more get-more-list" href="moreTest.html" target="_blank" class="get-more-href">共有<var>' + t.allNumSupport + '</var>条，查看更多&gt;&gt;</a>';
                }

                t.$("#huanqiu-tieList .hot-tie-inner")[0].innerHTML = html;
            }
        }
    });
};

//获取最新跟帖
HUANQIU_TIE.prototype.getNewTieList = function(page,n,tips){
    var t = this;
    var num = n || 15;
    this.jsonp({
        time : 10000,
        url : HUANQIU_AJAX + "/async",
        callback : "comment_list",
        data : "a=comment&m=comment_list&sid=" + t.sid + "&n=" + num + "&p=" + page + "&appid=" + t.appid,
        success : function(json){
            if(json.msg === "success"){
                //最新跟帖总数量
                var newTieNum = parseInt(t.huanqiuTieInner.attributes["data-newtienum"].nodeValue);
                var userAvatar = t.m ? '' : 'm-need-avatar';
                var html = '';
                if(tips){
                    html += '<div class="title"><strong>最新跟贴</strong></div><ul class="tie-list">';
                }
                for(var i=0;i<json.data.length;i++){
                    var os = "";
                    var addCss = json.data[i].os === "pc" ? "" : " phone-icon";
                    if(!t.m){
                        os = json.data[i].os === "pc" ? "网友" : "手机网友";
                    }
                    var sn = '';
                    var replyNum = parseInt(json.data[i].n_reply);
                    if(json.data[i].reply){
                        sn = replyNum > json.data[i].reply.length ? 'data-replypage="1" data-replysurplus="' + (replyNum - json.data[i].reply.length) + '"' : '';
                    }

                    html += '<li class="tie-box ' + userAvatar + '"' + sn + ' data-pid="" data-cid="' + json.data[i]._id + '" data-id="' + json.data[i]._id + '" data-reply="' + json.data[i].n_reply + '">';
                    html += '<div class="user-avatar">';
                    if(!t.m){
                        html += '<img src="' + (json.data[i].user.avatar ? json.data[i].user.avatar : "https://images.huanqiu.com/ucavatar/noavatar_small.jpg" ) + '" class="user-avatar-img" data-uid="' + json.data[i].user.uid + '">';
                    }
                    html += '</div>';
                    html += '<div class="user-content">';
                    html += '<div class="tie-header">';
                    html += '<div class="post-time">' + t.returnGtime(json.data[i].ctime) + '</div>';
                    html += '<div class="user-info">';
                    html += '<a class="user-name" href="javascript:void(0);" data-uid="' + json.data[i].user.uid + '">' + json.data[i].user.nickname + '</a>';
                    html += '<span class="ip-location' + addCss + '">' + (json.data[i].loc ? (json.data[i].loc + os) : ("未知领域" + os)) + '</span>';
                    html += '</div></div>';
                    html += '<div class="tie-content">';

                    //是否有原帖
                    if(json.data[i].at){
                        if(!t.m){
                            os = json.data[i].at.os === "pc" ? "网友" : "手机网友";
                        }
                        html += '<div class="original-tie-inner">';
                        html += '<div class="tie-header">';
                        html += '<div class="user-info">';
                        html += '<div class="post-time">' + t.returnGtime(json.data[i].at.ctime) + '</div>';
                        html += '<a class="user-name" href="javascript:void(0);" data-uid="' + json.data[i].at.uid + '">' + json.data[i].at.nickname + '</a>';
                        html += '<span class="ip-location' + addCss + '">' + (json.data[i].at.loc ? (json.data[i].at.loc + os) : ("未知领域" + os)) + '</span>';
                        html += '</div></div>';
                        html += '<div class="tie-content">' + json.data[i].at.content + '</div></div>';
                        html += '<a data-uid="' + json.data[i].at.uid + '" href="javascript:void(0);" class="reply-user-name"><em>@</em>' + json.data[i].at.nickname + '</a>';
                        html += json.data[i].content;
                    }else{
                        html += json.data[i].content;
                    }

                    html += '</div>';
                    html += '<div class="tie-footer">';
                    html += t.fromOs(json.data[i].user);
                    html += '<span class="operating">';
                    html += '<a href="javascript:void(0);" class="tie-support"><var class="red">' + json.data[i].n_active + '</var></a>';
                    var reply = json.data[i].n_reply > 0 ? '回复&nbsp;(' + json.data[i].n_reply + ')' : "回复&nbsp;";
                    var m_reply = json.data[i].n_reply > 0 ? '<var>' + json.data[i].n_reply + '</var>' : '<var>0</var>';
                    html += '<a href="javascript:void(0);" class="tie-reply">' + (t.m ? m_reply : reply) + '</a>';
                    if(!t.m){
                        //html += '<span class="tie-share" onmouseenter="tieShare(this,\'show\');" onmouseleave="tieShare(this,\'hide\');">分享' + t.shareHtml(json.data[i].content) + '</span>';
                        html += '<a href="https://commentn.huanqiu.com/i/' + t.sid + '/' + json.data[i]._id + '" target="_blank" class="tie-report" title="举报"><var>举报</var></a>';
                    }
                    html += '</span></div>';

                    //回复列表HTML
                    if(json.data[i].reply){
                        html += '<div class="children-list"><ul>';
                        html += t.getReplyHtml(json.data[i].reply);
                        html += '</ul>';
                        html += replyNum > json.data[i].reply.length ? '<div class="get-more-reply-list">后面还有<var>' + (replyNum - json.data[i].reply.length) + '</var>条回复，点击查看 &gt;&gt;</div>' : '';
                        html += '</div>';
                    }

                    html += '</div></li>';
                }

                if(tips){
                    html += '</ul>';
                    //有翻页
                    if(newTieNum > json.data.length){
                        if(!t.morePage){
                            html += t.m ? '<a href="moreTest.html" target="_blank" class="mobile-get-more get-more-href">共有<var>' + t.allNumSupport + '</var>条，查看更多&gt;&gt;</a>' : '<a href="https://commentn.huanqiu.com/s/' + t.appid + '/' + t.sid + '" target="_blank" class="get-more-href">共有<var>' + t.allNumSupport + '</var>人参与，查看更多精彩跟帖 &gt;&gt;</a>';
                        }else{
                            var sma = t.m ? '<div class="mobile-get-more get-more-list">共有' + t.allNumSupport + '条，查看更多&gt;&gt;</div>' : '<div class="get-more-list">共有<var>' + t.allNumSupport + '</var>人参与，查看更多精彩跟帖 &gt;&gt;</div>';
                            html += sma;
                            t.huanqiuTieInner.setAttribute("data-newtiesurplus",newTieNum - json.data.length);
                        }
                    }

                    var newTieInner = document.createElement("div");
                    newTieInner.className = "tie-inner-box new-tie-inner";
                    t.$("#huanqiu-tieList")[0].appendChild(newTieInner);
                    var $newTieInner = t.$("#huanqiu-tieList .new-tie-inner")[0];
                    setTimeout(function(){
                        $newTieInner.innerHTML = html;
                        $newTieInner.setAttribute("data-newtiepage","1");
                    },50);
                    t.getShareJs();
                }else{
                    //追加
                    t.insertHTML(t.$("#huanqiu-tieList .new-tie-inner .tie-list")[0],"beforeEnd",html);
                    t.$("#huanqiu-tieList .new-tie-inner")[0].setAttribute("data-newtiepage",page);

                    //剩余数量计算
                    var moreNum = t.huanqiuTieInner.attributes["data-newtiesurplus"].nodeValue;
                    if(parseInt(moreNum) > json.data.length){
                        var surplus = parseInt(moreNum) - json.data.length;
                        t.huanqiuTieInner.setAttribute("data-newtiesurplus",surplus);
                    }else{
                        t.huanqiuTieInner.setAttribute("data-newtiesurplus","");
                        t.$("#huanqiu-tieList .new-tie-inner .get-more-list")[0].innerHTML = '<a href="javascript:scroll(0,0)">此贴已全部展示，点击返回顶部</a>';
                        t.$("#huanqiu-tieList .new-tie-inner .get-more-list")[0].className = "go-to-top";
                    }

                    t.getShareJs();
                }
                t.loading(0);
            }

            else if(json.msg === "empty"){
                t.huanqiuTieInner.setAttribute("data-newtiesurplus","");
                t.$("#huanqiu-tieList .new-tie-inner .get-more-list")[0].innerHTML = '<a href="javascript:scroll(0,0)">此贴已全部展示，点击返回顶部</a>';
                t.$("#huanqiu-tieList .new-tie-inner .get-more-list")[0].className = "go-to-top";
            }
        }
    });
};

//获取回复列表
HUANQIU_TIE.prototype.getReplyList = function(cid,page,$li,tips){
    var t = this;
    this.jsonp({
        time : 10000,
        url : HUANQIU_AJAX,
        callback : "reply_list",
        data : "a=comment&m=reply_list&sid=" + t.sid + "&n=5&p=" + page + "&cid=" + cid + "&appid=" + t.appid,
        success : function(json){
            if(json.msg === "success"){
                //回复总数量
                var replyNum = parseInt($li.attributes["data-reply"].nodeValue);
                var html = '';
                if(tips){
                    html += '<ul>';
                }

                //回复列表HTML
                html += t.getReplyHtml(json.data);

                if(tips){
                    html += '</ul>';
                    //有翻页
                    if(replyNum > json.data.length){
                        html += '<div class="get-more-reply-list">后面还有<var>' + (replyNum - json.data.length) + '</var>条回复，点击查看 &gt;&gt;</div>';
                        $li.setAttribute("data-replysurplus",replyNum - json.data.length);
                    }
                    var childrenList = document.createElement("div");
                    childrenList.className = "children-list";
                    childrenList.innerHTML = html;
                    $li.children[1].appendChild(childrenList);
                    $li.setAttribute("data-replypage","1");
                }else{
                    //追加
                    var $childrenList = $li.children[1].lastChild;
                    t.insertHTML($childrenList.children[0],"beforeEnd",html);
                    $li.setAttribute("data-replypage",page);

                    //剩余数量计算
                    if(parseInt($li.attributes["data-replysurplus"].nodeValue) > json.data.length){
                        var moreNum = $childrenList.children[1].children[0];
                        var surplus = parseInt(moreNum.innerHTML) - json.data.length;
                        moreNum.innerHTML = surplus;
                        $li.setAttribute("data-replysurplus",surplus);
                    }else{
                        $li.setAttribute("data-replysurplus","");
                        t.remove($childrenList.children[1]);
                    }
                }
                t.getShareJs();
            }
            else if(json.msg === "empty"){
                $li.setAttribute("data-replysurplus","");
                t.remove($li.children[1].lastChild.children[1]);
            }
        }
    });
};

//回复列表HTML
HUANQIU_TIE.prototype.getReplyHtml = function(json){
    var html = '';
    var t = this;
    for(var i=0;i<json.length;i++){
        var os = "";
        var addCss = json[i].os === "pc" ? "" : " phone-icon";
        if(!t.m){
            os = json[i].os === "pc" ? "网友" : "手机网友";
        }
        var userAvatar = t.m ? '' : 'm-need-avatar';
        html += '<li class="tie-box ' + userAvatar + '" data-reply="0" data-pid="' + json[i]._id + '" data-id="' + json[i]._id + '" data-cid="' + json[i].cid + '">';
        html += '<div class="user-avatar">';
        if(!t.m){
            html += '<img data-uid="' + json[i].user.uid + '" src="' + (json[i].user.avatar ? json[i].user.avatar : "https://images.huanqiu.com/ucavatar/noavatar_small.jpg") + '" class="user-avatar-img">';
        }
        html += '</div>';
        html += '<div class="user-content">';
        html += '<div class="tie-header">';
        html += '<div class="post-time">' + t.returnGtime(json[i].ctime) + '</div>';
        html += '<div class="user-info">';
        html += '<a class="user-name" href="javascript:void(0);" data-uid="' + json[i].user.uid + '">' + json[i].user.nickname + '</a>';
        html += '<span class="ip-location' + addCss + '">' + (json[i].loc ? (json[i].loc + os) : ("未知领域" + os)) + '</span>';
        html += '</div></div>';
        html += '<div class="tie-content">';

        //是否有原帖
        if(json[i].at){
            html += '<a data-uid="' + json[i].at.uid + '" href="javascript:void(0);" class="reply-user-name"><em>@</em>' + json[i].at.nickname + '</a>';
            html += json[i].content;
        }else{
            html += json[i].content;
        }

        html += '</div>';
        html += '<div class="tie-footer">';
        html += t.fromOs(json[i].user);
        html += '<span class="operating">';
        html += '<a href="javascript:void(0);" class="tie-support"><var class="red">' + json[i].n_active + '</var></a>';
        html += '<a href="javascript:void(0);" class="tie-reply">' + (t.m ? "" : "回复") + '</a>';
        if(!t.m){
            //html += '<span class="tie-share" onmouseenter="tieShare(this,\'show\');" onmouseleave="tieShare(this,\'hide\');">分享' + t.shareHtml(json[i].content) + '</span>';
            html += '<a href="https://commentn.huanqiu.com/i/' + t.sid + '/' + json[i]._id + '" target="_blank" class="tie-report" title="举报"><var>举报</var></a>';
        }
        html += '</span></div></div></li>';
    }

    return html;
};

//支持
HUANQIU_TIE.prototype.addRelease = function(element){
    if(!this.hasClass(element,"support-disabled")){
        var cid = element.parentNode.parentNode.parentNode.parentNode.attributes["data-id"].nodeValue;
        var t = this;
        this.jsonp({
            time : 10000,
            url : HUANQIU_AJAX,
            callback : "add_release",
            data : "a=comment&m=dig&sid=" + t.sid + "&cid=" + cid + "&appid=" + t.appid,
            success : function(json){
                if(json.msg === "success"){
                    //成功
                }
            }
        });
    }
};

//发帖
HUANQIU_TIE.prototype.addNewTie = function(element,bs){
    var postTieTime = this.cookieUtil.get("HQ_PostTieTime") > 0 ? parseInt(this.cookieUtil.get("HQ_PostTieTime") / 1000) : 0;
    var nowDate = parseInt(new Date().getTime() / 1000);
    var $li = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    var $error = element.nextSibling;
    var $operatingInner = element.parentNode;
    var uid = this.cookieUtil.get("uid");
    var openID = this.cookieUtil.get("openid");
    var avatar = this.cookieUtil.get("avatar");
    var nickname = this.cookieUtil.get("nickname");
    //var os = this.isMobile() ? "mobile" : "pc";
    var os = "pc";
    var t = this;

    this.jsonp({
        time : 10000,
        url : HUANQIU_AJAX,
        callback : "commentnLogin",
        data : "a=comment&os=pc&m=user_status&uid=" + uid + "&appid=" + t.appid,
        success : function(json){
            if(json.code === 22000){
                if(!t.hasClass(element,"disabled")){

                    if(nowDate - postTieTime >= 5){
                        var cid = t.hasClass($li,"tie-box") ? $li.attributes["data-cid"].nodeValue : "";
                        var pid = t.hasClass($li,"tie-box") ? $li.attributes["data-pid"].nodeValue : "";
                        var newAddCon = element.parentNode.parentNode.children[0].children[0].value.replace(/<[^>]+>/g,"");

                        if(newAddCon != "" && newAddCon.length >= 2 && newAddCon.length <= 500){
                            var isshare = (!t.m && element.parentNode.children[1].children[1].children[1].children[0].checked) ? 1 : 0;
                            var data = "a=comment&m=addnew&os=" + os + "&isshare=" + isshare + "&uid=" + uid + "&sid=" + t.sid + "&cid=" + cid + "&pid=" + pid + "&content=" + newAddCon + "&appid=" + t.appid;
                            window.frames['HQ_dataPedal'].addNewTieFun(data,element,bs);
                        }
                    }else{
                        //发帖时间需间隔5s
                        if(!$error){
                            if(t.$(".operating-inner .error").length){
                                t.$(".operating-inner .error").forEach(function(e){
                                    t.remove(e);
                                })
                            }
                            t.insertHTML($operatingInner,"beforeEnd",'<div class="error">还有' + (5 - (nowDate - postTieTime)) + '秒后才能继续评论！</div>');

                        }else{
                            $error.innerHTML = '还有' + (5 - (nowDate - postTieTime)) + '秒后才能继续评论！';
                        }
                    }
                }
            }else{
                //登陆失效
                t.popupLogin("自动登录超时，请重新登录");
            }
        }
    });
};

//发帖回调
HUANQIU_TIE.prototype.addNewTieHD = function(json,element,bs){
    if(json.code){
        var avatar = this.cookieUtil.get("avatar");
        var nickname = this.cookieUtil.get("nickname");
        var $li = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        var newAddCon = element.parentNode.parentNode.children[0].children[0].value.replace(/<[^>]+>/g,"");

        var t = this;
        var html = "";
        html += '<li class="tie-box">';
        if(!t.m){
            html += '<div class="user-avatar">';
            html += '<img src="' + avatar + '">';
            html += '</div>';
        }
        html += '<div class="user-content">';
        html += '<div class="tie-header">';
        html += '<div class="post-time">刚刚发表</div>';
        html += '<div class="user-info">';
        html += '<span class="user-name">' + nickname + '</span>';
        html += '</div></div>';
        html += '<div class="tie-content">';
        if(bs){
            html += '@' + $li.children[1].children[0].children[1].children[0].innerHTML + ' ';
        }
        html += newAddCon + '</div>';
        html += '</div>';
        html += '<div class="tie-footer"><span class="operating">此跟帖已发布成功</span></div>';
        html += '</div></li>';

        //如果没有最新跟帖就创建
        if(!t.$("#huanqiu-tieList .new-tie-inner").length){
            t.insertHTML(t.$("#huanqiu-tieList")[0],"beforeEnd",'<div class="tie-inner-box new-tie-inner"><div class="title"><strong>最新跟贴</strong></div><ul class="tie-list"></ul></div>');
        }
        t.insertHTML(t.$("#huanqiu-tieList .new-tie-inner .tie-list")[0],"afterBegin",html);

        //删除error提示
        if(t.$(".operating-inner .error").length){
            t.$(".operating-inner .error").forEach(function(e){
                t.remove(e);
            });
        }

        //关闭发帖窗口
        if(bs){
            var $addPanel = $li.children[1].children[3];
            var $childrenList = $li.children[1].children[4];
            t.remove($addPanel);
            t.remove($childrenList);
            t.removeClass($li,"reply-z-index");
        }else{
            element.parentNode.parentNode.children[0].children[0].value = "";
        }

        t.addClass(t.$("#huanqiu-tiePost .release-tie")[0],"disabled");

        //记录发帖时间
        t.cookieUtil.set("HQ_PostTieTime",new Date().getTime());

        //页面滚动到发帖处
        var scrollTop = t.$("#huanqiu-tieList .new-tie-inner")[0].offsetTop;
        window.scroll(0,scrollTop);
    }
};

//loading
HUANQIU_TIE.prototype.loading = function(n){
    if(n === 1){
        this.insertHTML(this.$("body")[0],"afterBegin","<div id='ajaxLoadingGif'></div>");
    }else{
        this.remove(this.$("#ajaxLoadingGif")[0]);
    }
};

//URL中获取参数
HUANQIU_TIE.prototype.getUrlCs = function(url,e){
    var val = "";
    if(url.indexOf("?") > -1){
        var en = url.split("?")[1];
        var wn = en.split("&");

        for(var i=0;i<wn.length;i++){
            if(wn[i].split("=")[0] === e){
                val = wn[i].split("=")[1];
                break;
            }
        }
    }
    return val;
};

//来自OS
HUANQIU_TIE.prototype.fromOs = function(arr){
    var html = '';

    if(arr.source){
        if(arr.source_url){
            html += '<span class="os">来自&nbsp;<a target="_blank" href="' + arr.source_url + '">' + arr.source + '</a></span>';
        }else{
            html += '<span class="os">来自&nbsp;' + arr.source + '</span>';
        }
    }
    return html;
};

//判断用户是否登陆流程
HUANQIU_TIE.prototype.judgeUserLogin = function(){
    var urlHost = window.location.host;

    //环球域下
    if(urlHost.indexOf("huanqiu.com") > -1){
        var auth_login = window.frames['HQ_dataPedal'].cookieGet("auth_login");
        var avatar = window.frames['HQ_dataPedal'].cookieGet("avatar");
        var nickname = window.frames['HQ_dataPedal'].cookieGet("nickname");
        var uid = window.frames['HQ_dataPedal'].cookieGet("uid");
        var openid = window.frames['HQ_dataPedal'].cookieGet("openid");
        var source = window.frames['HQ_dataPedal'].cookieGet("source");
        var t = this;

        if(avatar && nickname && uid && openid){
            //已登陆
            this.userLogin();
            if(!this.m && this.morePage){
                this.morePageUserInfo(uid);
            }
        }

        else if(auth_login && !avatar && !nickname && !uid && !openid){
            //i.huanqiu.com 下登陆了
            this.ifSsoLogin('http://interface.huanqiu.com/api.php?t=txz&m=common_sign');
        }

        //输出登陆种类到最顶端的发帖框
        if(source === "huanqiu"){
            this.$(".logined .share-to").forEach(function(e){
                t.hide(e);
            });
        }

        if(source){
            var html = '';
            var $socialLogin = this.$("#huanqiu-tiePost .logined .social-login")[0];
            if(source === "qq"){
                //html += '<a href="javascript:void(0);" class="qq-login"></a>';
                this.$(".share-to").forEach(function(e){
                    t.hide(e);
                });
            }
            else if(source === "sina"){
                html += '<a href="javascript:void(0);" class="weibo-login"></a>';
            }
            else if(source === "baidu"){
                html += '<a href="javascript:void(0);" class="baidu-login"></a>';
            }
            else if(source === "weixin"){
                html += '<a href="javascript:void(0);" class="weixin-login"></a>';
            }
            else if(source === "renren"){
                html += '<a href="javascript:void(0);" class="renren-login"></a>';
            }

            this.openPlatform = html;
            if($socialLogin){
                $socialLogin.innerHTML = html;
            }
        }

    }else{
        //其他域下
        this.ifLogin();
    }
};

//接口判断是否登陆
HUANQIU_TIE.prototype.commentnLogin = function(){
    var t = this;
    var uid = this.cookieUtil.get("uid");
    this.jsonp({
        time : 10000,
        url : HUANQIU_AJAX,
        callback : "commentnLogin",
        data : "a=comment&os=pc&m=user_status&uid=" + uid + "&appid=" + t.appid,
        success : function(json){
            if(json.code != 22000){
                //登陆失效
                t.popupLogin();
                t.hqAlert("自动登录超时，请重新登录！");
            }
        }
    });
};