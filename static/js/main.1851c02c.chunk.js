(this.webpackJsonpsolution=this.webpackJsonpsolution||[]).push([[0],{29:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(24),r=a.n(c),i=(a(29),a(2)),s=a.p+"static/media/back.6ae65018.png",o=(a(30),function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=Object(n.useState)(e),a=Object(i.a)(t,2),c=a[0],r=a[1],s=function(){r((function(e){return!e}))};return[c,s]}),d=a(0);var u=function(e){var t=e.front,a=e.back,n=void 0===a?s:a,c=o(!0),r=Object(i.a)(c,2),u=r[0],l=r[1];return Object(d.jsx)("img",{src:u?t:n,alt:"playing card",onClick:l,className:"PlayingCard Card"})},l=(a(32),a(6)),j=a(7),b=a(12),m=a(9),h=a(10),O=a.n(h),f=a(11),p=a.n(f),v=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)([]),o=Object(i.a)(s,2),d=o[0],u=o[1],h=function(){var t=Object(m.a)(Object(l.a)().mark((function t(a){var n;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("".concat(e).concat(a,"/"));case 2:n=t.sent,console.log(n.data),r((function(e){return[].concat(Object(b.a)(e),[Object(j.a)(Object(j.a)({},n.data),{},{id:O()()})])}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(m.a)(Object(l.a)().mark((function t(){var a;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get(e);case 2:a=t.sent,u((function(e){return[].concat(Object(b.a)(e),[Object(j.a)(Object(j.a)({},a.data),{},{id:O()()})])}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return"https://pokeapi.co/api/v2/pokemon/"===e?[c,h]:"https://deckofcardsapi.com/api/deck/new/draw/"===e?[d,f]:void 0};function x(){var e=v("https://deckofcardsapi.com/api/deck/new/draw/"),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(d.jsxs)("div",{className:"PlayingCardList",children:[Object(d.jsx)("h3",{children:"Pick a card, any card!"}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:n,children:"Add a playing card!"})}),Object(d.jsx)("div",{className:"PlayingCardList-card-area",children:a.map((function(e){return Object(d.jsx)(u,{front:e.cards[0].image},e.id)}))})]})}x.defaultProps={};var k=x,g=["pikachu","jigglypuff","charizard","gengar","arcanine","bulbasaur","blaziken","umbreon","lucario","gardevoir","eevee","dragonite","absol","typhlosion","ampharos","squirtle","flygon","ninetales","tyranitar","infernape","snorlax","torterra","luxray","scizor","blastoise","mudkip","garchomp"];var C=function(e){var t=e.add,a=e.pokemon,c=void 0===a?g:a,r=Object(n.useState)(0),s=Object(i.a)(r,2),o=s[0],u=s[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("select",{onChange:function(e){u(e.target.value)},children:c.map((function(e,t){return Object(d.jsx)("option",{value:t,children:e},t)}))}),Object(d.jsx)("button",{onClick:function(){return t(c[o])},children:"Catch one!"}),Object(d.jsx)("button",{onClick:function(){return t((e=c)[Math.floor(Math.random()*e.length)]);var e},children:"I'm feeling lucky"})]})};a(52);var y=function(e){var t=e.front,a=e.back,n=e.name,c=e.stats,r=o(!0),s=Object(i.a)(r,2),u=s[0],l=s[1];return Object(d.jsx)("div",{onClick:l,className:"PokemonCard Card",children:u?Object(d.jsxs)("div",{className:"PokemonCard-front",children:[Object(d.jsx)("img",{src:t,alt:"{name} front"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"PokemonCard-name",children:n}),Object(d.jsx)("ul",{className:"PokemonCard-stats",children:c.map((function(e){return Object(d.jsxs)("li",{children:[Object(d.jsx)("em",{children:e.name}),": ",e.value]},e.name)}))})]})]}):Object(d.jsx)("div",{className:"PokemonCard-back",children:Object(d.jsx)("img",{src:a,alt:"{name} back"})})})};a(53);var w=function(){var e=v("https://pokeapi.co/api/v2/pokemon/"),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(d.jsxs)("div",{className:"PokeDex",children:[Object(d.jsxs)("div",{className:"PokeDex-buttons",children:[Object(d.jsx)("h3",{children:"Please select your pokemon:"}),Object(d.jsx)(C,{add:n})]}),Object(d.jsx)("div",{className:"PokeDex-card-area",children:a.map((function(e){return Object(d.jsx)(y,{front:e.sprites.front_default,back:e.sprites.back_default,name:e.name,stats:e.stats.map((function(e){return{value:e.base_stat,name:e.stat.name}}))},e.id)}))})]})};a(54);var P=function(){return Object(d.jsxs)("div",{className:"CardTable",children:[Object(d.jsx)("header",{children:Object(d.jsx)("h1",{className:"CardTable-heading",children:"Check out all my cards."})}),Object(d.jsxs)("main",{children:[Object(d.jsx)(k,{}),Object(d.jsx)(w,{})]})]})};var N=function(){return Object(d.jsx)(P,{})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(d.jsx)(N,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.1851c02c.chunk.js.map