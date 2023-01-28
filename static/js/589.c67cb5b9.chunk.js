"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[589],{589:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var r,i,a,o,c=e(439),s=e(791),u=e(861),p=e(757),l=e.n(p),d=e(87),f=e(966),h=e(689),x=e(168),v=e(444),g=v.ZP.div(r||(r=(0,x.Z)(["\n  top: 0;\n  left: 0;\n  width: 100%;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background: linear-gradient(\n    90deg,\n    rgba(239, 240, 36, 0.8323529240797882) 48%,\n    rgba(32, 137, 209, 0.6642856971890319) 64%\n  );\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),b=v.ZP.form(i||(i=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 5px;\n  overflow: hidden;\n"]))),m=v.ZP.input(a||(a=(0,x.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),y=v.ZP.button(o||(o=(0,x.Z)(["\n  font-size: 18px;\n  padding: 10px 16px;\n  border-radius: 5px;\n  border: 1px solid #000;\n  text-decoration: none;\n  display: inline-block;\n  cursor: pointer;\n  text-transform: uppercase;\n  color: #000;\n  font-weight: 500;\n  background: #cfe0e8;\n  opacity: 0.6;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    opacity: 1;\n    background-color: #87bdd8;\n    color: #fff;\n  }\n"]))),w=e(81),Z=e(184),k=function(n){var t,e=n.setMovies,r=(0,d.lr)(),i=(0,c.Z)(r,2),a=i[0],o=i[1],p=null!==(t=a.get("query"))&&void 0!==t?t:"";return(0,s.useEffect)((function(){function n(){return(n=(0,u.Z)(l().mark((function n(){var t,r;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,w.Av)(p);case 2:t=n.sent,r=t.map((function(n){return{id:n.id,title:n.title,poster_path:n.poster_path,vote_average:n.vote_average}})),e(r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}p&&function(){n.apply(this,arguments)}()}),[p,e]),(0,Z.jsxs)(g,{children:[(0,Z.jsxs)(b,{onSubmit:function(n){n.preventDefault();var t=n.currentTarget,e=t.query.value;o({query:e}),t.reset()},children:[(0,Z.jsx)(m,{type:"text",name:"query",placeholder:"Search movies",autoComplete:"off",autoFocus:!0}),(0,Z.jsx)(y,{type:"submit",children:"Search"})]}),(0,Z.jsx)(s.Suspense,{fallback:(0,Z.jsx)(f.Z,{}),children:(0,Z.jsx)(h.j3,{})})]})},j=e(672),_=function(){var n=(0,s.useState)(""),t=(0,c.Z)(n,2),e=t[0],r=t[1];return(0,Z.jsx)("main",{children:(0,Z.jsxs)("div",{children:[(0,Z.jsx)(k,{setMovies:r}),""!==e?(0,Z.jsx)("div",{children:(0,Z.jsx)(j.Z,{movies:e})}):(0,Z.jsx)("p",{children:"No movies... Try to find something"}),0===e.length&&""!==e&&(0,Z.jsx)("p",{children:"There is no movies with that name"})]})})}},81:function(n,t,e){e.d(t,{Av:function(){return l},Hj:function(){return x},Yc:function(){return g},gW:function(){return f},tp:function(){return u}});var r=e(861),i=e(757),a=e.n(i),o=e(263),c="7ef9ec3d0132c19ab4685d32429ba26e",s="https://api.themoviedb.org/3";function u(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(a().mark((function n(){var t,e,r,i,u=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:1,e="".concat(s,"/trending/movie/day?api_key=").concat(c,"&page=").concat(t),n.next=4,o.Z.get(e);case 4:return r=n.sent,i=r.data,n.abrupt("return",i.results);case 7:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/search/movie?api_key=").concat(c,"&language=en-US&query=").concat(t),n.next=3,o.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t){var e,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/movie/").concat(t,"?api_key=").concat(c),n.next=3,o.Z.get(e);case 3:return r=n.sent,i=r.data,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(t){var e,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(c),n.next=3,o.Z.get(e);case 3:return r=n.sent,i=r.data,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(a().mark((function n(t){var e,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(c),n.next=3,o.Z.get(e);case 3:return r=n.sent,i=r.data,n.abrupt("return",i.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}u()},672:function(n,t,e){e.d(t,{Z:function(){return b}});e(791);var r,i,a,o,c,s=e(168),u=e(444),p=e(87),l=u.ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]))),d=u.ZP.li(i||(i=(0,s.Z)(["\n  list-style: none;\n  width: 200px;\n  :hover,\n  :focus {\n    scale: 1.1;\n    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),f=(0,u.ZP)(p.OL)(a||(a=(0,s.Z)(["\n  font-size: 24px;\n  text-decoration: none;\n  display: inline-block;\n  cursor: pointer;\n  color: #000;\n  :hover,\n  :focus {\n    color: cornflowerblue;\n    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),h=u.ZP.p(o||(o=(0,s.Z)(["\n  font-weight: 700;\n  margin: 0 0 10px 0;\n  font-size: 18px;\n  text-align: center;\n"]))),x=u.ZP.img(c||(c=(0,s.Z)(["\n  width: 100%;\n  height: 300px;\n  display: block;\n  border-radius: 5px;\n"]))),v=e(689),g=e(184),b=function(n){var t=n.movies,e=(0,v.TH)();return(0,g.jsx)(l,{children:t.map((function(n){var t=n.id,r=n.poster_path,i=n.title;return(0,g.jsx)(d,{children:(0,g.jsxs)(f,{to:"/movies/".concat(t),state:{from:e},children:[(0,g.jsx)(x,{src:r&&"https://image.tmdb.org/t/p/w500/".concat(r),alt:i,width:"200",height:"240"}),(0,g.jsx)(h,{children:i})]})},t)}))})}}}]);
//# sourceMappingURL=589.c67cb5b9.chunk.js.map