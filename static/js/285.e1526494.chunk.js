"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[285],{285:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var o=n(439),r=n(791),c=n(689),i=n(87),a=n(184),u=function(e){var t=e.valueSearch,n=(0,r.useState)([]),u=(0,o.Z)(n,2),s=u[0],l=u[1],h=(0,c.TH)();return(0,r.useEffect)((function(){t&&(console.log("valueSearch>>**",t),fetch("https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=".concat(t),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmJmNDU3NGU0NmM4MDU0ZjVmMDkyZmQ2NGQzMWIzZiIsInN1YiI6IjY0MzcwNGQwMWY3NDhiMDA3NzE1NGVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WJVw4SC0wxekMACd_HjNy4-mtG2EpEBFxroutosJfJc"}}).then((function(e){return e.json()})).then((function(e){console.log(e.results),l(e.results)})).catch((function(e){return console.error(e)})))}),[t]),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:s.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsxs)(i.OL,{to:"/movies/".concat(String(e.id)),state:{from:h},children:[e.title,e.name]})},e.id)}))})})},s=function(){var e,t=(0,r.useState)(""),n=(0,o.Z)(t,2),s=n[0],l=n[1],h=(0,i.lr)(),f=(0,o.Z)(h,2),d=f[0],m=f[1],v=(0,c.TH)(),j=null!==(e=d.get("search"))&&void 0!==e?e:"";console.log("search:>> ",j),console.log("location:>> ",v);return(0,a.jsxs)("div",{children:[(0,a.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),console.log("valueSearch>>",s),""===s.trim())return m({}),void alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0434\u043b\u044f \u043f\u043e\u0448\u0443\u043a\u0443");m({search:s})},children:[(0,a.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:s,onChange:function(e){l(e.target.value.toLowerCase())}}),(0,a.jsx)("button",{type:"submit",children:(0,a.jsx)("span",{children:"Search"})})]}),(0,a.jsx)(u,{valueSearch:j})]})};var l=function(){return(0,a.jsx)(s,{})}}}]);
//# sourceMappingURL=285.e1526494.chunk.js.map