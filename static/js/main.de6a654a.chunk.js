(this["webpackJsonpmovie-stats"]=this["webpackJsonpmovie-stats"]||[]).push([[0],{25:function(e,t,n){},32:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(8),s=n.n(a),r=(n(25),n(4)),A=n(57),j=n(6),o={mode:"search",query:"",id:""},u=Object(A.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case 0:return Object(j.a)(Object(j.a)({},e),{},{mode:"search"});case 1:return Object(j.a)(Object(j.a)({},e),{},{mode:"view"});case 2:return Object(j.a)(Object(j.a)({},e),{},{query:t.payload});case 3:return Object(j.a)(Object(j.a)({},e),{},{id:t.payload});default:return e}})),E=(n(32),n(1)),O=function(e){var t=Object(c.createRef)(),n=Object(r.b)();return Object(E.jsxs)("div",{className:"searchContainer",children:[Object(E.jsx)("input",{type:"text",ref:t,className:"searchBar"}),Object(E.jsx)("button",{onClick:function(){null!=t.current&&(n({type:0}),n({type:2,payload:t.current.value}))},className:"searchButton",children:"Search"})]})},l=n(2),g=function(e){return e.mode},h=function(e){return e.query},b=function(e){return e.id},C=n(5),x=n.n(C),Y=n(7),d="69b0aeb7",R=n(11),I=n.n(R),S="http://www.omdbapi.com/",k=function(){var e=Object(Y.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get(S,{params:{apikey:d,i:t,type:"movie"}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(Y.a)(x.a.mark((function e(t,n){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get(S,{params:{apikey:d,s:t,page:n,type:"movie"}});case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),J=function(){var e=Object(Y.a)(x.a.mark((function e(t,n,c){var i,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=[],a=1;case 2:if(!(a<=c/10)){e.next=11;break}return e.t0=i,e.next=6,f(t,c/10*(n-1)+a);case 6:e.t1=e.sent.Search,i=e.t0.concat.call(e.t0,e.t1);case 8:a++,e.next=2;break;case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),p=function(){var e=Object(Y.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t,1);case 2:return n=e.sent,e.abrupt("return",n.totalResults);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(Y.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t,1);case 2:return n=e.sent,e.abrupt("return",n.Response);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.children.result,n=Object(r.b)();return void 0===t?Object(E.jsx)("div",{}):Object(E.jsx)("div",{onClick:function(){n({type:3,payload:t.imdbID}),n({type:1})},className:"searchResult",children:t.Title})},T=function(e){var t=Object(r.c)(h),n=Object(r.c)(g),i=Object(c.createRef)(),a=Object(c.useState)(new Array),s=Object(l.a)(a,2),A=s[0],j=s[1],o=Object(c.useState)(10),u=Object(l.a)(o,2),O=u[0],b=u[1],C=Object(c.useState)(1),x=Object(l.a)(C,2),Y=x[0],d=x[1],R=Object(c.useState)(0),I=Object(l.a)(R,2),S=I[0],k=I[1],f=Object(c.useState)(!1),T=Object(l.a)(f,2),w=T[0],Q=T[1];Object(c.useEffect)((function(){""!==t&&"search"===n&&K(t).then((function(e){"True"===e?(Q(!1),p(t).then((function(e){k(e)})),J(t,Y,O).then((function(e){j(e.map((function(e){return Object(E.jsx)(m,{children:{result:e}})})))}))):Q(!0)}))}),[t,O,Y]);return"view"===n?Object(E.jsx)("div",{}):""===t?Object(E.jsx)("div",{className:"searchMessaging",children:"The world's films at your fingertips."}):w?Object(E.jsx)("div",{className:"searchMessaging",children:"Your search query contained no results."}):Object(E.jsxs)("div",{children:[Object(E.jsx)("div",{className:"resultContainer",children:A.map((function(e){return e}))}),Object(E.jsxs)("div",{className:"searchInfo",children:["Your search contained ",S," results."]}),Object(E.jsxs)("div",{className:"pageNavigation",children:[Object(E.jsx)("button",{onClick:function(){Y>1&&d(Y-1)},disabled:Y<=1,className:"pageButton",children:"Prev Page"}),Object(E.jsx)("button",{onClick:function(){Y*O<S&&d(Y+1)},disabled:Y*O>S,className:"pageButton",children:"Next Page"})]}),Object(E.jsxs)("div",{className:"filterContainer",children:["Rows per Page",Object(E.jsxs)("select",{ref:i,onChange:function(){null!==i.current&&(b(parseInt(i.current.value)),d(1))},className:"displaySelector",children:[Object(E.jsx)("option",{value:10,children:"10"}),Object(E.jsx)("option",{value:20,children:"20"}),Object(E.jsx)("option",{value:50,children:"50"})]})]})]})},w=n.p+"static/media/loading.30c0aa7c.gif",Q=(n(53),function(e){var t=Object(c.useState)(w),n=Object(l.a)(t,2),i=n[0],a=n[1],s=Object(c.useState)(""),A=Object(l.a)(s,2),j=A[0],o=A[1],u=Object(c.useState)(""),O=Object(l.a)(u,2),h=O[0],C=O[1],x=Object(c.useState)(""),Y=Object(l.a)(x,2),d=Y[0],R=Y[1],I=Object(c.useState)(""),S=Object(l.a)(I,2),f=S[0],J=S[1],p=Object(c.useState)(""),K=Object(l.a)(p,2),m=K[0],T=K[1],Q=Object(c.useState)(""),L=Object(l.a)(Q,2),B=L[0],F=L[1],v=Object(c.useState)(""),G=Object(l.a)(v,2),W=G[0],U=G[1],N=Object(c.useState)(""),y=Object(l.a)(N,2),H=y[0],D=y[1],z=Object(c.useState)(""),V=Object(l.a)(z,2),P=V[0],M=V[1],X=Object(r.c)(g),Z=Object(r.c)(b);return Object(c.useEffect)((function(){k(Z).then((function(e){"N/A"!==e.Poster?a(e.Poster):a("data:image/png;base64,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"),"N/A"!==e.Plot?o(e.Plot):o(""),"N/A"!==e.Director?J(e.Director):J("unknown"),"N/A"!==e.Actors?T(e.Actors):T("unknown"),"N/A"!==e.Title?C(e.Title):C("unknown"),"N/A"!==e.Year?R(e.Year):R(""),"N/A"!==e.Language?F(e.Language):F("unknown"),"N/A"!==e.Runtime?U(e.Runtime):U("unknown"),"N/A"!==e.Released?D(e.Released):D("unknown"),"N/A"!==e.Genre?M(e.Genre):M("unknown")}))}),[Z]),"search"===X?Object(E.jsx)("div",{}):Object(E.jsxs)("div",{children:[Object(E.jsxs)("span",{className:"movieTitle",children:[h," (",d,")"]}),Object(E.jsx)("img",{src:i,alt:"Movie Poster",className:"poster"}),Object(E.jsx)("p",{className:"plot",children:j}),Object(E.jsxs)("p",{className:"movieDetail",children:["Director ",Object(E.jsx)("span",{className:"emphasis",children:f})]}),Object(E.jsxs)("p",{className:"movieDetail",children:["Starring ",Object(E.jsx)("span",{className:"emphasis",children:m})]}),Object(E.jsxs)("p",{className:"movieDetail",children:["Released ",Object(E.jsx)("span",{className:"emphasis",children:H})]}),Object(E.jsxs)("p",{className:"movieDetail",children:["Language ",Object(E.jsx)("span",{className:"emphasis",children:B})]}),Object(E.jsxs)("p",{className:"movieDetail",children:["Runtime ",Object(E.jsx)("span",{className:"emphasis",children:W})]}),Object(E.jsxs)("p",{className:"movieDetail",children:["Genre ",Object(E.jsx)("span",{className:"emphasis",children:P})]})]})}),L=(n(54),function(e){return Object(E.jsxs)("div",{children:[Object(E.jsx)("div",{className:"header",children:"FilmFinder"}),Object(E.jsx)("div",{className:"headerSpacer"})]})});var B=function(){return Object(E.jsxs)(r.a,{store:u,children:[Object(E.jsx)(L,{}),Object(E.jsx)(O,{}),Object(E.jsx)(T,{}),Object(E.jsx)(Q,{})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(E.jsx)(i.a.StrictMode,{children:Object(E.jsx)(B,{})}),document.getElementById("root")),F()}},[[55,1,2]]]);
//# sourceMappingURL=main.de6a654a.chunk.js.map