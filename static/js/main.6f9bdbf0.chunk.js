(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),s=n(3),i=n(4),u=n(6),p=n(5),l=n(7),m=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Testing")}}]),t}(a.Component),d=n(12),h="GET_POKEMONS_REQUEST",f="GET_POKEMONS_SUCCESS",k="GET_POKEMONS_FAIL",O="SET_POKEMONS",b="FILTER_POKEMONS";function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(t,n){var a=n().page.pokemons.filter(function(t){return t.name.includes(e.toLowerCase())});t({type:b,payload:a})}}var E=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.pokemon;return r.a.createElement("div",{className:"pokemon"},r.a.createElement("button",{type:"button",className:"pokemon__sprite",style:{backgroundImage:"url(".concat("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.id,".png"),")")}}),r.a.createElement("p",{className:"pokemon__name"},e.name))}}]),t}(a.PureComponent),v=function(e){var t=e.onChange;return r.a.createElement("input",{type:"text",onChange:t,placeholder:"Enter pokemon name...",autoFocus:!0})},g=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getPokemons()}},{key:"handleSearch",value:function(e){this.props.filterPokemons(e.currentTarget.value)}},{key:"render",value:function(){var e=this.props,t=e.displayedPokemons,n=e.isFetched,a=e.error,o=t.map(function(e){return r.a.createElement("li",{className:"pokemons__item",key:e.id},r.a.createElement(E,{pokemon:e}))});return r.a.createElement("div",{className:"page"},a&&r.a.createElement("div",{className:"page__error"},a),r.a.createElement("div",{className:"page__search"},r.a.createElement(v,{onChange:this.handleSearch.bind(this)})),n?r.a.createElement("p",null,"Loading..."):r.a.createElement("ul",{className:"pokemons"},o))}}]),t}(a.Component);var j={getPokemons:function(){return function(e){return e({type:h}),fetch("https://pokeapi.co/api/v2/pokemon/?limit=784").then(function(e){if(e.ok)return e.json();throw new Error("".concat(e.status,": ").concat(e.statusText))}).then(function(t){e({type:f}),e(function(e){var t=e.results.map(function(e){var t=e.url;return e.id=t.substring(34,t.length-1),e});return{type:O,payload:t}}(t)),e(y())}).catch(function(t){e({type:k,payload:t.message})})}},filterPokemons:y},_=(Object(d.a)(function(e){var t=e.page;return{displayedPokemons:t.displayedPokemons,isFetched:t.isFetched,error:t.error}},j)(g),n(28),n(1)),P=(n(18),n(30),n(9)),N={isFetched:!1,error:null,pokemons:[],displayedPokemons:[]};Object(_.c)({page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(P.a)({},e,{isFetched:!0});case f:return Object(P.a)({},e,{isFetched:!1});case k:return Object(P.a)({},e,{isFetched:!1,error:t.payload});case O:return Object(P.a)({},e,{pokemons:t.payload});case b:return Object(P.a)({},e,{displayedPokemons:t.payload});default:return e}}});c.a.render(r.a.createElement(m,null),document.getElementById("root"))}},[[19,2,1]]]);
//# sourceMappingURL=main.6f9bdbf0.chunk.js.map