(this.webpackJsonpmarket=this.webpackJsonpmarket||[]).push([[0],{71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),A=a.n(n),s=a(20),c=a.n(s),r=a(12),i=a(15),o=a(2),j={getTodoStatus:!1,postTodoStatus:!1,deleteTodoStatus:!1,patchTodoStatus:!1,deleteTime:"",postTodo:{},message:"",messageDate:"",todo:[]};var u={registrationStatus:!1,loginStatus:!1};var l=a(41),O=a(74),g={messages:[],messageDate:""};var p=Object(i.c)({todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TODO_SUCCSESS":return Object(o.a)(Object(o.a)({},e),{},{getTodoStatus:!0,todo:t.payload});case"GET_TODO_FAILURE":return Object(o.a)(Object(o.a)({},e),{},{getTodoStatus:!1,message:t.payload,messageDate:new Date});case"POST_TODO_SUCCSESS":return Object(o.a)(Object(o.a)({},e),{},{postTodoStatus:!0,postTodo:t.payload,message:"Created!",messageDate:new Date});case"POST_TODO_FAILURE":return Object(o.a)(Object(o.a)({},e),{},{postTodoStatus:!1,message:t.payload,messageDate:new Date});case"PATCH_TODO_SUCCSESS":return Object(o.a)(Object(o.a)({},e),{},{patchTodoStatus:!0,postTodo:t.payload,message:"Updated!",messageDate:new Date});case"PATCH_TODO_FAILURE":return Object(o.a)(Object(o.a)({},e),{},{patchTodoStatus:!1,message:t.payload,messageDate:new Date});case"DELETE_TODO_SUCCSESS":return Object(o.a)(Object(o.a)({},e),{},{deleteTodoStatus:!0,deleteTime:t.payload,message:"Deleted!",messageDate:new Date});case"DELETE_TODO_FAILURE":return Object(o.a)(Object(o.a)({},e),{},{deleteTodoStatus:!1,message:t.payload,messageDate:new Date});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTRATION_SUCCESS":return Object(o.a)(Object(o.a)({},e),{},{registrationStatus:!0});case"REGISTRATION_FAILURE":return Object(o.a)(Object(o.a)({},e),{},{registrationStatus:!1});case"LOGIN_SUCCESS":return Object(o.a)(Object(o.a)({},e),{},{loginStatus:!0});case"LOGIN_FAILURE":return Object(o.a)(Object(o.a)({},e),{},{loginStatus:!1});default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":return Object(o.a)(Object(o.a)({},e),{},{messages:[].concat(Object(l.a)(e.messages),[{text:t.payload,id:Object(O.a)()}]),messageDate:new Date});case"EMPTY_MESSAGES":return Object(o.a)(Object(o.a)({},e),{},{messages:t.payload,messageDate:""});default:return e}}}),d=[a(39).a],b=Object(i.e)(p,Object(i.d)(i.a.apply(void 0,d))),m=a(8),f=a(13),x=a(4),w=a.p+"static/media/arrow_up.edb0586f.png",E=a(1),T=function(e){var t=e.onDeleteAll;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("div",{className:"bar",children:[Object(E.jsx)("p",{className:"_title",children:Object(E.jsx)(f.b,{to:"/",children:"Eco-Market"})}),Object(E.jsxs)("div",{className:"link_container",children:[Object(E.jsx)("li",{className:"link",children:Object(E.jsx)(f.b,{to:"/register",children:"Registration"})}),Object(E.jsx)("li",{className:"link",onClick:t,children:Object(E.jsx)(f.b,{to:"/login",children:"Log in"})})]}),Object(E.jsx)("div",{className:"in_bar",children:Object(E.jsx)("img",{src:w,alt:"GO HERE!",className:"icon middle"})})]}),Object(E.jsx)("div",{className:"hide",children:Object(E.jsx)("img",{src:w,alt:"GO HERE!",className:"icon middle"})})]})},h="data:image/png;base64,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",C=function(e){var t=e.message,a=e.time,A=Object(n.useState)(!1),s=Object(m.a)(A,2),c=s[0],r=s[1];Object(n.useEffect)((function(){r(!0);var e=setTimeout((function(){r(!1)}),a);return function(){clearTimeout(e)}}),[]);return Object(E.jsxs)("div",{className:c?"message active":"message",children:[Object(E.jsx)("span",{children:t.text}),Object(E.jsx)("div",{className:"message_close",onClick:function(){r(!1)},children:Object(E.jsx)("img",{src:h,alt:"Close",className:"icon small"})})]})},P=function(e){return{type:"REGISTRATION_SUCCESS",payload:e}},D=function(e){return{type:"LOGIN_SUCCESS",payload:e}},v=function(e){return{type:"ADD_MESSAGE",payload:e}},B=function(e){var t=e.isOpen,a=e.setIsOpenMessage,A=e.messages,s=e.time,c=Object(r.c)();return Object(n.useEffect)((function(){if(A.length){var e=setTimeout((function(){c({type:"EMPTY_MESSAGES",payload:[]})}),s+200);return function(){clearTimeout(e)}}a(!1)}),[A]),Object(E.jsx)("div",{className:t?"messages active":"messages",children:A.map((function(e){return Object(E.jsx)(C,{message:e,messages:A,time:s},e.id)}))})},M=a(5),V=a.n(M),G=a(14),U=a(17),I=a(23),S=a.n(I),F=a(40),y=S.a.create({baseURL:"http://52.15.67.16:8080",responseType:"json",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST"}}),N=Object(F.a)(y),L={register:new N("register"),login:new N("login")},Q=function(e){return function(){var t=Object(G.a)(V.a.mark((function t(a){var n;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L.register.post(e);case 3:n=t.sent,a(P()),a(v(n.data)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("FROM GET_THUNK",t.t0),t.t0&&(a({type:"REGISTRATION_FAILURE",payload:void 0}),a(v("".concat(t.t0))));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},R=function(e){return function(){var t=Object(G.a)(V.a.mark((function t(a){var n;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L.login.post(e);case 3:n=t.sent,a(D()),a(v(n.data)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("FROM GET_THUNK",t.t0),t.t0&&(a({type:"LOGIN_FAILURE",payload:void 0}),a(v("".concat(t.t0))));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},z=a.p+"static/media/loading.42aaa181.gif",Y=function(e){var t=e.name,a=e.isOpen,n=e.loading,A=e.children,s=Object(x.f)(),c=function(){s.goBack()};return Object(E.jsx)("div",{className:a?"modal active":"modal",onMouseDown:function(e){e.currentTarget===e.target&&c()},children:Object(E.jsxs)("div",{className:"_container",children:[Object(E.jsx)("div",{className:"modal_close",onClick:c,children:Object(E.jsx)("img",{src:h,alt:"Close",className:"icon middle"})}),Object(E.jsx)("span",{className:"_title",children:t}),n&&Object(E.jsx)("div",{className:"loading_small",children:Object(E.jsx)("img",{src:z,alt:"Loading...",className:"icon middle"})}),A]})})},H=Object(r.b)((function(e){return e.auth}),(function(e){return{register:function(){var t=Object(G.a)(V.a.mark((function t(a){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(Q(a));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))((function(e){var t=e.register,a=Object(n.useState)(!1),A=Object(m.a)(a,2),s=A[0],c=A[1],r=Object(x.g)().pathname,i=Object(n.useState)({fullname:"",username:"",password:""}),j=Object(m.a)(i,2),u=j[0],l=j[1],O=Object(n.useState)(!1),g=Object(m.a)(O,2),p=g[0],d=g[1];Object(n.useEffect)((function(){"/register"===r&&c(!0)}),[r]);var b=function(e){l((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(U.a)({},e.target.name,"".concat(e.target.value)))}))},f=function(){var e=Object(G.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,t(u);case 3:d(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(E.jsxs)(Y,{loading:p,name:"Registration",isOpen:s,setIsOpen:c,children:[Object(E.jsx)("input",{className:"_input",name:"fullname",placeholder:"Full name",onChange:b,value:u.fullname}),Object(E.jsx)("input",{className:"_input",name:"username",placeholder:"User name",onChange:b,value:u.username}),Object(E.jsx)("input",{className:"_input",name:"password",placeholder:"Password",onChange:b,value:u.password}),Object(E.jsx)("div",{className:"_form_buttons",children:Object(E.jsx)("button",{className:"_button",onClick:f,children:"Register"})})]})})),q=Object(r.b)((function(e){return e.auth}),(function(e){return{register:function(){var t=Object(G.a)(V.a.mark((function t(a){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(R(a));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))((function(e){var t=e.register,a=Object(n.useState)(!1),A=Object(m.a)(a,2),s=A[0],c=A[1],r=Object(x.g)().pathname,i=Object(n.useState)({username:"",password:""}),j=Object(m.a)(i,2),u=j[0],l=j[1],O=Object(n.useState)(!1),g=Object(m.a)(O,2),p=g[0],d=g[1];Object(n.useEffect)((function(){"/login"===r&&c(!0)}),[r]);var b=function(e){l((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(U.a)({},e.target.name,"".concat(e.target.value)))}))},f=function(){var e=Object(G.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,t(u);case 3:d(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(E.jsxs)(Y,{loading:p,name:"Log in",isOpen:s,setIsOpen:c,children:[Object(E.jsx)("input",{className:"_input",name:"username",placeholder:"User name",onChange:b,value:u.username}),Object(E.jsx)("input",{className:"_input",name:"password",placeholder:"Password",onChange:b,value:u.password}),Object(E.jsx)("div",{className:"_form_buttons",children:Object(E.jsx)("button",{className:"_button",onClick:f,children:"Log in"})})]})}));a(71);var X=Object(r.b)((function(e){return e.message}))((function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),A=(a[0],a[1]),s=Object(n.useState)(!1),c=Object(m.a)(s,2),r=c[0],i=c[1];return Object(n.useEffect)((function(){e.messageDate&&i(!0)}),[e.messages]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(f.a,{children:[Object(E.jsx)(T,{setOpenModal:A}),Object(E.jsxs)(x.c,{children:[Object(E.jsx)(x.a,{path:"/register",children:Object(E.jsx)(H,{})}),Object(E.jsx)(x.a,{path:"/login",children:Object(E.jsx)(q,{})}),Object(E.jsx)(x.a,{path:"/"})]})]}),r&&Object(E.jsx)(B,{isOpen:r,setIsOpenMessage:i,messages:e.messages,time:2500})]})}));c.a.render(Object(E.jsx)(r.a,{store:b,children:Object(E.jsx)(A.a.StrictMode,{children:Object(E.jsx)(X,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.d37408c4.chunk.js.map