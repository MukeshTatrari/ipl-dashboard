(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},42:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(31),r=c.n(s),i=(c(39),c(40),c(14)),j=c.n(i),m=c(16),l=c(17),h=c(10),o=c(11),d=c(13),u=c(12),b=c(4),O=(c(42),c(0)),x=function(e){Object(d.a)(c,e);var t=Object(u.a)(c);function c(){return Object(h.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props,t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,n="/teams/".concat(a),s=t===c.matchWinner;return Object(O.jsxs)("div",{className:s?"MatchDetailCard won-card":"MatchDetailCard lost-card",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{className:"vs",children:"vs"}),Object(O.jsx)("h1",{children:Object(O.jsx)(b.b,{to:n,children:a})}),Object(O.jsx)("h2",{className:"match-date",children:c.date}),Object(O.jsxs)("h3",{className:"match-venue",children:["at ",c.venue]}),Object(O.jsxs)("h3",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result," "]})]}),Object(O.jsxs)("div",{className:"additional-detail",children:[Object(O.jsx)("h3",{children:"First Innings"}),Object(O.jsx)("p",{children:c.team1}),Object(O.jsx)("h3",{children:"Second Innings"}),Object(O.jsx)("p",{children:c.team2}),Object(O.jsx)("h3",{children:"Man of the match"}),Object(O.jsx)("p",{children:c.playerOfMatch}),Object(O.jsx)("h3",{children:"Umpires"}),Object(O.jsxs)("p",{children:[c.umpire1,", ",c.umpire2]})]})]})}}]),c}(a.Component),f=(c(49),function(e){Object(d.a)(c,e);var t=Object(u.a)(c);function c(){return Object(h.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props,t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,n="/teams/".concat(a),s=t===c.matchWinner;return Object(O.jsxs)("div",{className:s?"MatchSmallCard won-card":"MatchSmallCard lost-card",children:[Object(O.jsx)("span",{className:"vs",children:"vs"}),Object(O.jsx)("h1",{children:Object(O.jsx)(b.b,{to:n,children:a})}),Object(O.jsxs)("p",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result," "]})]})}}]),c}(a.Component)),v=c(2),p=c(33),N=(c(50),function(){var e=Object(a.useState)({matches:[]}),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(v.f)().teamName;return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team/").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),c&&c.teamName?Object(O.jsxs)("div",{className:"TeamPage",children:[Object(O.jsx)("div",{className:"team-name-section",children:Object(O.jsx)("h1",{className:"team-name",children:c.teamName})}),Object(O.jsxs)("div",{className:"win-loss-section",children:["Wins / Losses",Object(O.jsx)(p.PieChart,{data:[{title:"Losses",value:c.totalMatches-c.totalWins,color:"#a34d5d"},{title:"Wins",value:c.totalWins,color:"#4da375"}]})]}),Object(O.jsxs)("div",{className:"match-detail-section",children:[Object(O.jsx)("h3",{children:"Latest Matches"}),Object(O.jsx)(x,{teamName:c.teamName,match:c.matches[0]})]}),c.matches.slice(1).map((function(e){return Object(O.jsx)(f,{teamName:c.teamName,match:e},e.id)})),Object(O.jsx)("div",{className:"more-link",children:Object(O.jsx)(b.b,{to:"/teams/".concat(s,"/matches/").concat("2020"),children:"More >"})})]}):Object(O.jsx)("h1",{children:"Team not found"})}),g=(c(51),function(e){for(var t=e.teamName,c=[],a="2008";a<="2020";a++)c.push(a);return Object(O.jsx)("ol",{className:"YearSelector",children:c.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)(b.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:e})},e)}))})}),y=(c(52),function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(v.f)(),r=s.teamName,i=s.year;return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/").concat(r,"/matches?year=").concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,i]),Object(O.jsxs)("div",{className:"MatchPage",children:[Object(O.jsxs)("div",{className:"year-selector",children:[Object(O.jsx)("h3",{children:" Select Year "}),Object(O.jsx)(g,{teamName:r})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{className:"page-heading",children:[r," matches in ",i]}),c.map((function(e){return Object(O.jsx)(x,{teamName:r,match:e},e.id)}))]})]})}),M=(c(53),c(54),function(e){var t=e.teamName;return Object(O.jsx)("div",{className:"TeamTile",children:Object(O.jsx)("h1",{children:Object(O.jsx)(b.b,{to:"/teams/".concat(t),children:t})})})}),w=c(34),C=c.n(w),S=function(e){Object(d.a)(c,e);var t=Object(u.a)(c);function c(e){var a;return Object(h.a)(this,c),(a=t.call(this,e)).fetcTeams=function(){var e="".concat("","/teams");C.a.get(e).then((function(e){a.setState({teams:e.data})})).catch((function(e){console.log(e)}))},a.state={teams:[]},a}return Object(o.a)(c,[{key:"componentDidMount",value:function(){this.fetcTeams()}},{key:"render",value:function(){var e=this.state.teams;return Object(O.jsxs)("div",{className:"HomePage",children:[Object(O.jsx)("div",{className:"header-section",children:Object(O.jsx)("h1",{className:"app-name",children:"IPL Dashboard"})}),Object(O.jsx)("div",{className:"team-grid",children:e.map((function(e){return Object(O.jsx)(M,{teamName:e.teamName},e.id)}))})]})}}]),c}(a.Component);var k=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(b.a,{children:Object(O.jsxs)(v.c,{children:[Object(O.jsx)(v.a,{exact:!0,path:"/",children:Object(O.jsx)(S,{})}),Object(O.jsx)(v.a,{exact:!0,path:"/teams/:teamName",children:Object(O.jsx)(N,{})}),Object(O.jsx)(v.a,{exact:!0,path:"/teams/:teamName/matches/:year",children:Object(O.jsx)(y,{})})]})})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,74)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root")),T()}},[[73,1,2]]]);
//# sourceMappingURL=main.d54d542a.chunk.js.map