(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{114:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(8),s=a(21),u=a(64),i=a(4),m="[Ui] Open Modal",f="[Ui] Close Modal",p="[Event] Add new event",d="[Event] Set Active event",v="[Event] Clear Active event",b="[Event] Update  event",E="[Event] Deleted  event",h="[Event] Loaded enevents",O="[Event] Clear  enevents",g="[Auth] Finish login state",j="[Auth] Login ",y="[Auth] Start Register",N="[Auth]  Logout",w={modalOpen:!1},k=a(54),x={events:[],activeEvent:null},S={checking:!0},C=Object(s.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,a=t.type;t.payload;switch(a){case m:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!0});case f:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case p:return Object(i.a)(Object(i.a)({},e),{},{events:[].concat(Object(k.a)(e.events),[n])});case d:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:n});case v:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:null});case b:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.map((function(e){return e.id===n.id?n:e}))});case E:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case h:return Object(i.a)(Object(i.a)({},e),{},{events:Object(k.a)(n)});case O:return Object(i.a)({},x);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case j:return Object(i.a)(Object(i.a)(Object(i.a)({},e),n),{},{checking:!1});case y:return Object(i.a)(Object(i.a)({},e),{},{checking:!1},n);case g:return Object(i.a)(Object(i.a)({},e),{},{checking:!1});case N:return Object(i.a)(Object(i.a)({},S),{},{checking:!1});default:return e}}}),D="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,A=Object(s.e)(C,D(Object(s.a)(u.a))),T=a(35),P=a(9),I=a(15),R=(a(75),a(24)),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(I.a)(t,2),r=a[0],c=a[1],o=function(e){var t=e.target;c(Object(i.a)(Object(i.a)({},r),{},Object(R.a)({},t.name,t.value)))},l=function(){c(e)};return[r,o,l]},L=a(11),F=a.n(L),G=a(20),M="https://backend-calendar-node.herokuapp.com/api",U=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(M,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},V=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(M,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===a?fetch(n,{method:a,headers:{"x-token":r}}):fetch(n,{method:a,headers:{"x-token":r,"Content-type":"application/json"},body:JSON.stringify(t)})},H=a(12),J=a.n(H),B=function(e){return{type:j,payload:e}},X=function(e){return{type:y,payload:e}},q=function(){return{type:g}},z=function(){return{type:N}},K=function(){var e=Object(l.b)(),t=_({lEmail:"",lPassword:""}),a=Object(I.a)(t,2),n=a[0],c=a[1],o=_({rName:"",rEmail:"",rPassword1:"",rPassword2:""}),s=Object(I.a)(o,2),u=s[0],i=s[1],m=n.lEmail,f=n.lPassword,p=u.rName,d=u.rEmail,v=u.rPassword1,b=u.rPassword2;return r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 login-form-1"},r.a.createElement("h3",null,"Ingreso"),r.a.createElement("form",{onSubmit:function(t){var a,n;t.preventDefault(),e((a=m,n=f,function(){var e=Object(G.a)(F.a.mark((function e(t){var r,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U("auth",{email:a,password:n},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init",(new Date).getTime()),t(B(c.user))):J.a.fire("Error!",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:m,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:f,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Login"})))),r.a.createElement("div",{className:"col-md-6 login-form-2"},r.a.createElement("h3",null,"Registro"),r.a.createElement("form",{onSubmit:function(t){var a,n,r;t.preventDefault(),v!==b&&J.a.fire("Error !","Las contrase\xf1as no son iguales","error"),e((a=p,n=d,r=v,function(){var e=Object(G.a)(F.a.mark((function e(t){var c,o;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U("auth/new",{name:a,email:n,password:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init",(new Date).getTime()),t(X(o.user))):J.a.fire("Error!",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:p,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:d,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:v,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:b,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"}))))))},Q=a(53),W=a(13),Y=a.n(W),Z=(a(78),a(79),a(48)),$=a.n(Z),ee=a(50),te=a.n(ee),ae=function(){return{type:m}},ne=function(e){return{type:p,payload:e}},re=function(){return{type:v}},ce=function(e){return{type:b,payload:e}},oe=function(e){return{type:h,payload:e}},le={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};te.a.setAppElement("#root");var se=Y()().minutes(0).seconds(0).add(1,"hours"),ue=se.clone().add(1,"hours"),ie={title:"Evento",note:"",start:se.toDate(),end:ue.toDate()},me=function(){var e=Object(l.c)((function(e){return e.ui})).modalOpen,t=Object(l.c)((function(e){return e.calendar})).activeEvent,a=Object(l.b)(),c=Object(n.useState)(se.toDate()),o=Object(I.a)(c,2),s=o[0],u=o[1],m=Object(n.useState)(ue.toDate()),p=Object(I.a)(m,2),d=p[0],v=p[1],b=Object(n.useState)(!0),E=Object(I.a)(b,2),h=E[0],O=E[1],g=Object(n.useState)(ie),j=Object(I.a)(g,2),y=j[0],N=j[1],w=y.title,k=y.note,x=y.start,S=y.end;Object(n.useEffect)((function(){N(t||ie)}),[t,N]);var C=function(e){var t=e.target;N(Object(i.a)(Object(i.a)({},y),{},Object(R.a)({},t.name,t.value)))},D=function(){a({type:f}),a(re()),N(ie)};return r.a.createElement(te.a,{isOpen:e,onRequestClose:D,style:le,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo"},r.a.createElement("h1",null," ",t?"Editando Evento":"Nuevo evento"," "),r.a.createElement("hr",null),r.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault();var n=Y()(x),r=Y()(S);if(n.isSameOrAfter(r))J.a.fire("Error!","Fecha final debe ser mayor a la inical","error");else{if(w.trim().length<2)return O(!1);if(t)return a((c=y,function(){var e=Object(G.a)(F.a.mark((function e(t){var a,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V("event/".concat(c.id),c,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:(n=e.sent).ok?t(ce(c)):J.a.fire("Error!",n.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())),D();var c,o;O(!0),a((o=y,function(){var e=Object(G.a)(F.a.mark((function e(t,a){var n,r,c,l,s,u;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth,r=n.uid,c=n.name,e.prev=1,e.next=4,V("event/",o,"POST");case 4:return l=e.sent,e.next=7,l.json();case 7:(s=e.sent).ok?(o=Object(i.a)(Object(i.a)({},s.data),{},{user:{uid:r,name:c}}),m=o,u=Object(i.a)(Object(i.a)({},m),{},{start:Y()(m.start).toDate(),end:Y()(m.end).toDate()}),t(ne(u))):(console.log(s),J.a.fire("Error!!","Valida si ingreso todos los campos","error")),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),J.a.fire("Error!!",e.t0,"error");case 15:case"end":return e.stop()}var m}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}())),D()}}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora inicio"),r.a.createElement($.a,{className:"form-control ",onChange:function(e){u(e),N(Object(i.a)(Object(i.a)({},y),{},{start:e}))},value:s})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora fin"),r.a.createElement($.a,{className:"form-control",minDate:s,onChange:function(e){v(e),N(Object(i.a)(Object(i.a)({},y),{},{end:e}))},value:d})),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Titulo y notas"),r.a.createElement("input",{type:"text",className:"form-control ".concat(!h&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",value:w,onChange:C,autoComplete:"off"}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Una descripci\xf3n corta")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"note",value:k,onChange:C}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Informaci\xf3n adicional")),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block"},r.a.createElement("i",{className:"far fa-save"}),r.a.createElement("span",null," Guardar"))))},fe=function(){var e=Object(l.c)((function(e){return e.auth})).name,t=Object(l.b)();return r.a.createElement("div",{className:"navbar navbar-dark bg-dark mb-4"},r.a.createElement("span",{className:"navbar-brand"},e),r.a.createElement("button",{className:" btn btn-outline-danger",onClick:function(){t((function(e){localStorage.clear(),e(z())})),t({type:O})}},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),r.a.createElement("span",null," Salir")))},pe={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},de=function(e){var t=e.event,a=t.title,n=t.user;return r.a.createElement("div",null,r.a.createElement("span",null," ",a),r.a.createElement("strong",null," - ",n.name))},ve=function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-primary fab",onClick:function(){e(ae())}},r.a.createElement("i",{className:"fas fa-plus"}," "))},be=function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(G.a)(F.a.mark((function e(t,a){var n,r,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().calendar.activeEvent.id,e.prev=1,e.next=4,V("event/".concat(n),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t({type:E}):J.a.fire("Error!",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"fas fa-trash "}),r.a.createElement("span",null," Borrar"))};Y.a.locale("es");var Ee=Object(Q.b)(Y.a),he=function(){var e=Object(l.c)((function(e){return e.calendar})),t=e.events,a=e.activeEvent,c=Object(l.c)((function(e){return e.auth})).uid,o=Object(l.b)(),s=Object(n.useState)(localStorage.getItem("lastView")||"month"),u=Object(I.a)(s,2),m=u[0],f=u[1];Object(n.useEffect)((function(){o(function(){var e=Object(G.a)(F.a.mark((function e(t){var a,n,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V("event");case 3:return a=e.sent,e.next=6,a.json();case 6:(n=e.sent).ok?(c=n.events,r=c.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{start:Y()(e.start).toDate(),end:Y()(e.end).toDate()})})),t(oe(r))):J.a.fire("Error!","Error al consultar en la base de datos","error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}var c}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}),[o]);return r.a.createElement("div",{className:"calendar-screen"},r.a.createElement(fe,null),r.a.createElement(Q.a,{localizer:Ee,events:t,startAccessor:"start",endAccessor:"end",messages:pe,onDoubleClickEvent:function(){o(ae())},onSelectEvent:function(e){o({type:d,payload:e})},onView:function(e){f(e),localStorage.setItem("lastView",e)},view:m,onSelectSlot:function(){o(re())},selectable:!0,eventPropGetter:function(e,t,a,n){return{style:{backgroundColor:c===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},components:{event:de}}),r.a.createElement(me,null),r.a.createElement(ve,null),a&&r.a.createElement(be,null))},Oe=a(39),ge=function(e){var t=e.isAuth,a=e.component,n=Object(Oe.a)(e,["isAuth","component"]);return r.a.createElement(P.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(P.a,{to:"/login"})}}))},je=function(e){var t=e.isAuth,a=e.component,n=Object(Oe.a)(e,["isAuth","component"]);return r.a.createElement(P.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(P.a,{to:"/"}):r.a.createElement(a,e)}}))},ye=function(){var e=Object(l.c)((function(e){return e.auth})),t=e.checking,a=e.uid,c=Object(l.b)();return Object(n.useEffect)((function(){c(function(){var e=Object(G.a)(F.a.mark((function e(t){var a,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("auth/renew");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("token",n.token),localStorage.setItem("token-init",(new Date).getTime()),t(B({uid:n.user.uid,name:n.user.name}))):t(q());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[c]),t?r.a.createElement("h4",null,"Cargando..."):r.a.createElement(T.a,null,r.a.createElement("div",null,r.a.createElement(P.d,null,r.a.createElement(je,{exact:!0,path:"/login",component:K,isAuth:!!a}),r.a.createElement(ge,{exact:!0,path:"/",component:he,isAuth:!!a}),r.a.createElement(P.a,{to:"/"}))))},Ne=function(){return r.a.createElement(l.a,{store:A},r.a.createElement(ye,null))};a(114);o.a.render(r.a.createElement(Ne,null),document.getElementById("root"))},67:function(e,t,a){e.exports=a(116)},75:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.adc331df.chunk.js.map