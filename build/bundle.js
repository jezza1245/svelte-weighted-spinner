var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function c(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function a(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function p(t){return document.createTextNode(t)}function h(){return p(" ")}function $(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t){return""===t?null:+t}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e){t.value=null==e?"":e}let x;function v(t){x=t}const w=[],k=[],_=[],z=[],S=Promise.resolve();let j=!1;function E(t){_.push(t)}const O=new Set;let M=0;function W(){const t=x;do{for(;M<w.length;){const t=w[M];M++,v(t),A(t.$$)}for(v(null),w.length=0,M=0;k.length;)k.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];O.has(e)||(O.add(e),e())}_.length=0}while(w.length);for(;z.length;)z.pop()();j=!1,O.clear(),v(t)}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const C=new Set;let N;function R(t,e){t&&t.i&&(C.delete(t),t.i(e))}function B(t,e,n,o){if(t&&t.o){if(C.has(t))return;C.add(t),N.c.push((()=>{C.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function D(t){t&&t.c()}function L(t,n,i,l){const{fragment:c,after_update:s}=t.$$;c&&c.m(n,i),l||E((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),s.forEach(E)}function P(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function T(t,e){-1===t.$$.dirty[0]&&(w.push(t),j||(j=!0,S.then(W)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,r,i,l,c,s,a,f=[-1]){const d=x;v(e);const p=e.$$={fragment:null,ctx:[],props:s,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};a&&a(p.root);let h=!1;if(p.ctx=i?i(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),h&&T(e,t)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!l&&l(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();r.intro&&R(e.$$.fragment),L(e,r.target,r.anchor,r.customElement),W()}v(d)}class q{$destroy(){P(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function H(e){let n,o,r,i,l,a,f,$,g,b=e[1].name+"";return{c(){n=d("circle"),l=h(),a=d("text"),f=p(b),m(n,"r",o=e[0]/2),m(n,"cx",e[0]),m(n,"cy",e[0]),m(n,"fill","transparent"),m(n,"stroke",r=e[1].colour),m(n,"stroke-width",e[0]),m(n,"stroke-dasharray",e[2]),m(n,"style",i=`transform:rotate(-${e[1].rotation}deg)`),m(n,"class","svelte-9wlr4a"),m(a,"alignment-baseline","central"),m(a,"text-anchor","middle"),m(a,"transform",$=`rotate(-${e[1].textRotation})`),m(a,"x",g=e[0]+e[0]/2),m(a,"y",e[0]),m(a,"fill","white"),m(a,"stroke-width","2px"),m(a,"dy",".1em"),m(a,"class","svelte-9wlr4a")},m(t,e){s(t,n,e),s(t,l,e),s(t,a,e),c(a,f)},p(t,[e]){1&e&&o!==(o=t[0]/2)&&m(n,"r",o),1&e&&m(n,"cx",t[0]),1&e&&m(n,"cy",t[0]),2&e&&r!==(r=t[1].colour)&&m(n,"stroke",r),1&e&&m(n,"stroke-width",t[0]),4&e&&m(n,"stroke-dasharray",t[2]),2&e&&i!==(i=`transform:rotate(-${t[1].rotation}deg)`)&&m(n,"style",i),2&e&&b!==(b=t[1].name+"")&&y(f,b),2&e&&$!==($=`rotate(-${t[1].textRotation})`)&&m(a,"transform",$),1&e&&g!==(g=t[0]+t[0]/2)&&m(a,"x",g),1&e&&m(a,"y",t[0])},i:t,o:t,d(t){t&&u(n),t&&u(l),t&&u(a)}}}function F(t,e,n){let o,r,{radius:i}=e,{option:l}=e;return t.$$set=t=>{"radius"in t&&n(0,i=t.radius),"option"in t&&n(1,l=t.option)},t.$$.update=()=>{1&t.$$.dirty&&n(3,o=Math.PI*i),10&t.$$.dirty&&n(2,r=`0 ${o-l.pieSize} ${l.pieSize}`)},[i,l,r,o]}class G extends q{constructor(t){super(),I(this,t,F,H,i,{radius:0,option:1})}}const J=[];let K=function(e,n=t){let o;const r=new Set;function l(t){if(i(e,t)&&(e=t,o)){const t=!J.length;for(const t of r)t[1](),J.push(t,e);if(t){for(let t=0;t<J.length;t+=2)J[t][0](J[t+1]);J.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(i,c=t){const s=[i,c];return r.add(s),1===r.size&&(o=n(l)||t),i(e),()=>{r.delete(s),0===r.size&&(o(),o=null)}}}}(!1);function Q(t,e,n){const o=t.slice();return o[8]=e[n],o}function U(t){let e,n;return e=new G({props:{option:t[8],radius:t[4]}}),{c(){D(e.$$.fragment)},m(t,o){L(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.option=t[8]),16&n&&(o.radius=t[4]),e.$set(o)},i(t){n||(R(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function V(t){let e,n,r,i,l;return{c(){e=d("text"),n=p("Click to Spin!"),r=d("circle"),m(e,"alignment-baseline","central"),m(e,"text-anchor","middle"),m(e,"x",t[4]),m(e,"y",t[4]),m(e,"fill","var(--black)"),m(e,"dy",".1em"),m(e,"class","svelte-1lm1v7s"),m(r,"r",t[4]),m(r,"cx",t[4]),m(r,"cy",t[4]),m(r,"fill","#DDD"),m(r,"fill-opacity","0.3"),m(r,"z","999")},m(o,u){s(o,e,u),c(e,n),s(o,r,u),i||(l=[$(r,"click",t[6]),$(r,"keydown",t[6])],i=!0)},p(t,n){16&n&&m(e,"x",t[4]),16&n&&m(e,"y",t[4]),16&n&&m(r,"r",t[4]),16&n&&m(r,"cx",t[4]),16&n&&m(r,"cy",t[4])},d(t){t&&u(e),t&&u(r),i=!1,o(l)}}}function X(t){let e,n,r,i,l,g,y,b,x,v,w=t[0],k=[];for(let e=0;e<w.length;e+=1)k[e]=U(Q(t,w,e));const _=t=>B(k[t],1,1,(()=>{k[t]=null}));let z=t[0].length&&!t[2]&&V(t);return{c(){e=f("div"),n=f("div"),n.textContent="˯",r=h(),i=d("svg");for(let t=0;t<k.length;t+=1)k[t].c();l=p(""),z&&z.c(),m(n,"class","chevron svelte-1lm1v7s"),m(i,"style",g=K?`transform: rotate(${t[3]}deg); transition-duration: ${t[3]+500}ms;`:""),m(i,"width",t[1]),m(i,"height",t[1]),m(i,"viewBox",y=`0 0 ${t[1]} ${t[1]}`),m(i,"class","svelte-1lm1v7s"),m(e,"class","center svelte-1lm1v7s")},m(o,u){s(o,e,u),c(e,n),c(e,r),c(e,i);for(let t=0;t<k.length;t+=1)k[t].m(i,null);c(i,l),z&&z.m(i,null),b=!0,x||(v=$(i,"transitionend",t[5]),x=!0)},p(t,[e]){if(17&e){let n;for(w=t[0],n=0;n<w.length;n+=1){const o=Q(t,w,n);k[n]?(k[n].p(o,e),R(k[n],1)):(k[n]=U(o),k[n].c(),R(k[n],1),k[n].m(i,l))}for(N={r:0,c:[],p:N},n=w.length;n<k.length;n+=1)_(n);N.r||o(N.c),N=N.p}t[0].length&&!t[2]?z?z.p(t,e):(z=V(t),z.c(),z.m(i,null)):z&&(z.d(1),z=null),(!b||8&e&&g!==(g=K?`transform: rotate(${t[3]}deg); transition-duration: ${t[3]+500}ms;`:""))&&m(i,"style",g),(!b||2&e)&&m(i,"width",t[1]),(!b||2&e)&&m(i,"height",t[1]),(!b||2&e&&y!==(y=`0 0 ${t[1]} ${t[1]}`))&&m(i,"viewBox",y)},i(t){if(!b){for(let t=0;t<w.length;t+=1)R(k[t]);b=!0}},o(t){k=k.filter(Boolean);for(let t=0;t<k.length;t+=1)B(k[t]);b=!1},d(t){t&&u(e),a(k,t),z&&z.d(),x=!1,v()}}}function Y(t,e,n){let o,r;l(t,K,(t=>n(2,r=t)));let{options:i}=e,{size:c}=e,{onWinner:s}=e,u=0;return t.$$set=t=>{"options"in t&&n(0,i=t.options),"size"in t&&n(1,c=t.size),"onWinner"in t&&n(7,s=t.onWinner)},t.$$.update=()=>{4&t.$$.dirty&&r&&n(3,u=Math.floor(5001*Math.random())+2e3),2&t.$$.dirty&&n(4,o=c/2)},[i,c,r,u,o,function(){if(r){const t=(u+90)%360;let e;i.some((n=>{if(n.rotation>=t)return!0;e=n})),K.set(!1),s(e)}},function(){K.set(!0)},s]}class Z extends q{constructor(t){super(),I(this,t,Y,X,i,{options:0,size:1,onWinner:7})}}function tt(t,e,n){const o=t.slice();return o[16]=e[n],o}function et(t){let e,n,o,r,i,l,a,d,$,g,b,x=t[16].name+"",v=t[16].weight+"";return{c(){e=f("tr"),n=f("td"),o=p(x),r=h(),i=f("td"),l=p(v),a=h(),d=f("td"),$=f("div"),b=h(),m($,"style",g=`height: 20px; width:${t[16].percentage}px; background-color: ${t[16].colour}`)},m(t,u){s(t,e,u),c(e,n),c(n,o),c(e,r),c(e,i),c(i,l),c(e,a),c(e,d),c(d,$),c(e,b)},p(t,e){2&e&&x!==(x=t[16].name+"")&&y(o,x),2&e&&v!==(v=t[16].weight+"")&&y(l,v),2&e&&g!==(g=`height: 20px; width:${t[16].percentage}px; background-color: ${t[16].colour}`)&&m($,"style",g)},d(t){t&&u(e)}}}function nt(e){let n,o,r,i,l;return{c(){n=f("tr"),o=f("td"),r=f("button"),r.textContent="Reset"},m(t,u){s(t,n,u),c(n,o),c(o,r),i||(l=$(r,"click",e[8]),i=!0)},p:t,d(t){t&&u(n),i=!1,l()}}}function ot(t){let e,n,r,i,l,d,x,v,w,k,_,z,S,j,E,O,M,W,A,C,N,T,I,q=t[1],H=[];for(let e=0;e<q.length;e+=1)H[e]=et(tt(t,q,e));let F=t[1].length&&nt(t);return C=new Z({props:{onWinner:t[7],size:rt,options:t[1]}}),{c(){e=f("main"),n=f("h1"),r=p(t[0]),l=h(),d=f("table"),x=f("thead"),x.innerHTML="<tr><td>Name</td> \n\t\t\t\t<td>Weight</td> \n\t\t\t\t<td></td></tr>",v=h(),w=f("tbody");for(let t=0;t<H.length;t+=1)H[t].c();k=h(),F&&F.c(),_=h(),z=f("form"),S=f("input"),j=h(),E=f("input"),O=h(),M=f("input"),A=h(),D(C.$$.fragment),m(n,"style",i=`color:${t[4]?.colour?t[4].colour:"var(--black)"}`),m(n,"class","svelte-16ri943"),m(S,"type","text"),m(E,"type","number"),m(E,"min","1"),m(E,"max","10"),m(M,"type","submit"),M.value="Add",M.disabled=W=t[1].some(t[11])||""===t[2]||t[5],m(e,"class","svelte-16ri943")},m(o,i){s(o,e,i),c(e,n),c(n,r),c(e,l),c(e,d),c(d,x),c(d,v),c(d,w);for(let t=0;t<H.length;t+=1)H[t].m(w,null);var u;c(w,k),F&&F.m(w,null),c(e,_),c(e,z),c(z,S),b(S,t[2]),c(z,j),c(z,E),b(E,t[3]),c(z,O),c(z,M),c(e,A),L(C,e,null),N=!0,T||(I=[$(S,"input",t[9]),$(E,"input",t[10]),$(z,"submit",(u=t[6],function(t){return t.preventDefault(),u.call(this,t)}))],T=!0)},p(t,[e]){if((!N||1&e)&&y(r,t[0]),(!N||16&e&&i!==(i=`color:${t[4]?.colour?t[4].colour:"var(--black)"}`))&&m(n,"style",i),2&e){let n;for(q=t[1],n=0;n<q.length;n+=1){const o=tt(t,q,n);H[n]?H[n].p(o,e):(H[n]=et(o),H[n].c(),H[n].m(w,k))}for(;n<H.length;n+=1)H[n].d(1);H.length=q.length}t[1].length?F?F.p(t,e):(F=nt(t),F.c(),F.m(w,null)):F&&(F.d(1),F=null),4&e&&S.value!==t[2]&&b(S,t[2]),8&e&&g(E.value)!==t[3]&&b(E,t[3]),(!N||38&e&&W!==(W=t[1].some(t[11])||""===t[2]||t[5]))&&(M.disabled=W);const o={};2&e&&(o.options=t[1]),C.$set(o)},i(t){N||(R(C.$$.fragment,t),N=!0)},o(t){B(C.$$.fragment,t),N=!1},d(t){t&&u(e),a(H,t),F&&F.d(),P(C),T=!1,o(I)}}}const rt=500;function it(t,e,n){let o;l(t,K,(t=>n(5,o=t)));let r="Spinner";const i=Math.PI*rt/2,c=function*(){const t=["#0091be","#eb6404","#95d600","#fec600","#27292d"];let e=0;for(;;)e<t.length?yield t[e++]:yield`#${Math.floor(16777100*Math.random()).toString(16)}`}();let s,u=[],a="",f=1;function d(t,e){let n=t.weight/e*100;n>100&&(n=100);let o=i*n/100;return Object.assign(Object.assign({},t),{percentage:n,pieSize:o,rotation:0})}return t.$$.update=()=>{1&t.$$.dirty&&(document.title=r)},[r,u,a,f,s,o,function(){const t=u.reduce(((t,e)=>t+e.weight),0)+f,e=c.next().value,o=d({name:a,weight:f,colour:e,percentage:null,rotation:0,pieSize:null,textRotation:null},t);!function(t){let e=[...t.map(((e,n)=>{const o=t.slice(0,n).reduce(((t,e)=>t+e.percentage/100*360),0);return Object.assign(Object.assign({},e),{rotation:o})}))];e.length>1?n(1,u=[...e.map(((t,n)=>{const o=(n+1)%e.length;let r=e[o].rotation;return r=0===r?360:r,Object.assign(Object.assign({},t),{textRotation:(t.rotation+r)/2})}))]):n(1,u=e)}([...u.map((e=>d(e,t))),o]),n(2,a=""),n(3,f=1)},function(t){n(4,s=t),n(0,r=`${s.name} wins!`)},function(){n(1,u=[]),n(4,s=void 0)},function(){a=this.value,n(2,a)},function(){f=g(this.value),n(3,f)},t=>t.name===a]}return new class extends q{constructor(t){super(),I(this,t,it,ot,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
