"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[126],{126:function(n,t,e){e.r(t);var r=e(439),c=e(791),a=e(672),i=e(81),o=e(184);t.default=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],u=t[1];return(0,c.useEffect)((function(){(0,i.tp)().then(u)}),[]),(0,o.jsx)("main",{children:(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"Trending today"}),(0,o.jsx)(a.Z,{movies:e})]})})}},81:function(n,t,e){e.d(t,{Av:function(){return f},Hj:function(){return v},Yc:function(){return w},gW:function(){return h},tp:function(){return s}});var r=e(861),c=e(757),a=e.n(c),i=e(263),o="7ef9ec3d0132c19ab4685d32429ba26e",u="https://api.themoviedb.org/3";function s(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(a().mark((function n(){var t,e,r,c,s=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:1,e="".concat(u,"/trending/movie/day?api_key=").concat(o,"&page=").concat(t),n.next=4,i.Z.get(e);case 4:return r=n.sent,c=r.data,n.abrupt("return",c.results);case 7:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t),n.next=3,i.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t){var e,r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"/movie/").concat(t,"?api_key=").concat(o),n.next=3,i.Z.get(e);case 3:return r=n.sent,c=r.data,n.abrupt("return",c);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t){var e,r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(o),n.next=3,i.Z.get(e);case 3:return r=n.sent,c=r.data,n.abrupt("return",c);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(t){var e,r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(o),n.next=3,i.Z.get(e);case 3:return r=n.sent,c=r.data,n.abrupt("return",c.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}s()},672:function(n,t,e){e.d(t,{Z:function(){return g}});e(791);var r,c,a,i,o,u=e(168),s=e(444),p=e(87),f=s.ZP.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]))),l=s.ZP.li(c||(c=(0,u.Z)(["\n  list-style: none;\n  width: 200px;\n  :hover,\n  :focus {\n    scale: 1.1;\n    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),h=(0,s.ZP)(p.OL)(a||(a=(0,u.Z)(["\n  font-size: 24px;\n  text-decoration: none;\n  display: inline-block;\n  cursor: pointer;\n  color: #000;\n  :hover,\n  :focus {\n    color: cornflowerblue;\n    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),d=s.ZP.p(i||(i=(0,u.Z)(["\n  font-weight: 700;\n  margin: 0 0 10px 0;\n  font-size: 18px;\n  text-align: center;\n"]))),v=s.ZP.img(o||(o=(0,u.Z)(["\n  width: 100%;\n  height: 300px;\n  display: block;\n  border-radius: 5px;\n"]))),x=e(689),w=e(184),g=function(n){var t=n.movies,e=(0,x.TH)();return(0,w.jsx)(f,{children:t.map((function(n){var t=n.id,r=n.poster_path,c=n.title;return(0,w.jsx)(l,{children:(0,w.jsxs)(h,{to:"/movies/".concat(t),state:{from:e},children:[(0,w.jsx)(v,{src:r&&"https://image.tmdb.org/t/p/w500/".concat(r),alt:c,width:"200",height:"240"}),(0,w.jsx)(d,{children:c})]})},t)}))})}}}]);
//# sourceMappingURL=126.4a81c4d3.chunk.js.map