"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[794],{794:function(e,i,n){n.r(i),n.d(i,{default:function(){return a}});var s=n(439),o=n(791),c=n(689),t=n(87),r={link:"MoviesDetails_link__u-1tN",info:"MoviesDetails_info__JHBnq",info_movie:"MoviesDetails_info_movie__2JGR7"},l=n(184),a=function(){var e,i,n,a=(0,c.UO)(),d=(0,o.useState)([]),h=(0,s.Z)(d,2),v=h[0],u=h[1],m=(0,c.TH)(),j=(0,o.useRef)(null!==(e=null===(i=m.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/");console.log("location. state >>",m),(0,o.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(a.moviesId,"?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmJmNDU3NGU0NmM4MDU0ZjVmMDkyZmQ2NGQzMWIzZiIsInN1YiI6IjY0MzcwNGQwMWY3NDhiMDA3NzE1NGVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WJVw4SC0wxekMACd_HjNy4-mtG2EpEBFxroutosJfJc"}}).then((function(e){return e.json()})).then((function(e){console.log(e),u(e)})).catch((function(e){return console.error(e)}))}),[a.moviesId]);var f="https://image.tmdb.org/t/p/w500".concat(v.backdrop_path);return console.log("currentMovies--",v),console.log(f),console.log("currentMovies.genres",v.genres),(0,l.jsxs)("div",{children:[(0,l.jsx)(t.rU,{className:r.link,to:j.current,children:"go back"}),(0,l.jsxs)("div",{className:r.info,children:[(0,l.jsx)("div",{className:r.photo_movie,children:(0,l.jsx)("img",{width:"350",src:f,alt:""})}),(0,l.jsxs)("div",{className:r.info_movie,children:[(0,l.jsx)("h2",{children:v.title}),(0,l.jsxs)("p",{children:["User score: ",v.popularity,"%"]}),(0,l.jsx)("p",{children:v.overview}),(0,l.jsx)("h2",{children:"Genres"}),null===v||void 0===v||null===(n=v.genres)||void 0===n?void 0:n.map((function(e){return(0,l.jsxs)("span",{children:[e.name," "]},e.id)}))]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Additional information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(t.rU,{className:"nav-link active","aria-current":"page",to:"/movies/".concat(String(a.moviesId),"/cast"),children:"Cast"})},"Cast"),(0,l.jsx)("li",{children:(0,l.jsx)(t.rU,{className:"nav-link",to:"/movies/".concat(String(a.moviesId),"/reviews"),children:"Reviews"})},"Reviews")]}),(0,l.jsx)(o.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading..."}),children:(0,l.jsx)(c.j3,{})})]})]})}}}]);
//# sourceMappingURL=794.efdab9f5.chunk.js.map