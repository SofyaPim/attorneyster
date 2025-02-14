(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function Kt(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Un(e,n,t){return n&&Kt(e.prototype,n),t&&Kt(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */var $t="(prefers-reduced-motion: reduce)",Oe=1,Wn=2,Ce=3,Me=4,$e=5,it=6,st=7,Hn={CREATED:Oe,MOUNTED:Wn,IDLE:Ce,MOVING:Me,SCROLLING:$e,DRAGGING:it,DESTROYED:st};function de(e){e.length=0}function _e(e,n,t){return Array.prototype.slice.call(e,n,t)}function z(e){return e.bind.apply(e,[null].concat(_e(arguments,1)))}var cn=setTimeout,pt=function(){};function qt(e){return requestAnimationFrame(e)}function vt(e,n){return typeof n===e}function ke(e){return!Ct(e)&&vt("object",e)}var Pt=Array.isArray,fn=z(vt,"function"),me=z(vt,"string"),qe=z(vt,"undefined");function Ct(e){return e===null}function ln(e){try{return e instanceof(e.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function je(e){return Pt(e)?e:[e]}function ne(e,n){je(e).forEach(n)}function wt(e,n){return e.indexOf(n)>-1}function at(e,n){return e.push.apply(e,je(n)),e}function fe(e,n,t){e&&ne(n,function(r){r&&e.classList[t?"add":"remove"](r)})}function oe(e,n){fe(e,me(n)?n.split(" "):n,!0)}function Ze(e,n){ne(n,e.appendChild.bind(e))}function Mt(e,n){ne(e,function(t){var r=(n||t).parentNode;r&&r.insertBefore(t,n)})}function ze(e,n){return ln(e)&&(e.msMatchesSelector||e.matches).call(e,n)}function vn(e,n){var t=e?_e(e.children):[];return n?t.filter(function(r){return ze(r,n)}):t}function Je(e,n){return n?vn(e,n)[0]:e.firstElementChild}var Ue=Object.keys;function Le(e,n,t){return e&&(t?Ue(e).reverse():Ue(e)).forEach(function(r){r!=="__proto__"&&n(e[r],r)}),e}function We(e){return _e(arguments,1).forEach(function(n){Le(n,function(t,r){e[r]=n[r]})}),e}function Ee(e){return _e(arguments,1).forEach(function(n){Le(n,function(t,r){Pt(t)?e[r]=t.slice():ke(t)?e[r]=Ee({},ke(e[r])?e[r]:{},t):e[r]=t})}),e}function jt(e,n){ne(n||Ue(e),function(t){delete e[t]})}function ue(e,n){ne(e,function(t){ne(n,function(r){t&&t.removeAttribute(r)})})}function x(e,n,t){ke(n)?Le(n,function(r,i){x(e,i,r)}):ne(e,function(r){Ct(t)||t===""?ue(r,n):r.setAttribute(n,String(t))})}function De(e,n,t){var r=document.createElement(e);return n&&(me(n)?oe(r,n):x(r,n)),t&&Ze(t,r),r}function re(e,n,t){if(qe(t))return getComputedStyle(e)[n];Ct(t)||(e.style[n]=""+t)}function He(e,n){re(e,"display",n)}function dn(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function ie(e,n){return e.getAttribute(n)}function Zt(e,n){return e&&e.classList.contains(n)}function ee(e){return e.getBoundingClientRect()}function Ie(e){ne(e,function(n){n&&n.parentNode&&n.parentNode.removeChild(n)})}function gn(e){return Je(new DOMParser().parseFromString(e,"text/html").body)}function ce(e,n){e.preventDefault(),n&&(e.stopPropagation(),e.stopImmediatePropagation())}function En(e,n){return e&&e.querySelector(n)}function Vt(e,n){return n?_e(e.querySelectorAll(n)):[]}function le(e,n){fe(e,n,!1)}function Nt(e){return e.timeStamp}function Se(e){return me(e)?e:e?e+"px":""}var Qe="splide",xt="data-"+Qe;function Fe(e,n){if(!e)throw new Error("["+Qe+"] "+(n||""))}var he=Math.min,ct=Math.max,ft=Math.floor,Ye=Math.ceil,J=Math.abs;function mn(e,n,t){return J(e-n)<t}function ot(e,n,t,r){var i=he(n,t),o=ct(n,t);return r?i<e&&e<o:i<=e&&e<=o}function be(e,n,t){var r=he(n,t),i=ct(n,t);return he(ct(r,e),i)}function bt(e){return+(e>0)-+(e<0)}function Rt(e,n){return ne(n,function(t){e=e.replace("%s",""+t)}),e}function Bt(e){return e<10?"0"+e:""+e}var Jt={};function Yn(e){return""+e+Bt(Jt[e]=(Jt[e]||0)+1)}function hn(){var e=[];function n(a,f,u,v){i(a,f,function(s,h,d){var g="addEventListener"in s,c=g?s.removeEventListener.bind(s,h,u,v):s.removeListener.bind(s,u);g?s.addEventListener(h,u,v):s.addListener(u),e.push([s,h,d,u,c])})}function t(a,f,u){i(a,f,function(v,s,h){e=e.filter(function(d){return d[0]===v&&d[1]===s&&d[2]===h&&(!u||d[3]===u)?(d[4](),!1):!0})})}function r(a,f,u){var v,s=!0;return typeof CustomEvent=="function"?v=new CustomEvent(f,{bubbles:s,detail:u}):(v=document.createEvent("CustomEvent"),v.initCustomEvent(f,s,!1,u)),a.dispatchEvent(v),v}function i(a,f,u){ne(a,function(v){v&&ne(f,function(s){s.split(" ").forEach(function(h){var d=h.split(".");u(v,d[0],d[1])})})})}function o(){e.forEach(function(a){a[4]()}),de(e)}return{bind:n,unbind:t,dispatch:r,destroy:o}}var Ne="mounted",Qt="ready",Ae="move",et="moved",An="click",Xn="active",Kn="inactive",$n="visible",qn="hidden",K="refresh",Q="updated",Xe="resize",Ft="resized",jn="drag",Zn="dragging",Jn="dragged",Gt="scroll",Ve="scrolled",Qn="overflow",_n="destroy",er="arrows:mounted",tr="arrows:updated",nr="pagination:mounted",rr="pagination:updated",yn="navigation:mounted",Tn="autoplay:play",ir="autoplay:playing",Sn="autoplay:pause",Ln="lazyload:loaded",In="sk",pn="sh",lt="ei";function H(e){var n=e?e.event.bus:document.createDocumentFragment(),t=hn();function r(o,a){t.bind(n,je(o).join(" "),function(f){a.apply(a,Pt(f.detail)?f.detail:[])})}function i(o){t.dispatch(n,o,_e(arguments,1))}return e&&e.event.on(_n,t.destroy),We(t,{bus:n,on:r,off:z(t.unbind,n),emit:i})}function dt(e,n,t,r){var i=Date.now,o,a=0,f,u=!0,v=0;function s(){if(!u){if(a=e?he((i()-o)/e,1):1,t&&t(a),a>=1&&(n(),o=i(),r&&++v>=r))return d();f=qt(s)}}function h(A){A||c(),o=i()-(A?a*e:0),u=!1,f=qt(s)}function d(){u=!0}function g(){o=i(),a=0,t&&t(a)}function c(){f&&cancelAnimationFrame(f),a=0,f=0,u=!0}function l(A){e=A}function _(){return u}return{start:h,rewind:g,pause:d,cancel:c,set:l,isPaused:_}}function ar(e){var n=e;function t(i){n=i}function r(i){return wt(je(i),n)}return{set:t,is:r}}function or(e,n){var t=dt(n||0,e,null,1);return function(){t.isPaused()&&t.start()}}function ur(e,n,t){var r=e.state,i=t.breakpoints||{},o=t.reducedMotion||{},a=hn(),f=[];function u(){var c=t.mediaQuery==="min";Ue(i).sort(function(l,_){return c?+l-+_:+_-+l}).forEach(function(l){s(i[l],"("+(c?"min":"max")+"-width:"+l+"px)")}),s(o,$t),h()}function v(c){c&&a.destroy()}function s(c,l){var _=matchMedia(l);a.bind(_,"change",h),f.push([c,_])}function h(){var c=r.is(st),l=t.direction,_=f.reduce(function(A,m){return Ee(A,m[1].matches?m[0]:{})},{});jt(t),g(_),t.destroy?e.destroy(t.destroy==="completely"):c?(v(!0),e.mount()):l!==t.direction&&e.refresh()}function d(c){matchMedia($t).matches&&(c?Ee(t,o):jt(t,Ue(o)))}function g(c,l,_){Ee(t,c),l&&Ee(Object.getPrototypeOf(t),c),(_||!r.is(Oe))&&e.emit(Q,t)}return{setup:u,destroy:v,reduce:d,set:g}}var gt="Arrow",Et=gt+"Left",mt=gt+"Right",Nn=gt+"Up",bn=gt+"Down",en="rtl",ht="ttb",Tt={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Nn,mt],ArrowRight:[bn,Et]};function sr(e,n,t){function r(o,a,f){f=f||t.direction;var u=f===en&&!a?1:f===ht?0:-1;return Tt[o]&&Tt[o][u]||o.replace(/width|left|right/i,function(v,s){var h=Tt[v.toLowerCase()][u]||v;return s>0?h.charAt(0).toUpperCase()+h.slice(1):h})}function i(o){return o*(t.direction===en?1:-1)}return{resolve:r,orient:i}}var ve="role",Pe="tabindex",cr="disabled",ae="aria-",tt=ae+"controls",Rn=ae+"current",tn=ae+"selected",te=ae+"label",kt=ae+"labelledby",On=ae+"hidden",zt=ae+"orientation",Ke=ae+"roledescription",nn=ae+"live",rn=ae+"busy",an=ae+"atomic",Ut=[ve,Pe,cr,tt,Rn,te,kt,On,zt,Ke],se=Qe+"__",ye="is-",St=Qe,on=se+"track",fr=se+"list",At=se+"slide",Dn=At+"--clone",lr=At+"__container",Wt=se+"arrows",_t=se+"arrow",Pn=_t+"--prev",Cn=_t+"--next",yt=se+"pagination",wn=yt+"__page",vr=se+"progress",dr=vr+"__bar",gr=se+"toggle",Er=se+"spinner",mr=se+"sr",hr=ye+"initialized",pe=ye+"active",Mn=ye+"prev",Vn=ye+"next",Ot=ye+"visible",Dt=ye+"loading",xn=ye+"focus-in",Bn=ye+"overflow",Ar=[pe,Ot,Mn,Vn,Dt,xn,Bn],_r={slide:At,clone:Dn,arrows:Wt,arrow:_t,prev:Pn,next:Cn,pagination:yt,page:wn,spinner:Er};function yr(e,n){if(fn(e.closest))return e.closest(n);for(var t=e;t&&t.nodeType===1&&!ze(t,n);)t=t.parentElement;return t}var Tr=5,un=200,Fn="touchstart mousedown",Lt="touchmove mousemove",It="touchend touchcancel mouseup click";function Sr(e,n,t){var r=H(e),i=r.on,o=r.bind,a=e.root,f=t.i18n,u={},v=[],s=[],h=[],d,g,c;function l(){E(),C(),m()}function _(){i(K,A),i(K,l),i(Q,m),o(document,Fn+" keydown",function(T){c=T.type==="keydown"},{capture:!0}),o(a,"focusin",function(){fe(a,xn,!!c)})}function A(T){var R=Ut.concat("style");de(v),le(a,s),le(d,h),ue([d,g],R),ue(a,T?R:["style",Ke])}function m(){le(a,s),le(d,h),s=M(St),h=M(on),oe(a,s),oe(d,h),x(a,te,t.label),x(a,kt,t.labelledby)}function E(){d=b("."+on),g=Je(d,"."+fr),Fe(d&&g,"A track/list element is missing."),at(v,vn(g,"."+At+":not(."+Dn+")")),Le({arrows:Wt,pagination:yt,prev:Pn,next:Cn,bar:dr,toggle:gr},function(T,R){u[R]=b("."+T)}),We(u,{root:a,track:d,list:g,slides:v})}function C(){var T=a.id||Yn(Qe),R=t.role;a.id=T,d.id=d.id||T+"-track",g.id=g.id||T+"-list",!ie(a,ve)&&a.tagName!=="SECTION"&&R&&x(a,ve,R),x(a,Ke,f.carousel),x(g,ve,"presentation")}function b(T){var R=En(a,T);return R&&yr(R,"."+St)===a?R:void 0}function M(T){return[T+"--"+t.type,T+"--"+t.direction,t.drag&&T+"--draggable",t.isNavigation&&T+"--nav",T===St&&pe]}return We(u,{setup:l,mount:_,destroy:A})}var we="slide",xe="loop",nt="fade";function Lr(e,n,t,r){var i=H(e),o=i.on,a=i.emit,f=i.bind,u=e.Components,v=e.root,s=e.options,h=s.isNavigation,d=s.updateOnMove,g=s.i18n,c=s.pagination,l=s.slideFocus,_=u.Direction.resolve,A=ie(r,"style"),m=ie(r,te),E=t>-1,C=Je(r,"."+lr),b;function M(){E||(r.id=v.id+"-slide"+Bt(n+1),x(r,ve,c?"tabpanel":"group"),x(r,Ke,g.slide),x(r,te,m||Rt(g.slideLabel,[n+1,e.length]))),T()}function T(){f(r,"click",z(a,An,w)),f(r,"keydown",z(a,In,w)),o([et,pn,Ve],L),o(yn,F),d&&o(Ae,P)}function R(){b=!0,i.destroy(),le(r,Ar),ue(r,Ut),x(r,"style",A),x(r,te,m||"")}function F(){var D=e.splides.map(function(S){var O=S.splide.Components.Slides.getAt(n);return O?O.slide.id:""}).join(" ");x(r,te,Rt(g.slideX,(E?t:n)+1)),x(r,tt,D),x(r,ve,l?"button":""),l&&ue(r,Ke)}function P(){b||L()}function L(){if(!b){var D=e.index;I(),p(),fe(r,Mn,n===D-1),fe(r,Vn,n===D+1)}}function I(){var D=B();D!==Zt(r,pe)&&(fe(r,pe,D),x(r,Rn,h&&D||""),a(D?Xn:Kn,w))}function p(){var D=Y(),S=!D&&(!B()||E);if(e.state.is([Me,$e])||x(r,On,S||""),x(Vt(r,s.focusableNodes||""),Pe,S?-1:""),l&&x(r,Pe,S?-1:0),D!==Zt(r,Ot)&&(fe(r,Ot,D),a(D?$n:qn,w)),!D&&document.activeElement===r){var O=u.Slides.getAt(e.index);O&&dn(O.slide)}}function V(D,S,O){re(O&&C||r,D,S)}function B(){var D=e.index;return D===n||s.cloneStatus&&D===t}function Y(){if(e.is(nt))return B();var D=ee(u.Elements.track),S=ee(r),O=_("left",!0),G=_("right",!0);return ft(D[O])<=Ye(S[O])&&ft(S[G])<=Ye(D[G])}function W(D,S){var O=J(D-n);return!E&&(s.rewind||e.is(xe))&&(O=he(O,e.length-O)),O<=S}var w={index:n,slideIndex:t,slide:r,container:C,isClone:E,mount:M,destroy:R,update:L,style:V,isWithin:W};return w}function Ir(e,n,t){var r=H(e),i=r.on,o=r.emit,a=r.bind,f=n.Elements,u=f.slides,v=f.list,s=[];function h(){d(),i(K,g),i(K,d)}function d(){u.forEach(function(L,I){l(L,I,-1)})}function g(){b(function(L){L.destroy()}),de(s)}function c(){b(function(L){L.update()})}function l(L,I,p){var V=Lr(e,I,p,L);V.mount(),s.push(V),s.sort(function(B,Y){return B.index-Y.index})}function _(L){return L?M(function(I){return!I.isClone}):s}function A(L){var I=n.Controller,p=I.toIndex(L),V=I.hasFocus()?1:t.perPage;return M(function(B){return ot(B.index,p,p+V-1)})}function m(L){return M(L)[0]}function E(L,I){ne(L,function(p){if(me(p)&&(p=gn(p)),ln(p)){var V=u[I];V?Mt(p,V):Ze(v,p),oe(p,t.classes.slide),R(p,z(o,Xe))}}),o(K)}function C(L){Ie(M(L).map(function(I){return I.slide})),o(K)}function b(L,I){_(I).forEach(L)}function M(L){return s.filter(fn(L)?L:function(I){return me(L)?ze(I.slide,L):wt(je(L),I.index)})}function T(L,I,p){b(function(V){V.style(L,I,p)})}function R(L,I){var p=Vt(L,"img"),V=p.length;V?p.forEach(function(B){a(B,"load error",function(){--V||I()})}):I()}function F(L){return L?u.length:s.length}function P(){return s.length>t.perPage}return{mount:h,destroy:g,update:c,register:l,get:_,getIn:A,getAt:m,add:E,remove:C,forEach:b,filter:M,style:T,getLength:F,isEnough:P}}function pr(e,n,t){var r=H(e),i=r.on,o=r.bind,a=r.emit,f=n.Slides,u=n.Direction.resolve,v=n.Elements,s=v.root,h=v.track,d=v.list,g=f.getAt,c=f.style,l,_,A;function m(){E(),o(window,"resize load",or(z(a,Xe))),i([Q,K],E),i(Xe,C)}function E(){l=t.direction===ht,re(s,"maxWidth",Se(t.width)),re(h,u("paddingLeft"),b(!1)),re(h,u("paddingRight"),b(!0)),C(!0)}function C(w){var D=ee(s);(w||_.width!==D.width||_.height!==D.height)&&(re(h,"height",M()),c(u("marginRight"),Se(t.gap)),c("width",R()),c("height",F(),!0),_=D,a(Ft),A!==(A=W())&&(fe(s,Bn,A),a(Qn,A)))}function b(w){var D=t.padding,S=u(w?"right":"left");return D&&Se(D[S]||(ke(D)?0:D))||"0px"}function M(){var w="";return l&&(w=T(),Fe(w,"height or heightRatio is missing."),w="calc("+w+" - "+b(!1)+" - "+b(!0)+")"),w}function T(){return Se(t.height||ee(d).width*t.heightRatio)}function R(){return t.autoWidth?null:Se(t.fixedWidth)||(l?"":P())}function F(){return Se(t.fixedHeight)||(l?t.autoHeight?null:P():T())}function P(){var w=Se(t.gap);return"calc((100%"+(w&&" + "+w)+")/"+(t.perPage||1)+(w&&" - "+w)+")"}function L(){return ee(d)[u("width")]}function I(w,D){var S=g(w||0);return S?ee(S.slide)[u("width")]+(D?0:B()):0}function p(w,D){var S=g(w);if(S){var O=ee(S.slide)[u("right")],G=ee(d)[u("left")];return J(O-G)+(D?0:B())}return 0}function V(w){return p(e.length-1)-p(0)+I(0,w)}function B(){var w=g(0);return w&&parseFloat(re(w.slide,u("marginRight")))||0}function Y(w){return parseFloat(re(h,u("padding"+(w?"Right":"Left"))))||0}function W(){return e.is(nt)||V(!0)>L()}return{mount:m,resize:C,listSize:L,slideSize:I,sliderSize:V,totalSize:p,getPadding:Y,isOverflow:W}}var Nr=2;function br(e,n,t){var r=H(e),i=r.on,o=n.Elements,a=n.Slides,f=n.Direction.resolve,u=[],v;function s(){i(K,h),i([Q,Xe],g),(v=_())&&(c(v),n.Layout.resize(!0))}function h(){d(),s()}function d(){Ie(u),de(u),r.destroy()}function g(){var A=_();v!==A&&(v<A||!A)&&r.emit(K)}function c(A){var m=a.get().slice(),E=m.length;if(E){for(;m.length<A;)at(m,m);at(m.slice(-A),m.slice(0,A)).forEach(function(C,b){var M=b<A,T=l(C.slide,b);M?Mt(T,m[0].slide):Ze(o.list,T),at(u,T),a.register(T,b-A+(M?0:E),C.index)})}}function l(A,m){var E=A.cloneNode(!0);return oe(E,t.classes.clone),E.id=e.root.id+"-clone"+Bt(m+1),E}function _(){var A=t.clones;if(!e.is(xe))A=0;else if(qe(A)){var m=t[f("fixedWidth")]&&n.Layout.slideSize(0),E=m&&Ye(ee(o.track)[f("width")]/m);A=E||t[f("autoWidth")]&&e.length||t.perPage*Nr}return A}return{mount:s,destroy:d}}function Rr(e,n,t){var r=H(e),i=r.on,o=r.emit,a=e.state.set,f=n.Layout,u=f.slideSize,v=f.getPadding,s=f.totalSize,h=f.listSize,d=f.sliderSize,g=n.Direction,c=g.resolve,l=g.orient,_=n.Elements,A=_.list,m=_.track,E;function C(){E=n.Transition,i([Ne,Ft,Q,K],b)}function b(){n.Controller.isBusy()||(n.Scroll.cancel(),T(e.index),n.Slides.update())}function M(S,O,G,q){S!==O&&w(S>G)&&(L(),R(P(V(),S>G),!0)),a(Me),o(Ae,O,G,S),E.start(O,function(){a(Ce),o(et,O,G,S),q&&q()})}function T(S){R(p(S,!0))}function R(S,O){if(!e.is(nt)){var G=O?S:F(S);re(A,"transform","translate"+c("X")+"("+G+"px)"),S!==G&&o(pn)}}function F(S){if(e.is(xe)){var O=I(S),G=O>n.Controller.getEnd(),q=O<0;(q||G)&&(S=P(S,G))}return S}function P(S,O){var G=S-W(O),q=d();return S-=l(q*(Ye(J(G)/q)||1))*(O?1:-1),S}function L(){R(V(),!0),E.cancel()}function I(S){for(var O=n.Slides.get(),G=0,q=1/0,$=0;$<O.length;$++){var ge=O[$].index,y=J(p(ge,!0)-S);if(y<=q)q=y,G=ge;else break}return G}function p(S,O){var G=l(s(S-1)-Y(S));return O?B(G):G}function V(){var S=c("left");return ee(A)[S]-ee(m)[S]+l(v(!1))}function B(S){return t.trimSpace&&e.is(we)&&(S=be(S,0,l(d(!0)-h()))),S}function Y(S){var O=t.focus;return O==="center"?(h()-u(S,!0))/2:+O*u(S)||0}function W(S){return p(S?n.Controller.getEnd():0,!!t.trimSpace)}function w(S){var O=l(P(V(),S));return S?O>=0:O<=A[c("scrollWidth")]-ee(m)[c("width")]}function D(S,O){O=qe(O)?V():O;var G=S!==!0&&l(O)<l(W(!1)),q=S!==!1&&l(O)>l(W(!0));return G||q}return{mount:C,move:M,jump:T,translate:R,shift:P,cancel:L,toIndex:I,toPosition:p,getPosition:V,getLimit:W,exceededLimit:D,reposition:b}}function Or(e,n,t){var r=H(e),i=r.on,o=r.emit,a=n.Move,f=a.getPosition,u=a.getLimit,v=a.toPosition,s=n.Slides,h=s.isEnough,d=s.getLength,g=t.omitEnd,c=e.is(xe),l=e.is(we),_=z(V,!1),A=z(V,!0),m=t.start||0,E,C=m,b,M,T;function R(){F(),i([Q,K,lt],F),i(Ft,P)}function F(){b=d(!0),M=t.perMove,T=t.perPage,E=w();var y=be(m,0,g?E:b-1);y!==m&&(m=y,a.reposition())}function P(){E!==w()&&o(lt)}function L(y,k,Z){if(!ge()){var X=p(y),j=W(X);j>-1&&(k||j!==m)&&(G(j),a.move(X,j,C,Z))}}function I(y,k,Z,X){n.Scroll.scroll(y,k,Z,function(){var j=W(a.toIndex(f()));G(g?he(j,E):j),X&&X()})}function p(y){var k=m;if(me(y)){var Z=y.match(/([+\-<>])(\d+)?/)||[],X=Z[1],j=Z[2];X==="+"||X==="-"?k=B(m+ +(""+X+(+j||1)),m):X===">"?k=j?D(+j):_(!0):X==="<"&&(k=A(!0))}else k=c?y:be(y,0,E);return k}function V(y,k){var Z=M||($()?1:T),X=B(m+Z*(y?-1:1),m,!(M||$()));return X===-1&&l&&!mn(f(),u(!y),1)?y?0:E:k?X:W(X)}function B(y,k,Z){if(h()||$()){var X=Y(y);X!==y&&(k=y,y=X,Z=!1),y<0||y>E?!M&&(ot(0,y,k,!0)||ot(E,k,y,!0))?y=D(S(y)):c?y=Z?y<0?-(b%T||T):b:y:t.rewind?y=y<0?E:0:y=-1:Z&&y!==k&&(y=D(S(k)+(y<k?-1:1)))}else y=-1;return y}function Y(y){if(l&&t.trimSpace==="move"&&y!==m)for(var k=f();k===v(y,!0)&&ot(y,0,e.length-1,!t.rewind);)y<m?--y:++y;return y}function W(y){return c?(y+b)%b||0:y}function w(){for(var y=b-($()||c&&M?1:T);g&&y-- >0;)if(v(b-1,!0)!==v(y,!0)){y++;break}return be(y,0,b-1)}function D(y){return be($()?y:T*y,0,E)}function S(y){return $()?he(y,E):ft((y>=E?b-1:y)/T)}function O(y){var k=a.toIndex(y);return l?be(k,0,E):k}function G(y){y!==m&&(C=m,m=y)}function q(y){return y?C:m}function $(){return!qe(t.focus)||t.isNavigation}function ge(){return e.state.is([Me,$e])&&!!t.waitForTransition}return{mount:R,go:L,scroll:I,getNext:_,getPrev:A,getAdjacent:V,getEnd:w,setIndex:G,getIndex:q,toIndex:D,toPage:S,toDest:O,hasFocus:$,isBusy:ge}}var Dr="http://www.w3.org/2000/svg",Pr="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",rt=40;function Cr(e,n,t){var r=H(e),i=r.on,o=r.bind,a=r.emit,f=t.classes,u=t.i18n,v=n.Elements,s=n.Controller,h=v.arrows,d=v.track,g=h,c=v.prev,l=v.next,_,A,m={};function E(){b(),i(Q,C)}function C(){M(),E()}function b(){var I=t.arrows;I&&!(c&&l)&&F(),c&&l&&(We(m,{prev:c,next:l}),He(g,I?"":"none"),oe(g,A=Wt+"--"+t.direction),I&&(T(),L(),x([c,l],tt,d.id),a(er,c,l)))}function M(){r.destroy(),le(g,A),_?(Ie(h?[c,l]:g),c=l=null):ue([c,l],Ut)}function T(){i([Ne,et,K,Ve,lt],L),o(l,"click",z(R,">")),o(c,"click",z(R,"<"))}function R(I){s.go(I,!0)}function F(){g=h||De("div",f.arrows),c=P(!0),l=P(!1),_=!0,Ze(g,[c,l]),!h&&Mt(g,d)}function P(I){var p='<button class="'+f.arrow+" "+(I?f.prev:f.next)+'" type="button"><svg xmlns="'+Dr+'" viewBox="0 0 '+rt+" "+rt+'" width="'+rt+'" height="'+rt+'" focusable="false"><path d="'+(t.arrowPath||Pr)+'" />';return gn(p)}function L(){if(c&&l){var I=e.index,p=s.getPrev(),V=s.getNext(),B=p>-1&&I<p?u.last:u.prev,Y=V>-1&&I>V?u.first:u.next;c.disabled=p<0,l.disabled=V<0,x(c,te,B),x(l,te,Y),a(tr,c,l,p,V)}}return{arrows:m,mount:E,destroy:M,update:L}}var wr=xt+"-interval";function Mr(e,n,t){var r=H(e),i=r.on,o=r.bind,a=r.emit,f=dt(t.interval,e.go.bind(e,">"),T),u=f.isPaused,v=n.Elements,s=n.Elements,h=s.root,d=s.toggle,g=t.autoplay,c,l,_=g==="pause";function A(){g&&(m(),d&&x(d,tt,v.track.id),_||E(),M())}function m(){t.pauseOnHover&&o(h,"mouseenter mouseleave",function(F){c=F.type==="mouseenter",b()}),t.pauseOnFocus&&o(h,"focusin focusout",function(F){l=F.type==="focusin",b()}),d&&o(d,"click",function(){_?E():C(!0)}),i([Ae,Gt,K],f.rewind),i(Ae,R)}function E(){u()&&n.Slides.isEnough()&&(f.start(!t.resetProgress),l=c=_=!1,M(),a(Tn))}function C(F){F===void 0&&(F=!0),_=!!F,M(),u()||(f.pause(),a(Sn))}function b(){_||(c||l?C(!1):E())}function M(){d&&(fe(d,pe,!_),x(d,te,t.i18n[_?"play":"pause"]))}function T(F){var P=v.bar;P&&re(P,"width",F*100+"%"),a(ir,F)}function R(F){var P=n.Slides.getAt(F);f.set(P&&+ie(P.slide,wr)||t.interval)}return{mount:A,destroy:f.cancel,play:E,pause:C,isPaused:u}}function Vr(e,n,t){var r=H(e),i=r.on;function o(){t.cover&&(i(Ln,z(f,!0)),i([Ne,Q,K],z(a,!0)))}function a(u){n.Slides.forEach(function(v){var s=Je(v.container||v.slide,"img");s&&s.src&&f(u,s,v)})}function f(u,v,s){s.style("background",u?'center/cover no-repeat url("'+v.src+'")':"",!0),He(v,u?"none":"")}return{mount:o,destroy:z(a,!1)}}var xr=10,Br=600,Fr=.6,Gr=1.5,kr=800;function zr(e,n,t){var r=H(e),i=r.on,o=r.emit,a=e.state.set,f=n.Move,u=f.getPosition,v=f.getLimit,s=f.exceededLimit,h=f.translate,d=e.is(we),g,c,l=1;function _(){i(Ae,C),i([Q,K],b)}function A(T,R,F,P,L){var I=u();if(C(),F&&(!d||!s())){var p=n.Layout.sliderSize(),V=bt(T)*p*ft(J(T)/p)||0;T=f.toPosition(n.Controller.toDest(T%p))+V}var B=mn(I,T,1);l=1,R=B?0:R||ct(J(T-I)/Gr,kr),c=P,g=dt(R,m,z(E,I,T,L),1),a($e),o(Gt),g.start()}function m(){a(Ce),c&&c(),o(Ve)}function E(T,R,F,P){var L=u(),I=T+(R-T)*M(P),p=(I-L)*l;h(L+p),d&&!F&&s()&&(l*=Fr,J(p)<xr&&A(v(s(!0)),Br,!1,c,!0))}function C(){g&&g.cancel()}function b(){g&&!g.isPaused()&&(C(),m())}function M(T){var R=t.easingFunc;return R?R(T):1-Math.pow(1-T,4)}return{mount:_,destroy:C,scroll:A,cancel:b}}var Re={passive:!1,capture:!0};function Ur(e,n,t){var r=H(e),i=r.on,o=r.emit,a=r.bind,f=r.unbind,u=e.state,v=n.Move,s=n.Scroll,h=n.Controller,d=n.Elements.track,g=n.Media.reduce,c=n.Direction,l=c.resolve,_=c.orient,A=v.getPosition,m=v.exceededLimit,E,C,b,M,T,R=!1,F,P,L;function I(){a(d,Lt,pt,Re),a(d,It,pt,Re),a(d,Fn,V,Re),a(d,"click",W,{capture:!0}),a(d,"dragstart",ce),i([Ne,Q],p)}function p(){var N=t.drag;Xt(!N),M=N==="free"}function V(N){if(F=!1,!P){var U=j(N);X(N.target)&&(U||!N.button)&&(h.isBusy()?ce(N,!0):(L=U?d:window,T=u.is([Me,$e]),b=null,a(L,Lt,B,Re),a(L,It,Y,Re),v.cancel(),s.cancel(),w(N)))}}function B(N){if(u.is(it)||(u.set(it),o(jn)),N.cancelable)if(T){v.translate(E+Z($(N)));var U=ge(N)>un,Te=R!==(R=m());(U||Te)&&w(N),F=!0,o(Zn),ce(N)}else O(N)&&(T=S(N),ce(N))}function Y(N){u.is(it)&&(u.set(Ce),o(Jn)),T&&(D(N),ce(N)),f(L,Lt,B),f(L,It,Y),T=!1}function W(N){!P&&F&&ce(N,!0)}function w(N){b=C,C=N,E=A()}function D(N){var U=G(N),Te=q(U),Be=t.rewind&&t.rewindByDrag;g(!1),M?h.scroll(Te,0,t.snap):e.is(nt)?h.go(_(bt(U))<0?Be?"<":"-":Be?">":"+"):e.is(we)&&R&&Be?h.go(m(!0)?">":"<"):h.go(h.toDest(Te),!0),g(!0)}function S(N){var U=t.dragMinThreshold,Te=ke(U),Be=Te&&U.mouse||0,zn=(Te?U.touch:+U)||10;return J($(N))>(j(N)?zn:Be)}function O(N){return J($(N))>J($(N,!0))}function G(N){if(e.is(xe)||!R){var U=ge(N);if(U&&U<un)return $(N)/U}return 0}function q(N){return A()+bt(N)*he(J(N)*(t.flickPower||600),M?1/0:n.Layout.listSize()*(t.flickMaxPages||1))}function $(N,U){return k(N,U)-k(y(N),U)}function ge(N){return Nt(N)-Nt(y(N))}function y(N){return C===N&&b||C}function k(N,U){return(j(N)?N.changedTouches[0]:N)["page"+l(U?"Y":"X")]}function Z(N){return N/(R&&e.is(we)?Tr:1)}function X(N){var U=t.noDrag;return!ze(N,"."+wn+", ."+_t)&&(!U||!ze(N,U))}function j(N){return typeof TouchEvent<"u"&&N instanceof TouchEvent}function kn(){return T}function Xt(N){P=N}return{mount:I,disable:Xt,isDragging:kn}}var Wr={Spacebar:" ",Right:mt,Left:Et,Up:Nn,Down:bn};function Ht(e){return e=me(e)?e:e.key,Wr[e]||e}var sn="keydown";function Hr(e,n,t){var r=H(e),i=r.on,o=r.bind,a=r.unbind,f=e.root,u=n.Direction.resolve,v,s;function h(){d(),i(Q,g),i(Q,d),i(Ae,l)}function d(){var A=t.keyboard;A&&(v=A==="global"?window:f,o(v,sn,_))}function g(){a(v,sn)}function c(A){s=A}function l(){var A=s;s=!0,cn(function(){s=A})}function _(A){if(!s){var m=Ht(A);m===u(Et)?e.go("<"):m===u(mt)&&e.go(">")}}return{mount:h,destroy:g,disable:c}}var Ge=xt+"-lazy",ut=Ge+"-srcset",Yr="["+Ge+"], ["+ut+"]";function Xr(e,n,t){var r=H(e),i=r.on,o=r.off,a=r.bind,f=r.emit,u=t.lazyLoad==="sequential",v=[et,Ve],s=[];function h(){t.lazyLoad&&(d(),i(K,d))}function d(){de(s),g(),u?A():(o(v),i(v,c),c())}function g(){n.Slides.forEach(function(m){Vt(m.slide,Yr).forEach(function(E){var C=ie(E,Ge),b=ie(E,ut);if(C!==E.src||b!==E.srcset){var M=t.classes.spinner,T=E.parentElement,R=Je(T,"."+M)||De("span",M,T);s.push([E,m,R]),E.src||He(E,"none")}})})}function c(){s=s.filter(function(m){var E=t.perPage*((t.preloadPages||1)+1)-1;return m[1].isWithin(e.index,E)?l(m):!0}),s.length||o(v)}function l(m){var E=m[0];oe(m[1].slide,Dt),a(E,"load error",z(_,m)),x(E,"src",ie(E,Ge)),x(E,"srcset",ie(E,ut)),ue(E,Ge),ue(E,ut)}function _(m,E){var C=m[0],b=m[1];le(b.slide,Dt),E.type!=="error"&&(Ie(m[2]),He(C,""),f(Ln,C,b),f(Xe)),u&&A()}function A(){s.length&&l(s.shift())}return{mount:h,destroy:z(de,s),check:c}}function Kr(e,n,t){var r=H(e),i=r.on,o=r.emit,a=r.bind,f=n.Slides,u=n.Elements,v=n.Controller,s=v.hasFocus,h=v.getIndex,d=v.go,g=n.Direction.resolve,c=u.pagination,l=[],_,A;function m(){E(),i([Q,K,lt],m);var P=t.pagination;c&&He(c,P?"":"none"),P&&(i([Ae,Gt,Ve],F),C(),F(),o(nr,{list:_,items:l},R(e.index)))}function E(){_&&(Ie(c?_e(_.children):_),le(_,A),de(l),_=null),r.destroy()}function C(){var P=e.length,L=t.classes,I=t.i18n,p=t.perPage,V=s()?v.getEnd()+1:Ye(P/p);_=c||De("ul",L.pagination,u.track.parentElement),oe(_,A=yt+"--"+T()),x(_,ve,"tablist"),x(_,te,I.select),x(_,zt,T()===ht?"vertical":"");for(var B=0;B<V;B++){var Y=De("li",null,_),W=De("button",{class:L.page,type:"button"},Y),w=f.getIn(B).map(function(S){return S.slide.id}),D=!s()&&p>1?I.pageX:I.slideX;a(W,"click",z(b,B)),t.paginationKeyboard&&a(W,"keydown",z(M,B)),x(Y,ve,"presentation"),x(W,ve,"tab"),x(W,tt,w.join(" ")),x(W,te,Rt(D,B+1)),x(W,Pe,-1),l.push({li:Y,button:W,page:B})}}function b(P){d(">"+P,!0)}function M(P,L){var I=l.length,p=Ht(L),V=T(),B=-1;p===g(mt,!1,V)?B=++P%I:p===g(Et,!1,V)?B=(--P+I)%I:p==="Home"?B=0:p==="End"&&(B=I-1);var Y=l[B];Y&&(dn(Y.button),d(">"+B),ce(L,!0))}function T(){return t.paginationDirection||t.direction}function R(P){return l[v.toPage(P)]}function F(){var P=R(h(!0)),L=R(h());if(P){var I=P.button;le(I,pe),ue(I,tn),x(I,Pe,-1)}if(L){var p=L.button;oe(p,pe),x(p,tn,!0),x(p,Pe,"")}o(rr,{list:_,items:l},P,L)}return{items:l,mount:m,destroy:E,getAt:R,update:F}}var $r=[" ","Enter"];function qr(e,n,t){var r=t.isNavigation,i=t.slideFocus,o=[];function a(){e.splides.forEach(function(c){c.isParent||(v(e,c.splide),v(c.splide,e))}),r&&s()}function f(){o.forEach(function(c){c.destroy()}),de(o)}function u(){f(),a()}function v(c,l){var _=H(c);_.on(Ae,function(A,m,E){l.go(l.is(xe)?E:A)}),o.push(_)}function s(){var c=H(e),l=c.on;l(An,d),l(In,g),l([Ne,Q],h),o.push(c),c.emit(yn,e.splides)}function h(){x(n.Elements.list,zt,t.direction===ht?"vertical":"")}function d(c){e.go(c.index)}function g(c,l){wt($r,Ht(l))&&(d(c),ce(l))}return{setup:z(n.Media.set,{slideFocus:qe(i)?r:i},!0),mount:a,destroy:f,remount:u}}function jr(e,n,t){var r=H(e),i=r.bind,o=0;function a(){t.wheel&&i(n.Elements.track,"wheel",f,Re)}function f(v){if(v.cancelable){var s=v.deltaY,h=s<0,d=Nt(v),g=t.wheelMinThreshold||0,c=t.wheelSleep||0;J(s)>g&&d-o>c&&(e.go(h?"<":">"),o=d),u(h)&&ce(v)}}function u(v){return!t.releaseWheel||e.state.is(Me)||n.Controller.getAdjacent(v)!==-1}return{mount:a}}var Zr=90;function Jr(e,n,t){var r=H(e),i=r.on,o=n.Elements.track,a=t.live&&!t.isNavigation,f=De("span",mr),u=dt(Zr,z(s,!1));function v(){a&&(d(!n.Autoplay.isPaused()),x(o,an,!0),f.textContent="…",i(Tn,z(d,!0)),i(Sn,z(d,!1)),i([et,Ve],z(s,!0)))}function s(g){x(o,rn,g),g?(Ze(o,f),u.start()):(Ie(f),u.cancel())}function h(){ue(o,[nn,an,rn]),Ie(f)}function d(g){a&&x(o,nn,g?"off":"polite")}return{mount:v,disable:d,destroy:h}}var Qr=Object.freeze({__proto__:null,Media:ur,Direction:sr,Elements:Sr,Slides:Ir,Layout:pr,Clones:br,Move:Rr,Controller:Or,Arrows:Cr,Autoplay:Mr,Cover:Vr,Scroll:zr,Drag:Ur,Keyboard:Hr,LazyLoad:Xr,Pagination:Kr,Sync:qr,Wheel:jr,Live:Jr}),ei={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},ti={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:_r,i18n:ei,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function ni(e,n,t){var r=n.Slides;function i(){H(e).on([Ne,K],o)}function o(){r.forEach(function(f){f.style("transform","translateX(-"+100*f.index+"%)")})}function a(f,u){r.style("transition","opacity "+t.speed+"ms "+t.easing),cn(u)}return{mount:i,start:a,cancel:pt}}function ri(e,n,t){var r=n.Move,i=n.Controller,o=n.Scroll,a=n.Elements.list,f=z(re,a,"transition"),u;function v(){H(e).bind(a,"transitionend",function(g){g.target===a&&u&&(h(),u())})}function s(g,c){var l=r.toPosition(g,!0),_=r.getPosition(),A=d(g);J(l-_)>=1&&A>=1?t.useScroll?o.scroll(l,A,!1,c):(f("transform "+A+"ms "+t.easing),r.translate(l,!0),u=c):(r.jump(g),c())}function h(){f(""),o.cancel()}function d(g){var c=t.rewindSpeed;if(e.is(we)&&c){var l=i.getIndex(!0),_=i.getEnd();if(l===0&&g>=_||l>=_&&g===0)return c}return t.speed}return{mount:v,start:s,cancel:h}}var ii=function(){function e(t,r){this.event=H(),this.Components={},this.state=ar(Oe),this.splides=[],this._o={},this._E={};var i=me(t)?En(document,t):t;Fe(i,i+" is invalid."),this.root=i,r=Ee({label:ie(i,te)||"",labelledby:ie(i,kt)||""},ti,e.defaults,r||{});try{Ee(r,JSON.parse(ie(i,xt)))}catch{Fe(!1,"Invalid JSON")}this._o=Object.create(Ee({},r))}var n=e.prototype;return n.mount=function(r,i){var o=this,a=this.state,f=this.Components;Fe(a.is([Oe,st]),"Already mounted!"),a.set(Oe),this._C=f,this._T=i||this._T||(this.is(nt)?ni:ri),this._E=r||this._E;var u=We({},Qr,this._E,{Transition:this._T});return Le(u,function(v,s){var h=v(o,f,o._o);f[s]=h,h.setup&&h.setup()}),Le(f,function(v){v.mount&&v.mount()}),this.emit(Ne),oe(this.root,hr),a.set(Ce),this.emit(Qt),this},n.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(Ce)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},n.go=function(r){return this._C.Controller.go(r),this},n.on=function(r,i){return this.event.on(r,i),this},n.off=function(r){return this.event.off(r),this},n.emit=function(r){var i;return(i=this.event).emit.apply(i,[r].concat(_e(arguments,1))),this},n.add=function(r,i){return this._C.Slides.add(r,i),this},n.remove=function(r){return this._C.Slides.remove(r),this},n.is=function(r){return this._o.type===r},n.refresh=function(){return this.emit(K),this},n.destroy=function(r){r===void 0&&(r=!0);var i=this.event,o=this.state;return o.is(Oe)?H(this).on(Qt,this.destroy.bind(this,r)):(Le(this._C,function(a){a.destroy&&a.destroy(r)},!0),i.emit(_n),i.destroy(),r&&de(this.splides),o.set(st)),this},Un(e,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),e}(),Yt=ii;Yt.defaults={};Yt.STATES=Hn;document.getElementById("appoinment-form").addEventListener("submit",e=>{e.preventDefault();const n=document.querySelectorAll("input");document.getElementById("name-error").innerText="",document.getElementById("phone-error").innerText="",document.getElementById("email-error").innerText="",document.getElementById("success-message").innerText="";let t=!0;n.forEach(u=>{u.value.trim()?u.classList.remove("is-invalid"):(t=!1,u.classList.add("is-invalid"))}),document.getElementById("name").value.trim()===""&&(document.getElementById("name-error").innerText="field cannot be empty",t=!1);const i=document.getElementById("phone").value;/^\+7\d{10}$/.test(i)||(document.getElementById("phone-error").innerText="the correct phone format +79999999999",t=!1);const a=document.getElementById("email").value;/^\S+@\S+\.\S+$/.test(a)||(document.getElementById("email-error").innerText="incorrect email format",t=!1),t&&(document.getElementById("success-message").innerText="The form has been successfully submitted!",document.getElementById("appoinment-form").reset(),setTimeout(()=>{document.getElementById("success-message").innerText=""},1e3))});const Gn=new IntersectionObserver(e=>{e.forEach(n=>{n.target.classList.toggle("hide",!n.isIntersecting),n.isIntersecting&&Gn.unobserve(n.target)})},{threshold:.7}),ai={type:"slide",perPage:3,autoplay:!1,pagination:!1,arrows:!1,gap:"20px",breakpoints:{1200:{perPage:2,pagination:!1,arrows:!0,gap:"20px"},640:{perPage:1,gap:"0px"}}};function oi(){new Yt("#slider-speakers",ai).mount()}function ui(){document.querySelectorAll(".js-animate").forEach(n=>{n.classList.remove("js-animate"),n.classList.add("hide"),setTimeout(()=>{Gn.observe(n)},500)})}function si(){oi(),ui()}window.addEventListener("DOMContentLoaded",()=>si(),{once:!0});
