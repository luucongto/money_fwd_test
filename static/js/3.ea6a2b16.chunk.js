(this.webpackJsonpmoney_fwd_test=this.webpackJsonpmoney_fwd_test||[]).push([[3],{642:function(e,t,n){"use strict";n.r(t);var r=n(40),u=n(1),s=n(139),c=n(82),i=n(83),a=n(12);t.default=function(e){var t,n,o=Object(c.a)(),d=Object(s.d)(),l=null===e||void 0===e||null===(t=e.match)||void 0===t||null===(n=t.params)||void 0===n?void 0:n.userId;Object(u.useEffect)((function(){o(i.a.userRequest({userId:l}))}),[l,o]);var b=Object(c.b)((function(e){return null!=e.user.data?e.user.data:{userId:l,accounts:[]}})),f=Object(c.b)((function(e){return e.user.fetching})),j=Object(c.b)((function(e){return null!=e.user.error?e.user.error:null}));Object(u.useEffect)((function(){null!==j&&(d.show(j),o(i.a.clearError()))}),[j]);return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(r.e,{children:[Object(a.jsxs)(r.g,{children:["UserId: ",null===b||void 0===b?void 0:b.userId]}),Object(a.jsx)(r.f,{children:f?"Loading":Object(a.jsx)(r.k,{items:null===b||void 0===b?void 0:b.accounts,fields:["id","name","balance"],itemsPerPage:10,pagination:!0})})]})})}}}]);
//# sourceMappingURL=3.ea6a2b16.chunk.js.map