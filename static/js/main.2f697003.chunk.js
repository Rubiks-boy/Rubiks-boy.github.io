(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{57:function(e,t,a){e.exports=a(73)},62:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),i=(a(62),a(32)),l=a(6),m=a(22),s=a(39),u=a(106),d=a(97),p=a(98),h=a(95),g=a(75),E=a(18),b=a(107),f=Object(h.a)((function(e){var t;return{heroContent:{backgroundColor:e.palette.background.default,padding:e.spacing(12,0,9)},heroButtons:{marginTop:e.spacing(4)},components:(t={},Object(s.a)(t,e.breakpoints.down("sm"),{textAlign:"center",justifyContent:"center"}),Object(s.a)(t,e.breakpoints.up("md"),{}),t)}}));function w(){var e=f(),t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(!1),s=Object(m.a)(l,2),h=s[0],w=s[1],v=Object(n.useState)(!1),k=Object(m.a)(v,2),y=k[0],j=k[1],x=Object(n.useState)(!1),I=Object(m.a)(x,2),O=I[0],S=I[1],N=Object(n.useState)(!1),B=Object(m.a)(N,2),C=B[0],F=B[1];return Object(n.useEffect)((function(){o(!0),setTimeout((function(){w(!0)}),300),setTimeout((function(){j(!0)}),600),setTimeout((function(){S(!0)}),900),setTimeout((function(){F(!0)}),1200)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.heroContent},r.a.createElement(d.a,{maxWidth:"md"},r.a.createElement(p.a,{container:!0,spacing:4},r.a.createElement(p.a,{item:!0,key:1,xs:12,sm:12,md:6},r.a.createElement(b.a,{in:c,timeout:500},r.a.createElement("div",null,r.a.createElement(g.a,{className:e.components,component:"h1",variant:"h2",color:"textPrimary",gutterBottom:!0},"Adam Walker"),r.a.createElement(g.a,{className:e.components,variant:"h5",color:"textSecondary",paragraph:!0},"I will come up with something to put here."))),r.a.createElement(b.a,{in:h,timeout:1500},r.a.createElement("div",{className:e.heroButtons},r.a.createElement(p.a,{container:!0,spacing:2,className:e.components},r.a.createElement(p.a,{item:!0},r.a.createElement(i.b,{to:"/Resume.pdf",target:"_blank"},r.a.createElement(u.a,{variant:"contained",color:"primary"},"Download Resume"))),r.a.createElement(p.a,{item:!0},r.a.createElement(u.a,{variant:"outlined",color:"primary"},"Secondary action"))))),r.a.createElement("div",{className:e.heroButtons},r.a.createElement(p.a,{container:!0,spacing:1,className:e.components},r.a.createElement(b.a,{in:y,timeout:2500},r.a.createElement(p.a,{item:!0},r.a.createElement(E.SocialIcon,{url:"https://github.com/Rubiks-boy"}))),r.a.createElement(b.a,{in:O,timeout:2500},r.a.createElement(p.a,{item:!0},r.a.createElement(E.SocialIcon,{url:"https://www.facebook.com/adamwalker567123/"}))),r.a.createElement(b.a,{in:C,timeout:2500},r.a.createElement(p.a,{item:!0},r.a.createElement(E.SocialIcon,{url:"https://www.linkedin.com/in/adam-walker-hmc/"})))))),r.a.createElement(p.a,{item:!0,key:2,xs:12,sm:6,md:4})))))}var v=a(108),k=a(99),y=a(100),j=a(101),x=a(48),I=a(49),O=a(52),S=a(51),N=function(e){Object(O.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(x.a)(this,a),(n=t.call(this,e)).setFadeIn=function(){n.setState({fadeIn:!0})},n.performFadeIn=function(e){var t=n.props.delay;return new Promise((function(){setTimeout((function(){e()}),t)}))},n.state={fadeIn:!1},n}return Object(I.a)(a,[{key:"componentDidMount",value:function(){this.performFadeIn(this.setFadeIn)}},{key:"render",value:function(){var e=this.props.children,t=this.state.fadeIn;return r.a.createElement(b.a,{in:t,timeout:1500},e)}}]),a}(r.a.Component),B=[{name:"iPod Mods",desc:"Bluetooth modded a click wheel iPod classic",image:"https://source.unsplash.com/random"},{name:"6502 8-bit Computer",desc:"Based on Ben Eater's 6502 computer design, build and programmed the 8-bit computer.",image:"https://source.unsplash.com/random"},{name:"Bowling Pinsetter",desc:" 3D modeled and printed a semi-automatic bowling pinsetter. Sold full java-based scoring system with GUI, Arduino-based triggering device & image processing to identify standing pins.",image:"https://source.unsplash.com/random"},{name:"Intel ISEF",desc:"3D modeled/printed & programmed white cane add-on for visually impaired. Won first place in engineering category at UNLV Regional Fair & invited to International Fair. ",image:"https://source.unsplash.com/random"}],C=Object(h.a)((function(e){return{cardGrid:{backgroundColor:e.palette.background.default,paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}));function F(){var e=C();return r.a.createElement("div",{className:e.cardGrid},r.a.createElement(d.a,{maxWidth:"md"},r.a.createElement(p.a,{container:!0,spacing:4},B.map((function(t,a){return r.a.createElement(p.a,{item:!0,key:a,xs:12,sm:6,md:4},r.a.createElement(N,{delay:100*a},r.a.createElement(v.a,{className:e.card},r.a.createElement(k.a,{className:e.cardMedia,image:t.image,title:t.name}),r.a.createElement(y.a,{className:e.cardContent},r.a.createElement(g.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.name),r.a.createElement(g.a,null,t.desc)),r.a.createElement(j.a,null,r.a.createElement(u.a,{size:"small",variant:"contained",color:"primary"},"View"),r.a.createElement(u.a,{size:"small",color:"primary"},"Edit")))))})))))}var T=a(102),W=Object(h.a)((function(e){return{footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},socialIcons:{justifyContent:"center"},socialIcon:{width:"30px"}}}));function D(){return r.a.createElement(g.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(T.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}function M(){var e=W();return r.a.createElement("footer",{className:e.footer},r.a.createElement(g.a,{variant:"h6",align:"center",color:"textPrimary",gutterBottom:!0},"Footer"),r.a.createElement(g.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Something here to give the footer a purpose!"),r.a.createElement("div",null,r.a.createElement(p.a,{container:!0,spacing:1,className:e.socialIcons},r.a.createElement(p.a,{item:!0},r.a.createElement(E.SocialIcon,{url:"https://github.com/Rubiks-boy",style:{width:"30px",height:"30px",color:"black"}})),r.a.createElement(p.a,{item:!0},r.a.createElement(E.SocialIcon,{url:"https://www.facebook.com/adamwalker567123/",style:{width:"30px",height:"30px"}})),r.a.createElement(p.a,{item:!0},r.a.createElement(E.SocialIcon,{url:"https://www.linkedin.com/in/adam-walker-hmc/",style:{width:"30px",height:"30px"}})))),r.a.createElement(D,null))}var P=a(103),R=a(50),A=a(104);function G(){var e=Object(P.a)("(prefers-color-scheme: dark)"),t=r.a.useMemo((function(){return Object(R.a)({palette:{type:e?"dark":"light"}})}),[e]);return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(A.a,{theme:t},r.a.createElement(l.a,{exact:!0,path:"/"},r.a.createElement(w,null),r.a.createElement(F,null)),r.a.createElement(M,null))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(105);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z.a,null),r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.2f697003.chunk.js.map