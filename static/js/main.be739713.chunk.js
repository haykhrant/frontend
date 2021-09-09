(this.webpackJsonpmarket=this.webpackJsonpmarket||[]).push([[0],{17:function(e,t,n){"use strict";var c=n(28),a=n.n(c),r=n(46),s=a.a.create({baseURL:"https://backend.eco-market.am",responseType:"json",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, PUT, POST, DELETE, HEAD, OPTIONS","Access-Control-Allow-Headers":"*"}}),i=Object(r.a)(s),o={register:new i("register"),login:new i("login"),categories:new i("categories"),products:new i("products"),productsByCategory:function(e){return new i("subcategory/".concat(e,"/products"))}};t.a=o},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return s}));var c=n(84),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){var t=e.categoryResponse,n=e.productTypeResponses;return{id:t.id,name:t.categoryName,subCategories:n.map((function(e){return{id:e.id,name:e.productTypeName}}))}}))},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){var t=e.id,n=e.name,a=e.ownerComment,r=e.price,s=e.rating,i=e.customerResponse,o=i.id,u=i.username,A=i.fullname,l=e.productDescriptionRequestArrayList,j=e.productTypeResponse,d=j.id,O=j.productTypeName;return{id:t,name:n,price:r,rating:s,description:a,userName:u,userFullName:A,userId:o,tags:l.map((function(e){return{id:Object(c.a)(),name:e.description}})),productName:O,productId:d}}))},s=function(e){return Object.values(e).reduce((function(e,t){return e+t+":"}),"").slice(0,-1)}},21:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i}));var c=function(e){return{type:"REGISTRATION_SUCCESS",payload:e}},a=function(e){return{type:"REGISTRATION_FAILURE",payload:e}},r=function(e){return{type:"LOGIN_SUCCESS",payload:e}},s=function(e){return{type:"LOGIN_FAILURE",payload:e}},i=function(){return{type:"LOGOUT"}}},27:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return A}));var c=n(3),a=n.n(c),r=n(7),s=n(17),i=n(8),o=n(19),u=function(e){return function(){var t=Object(r.a)(a.a.mark((function t(n){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.register.post(e);case 3:c=t.sent,n(Object(i.j)(c.data)),n(Object(i.a)("Registration successful","success")),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("FROM REGISTER_THUNK",t.t0),t.t0&&(n(Object(i.i)()),n(Object(i.a)("".concat(t.t0),"failure")));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},A=function(t){return function(){var n=Object(r.a)(a.a.mark((function n(c){var r,u,A;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=Object(o.c)(t),u=e.from(r).toString("base64"),n.next=5,s.a.login.get({headers:{Authorization:"Basic ".concat(u)}});case 5:A=n.sent,c(Object(i.h)(A.data)),c(Object(i.a)("Log in successful","success")),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),console.error("FROM LOGIN_THUNK",n.t0),n.t0&&(c(Object(i.g)()),c(Object(i.a)("".concat(n.t0),"failure")));case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}}).call(this,n(57).Buffer)},8:function(e,t,n){"use strict";n.d(t,"j",(function(){return c.e})),n.d(t,"i",(function(){return c.d})),n.d(t,"h",(function(){return c.b})),n.d(t,"g",(function(){return c.a})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return u}));var c=n(21),a=function(e,t){return{type:"ADD_MESSAGE",payload:e,messageType:t}},r=function(e){return{type:"FILTER_MESSAGES",payload:e}},s=function(e){return{type:"GET_CATEGORIES_SUCCESS",payload:e}},i=function(){return{type:"GET_CATEGORIES_FAILURE"}},o=function(e){return{type:"GET_PRODUCTS_SUCCESS",payload:e}},u=function(){return{type:"GET_PRODUCTS_FAILURE"}}},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(24),s=n.n(r),i=n(9),o=n(16),u=n(2),A={getTodoStatus:!1,postTodoStatus:!1,deleteTodoStatus:!1,patchTodoStatus:!1,deleteTime:"",postTodo:{},message:"",messageDate:"",todo:[]};var l={auth:{},authStatus:!1,registrationStatus:!1,loginStatus:!1};var j=n(29),d=n(84),O={messages:[],messageType:""};var b={getCategoriesStatus:!1,categories:[]};var p={getProductsStatus:!1,products:[]};var f=Object(o.c)({todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TODO_SUCCSESS":return Object(u.a)(Object(u.a)({},e),{},{getTodoStatus:!0,todo:t.payload});case"GET_TODO_FAILURE":return Object(u.a)(Object(u.a)({},e),{},{getTodoStatus:!1,message:t.payload,messageDate:new Date});case"POST_TODO_SUCCSESS":return Object(u.a)(Object(u.a)({},e),{},{postTodoStatus:!0,postTodo:t.payload,message:"Created!",messageDate:new Date});case"POST_TODO_FAILURE":return Object(u.a)(Object(u.a)({},e),{},{postTodoStatus:!1,message:t.payload,messageDate:new Date});case"PATCH_TODO_SUCCSESS":return Object(u.a)(Object(u.a)({},e),{},{patchTodoStatus:!0,postTodo:t.payload,message:"Updated!",messageDate:new Date});case"PATCH_TODO_FAILURE":return Object(u.a)(Object(u.a)({},e),{},{patchTodoStatus:!1,message:t.payload,messageDate:new Date});case"DELETE_TODO_SUCCSESS":return Object(u.a)(Object(u.a)({},e),{},{deleteTodoStatus:!0,deleteTime:t.payload,message:"Deleted!",messageDate:new Date});case"DELETE_TODO_FAILURE":return Object(u.a)(Object(u.a)({},e),{},{deleteTodoStatus:!1,message:t.payload,messageDate:new Date});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTRATION_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{registrationStatus:!0,authStatus:!0,auth:t.payload});case"REGISTRATION_FAILURE":return Object(u.a)(Object(u.a)({},e),{},{registrationStatus:!1});case"LOGIN_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{loginStatus:!0,authStatus:!0,auth:t.payload});case"LOGIN_FAILURE":return Object(u.a)(Object(u.a)({},e),{},{loginStatus:!1});case"LOGOUT":return Object(u.a)(Object(u.a)({},e),{},{auth:{},authStatus:!1});default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":return Object(u.a)(Object(u.a)({},e),{},{messages:[].concat(Object(j.a)(e.messages),[{text:t.payload,id:Object(d.a)()}]),messageType:t.messageType});case"EMPTY_MESSAGES":return Object(u.a)(Object(u.a)({},e),{},{messages:t.payload});case"FILTER_MESSAGES":return Object(u.a)(Object(u.a)({},e),{},{messages:e.messages.filter((function(e){return e.id!==t.payload}))});default:return e}},category:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CATEGORIES_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{getCategoriesStatus:!0,categories:t.payload});case"GET_CATEGORIES_FAILURE":return Object(u.a)(Object(u.a)({},e),{},{getCategoriesStatus:!1});default:return e}},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{getProductsStatus:!0,products:t.payload});case"GET_PRODUCTS_FAILURE":return Object(u.a)(Object(u.a)({},e),{},{getProductsStatus:!1});default:return e}}}),g=[n(45).a],m=Object(o.e)(f,Object(o.d)(o.a.apply(void 0,g))),x=n(18),h=n(6),v=n(5),w=n(21),C=n(3),T=n.n(C),E=n(7),y=n(15),N=n(27),P="data:image/png;base64,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",S=n.p+"static/media/loading.42aaa181.gif",D=n(0),I=function(e){var t=e.size;return Object(D.jsx)("div",{className:"loading",children:Object(D.jsx)("img",{src:S,alt:"Loading...",className:"icon "+t})})},B=function(e){var t=e.name,n=e.isOpen,c=e.handleClose,a=e.loading,r=e.children;return Object(D.jsx)("div",{className:n?"modal active":"modal",onMouseDown:function(e){e.currentTarget===e.target&&c()},children:Object(D.jsxs)("div",{className:"_container",children:[Object(D.jsx)("div",{className:"modal_close",onClick:function(){c()},children:Object(D.jsx)("img",{src:P,alt:"Close",className:"icon middle"})}),Object(D.jsx)("span",{className:"_title",children:t}),a&&Object(D.jsx)(I,{size:"small"}),r]})})},U=Object(i.b)((function(e){return e.auth}),(function(e){return{register:function(){var t=Object(E.a)(T.a.mark((function t(n){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(Object(N.b)(n));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))((function(e){var t=e.register,n=e.isOpen,a=e.setIsOpen,r=Object(c.useState)({fullname:"",username:"",password:""}),s=Object(v.a)(r,2),i=s[0],o=s[1],A=Object(c.useState)(!1),l=Object(v.a)(A,2),j=l[0],d=l[1],O=function(e){o((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(y.a)({},e.target.name,"".concat(e.target.value)))}))},b=function(){var e=Object(E.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,t(i);case 3:d(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(D.jsxs)(B,{loading:j,name:"Registration",isOpen:"register"===n,handleClose:function(){"register"===n&&a("")},children:[Object(D.jsxs)("div",{className:"_form",children:[Object(D.jsx)("input",{className:"_input",name:"fullname",placeholder:"Full name",onChange:O,value:i.fullname}),Object(D.jsx)("input",{className:"_input",name:"username",placeholder:"User name",onChange:O,value:i.username}),Object(D.jsx)("input",{className:"_input",name:"password",placeholder:"Password",type:"password",onChange:O,value:i.password})]}),Object(D.jsx)("div",{className:"_form_buttons",children:Object(D.jsx)("button",{className:"_button",onClick:b,children:"Register"})})]})})),G=Object(i.b)((function(e){return e.auth}),(function(e){return{login:function(){var t=Object(E.a)(T.a.mark((function t(n){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(Object(N.a)(n));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))((function(e){var t=e.login,n=e.isOpen,a=e.setIsOpen,r=Object(c.useState)({username:"",password:""}),s=Object(v.a)(r,2),i=s[0],o=s[1],A=Object(c.useState)(!1),l=Object(v.a)(A,2),j=l[0],d=l[1],O=function(e){o((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(y.a)({},e.target.name,"".concat(e.target.value)))}))},b=function(){var e=Object(E.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,t(i);case 3:d(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(D.jsxs)(B,{loading:j,name:"Log in",isOpen:"login"===n,handleClose:function(){"login"===n&&a("")},children:[Object(D.jsxs)("div",{className:"_form",children:[Object(D.jsx)("input",{className:"_input",name:"username",placeholder:"User name",onChange:O,value:i.username}),Object(D.jsx)("input",{className:"_input",name:"password",placeholder:"Password",type:"password",onChange:O,value:i.password})]}),Object(D.jsx)("div",{className:"_form_buttons",children:Object(D.jsx)("button",{className:"_button",onClick:b,children:"Log in"})})]})})),F=function(e){var t=e.text,n=e.isOpen,c=e.setIsOpen,a=e.onAccept,r=e.loading,s=function(){var e=Object(E.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(D.jsx)("div",{className:n?"modal active":"modal",children:Object(D.jsxs)("div",{className:"_container",children:[Object(D.jsx)("span",{className:"_title",children:t}),r&&Object(D.jsx)(I,{size:"small"}),Object(D.jsxs)("div",{className:"button_container",children:[Object(D.jsx)("button",{className:"_button",onClick:s,children:"Accept"}),Object(D.jsx)("button",{className:"_button",onClick:c.bind(null,""),children:"Cancel"})]})]})})},M=function(){var e=Object(c.useState)(""),t=Object(v.a)(e,2),n=t[0],a=t[1],r=Object(i.d)((function(e){return e.auth})),s=r.auth,o=r.authStatus,u=Object(i.c)(),A=function(e){a(e.target.id)};return Object(c.useEffect)((function(){o&&a("")}),[o]),Object(D.jsxs)("div",{className:"bar",children:[Object(D.jsx)("div",{className:"_title",children:Object(D.jsx)(x.b,{to:"/",children:"Eco-Market"})}),o?Object(D.jsxs)("div",{className:"link_container",children:[Object(D.jsx)("div",{className:"",children:s.fullname}),Object(D.jsx)("li",{className:"link",children:Object(D.jsx)("p",{id:"accept",onClick:A,children:"Logout"})})]}):Object(D.jsxs)("div",{className:"link_container",children:[Object(D.jsx)("li",{className:"link",children:Object(D.jsx)("p",{id:"register",onClick:A,children:"Registration"})}),Object(D.jsx)("li",{className:"link",children:Object(D.jsx)("p",{id:"login",onClick:A,children:"Log in"})})]}),Object(D.jsx)(U,{isOpen:n,setIsOpen:a}),Object(D.jsx)(G,{isOpen:n,setIsOpen:a}),Object(D.jsx)(F,{onAccept:function(){u(Object(w.c)()),a("")},isOpen:"accept"===n,setIsOpen:a,text:"Are you sure you want to log out?"})]})},L=n.p+"static/media/menu.b8b0c41f.svg",V=n.p+"static/media/arrow.5b0512cf.svg",R=function(e){var t=e.categories,n=e.onCategory,a=e.loading,r=Object(c.useState)({}),s=Object(v.a)(r,2),i=s[0],o=s[1],A=Object(c.useRef)(new Array(8).fill(null)).current,l=function(e){i[e]?o((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(y.a)({},e,null))})):o((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(y.a)({},e,e))}))};return Object(D.jsx)("div",{className:"categories",children:a?A.map((function(e,t){return Object(D.jsx)("div",{className:"category loading-animation"},t)})):null===t||void 0===t?void 0:t.map((function(e){var t,c,a;return Object(D.jsxs)("div",{className:i[e.id]?(null===(t=e.subCategories)||void 0===t?void 0:t.length)?"category active":"category active empty":"category",children:[Object(D.jsxs)("div",{className:"category_text",onClick:l.bind(null,e.id),children:[e.name,Object(D.jsx)("img",{className:"icon small",src:V,alt:">"})]}),Object(D.jsx)("div",{}),Object(D.jsx)("div",{className:"subCategories",children:(null===(c=e.subCategories)||void 0===c?void 0:c.length)?null===(a=e.subCategories)||void 0===a?void 0:a.map((function(e){return Object(D.jsx)("div",{className:"subCategory",onClick:n.bind(null,e.id),children:e.name},e.id)})):Object(D.jsx)("div",{className:"subCategory",children:"Empty"})})]},e.id)}))})},Q=n(8),k=n(17),z=function(e){return function(){var t=Object(E.a)(T.a.mark((function t(n){var c;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.productsByCategory(e).get();case 3:c=t.sent,n(Object(Q.f)(c.data)),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("FROM PRODUCT_THUNK",t.t0),t.t0&&n(Object(Q.e)());case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},H=n(19),Y=function(){var e=Object(c.useState)(""),t=Object(v.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(v.a)(r,2),o=s[0],u=s[1],A=Object(i.d)((function(e){return e.auth})),l=A.auth,j=A.authStatus,d=Object(i.d)((function(e){var t=e.category;return Object(H.a)(t.categories)})),O=Object(i.c)(),b=function(e){a(e.target.id)};return Object(c.useEffect)((function(){u(!1)}),[n,u]),Object(c.useEffect)((function(){j&&a("")}),[j]),Object(D.jsxs)("div",{className:"bar_mobile",children:[Object(D.jsx)("div",{className:"_title",children:Object(D.jsx)(x.b,{to:"/",children:"Eco-Market"})}),Object(D.jsx)("div",{className:"menu_icon",onClick:function(){u((function(e){return!e}))},children:Object(D.jsx)("img",{src:L,alt:"menu",className:"icon"})}),Object(D.jsx)("div",{className:o?"menu active":"menu",children:Object(D.jsxs)("div",{className:"menu_container",children:[j?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("div",{className:"",children:l.fullname}),Object(D.jsx)("li",{className:"link",children:Object(D.jsx)("p",{id:"accept",onClick:b,children:"Logout"})})]}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("li",{className:"link",children:Object(D.jsx)("p",{id:"register",onClick:b,children:"Registration"})}),Object(D.jsx)("li",{className:"link",children:Object(D.jsx)("p",{id:"login",onClick:b,children:"Log in"})})]}),Object(D.jsx)("li",{className:"link",children:Object(D.jsx)("p",{id:"categories",onClick:b,children:"Categories"})})]})}),Object(D.jsx)(U,{isOpen:n,setIsOpen:a}),Object(D.jsx)(G,{isOpen:n,setIsOpen:a}),Object(D.jsx)(F,{onAccept:function(){O(Object(w.c)()),a("")},isOpen:"accept"===n,setIsOpen:a,text:"Are you sure you want to log out?"}),Object(D.jsx)(B,{isOpen:"categories"===n,setIsOpen:a,handleClose:function(){a("")},children:Object(D.jsx)("div",{className:"page_container",children:Object(D.jsx)(R,{categories:d,onCategory:function(e){O(z(e)),a("")}})})})]})},q=function(e){var t=e.message,n=e.messageType,a=e.time,r=Object(i.c)(),s=Object(c.useState)(!1),o=Object(v.a)(s,2),u=o[0],A=o[1];Object(c.useEffect)((function(){var e=setTimeout((function(){A(!0)})),n=setTimeout((function(){A(!1)}),a-300),c=setTimeout((function(){r(Object(Q.b)(t.id))}),a);return function(){clearTimeout(n),clearTimeout(e),clearTimeout(c)}}),[a,r,t.id]);return Object(D.jsxs)("div",{className:u?"message ".concat(n," active"):"message",children:[Object(D.jsx)("span",{children:t.text}),Object(D.jsx)("div",{className:"message_close",onClick:function(){A(!1)},children:Object(D.jsx)("img",{src:P,alt:"Close",className:"icon small"})})]})},X=function(e){var t=e.time,n=Object(i.d)((function(e){return e.message})),c=n.messages,a=n.messageType;return Object(D.jsx)("div",{className:"messages",children:c.map((function(e){return Object(D.jsx)(q,{message:e,messageType:a,time:t},e.id)}))})},K=function(){var e=Object(h.f)();return Object(D.jsx)("h1",{className:"not_found",children:'Page not found, no match for "'.concat(e.pathname,'"')})},J=n.p+"static/media/eco-products.d7555364.jpg",Z=function(e){var t=e.name,n=e.price,a=(e.rating,e.description),r=(e.userName,e.userFullName),s=e.tags,i=e.productName,o=e.productId,u=e.onCategory,A=Object(c.useState)(!0),l=Object(v.a)(A,2),j=l[0],d=l[1];return Object(c.useEffect)((function(){setTimeout((function(){d(!1)}))}),[]),Object(D.jsxs)("div",{className:j?"card animated":"card",children:[Object(D.jsxs)("div",{className:"left_section",children:[Object(D.jsx)("h4",{className:"card_title clickable",onClick:u.bind(null,o),children:i}),Object(D.jsx)("div",{className:"_img",children:Object(D.jsx)("img",{src:J,alt:"Eco-market"})}),Object(D.jsx)("h3",{className:"card_title",children:t})]}),Object(D.jsxs)("div",{className:"right_section",children:[Object(D.jsxs)("div",{className:"card_info",children:[Object(D.jsx)("p",{className:"card_description",children:a}),Object(D.jsx)("p",{className:"card_description large",children:r}),Object(D.jsx)("div",{className:"tags",children:s.map((function(e){return Object(D.jsx)("p",{className:"tag",children:e.name},e.id)}))})]}),Object(D.jsxs)("div",{className:"button_section",children:[Object(D.jsx)("div",{className:"info",children:n}),Object(D.jsx)("button",{className:"buy _button",children:"Buy"})]})]})]})},W=function(e){var t=e.products,n=e.loading,a=e.onCategory,r=Object(j.a)(t),s=Object(c.useRef)(new Array(3).fill(null)).current;return Object(D.jsx)("div",{className:"card_list",children:n?s.map((function(e,t){return Object(D.jsx)("div",{className:"card loading-animation"},t)})):r.length?r.reverse().map((function(e){return Object(D.jsx)(Z,{name:e.name,price:e.price,description:e.description,rating:e.rating,userName:e.userName,userFullName:e.userFullName,tags:e.tags,productName:e.productName,productId:e.productId,onCategory:a},e.id)})):Object(D.jsx)("span",{className:"empty",children:"No Products"})})},_=(n(81),Object(i.b)((function(e){return{category:e.category,product:e.product}}),(function(e){return{getCategories:function(){var t=Object(E.a)(T.a.mark((function t(){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(function(){var e=Object(E.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.categories.get();case 3:n=e.sent,t(Object(Q.d)(n.data)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("FROM CATEGORY_THUNK",e.t0),e.t0&&(t(Object(Q.c)()),t(Object(Q.a)("".concat(e.t0))));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}());case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),getProductByCategory:function(){var t=Object(E.a)(T.a.mark((function t(n){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(z(n));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getProducts:function(){var t=Object(E.a)(T.a.mark((function t(){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(function(){var e=Object(E.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.products.get();case 3:n=e.sent,t(Object(Q.f)(n.data)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("FROM PRODUCT_THUNK",e.t0),e.t0&&t(Object(Q.e)());case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}());case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}))((function(e){var t=e.getCategories,n=e.getProducts,a=e.getProductByCategory,r=e.category.categories,s=e.product.products,i=Object(c.useState)([]),o=Object(v.a)(i,2),u=o[0],A=o[1],l=Object(c.useState)([]),j=Object(v.a)(l,2),d=j[0],O=j[1],b=Object(c.useState)(!1),p=Object(v.a)(b,2),f=p[0],g=p[1],m=Object(c.useState)(!1),x=Object(v.a)(m,2),h=x[0],w=x[1],C=function(e){w(!0),a(e).then((function(){return w(!1)}))};return Object(c.useEffect)((function(){g(!0),Promise.allSettled([t(),n()]).then((function(){return g(!1)}))}),[t,n]),Object(c.useEffect)((function(){A(Object(H.a)(r))}),[r,A]),Object(c.useEffect)((function(){O(Object(H.b)(s))}),[s,O]),Object(D.jsxs)("div",{className:"screen",children:[Object(D.jsx)("div",{className:"left_side",children:Object(D.jsx)(R,{categories:u,onCategory:C,loading:f})}),Object(D.jsx)("div",{className:"main_side",children:Object(D.jsx)(W,{products:d,loading:f||h,onCategory:C})})]})})));n(82);var $=function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(x.a,{children:[Object(D.jsx)(M,{}),Object(D.jsx)(Y,{}),Object(D.jsxs)(h.c,{children:[Object(D.jsx)(h.a,{exact:!0,path:"/",children:Object(D.jsx)(_,{})}),Object(D.jsx)(h.a,{path:"/*",children:Object(D.jsx)(K,{})})]})]}),Object(D.jsx)(X,{time:3e3})]})};s.a.render(Object(D.jsx)(i.a,{store:m,children:Object(D.jsx)(a.a.StrictMode,{children:Object(D.jsx)($,{})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.be739713.chunk.js.map