(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[170],{170:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return b}});var r=n(439),a=n(791),c=n(544),i=n(689),s=n(184),o=function(t){var e=t.movies,n=(0,i.TH)();return(0,s.jsx)(c.Ul,{children:e.map((function(t){var e=t.id,r=t.poster_path,a=t.title;return(0,s.jsx)(c.Li,{children:(0,s.jsxs)(c.Link,{to:"/movies/".concat(e),state:{from:n},children:[(0,s.jsx)(c.Img,{src:r&&"https://image.tmdb.org/t/p/w500/".concat(r),alt:a,width:"200",height:"240"}),(0,s.jsx)("h4",{children:a})]})},e)}))})},u=n(861),p=n(757),h=n.n(p),f=n(263),v="7ef9ec3d0132c19ab4685d32429ba26e",d="https://api.themoviedb.org/3";function l(){return m.apply(this,arguments)}function m(){return m=(0,u.Z)(h().mark((function t(){var e,n,r,a,c=arguments;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:1,n="".concat(d,"/trending/movie/day?api_key=").concat(v,"&page=").concat(e),t.next=4,f.Z.get(n);case 4:return r=t.sent,a=r.data,t.abrupt("return",a.results);case 7:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}function g(){return(g=(0,u.Z)(h().mark((function t(e){var n,r;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(d,"/search/movie?api_key=").concat(v,"&language=en-US&query=").concat(e),t.next=3,f.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(){return(x=(0,u.Z)(h().mark((function t(e){var n,r,a;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(d,"/movie/").concat(e,"?api_key=").concat(v),t.next=3,f.Z.get(n);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(){return(w=(0,u.Z)(h().mark((function t(e){var n,r,a;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(d,"/movie/").concat(e,"/credits?api_key=").concat(v),t.next=3,f.Z.get(n);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(){return(y=(0,u.Z)(h().mark((function t(e){var n,r,a;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(d,"/movie/").concat(e,"/reviews?api_key=").concat(v),t.next=3,f.Z.get(n);case 3:return r=t.sent,a=r.data,t.abrupt("return",a.results);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}l();var k={GetMovieTrending:l,GetSearchMovies:function(t){return g.apply(this,arguments)},GetMovieDetails:function(t){return x.apply(this,arguments)},GetMovieCast:function(t){return w.apply(this,arguments)},GetMovieReviews:function(t){return y.apply(this,arguments)}},_=k,b=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],c=e[1];return(0,a.useEffect)((function(){_.GetMovieTrending().then(c)}),[]),console.log("movies",n),(0,s.jsx)("main",{children:(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Trending today"}),(0,s.jsx)(o,{movies:n})]})})}},544:function(){}}]);
//# sourceMappingURL=170.fb48facf.chunk.js.map