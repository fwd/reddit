(function(t){function e(e){for(var o,s,a=e[0],u=e[1],c=e[2],h=0,l=[];h<a.length;h++)s=a[h],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&l.push(i[s][0]),i[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);d&&d(e);while(l.length)l.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},r=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"201e":function(t,e,n){},"234b":function(t,e,n){"use strict";n("201e")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("form",{staticClass:"search-box",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("typeahead",{attrs:{placeholder:"Enter subreddit name","ref:typeahead":"",query:t.appState.query,"get-suggestions":t.getSuggestions},on:{selected:t.doSearch}})],1),t._e(),t.isLoading?n("div",{staticClass:"help"},[t._v(t._s(t.appState.progress.message))]):t._e(),t.aboutVisible?n("about",{on:{close:function(e){t.aboutVisible=!1}}}):t._e(),t.appState.hasGraph?t._e():n("div",{staticClass:"welcome"},[n("h3",[t._v("Welcome!")]),n("p",[t._v(" This website renders graph of related subreddits. "),n("a",{staticClass:"highlight",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.aboutVisible=!0}}},[t._v("Click here")]),t._v(" to learn more, or "),n("a",{staticClass:"highlight",attrs:{href:"?query=math"}},[t._v("try demo")]),t._v(". ")])]),n("div",{ref:"tooltip",staticClass:"tooltip"},[t._v(t._s(t.tooltip.text))]),t.subreddit?n("subreddit",{staticClass:"preview",attrs:{name:t.subreddit}}):t._e(),t.subreddit?n("div",{staticClass:"close-container"},[n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.subreddit=null}}},[t._v("close")])]):t._e()],1)},r=[],s=(n("e6b8"),n("dca8"),n("498a"),n("159b"),n("00c7")({})),a=s;n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("d81d"),n("ac1f"),n("5319"),n("b64b"),n("99af");function u(t,e){var n;e||(e={});var o=new Promise(r);return o.cancel=i,o;function i(){n&&n.abort()}function r(o,i){function r(t){t.lengthComputable?e.progress({loaded:t.loaded,total:t.total,percent:t.loaded/t.total,lengthComputable:!0}):e.progress({loaded:t.loaded,lengthComputable:!1})}function s(){if(200===n.status){var r=n.response;"json"===e.responseType&&"string"===typeof r&&(r=JSON.parse(r)),o(r)}else i("Unexpected status code ".concat(n.status," when calling ").concat(t))}function a(){i("Failed to download ".concat(t))}function u(){i({cancelled:!0,message:"Cancelled download of ".concat(t)})}n=new XMLHttpRequest,"function"===typeof e.progress&&n.addEventListener("progress",r,!1),n.addEventListener("load",s,!1),n.addEventListener("error",a,!1),n.addEventListener("abort",u,!1),n.open(e.method||"GET",t),e.responseType&&(n.responseType=e.responseType),e.headers&&Object.keys(e.headers).forEach((function(t){n.setRequestHeader(t,e.headers[t])})),"POST"===e.method?n.send(e.body):n.send(null)}}var c=n("bbd6");function d(t){var e=h(),n=new Map,o=new Map,i=[],r=[],s=1,a=new Map;return u(t+"count.json",{responseType:"json"}).then((function(t){t.forEach((function(t,e){t.forEach((function(t){a.set(t,e+2)}))})),s=t.length+2})),{getRelated:f,getSuggestion:l,getSize:d};function d(t){var e=a.get(t);return(e||1)/s}function l(t){var e=t[0].toLocaleLowerCase(),o=n.get(e);return o?(o=c.go(t,r,{limit:10}),Promise.resolve(o.map((function(t){return{html:c.highlight(t,"<b>","</b>"),text:t.target}})))):p(e).then((function(){return l(t)}))}function f(t){var e=o.get(t.toLocaleLowerCase());return e?Promise.resolve(e):g(t)}function p(s){var a=t+e.get(s);return console.log("download ",s),u(a,{responseType:"json"}).then((function(t){n.set(s,t),t.forEach((function(t){var e=t[0].toLocaleLowerCase();o.get(e)||(i.push(t[0]),o.set(e,t))})),r=i.map((function(t){return c.prepare(t)}))}))}function g(t){var e=t[0].toLocaleLowerCase(),i=n.get(e);return i?Promise.resolve([]):p(e).then((function(){var e=o.get(t.toLocaleLowerCase());return e||[]}))}}function h(){var t=new Map;return["0_z0123456789jqx.json","10_m.json","11_l.json","12_i.json","13_h.json","14_g.json","15_f.json","16_e.json","17_d.json","18_c.json","19_b.json","1_yk.json","20_a.json","2_w.json","3_vo.json","4_u.json","5_t.json","6_s.json","7_r.json","8_p.json","9_n.json"].forEach((function(e){for(var n=e.replace(/^\d\d?_/,"").replace(/\.json$/,""),o=0;o<n.length;++o){var i=n[o];t.set(i,e)}})),t}var l=!0,f=l?"https://anvaka.github.io/sayit-data/2/":"http://localhost:8081/",p=d(f),g=p;function v(t,e,o){if(t=t&&t.trim(),t){t=t.toLocaleLowerCase();var i,r=!1,s=n("148d")();s.maxDepth=e;var u=[],c=0;return o.startDownload(),h(),{dispose:d,graph:s}}function d(){r=!0,i&&(i=null)}function h(){p(t)}function l(t){var n=t[0],o=s.getNode(n);o||(o=s.addNode(n,{depth:0,size:g.getSize(n)})),t.forEach((function(t,i){if(0!==i){var r=s.hasNode(t);if(r){var a=s.getLink(t,n)||s.getLink(n,t);a||s.addLink(n,t)}else{var c=o.data.depth+1;s.addNode(t,{depth:c,size:g.getSize(t)}),s.addLink(n,t),c<e&&u.push(t)}}})),setTimeout(f,c)}function f(){if(!r)if(0!==u.length){var t=u.shift();p(t),o.updateLayout(u.length,t)}else a.fire("graph-ready",s)}function p(t){i=g.getRelated(t),i.then((function(e){return v(e,t)})).catch((function(e){var n="Failed to download "+t+"; Message: "+e;console.error(n),o.downloadError(n),f()}))}function v(t,e){t&&t.length||(t=[e]),l(t)}}var y,m=n("d4ec"),w=n("bee2"),b=function(){function t(){Object(m["a"])(this,t),this.message="",this.phase="none",this.download={errors:[],remaining:0,currentWord:""},this.layout={iteration:0},this.working=!0}return Object(w["a"])(t,[{key:"startDownload",value:function(){this.phase="download"}},{key:"startLayout",value:function(){this.message="Finished download. Constructing layout...",this.phase="layout"}},{key:"setLayoutCompletion",value:function(t){"layout"===this.phase&&(this.message="Finished download. Constructing layout ".concat(t,"%..."))}},{key:"updateLayout",value:function(t,e){this.download.currentWord=e,this.download.remaining=t,this.message="Remaining: ".concat(t,". Downloading ").concat(e)}},{key:"done",value:function(){this.working=!1}},{key:"downloadError",value:function(t){this.download.errors.push(t)}},{key:"reset",value:function(){this.phase="none",this.download.errors=[],this.download.remaining=0,this.download.currentWord="",this.layout.iteration=0,this.message="",this.working=!0}}]),t}(),x=n("9cf4"),k=x({query:""},{useSearch:!0}),_=k.get(),S={hasGraph:!1,maxDepth:_.maxDepth||2,progress:new b,graph:null,query:_.query};S.query&&E(S.query);var L=S;function C(t){S.query=t.query}function E(t){return S.hasGraph=!0,S.progress.reset(),k.set("query",t),y&&y.dispose(),y=v(t,S.maxDepth,S.progress),y.graph.rootId=t,S.graph=Object.freeze(y.graph),y.graph}k.onChange(C);var j=n("8417"),N=n.n(j),M=(n("9911"),n("fb6a"),n("7d05")),P=n.n(M),q=(n("1276"),"http://www.w3.org/2000/svg"),T="http://www.w3.org/XML/1998/namespace";function D(t,e){e=e||{},"useFastTextMeasure"in e||(e.useFastTextMeasure=!1);var n={},o=Object.create(null),i="abcdefghijklmnopqrstuvwxyz",r={},s={1:.4951923076923077,.875:.43509615384615385,.833:.41346153846153844,.75:.3701923076923077,.5:.24459134615384615};return a;function a(a,u){u<1&&(u=Math.round(1e3*u)/1e3);var c=a+u,d=n[c];if(d)return d;var h={};n[c]=h;var l=window.document.createElementNS(q,"text");return l.setAttributeNS(null,"font-size",u),l.setAttributeNS(T,"xml:space","preserve"),t.appendChild(l),h.words=a.split(/\s/).map(g),h.spaceWidth=p(),h.totalWidth=f(h.words,h.spaceWidth),t.removeChild(l),h;function f(t,e){var n=0;return t.forEach((function(t){n+=t.width})),n+=(t.length-1)*e,n}function p(){var t="space"+u,e=r[t];return e||(l.textContent=" ",e=O(l),r[t]=e),e}function g(t){return{text:t,width:v(t)}}function v(t){return e.useFastTextMeasure?m(t):y(t)}function y(t){var e=t+u,n=o[e];if(void 0===n){if(l.textContent=t,n=O(l),0===n&&t.length>0){var i=s[u];if(void 0===i)throw new Error("Font size is not overriden for safari "+u);n=i*t.length}o[e]=n}return n}function m(t){var e=r[u];if(!e){l.textContent=i;var n=O(l);e=n/i.length,0===e&&(e=s[u]),r[u]=e}return e*t.length}}}function O(t){var e=t.getBBox();return e.width}n("4c53");var I=function(){function t(e,n){Object(m["a"])(this,t),this.x=e,this.y=n}return Object(w["a"])(t,[{key:"normalize",value:function(){var t=Math.sqrt(this.x*this.x+this.y*this.y);0===t&&(t=1e-4),this.x/=t,this.y/=t}},{key:"mag",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"add",value:function(t){this.x+=t.x,this.y+=t.y}},{key:"sub",value:function(t){this.x-=t.x,this.y-=t.y}},{key:"div",value:function(t){this.x/=t,this.y/=t}},{key:"mult",value:function(t){this.x*=t,this.y*=t}},{key:"limit",value:function(t){var e=this.mag();e>t&&(this.x*=t/e,this.y*=t/e)}},{key:"distanceTo",value:function(t){var e=this.x-t.x,n=this.y-t.y;return Math.sqrt(e*e+n*n)}}],[{key:"sub",value:function(e,n){return new t(e.x-n.x,e.y-n.y)}},{key:"dist",value:function(t,e){var n=t.x-e.x,o=t.y-e.y;return Math.sqrt(n*n+o*o)}}]),t}(),z=n("d9da")(45),F=function(){function t(e){Object(m["a"])(this,t),this.graph=e,this.boids=new Map,this.neighbors=[]}return Object(w["a"])(t,[{key:"run",value:function(){var t=this,e=this.boids;e.forEach((function(n,o){var i=[];t.graph.forEachLinkedNode(o,(function(t){var n=e.get(t.id);n&&i.push(n)})),n.run(i)}))}},{key:"addBoid",value:function(t,e){this.boids.set(t,e),this.neighbors.push(e)}},{key:"setDesiredBoidPosition",value:function(t,e){var n=this.boids.get(t);n&&n.setDesiredPosition(e.x,e.y)}}]),t}(),A=function(){function t(e,n){Object(m["a"])(this,t),this.acceleration=new I(0,0);var o=2*z.nextDouble()*Math.PI;this.velocity=new I(Math.cos(o),Math.sin(o)),this.position=new I(e,n),this.desiredPosition=new I(0,0),this.r=400,this.maxspeed=3,this.maxforce=.08}return Object(w["a"])(t,[{key:"run",value:function(t){this.flock(t),this.borders(),this.update()}},{key:"applyForce",value:function(t,e){t.div(e),this.acceleration.add(t)}},{key:"setDesiredPosition",value:function(t,e){this.desiredPosition.x=t,this.desiredPosition.y=e}},{key:"flock",value:function(t){var e=this.separate(t),n=this.align(t),o=this.cohesion(t),i=t.length||1;this.applyForce(e,i),this.applyForce(n,i),this.applyForce(o,i);var r=I.sub(this.desiredPosition,this.position);r.limit(.091),this.applyForce(r,i)}},{key:"update",value:function(){this.velocity.add(this.acceleration),this.velocity.limit(this.maxspeed),this.position.add(this.velocity),this.acceleration.mult(0)}},{key:"seek",value:function(t){var e=I.sub(t,this.position);e.normalize(),e.mult(this.maxspeed);var n=I.sub(e,this.velocity);return n.limit(1*this.maxforce),n}},{key:"borders",value:function(){}},{key:"separate",value:function(t){var e=this,n=40,o=new I(0,0,0),i=0;return t.forEach((function(t){var r=e.position.distanceTo(t.position);if(r>0&&r<n){var s=I.sub(e.position,t.position);s.normalize(),s.div(r),o.add(s),i++}})),i>0&&o.div(i),o.mag()>0&&(o.normalize(),o.mult(this.maxspeed),o.sub(this.velocity),o.limit(this.maxforce)),o}},{key:"align",value:function(t){var e=this,n=300,o=new I(0,0),i=0;if(t.forEach((function(t){var r=I.dist(e.position,t.position);r>0&&r<n&&(o.add(t.velocity),i++)})),i>0){o.div(i),o.normalize(),o.mult(this.maxspeed);var r=I.sub(o,this.velocity);return r.limit(this.maxforce),r}return new I(0,0)}},{key:"cohesion",value:function(t){var e=this,n=300,o=new I(0,0),i=0;return t.forEach((function(t){var r=I.dist(e.position,t.position);r>0&&r<n&&(o.add(t.position),i++)})),i>0?(o.div(i),this.seek(o)):new I(0,0)}}]),t}(),R=n("d9da");function Q(t){var e=new Map,n=R(42),o=new F(t);return{addNode:i,getNodePosition:r,setDesiredNodePosition:a,step:s};function i(t){var i={x:1e3*(n.nextDouble()-.5),y:1e3*(n.nextDouble()-.5)},r=new A(i.x,i.y);return o.addBoid(t,r),e.set(t,r),r}function r(t){var n=e.get(t);return n||(n=i(t)),n.position}function s(){o.run()}function a(t,e){o.setDesiredBoidPosition(t,e)}}function W(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,o=0,i=0;return{step:r,getNodePosition:a,done:s};function r(){i+=1}function s(){return i>n}function a(r){o=u(i/n);var s=t.getNodePosition(r),a=e.getNodePosition(r);return{x:s.x*(1-o)+a.x*o,y:s.y*(1-o)+a.y*o}}function u(t){return t*(2-t)}}n("a630"),n("6062"),n("f00c"),n("a9e3");var G=n("a0c6"),$=n.n(G),H=n("8ea0"),B=n("148d"),J=n.n(B);function V(t){var e=H["a"].from(t),n=e.triangles,o=J()();t.forEach((function(t){o.addNode(t.id,t)}));for(var i=n.length;i;){--i;var r=t[n[i]];--i;var s=t[n[i]];--i;var a=t[n[i]];K(r.id,s.id,o),K(s.id,a.id,o),K(a.id,r.id,o)}return o}function K(t,e,n){n.addLink(t,e)}var X=n("148d");function U(t){var e=X();t.forEach((function(t){e.addLink(t.from.id,t.to.id)}));var n=t[0].from.id;return{getGraph:function(){return e},getRootId:function(){return n},get:function(t){return e.gentNode(t)}}}var Y=n("d9da"),Z=function t(e,n){Object(m["a"])(this,t),this.from=e,this.to=n};function tt(t,e){var n=[];e=e||{};var o=e.canMove||et,i=e.pullX||!1,r=e.pullY||!1;if(!(t.size<2)){if(2!==t.size){t.forEach((function(t){var e=[t.cx,t.cy];e.id=t.id,n.push(e)}));var s=0,a=V(n);a.forEachLink(y);var u,c=$()(a,(function(t){return t.data})),d=c.map((function(t){return new Z(f(t.fromId),f(t.toId))})),h=Y.randomIterator(d);return h.shuffle(),d.length>0&&(u=U(d),p(u)),s}var l=Array.from(t).map((function(t){return t[1]}));g(l[0],l[1])}function f(e){return t.get(e)}function p(t){var e=t.getGraph(),n=new Set;function o(t){if(!n.has(t)){n.add(t);var i=f(t);e.forEachLinkedNode(t,(function(t){if(!n.has(t.id)){var e=f(t.id);g(i,e),o(t.id)}}))}}o(t.getRootId())}function g(t,e){if(w(t,e)){var n=v(t,e),i=e.cx-t.cx,r=e.cy-t.cy;Number.isFinite(n)||(n=1,i=.001,r=-.001),o(e.id)?(e.cx=t.cx+n*i,e.cy=t.cy+n*r):(t.cx=e.cx-n*i,t.cy=e.cy-n*r),s+=Math.sqrt(n*n*(i*i+r*r))}}function v(t,e){var n=Math.abs(t.cx-e.cx),o=Math.abs(t.cy-e.cy),i=(t.width+e.width)/2,r=(t.height+e.height)/2,s=Math.min(i/n,r/o);return s}function y(t){var e=f(t.fromId),n=f(t.toId),o=m(e,n);t.data=o}function m(t,e){if(w(t,e)){var n=x(t,e),o=v(t,e);return-(o-1)*n}return b(t,e)}function w(t,e){return!!i||(t.left>e.right||e.left>t.right?i:!(t.top>e.bottom||e.top>t.bottom)||r)}function b(t,e){if(w(t,e))return 0;var n=0,o=0;return t.right<e.left?n=e.right-t.left:e.right<t.left&&(n=t.left-e.right),t.top<e.bottom?o=e.bottom-t.top:e.top<t.bottom&&(o=t.bottom-e.top),Math.sqrt(n*n+o*o)}function x(t,e){var n=t.cx-e.cx,o=t.cy-e.cy;return Math.sqrt(n*n+o*o)}}function et(){return!0}var nt=function(){function t(e){if(Object(m["a"])(this,t),Object.assign(this,e),!ot(this.left))throw new Error("Left is wrong");if(!ot(this.top))throw new Error("top is wrong");if(!ot(this.width))throw new Error("width is wrong");if(!ot(this.height))throw new Error("height is wrong")}return Object(w["a"])(t,[{key:"inflate",value:function(t){this.left+=t*this.width/2,this.top+=t*this.height/2,this.width*=t,this.height*=t}},{key:"right",get:function(){return this.left+this.width}},{key:"bottom",get:function(){return this.top+this.height}},{key:"cx",get:function(){return this.left+this.width/2},set:function(t){this.left=t-this.width/2}},{key:"cy",get:function(){return this.top+this.height/2},set:function(t){this.top=t-this.height/2}}]),t}();function ot(t){return!!Number.isFinite(t)}var it=n("00c7"),rt=n("2b44"),st=1,at=2,ut=3,ct=4;function dt(t,e){var n=k(t),o=Q(t),i=W(o,n),r=!1,s=0,a=0,u=2e3,c=2e3,d=st,h=new Map,l=it({step:y,pinNode:x,getNodePosition:v,addNode:g,setGraphReady:f,getGraphReady:p});return l;function f(){s=0,a=0,r=!0}function p(){return r}function g(t,e){o.addNode(t,e),h.set(t,e)}function v(t){return d===st||d===ut?o.getNodePosition(t):d===ct?n.getNodePosition(t):d===at?i.getNodePosition(t):void 0}function y(){if(!r||s<u){d=st;var t=window.performance.now();o.step();do{n.step(),s+=1}while(window.performance.now()-t<10);a+=window.performance.now()-t,a>c&&(s=u);var h=Math.min(1,Math.max(a/c,s/u));return m(),e.setLayoutCompletion(Math.round(100*h)),s>=u&&(d=ut),!0}return d===ut?(w(),d=at,!0):d===at&&(i.step(),i.done()&&(d=ct,l.fire("ready",l)),!0)}function m(){t.forEachNode((function(t){var e=n.getNodePosition(t.id);o.setDesiredNodePosition(t.id,e)}))}function w(){var t=b(),e=0,o=0;do{var i=tt(t);o=Math.abs(i-e),e=i}while(o>1);t.forEach((function(t,e){n.setNodePosition(e,t.left-t.dx,t.top-t.dy)}))}function b(){var t=new Map;return h.forEach((function(e,o){var i=n.getNodePosition(o),r=e.width,s=e.height,a=new nt({id:o,left:i.x+e.x,top:i.y+e.y,dx:e.x,dy:e.y,width:r,height:s});t.set(o,a)})),t}function x(t){n.pinNode(t,!0)}function k(){return rt(t,{springLength:20,springCoeff:.002,gravity:-1.2,theta:.8,dragCoeff:.02,timeStep:14,nodeMass:function(e){var n=t.getLinks(e),o=n?n.length:1,i=t.getNode(e);o*=3*i.data.size;var r=e.length*o;return r||1}})}}var ht=n("f404"),lt=n("d9da")(42),ft=n("00c7");function pt(t,e,n){var o=new Map,i=[],r=new Map,s=20,a=t.maxDepth;t.forEachLink(p),i.sort((function(t,e){return f(t)-f(e)}));var u=requestAnimationFrame(h),c=ft({getLinkInfo:l,dispose:d});return c;function d(){u&&(cancelAnimationFrame(u),u=null)}function h(){while(r.size<s&&i.length>0){var t=i.pop(),e=Math.round(Math.abs(30*lt.gaussian()))+1;r.set(t.id,g(t,e))}r.forEach((function(t,e){t.step(),t.isDone&&r.delete(e)})),(i.length>0||r.size>0)&&(u=requestAnimationFrame(h))}function l(t){return o.get(t)}function f(e){var n=t.getNode(e.fromId).data,o=t.getNode(e.toId).data,i=(n.depth+o.depth)/2;return(a-i)/a}function p(t){i.push(t)}function g(t,i){var r=0,s=e.getNodePosition(t.fromId),a=e.getNodePosition(t.toId),u=f(t),d=8*u+2,h=Math.round(125*(1-u)+75),l={step:p,isDone:!1};return l;function p(){var e=gt(r/i),u=s.x*(1-e)+a.x*e,f=s.y*(1-e)+a.y*e,p=o.get(t.id),g="M".concat(s.x,",").concat(s.y," L").concat(u,",").concat(f);if(p)p.ui.attr("d",g);else{var v=ht("path",{id:t.id,"stroke-width":d,fill:"black",stroke:"rgb(".concat(h,", ").concat(h,", ").concat(h,")"),d:g}),y={ui:v,link:t};o.set(t.id,y),c.fire("beforeAddLink",y),n.appendChild(v)}r+=1,r>i&&(l.isDone=!0)}}}function gt(t){return t*(2-t)}var vt=n("f404");function yt(t){var e,n=document.querySelector("#scene"),o=n.querySelector("#nodes"),i=n.querySelector("#edges"),r=0,s=0,u=P()(n),c={left:-500,right:500,top:-500,bottom:500};u.showRectangle(c);var d,h,l,f=new Map,p=0,g=D(n);return a.on("graph-ready",E),{render:C,dispose:v};function v(){q(),a.off("graph-ready",E)}function y(t){var e=t.target;if(o.contains(e)){var n=S(e);a.fire("show-subreddit",n),m(n)}}function m(t){L("hovered");var e=f.get(t);b(e),h.forEachLinkedNode(t,(function(t,e){var n=f.get(t.id);n.classList.add("hovered"),_(n);var o=l.getLinkInfo(e.id);if(o){var i=o.ui;b(i),_(i)}})),_(e)}function w(t){var e=t.link,n=t.ui;if(e.fromId===h.rootId||e.toId===h.rootId){b(n);var i=o.querySelector("#node-"+e.toId);b(i);var r=o.querySelector("#node-"+e.fromId);b(r)}}function b(t){t.classList.add("hovered")}function x(t){var e=t.target;o.contains(e)&&(t.stopPropagation(),k(t))}function k(t){var e=t.target;if(o.contains(e)){var n=S(e);n&&(a.fire("new-search",n),u.showRectangle(c))}}function _(t){var e=t.parentNode;e.removeChild(t),e.appendChild(t)}function S(t){while(t){if(t.classList.contains("node"))return t.id.slice("node-".length);t=t.parentNode}}function L(t){var e=n.querySelectorAll(".".concat(t));if(e)for(var o=0;o<e.length;++o)e[o].classList.remove(t)}function C(e){q(),h=e,d=dt(h,t),d.on("ready",M),f=new Map,h.forEachNode(z),h.on("changed",N),cancelAnimationFrame(p),p=requestAnimationFrame(j)}function E(e){e===h&&(d.setGraphReady(),t.startLayout())}function j(){d.step()&&(p=requestAnimationFrame(j)),A()}function N(t){t.forEach((function(t){"add"===t.changeType&&t.node&&z(t.node)}))}function M(){t.done(),l=pt(h,d,i),document.addEventListener("click",y),document.addEventListener("dblclick",x,!0),document.addEventListener("touchend",T),l.on("beforeAddLink",w),u.on("pan",O)}function q(){I(o),I(i),document.removeEventListener("click",y),document.removeEventListener("dblclick",x,!0),document.removeEventListener("touchend",T),u.off("pan",O),d&&d.off("ready",M),h&&h.off("changed",N),l&&l.dispose()}function T(t){var n=new Date,o=n-s,i=n-r;s=n,clearTimeout(e),i<500||(o<300?k(t):e=setTimeout((function(){return y(t)}),320))}function O(){r=new Date}function I(t){while(t.lastChild)t.removeChild(t.lastChild)}function z(t){var e=1.2*t.data.size,n=R(t.id);0===t.data.depth&&d.pinNode(t);var i=F(t.id,e);d.addNode(t.id,i);var r={x:i.x,y:i.y,width:i.width,height:i.height,rx:i.rx,ry:i.ry,fill:"white","stroke-width":i.strokeWidth,stroke:"#aaa"},s={"font-size":i.fontSize,x:i.px,y:i.py},a=vt("rect",r),u=vt("text",s);u.text(t.id);var c=vt("g",{class:"node",id:"node-"+t.id,transform:"translate(".concat(n.x,", ").concat(n.y,")")});c.appendChild(a),c.appendChild(u),o.appendChild(c),f.set(t.id,c)}function F(t,e){var n=24*e+12,o=g(t,n),i=o.totalWidth+6*o.spaceWidth,r=1.6*n;return{fontSize:n,width:i,height:r,x:-i/2,y:-r/2,rx:15*e+2,ry:15*e+2,px:-i/2+3*o.spaceWidth,py:-r/2+1.1*n,strokeWidth:4*e+1}}function A(){f.forEach((function(t,e){var n=R(e);t.attr("transform","translate(".concat(n.x,", ").concat(n.y,")"))}))}function R(t){return d.getNodePosition(t)}}var mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("div",{staticClass:"background absolute",on:{click:function(e){return e.preventDefault(),t.close(e)}}}),n("div",{staticClass:"content"},[n("h3",[t._v(" Related subreddits "),n("a",{staticClass:"close bold highlight",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.close(e)}}},[t._v("close")])]),n("p",[t._v("This website shows you a graph of related subreddits for any given one")]),n("img",{staticStyle:{width:"100%"},attrs:{src:"https://i.imgur.com/1dJiwRC.png",alt:"Related Subreddits"}}),n("p",[t._v(' The relationship is determined by a metric "users who posted to this subreddit also post to...". Under the hood I\'m using Jaccard Similarity to determine degree of similarity. ')]),t._m(0),n("p",[t._v("I hope you like it! Please let me know.")]),t._m(1),n("a",{staticClass:"large-close bold highlight",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.close(e)}}},[t._v("close")])])])},wt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v(" Find the source code "),n("a",{staticClass:"highlight",attrs:{href:"http://github.com/anvaka/sayit"}},[t._v("on GitHub.")])]),n("li",[t._v(" Stay tuned for updates on "),n("a",{staticClass:"highlight",attrs:{href:"https://twitter.com/anvaka"}},[t._v("Twitter.")])]),n("li",[n("a",{staticClass:"highlight",attrs:{href:"https://www.patreon.com/anvaka"}},[t._v("Support me on Patreon")]),t._v(" . ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("With passion, "),n("br"),t._v("Anvaka ")])}],bt={mounted:function(){var t=this;this.closeHandler=function(e){27===e.keyCode&&(e.preventDefault(),t.close())},document.addEventListener("keyup",this.closeHandler)},beforeDestroy:function(){document.removeEventListener("keyup",this.closeHandler)},methods:{close:function(){this.$emit("close")}}},xt=bt,kt=(n("881e"),n("2877")),_t=Object(kt["a"])(xt,mt,wt,!1,null,null,null),St=_t.exports,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ak-typeahead"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentQuery,expression:"currentQuery"}],ref:"input",attrs:{autofocus:"",readonly:t.readonly,autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",placeholder:t.placeholder},domProps:{value:t.currentQuery},on:{input:[function(e){e.target.composing||(t.currentQuery=e.target.value)},t.getSuggestionsInternal],keydown:t.cycleTheList}}),t.currentQuery?n("a",{staticClass:"search-submit",attrs:{type:"submit",href:"#"},on:{click:function(e){return e.preventDefault(),t.pickCurrentText(e)}}},[t._v("Go")]):t._e(),t.showSuggestions?n("ul",{staticClass:"suggestions"},t._l(t.suggestions,(function(e,o){return n("li",{key:o},[n("a",{staticClass:"suggestion",class:{selected:e.selected},attrs:{href:"#"},domProps:{innerHTML:t._s(e.html)},on:{click:function(n){return n.preventDefault(),t.pickSuggestion(e)}}})])})),0):t._e(),t.showLoading?n("ul",{staticClass:"suggestions"},[n("li",{staticClass:"searching"},[t.loadingError?t._e():n("span",[t._v("Searching...")]),t.loadingError?n("div",{staticClass:"loading-error"},[n("div",[t._v("Failed to get reddit completions:")]),n("pre",[t._v(t._s(t.loadingError))])]):t._e()])]):t._e()])},Ct=[],Et={props:{readonly:{default:!1},placeholder:{default:"Type here"},getSuggestions:{default:function(t){return t.split()}},query:{default:""},delay:{default:80}},data:function(){return{currentSelected:-1,showSuggestions:!1,showLoading:!1,loadingError:null,suggestions:[],currentQuery:this.query}},watch:{query:function(t){this.currentQuery=t}},methods:{refresh:function(){this.showSuggestions&&this.getSuggestionsInternal()},hideSuggestions:function(){this.showSuggestions=!1,this.showLoading=!1,this.pendingKeyToShow=!0},showIfNeeded:function(t){this.pendingKeyToShow||(this.showSuggestions=t)},focus:function(){this.$refs.input.focus()},pickCurrentText:function(){this.pickSuggestion({text:this.currentQuery})},pickSuggestion:function(t){this.currentQuery=t.text,this.hideSuggestions(),this.$emit("selected",this.currentQuery)},getSuggestionsInternal:function(){var t=this;t.previous&&window.clearTimeout(t.previous),t.currentQuery?t.previous=window.setTimeout((function(){t.previous=null;var e=t.currentQuery,n=t.getSuggestions(e);if(Array.isArray(n))t.suggestions=n.map((function(t){return{selected:!1,text:t.text,html:t.html}})),t.currentSelected=-1,t.showIfNeeded(n&&n.length>0);else{if(!n)throw new Error("Could not parse suggestions response");t.loadingError=null,t.showLoading=!0,n.then((function(e){t.showLoading=!1,e=e||[],t.suggestions=e.map((function(t){return{selected:!1,text:t.text,html:t.html}})),t.currentSelected=-1,t.showIfNeeded(e&&e.length>0)}),(function(e){t.loadingError=e}))}}),t.delay):this.showSuggestions=!1},cycleTheList:function(t){var e,n=this.suggestions,o=this.currentSelected;if(this.pendingKeyToShow=!1,38===t.which)e=-1;else if(40===t.which)e=1;else{if(13===t.which)return n[o]?this.pickSuggestion(n[o]):this.pickSuggestion({text:this.currentQuery}),void t.preventDefault();27===t.which&&this.hideSuggestions()}e&&0!==n.length&&(t.preventDefault(),o>=0&&(this.suggestions[o].selected=!1),o+=e,o<0&&(o=n.length-1),o>=n.length&&(o=0),this.suggestions[o].selected=!0,this.currentSelected=o)}}},jt=Et,Nt=(n("234b"),Object(kt["a"])(jt,Lt,Ct,!1,null,null,null)),Mt=Nt.exports,Pt={name:"App",data:function(){return{aboutVisible:!1,subreddit:null,appState:L,tooltip:{text:"",x:"",y:""}}},components:{About:St,Typeahead:Mt,Subreddit:N.a},computed:{isLoading:function(){return L.progress.working}},methods:{doSearch:function(t){L.query=t,this.onSubmit()},getSuggestions:function(t){return g.getSuggestion(t)},onSubmit:function(){if(L.query){E(L.query),console.log(L),this.renderer.render(L.graph);var t=document.querySelector(":focus");t&&t.blur()}},showSubreddit:function(t){this.subreddit=t}},mounted:function(){this.renderer=yt(L.progress),a.on("show-subreddit",this.showSubreddit),a.on("new-search",this.doSearch),L.graph&&(console.log(L),this.renderer.render(L.graph))},beforeDestroy:function(){a.off("show-subreddit",this.showSubreddit),a.off("new-search",this.doSearch)}},qt=Pt,Tt=(n("7faf"),Object(kt["a"])(qt,i,r,!1,null,null,null)),Dt=Tt.exports;o["default"].config.productionTip=!1,new o["default"]({render:function(t){return t(Dt)}}).$mount("#app")},"7faf":function(t,e,n){"use strict";n("8e84")},"881e":function(t,e,n){"use strict";n("a558")},"8e84":function(t,e,n){},a558:function(t,e,n){}});
//# sourceMappingURL=app.aaf0d45f.js.map