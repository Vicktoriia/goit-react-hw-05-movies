"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[126],{126:function(n,t,e){e.r(t);var r=e(439),c=e(791),a=e(672),i=e(81),o=e(184);t.default=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1];return(0,c.useEffect)((function(){(0,i.tp)().then(s)}),[]),(0,o.jsx)("main",{children:(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"Trending today"}),(0,o.jsx)(a.Z,{movies:e})]})})}},81:function(n,t,e){e.d(t,{Hj:function(){return h},Yc:function(){return v},gW:function(){return f},tp:function(){return u}});var r=e(861),c=e(757),a=e.n(c),i=e(263),o="7ef9ec3d0132c19ab4685d32429ba26e",s="https://api.themoviedb.org/3";function u(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(a().mark((function n(){var t,e,r,c,u=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:1,e="".concat(s,"/trending/movie/day?api_key=").concat(o,"&page=").concat(t),n.next=4,i.Z.get(e);case 4:return r=n.sent,c=r.data,n.abrupt("return",c.results);case 7:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){var e,r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/movie/").concat(t,"?api_key=").concat(o),n.next=3,i.Z.get(e);case 3:return r=n.sent,c=r.data,n.abrupt("return",c);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t){var e,r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(o),n.next=3,i.Z.get(e);case 3:return r=n.sent,c=r.data,n.abrupt("return",c);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t){var e,r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(o),n.next=3,i.Z.get(e);case 3:return r=n.sent,c=r.data,n.abrupt("return",c.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}u()},672:function(n,t,e){e.d(t,{Z:function(){return m}});e(791);var r,c,a,i,o,s=e(168),u=e(444),p=e(87),f=u.ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]))),l=u.ZP.li(c||(c=(0,s.Z)(["\n  list-style: none;\n  width: 200px;\n  :hover,\n  :focus {\n    scale: 1.1;\n    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),h=(0,u.ZP)(p.OL)(a||(a=(0,s.Z)(["\n  font-size: 24px;\n  text-decoration: none;\n  display: inline-block;\n  cursor: pointer;\n  color: #000;\n  :hover,\n  :focus {\n    color: cornflowerblue;\n    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),d=u.ZP.p(i||(i=(0,s.Z)(["\n  font-weight: 700;\n  margin: 0 0 10px 0;\n  font-size: 18px;\n  text-align: center;\n"]))),v=u.ZP.img(o||(o=(0,s.Z)(["\n  width: 100%;\n  height: 300px;\n  display: block;\n  border-radius: 5px;\n"]))),x=e(689),w=e(184),m=function(n){var t=n.movies,e=(0,x.TH)();return(0,w.jsx)(f,{children:t.map((function(n){var t=n.id,r=n.poster_path,c=n.title;return(0,w.jsx)(l,{children:(0,w.jsxs)(h,{to:"/movies/".concat(t),state:{from:e},children:[(0,w.jsx)(v,{src:r&&"https://image.tmdb.org/t/p/w500/".concat(r),alt:c,width:"200",height:"240"}),(0,w.jsx)(d,{children:c})]})},t)}))})}}}]);
//# sourceMappingURL=126.0bd63413.chunk.js.map