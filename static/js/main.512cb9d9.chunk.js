(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),s=a.n(i),o=a(19),c=(a(69),a(21)),l=a(22),m=a(24),h=a(23),d=a(25),u=a(108),f=a(107),p=a(16),v=function(e){function t(e){var a;return Object(c.a)(this,t),a=Object(m.a)(this,Object(h.a)(t).call(this,e)),console.log(e),a.state={isHovering:!1,onSelect:e.onSelect},a.handleMouseHover=a.handleMouseHover.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleMouseHover",value:function(){this.setState(function(e){return{isHovering:!e.isHovering}})}},{key:"render",value:function(){return console.log("Logo process.env","/website"),r.a.createElement("div",{onMouseEnter:this.handleMouseHover,onMouseLeave:this.handleMouseHover},this.state.isHovering?r.a.createElement("img",{className:"HomeRocket",src:"/website/img/rocket_anmi.gif",alt:"Rocket Home"}):r.a.createElement("img",{className:"HomeRocket",src:"/website/img/logo.png",alt:"Rocket Home"}))}}]),t}(r.a.Component);var g=function(){return r.a.createElement("div",null,r.a.createElement(u.a,{bg:"light",expand:"lg",fixed:"top"},r.a.createElement(u.a.Brand,{as:o.b,to:"/"},r.a.createElement(v,null)),r.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(f.a,{className:"mr-auto"},r.a.createElement(f.a.Link,{as:o.b,to:"/team"},"Officers"),r.a.createElement(f.a.Link,{as:o.b,to:"/events"},"Events"),r.a.createElement(f.a.Link,{as:o.b,to:"/projects"},"Projects"),r.a.createElement(f.a.Link,{as:o.b,to:"/learn"},"Learn")))))},E=a(26),b=a(105),k={sponsors:[{img:"nasa.png",class:"circle"},{img:"boeing.png",class:"box"},{img:"lockheed.png",class:"box"},{img:"northrop.png",class:"box"},{img:"raytheon.png",class:"box"}]};a(82);var y=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"sponsors"},r.a.createElement("h2",null,"Sponsors")),r.a.createElement("div",{className:"sponsor_imgs"},k.sponsors.map(function(e,t){return r.a.createElement(b.a,{key:t,src:"/website/img/sponsors/"+e.img,className:e.class})})))};var w=function(e){return r.a.createElement("div",null,r.a.createElement("h4",null,"Contact"))};a(83);var j=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"home"},r.a.createElement(b.a,{src:"/website/img/space.png",fluid:!0}),r.a.createElement("h3",null,"Mission Statement"),r.a.createElement("p",null,'In 1962 President John F. Kennedy said "We choose to go to the moon in this decade... not because they are easy, but because they are hard". This speech kicked off the space race which brough placing Americans on the moon. Today')),r.a.createElement("div",{className:"w-and-w"},r.a.createElement("div",null,r.a.createElement("div",{className:"w"},r.a.createElement("h3",null,"Where")),r.a.createElement("strong",null,"Benedum 303")),r.a.createElement("div",null,r.a.createElement("div",{className:"w"},r.a.createElement("h3",null,"When")),r.a.createElement("strong",null,"Thursdays 6:00"))),r.a.createElement(y,null),r.a.createElement(w,null))};var x=function(e){var t=e.attr,a=t.name,n=t.position,i=t.image,s=t.descript,o=t.skills;return r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("div",{className:"member"},r.a.createElement("div",{className:"pict"},r.a.createElement("img",{className:"profile",src:i,alt:"profile"})),r.a.createElement("div",{className:"info"},r.a.createElement("h4",{className:"name"},a),r.a.createElement("div",{className:"descript"},s,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("strong",{className:"name"},"Skills:"),r.a.createElement("br",null),console.log(o),o.join(", ")))))},N="/website/img/officers/",C={team:[{name:"George Washington",position:"President",image:N+"officer_helmet.jpg",descript:["I am the Pitt Rocketry Club's President. ","I have been fascated by rockets since I was young.","In my spare time","I like to chop down cherry trees. ","I am the Pitt Rocketry Club's President. ","I have been fascated by rockets since I was young.","In my spare time","I like to chop down cherry trees. ","I am the Pitt Rocketry Club's President. ","I have been fascated by rockets since I was young.","In my spare time","I like to chop down cherry trees."],skills:["rockets","electronics","programming","mechanical"]},{name:"Thomas Jefferson",position:"Vice President",image:N+"officer_sit.jpg",descript:["I am the Pitt Rocketry Club's President.","I have been fascated by rockets since I was young."],skills:["rockets","electronics","programming","mechanical"]},{name:"Benjamin Franklin",position:"Techincal Lead",image:N+"officer_helmet.jpg",descript:["I am the Pitt Rocketry Club's President.","I know everything about rockets so please talk to me."],skills:["rockets","electronics","programming","mechanical"]},{name:"John Adams",position:"Outreach Lead",image:N+"officer_sit.jpg",descript:["I am the Pitt Rocketry Club's President.","I know everything about rockets so please talk to me."],skills:["rockets","electronics","programming","mechanical"]},{name:"Thomas Paine",position:"Business Lead",image:N+"officer_helmet.jpg",descript:["I am the Pitt Rocketry Club's President.","I know everything about rockets so please talk to me."],skills:["rockets","electronics","programming","mechanical"]}]};a(84);var T=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Meet the Officers"),r.a.createElement("div",{className:"members"},C.team.map(function(e,t){return r.a.createElement(x,{key:t,attr:e})})))},M=a(106),I=a(37),O=(a(55),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={showText:!1,descr:e.descript},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.descr.join(""),a=t;return t.length>150&&(a=t.substring(0,150)+"..."),r.a.createElement("div",{className:"discript poop"},r.a.createElement("div",null,this.state.showText?t:a),t.length>150&&r.a.createElement("a",{onClick:function(){return e.setState({showText:!e.state.showText})}},r.a.createElement("div",{className:"show"},this.state.showText?"(less)":"(more)")))}}]),t}(r.a.Component)),P=a(85);var H=function(e){var t=e.attr,a=t.date,n=t.time,i=t.where,s=t.title,o=t.descript;return r.a.createElement("div",{className:e.color_event},r.a.createElement("div",{className:"event"},r.a.createElement("h2",{className:s.localeCompare("No Meeting")?"":"no-meeting"},s),r.a.createElement("h3",{className:"date"},P(new Date(a)).format("MMMM Do, YYYY"))),r.a.createElement("div",{className:"time-and-place"},0!==i.length&&r.a.createElement("div",null,r.a.createElement("strong",null,"Where: "),i),0!==n.length&&r.a.createElement("div",null,r.a.createElement("strong",null,"When: "),n)),r.a.createElement("div",{className:"info"},r.a.createElement(O,{descript:o})))},R={events:[{date:"9/1/2019",time:"6:00 PM",where:"BEN 300A",title:"First Meeting",descript:["This is a mixer to come meet the officers and make ","some more friends. Come have fun and enjoy.","This is a mixer to come meet the officers and make ","some more friends. Come have fun and enjoy.","This is a mixer to come meet the officers and make ","some more friends. Come have fun and enjoy."]},{date:"10/12/2019",time:"10:00 AM",where:"Cathy 410",title:"Launch Date",descript:["WE LAUNCH THE ROCKET TODAY!!! ","Come have fun and enjoy."]},{date:"11/24/2019",time:"",where:"",title:"No Meeting",descript:[]},{date:"9/3/2019",time:"6:00 PM",where:"BEN 300A",title:"First Meeting",descript:["This is a mixer to come meet the officers and make ","some more friends. Come have fun and enjoy.","This is a mixer to come meet the officers and make ","some more friends. Come have fun and enjoy.","This is a mixer to come meet the officers and make ","some more friends. Come have fun and enjoy."]},{date:"9/4/2019",time:"6:00 PM",where:"BEN 300A",title:"First Meeting",descript:["This is a mixer to come meet the officers and make ","some more friends. Come have fun and enjoy.","This is a mixer to come meet the officers and make ","some more friends. Come have fun and enjoy.","This is a mixer to come meet the officers and make ","some more friends. Come have fun and enjoy."]},{date:"9/5/2019",time:"6:00 PM",where:"BEN 300A",title:"First Meeting",descript:["This is a mixer to come meet the officers and make ","some more friends. Come have fun and enjoy.","This is a mixer to come meet the officers and make ","some more friends. Come have fun and enjoy.","This is a mixer to come meet the officers and make ","some more friends. Come have fun and enjoy."]},{date:"9/6/2019",time:"6:00 PM",where:"BEN 300A",title:"First Meeting",descript:["This is a mixer to come meet the officers and make ","some more friends. Come have fun and enjoy.","This is a mixer to come meet the officers and make ","some more friends. Come have fun and enjoy.","This is a mixer to come meet the officers and make ","some more friends. Come have fun and enjoy."]},{date:"9/6/2019",time:"6:00 PM",where:"BEN 300A",title:"First Meeting",descript:["This is a mixer to come meet the officers and make ","some more friends. Come have fun and enjoy.","This is a mixer to come meet the officers and make ","some more friends. Come have fun and enjoy.","This is a mixer to come meet the officers and make ","some more friends. Come have fun and enjoy."]}]},S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={newest:!0,title:"newest",other:"oldest"},a.handleSelect=a.handleSelect.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleSelect",value:function(e){var t="newest"===e.target.innerText;this.setState({newest:t,title:t?"newest":"oldest",other:t?"oldest":"newest"})}},{key:"render",value:function(){var e=this.state.newest;return r.a.createElement("div",null,r.a.createElement("div",{className:"event-title"},r.a.createElement("h1",null," Events "),r.a.createElement("div",{className:"sort-by"},r.a.createElement("div",{className:"sort-by-label"},"Sort By:"),r.a.createElement(M.a,{id:"dropdown-basic-button",title:this.state.title},r.a.createElement(I.a.Item,{onClick:this.handleSelect},this.state.other)))),r.a.createElement("div",{className:"events"},R.events.length>0?R.events.sort(function(t,a){return e?new Date(t.date)-new Date(a.date):new Date(a.date)-new Date(t.date)}).map(function(e,t){return r.a.createElement(H,{key:t,attr:e,color_event:["event_blue","event_grey"][t%2]})}):r.a.createElement("div",{className:"no-events"},r.a.createElement("h2",null," Sorry no events :( "))))}}]),t}(r.a.Component),A=a(109);var B=function(){return r.a.createElement("p",{className:"main-desc"},"A rocket is a missile, spacecraft, aircraft or other vehicle that obtains thrust from a rocket engine. Rocket engine exhaust is formed entirely from propellant carried within the rocket before use. Rocket engines work by action and reaction and push rockets forward simply by expelling their exhaust in the opposite direction at high speed, and can therefore work in the vacuum of space.",r.a.createElement("br",null),"In fact, rockets work more efficiently in space than in an atmosphere. Multistage rockets are capable of attaining escape velocity from Earth and therefore can achieve unlimited maximum altitude. Compared with airbreathing engines, rockets are lightweight and powerful and capable of generating large accelerations. To control their flight, rockets rely on momentum, airfoils, auxiliary reaction engines, gimballed thrust, momentum wheels, deflection of the exhaust stream, propellant flow, spin, or gravity.",r.a.createElement("br",null),"Rockets for military and recreational uses date back to at least 13th-century China.[3] Significant scientific, interplanetary and industrial use did not occur until the 20th century, when rocketry was the enabling technology for the Space Age, including setting foot on the Earth's moon. Rockets are now used for fireworks, weaponry, ejection seats, launch vehicles for artificial satellites, human spaceflight, and space exploration.",r.a.createElement("br",null),"Chemical rockets are the most common type of high power rocket, typically creating a high speed exhaust by the combustion of fuel with an oxidizer. The stored propellant can be a simple pressurized gas or a single liquid fuel that disassociates in the presence of a catalyst (monopropellants), two liquids that spontaneously react on contact (hypergolic propellants), two liquids that must be ignited to react, a solid combination of fuel with oxidizer (solid fuel), or solid fuel with liquid oxidizer (hybrid propellant system). Chemical rockets store a large amount of energy in an easily released form, and can be very dangerous. However, careful design, testing, construction and use minimizes risks.")},L=a(110);var _=function(e){var t=e.key,a=e.attr,n=a.title,i=(a.img,a.description);return r.a.createElement(L.a,null,r.a.createElement(A.a.Toggle,{as:L.a.Header,eventKey:t},n),r.a.createElement(A.a.Collapse,{eventKey:t},r.a.createElement(L.a.Body,null,r.a.createElement("div",{className:"subteam-desc"},i))))},D={projects:[{title:"Electronics",image:"",description:[]}]};a(101);var F=function(){return r.a.createElement("div",null,r.a.createElement("h1",null," Projects "),r.a.createElement("div",{className:"main"},r.a.createElement(b.a,{src:"/website/img/projects/main.jpg",className:"main-pic"}),r.a.createElement(B,null)),r.a.createElement("div",null,r.a.createElement(A.a,{defaultActiveKey:"0"},D.projects.map(function(e,t){return r.a.createElement(_,{key:t,attr:e,basename:"/website"})}))))};var W=function(){return r.a.createElement("div",null,r.a.createElement("h1",null," Learn "))};var z=function(){return console.log("This is the process.env","/website"),r.a.createElement("div",{className:"title"},r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/team",component:T}),r.a.createElement(E.a,{exact:!0,path:"/events",component:S}),r.a.createElement(E.a,{exact:!0,path:"/projects",component:F}),r.a.createElement(E.a,{exact:!0,path:"/learn",component:W}),r.a.createElement(E.a,{exact:!0,path:"/",component:j}),r.a.createElement(E.a,{render:function(){return r.a.createElement("p",null,"Not found")}})))},J=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(z,null))}}]),t}(n.Component);a(102);s.a.render(r.a.createElement(o.a,{basename:"/website"},r.a.createElement(J,null)),document.getElementById("root"))},55:function(e,t,a){},64:function(e,t,a){e.exports=a(103)},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.512cb9d9.chunk.js.map