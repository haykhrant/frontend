(this.webpackJsonpmarket=this.webpackJsonpmarket||[]).push([[0],{17:function(e,t,n){"use strict";var a=n(26),c=n.n(a),s=n(45),r=c.a.create({baseURL:"https://backend.eco-market.am",responseType:"json",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, PUT, POST, DELETE, HEAD, OPTIONS","Access-Control-Allow-Headers":"*"}}),i=Object(s.a)(r),o={register:new i("register"),login:new i("login"),categories:new i("categories"),products:new i("products"),productsByCategory:function(e){return new i("subcategory/".concat(e,"/products"))}};t.a=o},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return r}));var a=n(83),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){var t=e.categoryResponse,n=e.productTypeResponses;return{id:t.id,name:t.categoryName,subCategories:n.map((function(e){return{id:e.id,name:e.productTypeName}}))}}))},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){var t=e.id,n=e.name,c=e.ownerComment,s=e.price,r=e.rating,i=e.customerResponse,o=i.id,u=i.username,l=i.fullname,A=e.productDescriptionRequestArrayList,j=e.productTypeResponse,d=j.id,O=j.productTypeName;return{id:t,name:n,price:s,rating:r,description:c,userName:u,userFullName:l,userId:o,tags:A.map((function(e){return{id:Object(a.a)(),name:e.description}})),productName:O,productId:d}}))},r=function(e){return Object.values(e).reduce((function(e,t){return e+t+":"}),"").slice(0,-1)}},27:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var a=n(5),c=n.n(a),s=n(10),r=n(17),i=n(3),o=n(19),u=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(Object(i.l)(!0)),t.next=4,r.a.register.post(e);case 4:a=t.sent,n(Object(i.k)(a.data)),n(Object(i.l)(!1)),n(Object(i.a)("Registration successful","success")),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.error("FROM REGISTER_THUNK",t.t0),t.t0&&(n(Object(i.j)()),n(Object(i.l)(!1)),n(Object(i.a)("".concat(t.t0),"failure")));case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},l=function(t){return function(){var n=Object(s.a)(c.a.mark((function n(a){var s,u,l;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(Object(i.l)(!0)),s=Object(o.c)(t),u=e.from(s).toString("base64"),n.next=6,r.a.login.get({headers:{Authorization:"Basic ".concat(u)}});case 6:l=n.sent,a(Object(i.h)(l.data)),a(Object(i.l)(!1)),a(Object(i.a)("Log in successful","success")),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(0),console.error("FROM LOGIN_THUNK",n.t0),n.t0&&(a(Object(i.g)()),a(Object(i.l)(!1)),a(Object(i.a)("".concat(n.t0),"failure")));case 16:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()}}).call(this,n(78).Buffer)},3:function(e,t,n){"use strict";n.d(t,"k",(function(){return a})),n.d(t,"j",(function(){return c})),n.d(t,"h",(function(){return s})),n.d(t,"g",(function(){return r})),n.d(t,"i",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return A})),n.d(t,"f",(function(){return j})),n.d(t,"e",(function(){return d})),n.d(t,"l",(function(){return O})),n.d(t,"m",(function(){return b})),n.d(t,"n",(function(){return p}));var a=function(e){return{type:"REGISTRATION_SUCCESS",payload:e}},c=function(e){return{type:"REGISTRATION_FAILURE",payload:e}},s=function(e){return{type:"LOGIN_SUCCESS",payload:e}},r=function(e){return{type:"LOGIN_FAILURE",payload:e}},i=function(){return{type:"LOGOUT"}},o=function(e,t){return{type:"ADD_MESSAGE",payload:e,messageType:t}},u=function(e){return{type:"FILTER_MESSAGES",payload:e}},l=function(e){return{type:"GET_CATEGORIES_SUCCESS",payload:e}},A=function(){return{type:"GET_CATEGORIES_FAILURE"}},j=function(e){return{type:"GET_PRODUCTS_SUCCESS",payload:e}},d=function(){return{type:"GET_PRODUCTS_FAILURE"}},O=function(e){return{type:"SET_LOADING_AUTH",payload:e}},b=function(e){return{type:"SET_LOADING_CATEGORY",payload:e}},p=function(e){return{type:"SET_LOADING_PRODUCT",payload:e}}},76:function(e,t,n){},77:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(23),r=n.n(s),i=n(7),o=n(16),u=n(2),l={getTodoStatus:!1,postTodoStatus:!1,deleteTodoStatus:!1,patchTodoStatus:!1,deleteTime:"",postTodo:{},message:"",messageDate:"",todo:[]};var A={auth:{},authStatus:!1,registrationStatus:!1,loginStatus:!1,loading:!1};var j=n(28),d=n(83),O={messages:[],messageType:""};var b={getCategoriesStatus:!1,categories:[],loading:!1};var p={getProductsStatus:!1,products:[],loading:!1};var g=Object(o.c)({todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TODO_SUCCSESS":return Object(u.a)(Object(u.a)({},e),{},{getTodoStatus:!0,todo:t.payload});case"GET_TODO_FAILURE":return Object(u.a)(Object(u.a)({},e),{},{getTodoStatus:!1,message:t.payload,messageDate:new Date});case"POST_TODO_SUCCSESS":return Object(u.a)(Object(u.a)({},e),{},{postTodoStatus:!0,postTodo:t.payload,message:"Created!",messageDate:new Date});case"POST_TODO_FAILURE":return Object(u.a)(Object(u.a)({},e),{},{postTodoStatus:!1,message:t.payload,messageDate:new Date});case"PATCH_TODO_SUCCSESS":return Object(u.a)(Object(u.a)({},e),{},{patchTodoStatus:!0,postTodo:t.payload,message:"Updated!",messageDate:new Date});case"PATCH_TODO_FAILURE":return Object(u.a)(Object(u.a)({},e),{},{patchTodoStatus:!1,message:t.payload,messageDate:new Date});case"DELETE_TODO_SUCCSESS":return Object(u.a)(Object(u.a)({},e),{},{deleteTodoStatus:!0,deleteTime:t.payload,message:"Deleted!",messageDate:new Date});case"DELETE_TODO_FAILURE":return Object(u.a)(Object(u.a)({},e),{},{deleteTodoStatus:!1,message:t.payload,messageDate:new Date});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTRATION_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{registrationStatus:!0,authStatus:!0,auth:t.payload});case"REGISTRATION_FAILURE":return Object(u.a)(Object(u.a)({},e),{},{registrationStatus:!1});case"LOGIN_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{loginStatus:!0,authStatus:!0,auth:t.payload});case"LOGIN_FAILURE":return Object(u.a)(Object(u.a)({},e),{},{loginStatus:!1});case"LOGOUT":return Object(u.a)(Object(u.a)({},e),{},{auth:{},authStatus:!1});case"SET_LOADING_AUTH":return Object(u.a)(Object(u.a)({},e),{},{loading:t.payload});default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":return Object(u.a)(Object(u.a)({},e),{},{messages:[].concat(Object(j.a)(e.messages),[{text:t.payload,id:Object(d.a)()}]),messageType:t.messageType});case"EMPTY_MESSAGES":return Object(u.a)(Object(u.a)({},e),{},{messages:t.payload});case"FILTER_MESSAGES":return Object(u.a)(Object(u.a)({},e),{},{messages:e.messages.filter((function(e){return e.id!==t.payload}))});default:return e}},category:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CATEGORIES_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{getCategoriesStatus:!0,categories:t.payload});case"GET_CATEGORIES_FAILURE":return Object(u.a)(Object(u.a)({},e),{},{getCategoriesStatus:!1});case"SET_LOADING_CATEGORY":return Object(u.a)(Object(u.a)({},e),{},{loading:t.payload});default:return e}},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{getProductsStatus:!0,products:t.payload});case"GET_PRODUCTS_FAILURE":return Object(u.a)(Object(u.a)({},e),{},{getProductsStatus:!1});case"SET_LOADING_PRODUCT":return Object(u.a)(Object(u.a)({},e),{},{loading:t.payload});default:return e}}}),f=[n(44).a],m=Object(o.e)(g,Object(o.d)(o.a.apply(void 0,f))),x=n(8),h=n(18),v=n(6),C=n(0),T=function(e){var t=e.auth,n=e.authStatus,a=e.onClick;return Object(C.jsxs)("div",{className:"bar",children:[Object(C.jsx)("div",{className:"_title",children:Object(C.jsx)(h.b,{to:"/",children:"Eco-Market"})}),n?Object(C.jsxs)("div",{className:"link_container",children:[Object(C.jsx)("div",{className:"user-text",children:t.fullname}),Object(C.jsx)("li",{className:"link",children:Object(C.jsx)("p",{id:"accept",onClick:a,children:"Logout"})})]}):Object(C.jsxs)("div",{className:"link_container",children:[Object(C.jsx)("li",{className:"link",children:Object(C.jsx)("p",{id:"register",onClick:a,children:"Registration"})}),Object(C.jsx)("li",{className:"link",children:Object(C.jsx)("p",{id:"login",onClick:a,children:"Log in"})})]})]})},w=n.p+"static/media/menu.b8b0c41f.svg",E="data:image/png;base64,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",y=n.p+"static/media/loading.42aaa181.gif",N=function(e){var t=e.size;return Object(C.jsx)("div",{className:"loading",children:Object(C.jsx)("img",{src:y,alt:"Loading...",className:"icon "+t})})},S=function(e){var t=e.name,n=e.isOpen,a=e.handleClose,c=e.loading,s=e.children;return Object(C.jsx)("div",{className:n?"modal active":"modal",onMouseDown:function(e){e.currentTarget===e.target&&a()},children:Object(C.jsxs)("div",{className:"_container",children:[Object(C.jsx)("div",{className:"modal_close",onClick:function(){a()},children:Object(C.jsx)("img",{src:E,alt:"Close",className:"icon middle"})}),Object(C.jsx)("span",{className:"_title",children:t}),c&&Object(C.jsx)(N,{size:"small"}),s]})})},P=n(15),D=n.p+"static/media/arrow.5b0512cf.svg",I=function(e){var t=e.categories,n=e.onCategory,c=e.loading,s=Object(a.useState)({}),r=Object(x.a)(s,2),i=r[0],o=r[1],l=Object(a.useRef)(new Array(8).fill(null)).current,A=function(e){i[e]?o((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(P.a)({},e,null))})):o((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(P.a)({},e,e))}))};return Object(C.jsx)("div",{className:"categories",children:c?l.map((function(e,t){return Object(C.jsx)("div",{className:"category loading-animation"},t)})):null===t||void 0===t?void 0:t.map((function(e){var t,a,c;return Object(C.jsxs)("div",{className:i[e.id]?(null===(t=e.subCategories)||void 0===t?void 0:t.length)?"category active":"category active empty":"category",children:[Object(C.jsxs)("div",{className:"category_text",onClick:A.bind(null,e.id),children:[e.name,Object(C.jsx)("img",{className:"icon small",src:D,alt:">"})]}),Object(C.jsx)("div",{}),Object(C.jsx)("div",{className:"subCategories",children:(null===(a=e.subCategories)||void 0===a?void 0:a.length)?null===(c=e.subCategories)||void 0===c?void 0:c.map((function(e){return Object(C.jsx)("div",{className:"subCategory",onClick:n.bind(null,e.id),children:e.name},e.id)})):Object(C.jsx)("div",{className:"subCategory",children:"Empty"})})]},e.id)}))})},U=n(5),G=n.n(U),B=n(10),L=n(3),F=n(17),M=function(e){return function(){var t=Object(B.a)(G.a.mark((function t(n){var a;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(Object(L.n)(!0)),t.next=4,F.a.productsByCategory(e).get();case 4:a=t.sent,n(Object(L.f)(a.data)),n(Object(L.n)(!1)),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.error("FROM PRODUCT_THUNK",t.t0),t.t0&&(n(Object(L.e)()),n(Object(L.n)(!1)));case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},R=n(19),V=function(e){var t=e.isOpen,n=e.setIsOpen,c=e.auth,s=e.authStatus,r=e.dispatch,o=e.onClick,u=e.handleClose,l=Object(a.useState)(!1),A=Object(x.a)(l,2),j=A[0],d=A[1],O=Object(i.d)((function(e){var t=e.category;return Object(R.a)(t.categories)}));return Object(a.useEffect)((function(){d(!1)}),[t,d]),Object(C.jsxs)("div",{className:"bar_mobile",children:[Object(C.jsx)("div",{className:"_title",children:Object(C.jsx)(h.b,{to:"/",children:"Eco-Market"})}),Object(C.jsx)("div",{className:"menu_icon",onClick:function(){d((function(e){return!e}))},children:Object(C.jsx)("img",{src:w,alt:"menu",className:"icon"})}),Object(C.jsx)("div",{className:j?"menu active":"menu",children:Object(C.jsxs)("div",{className:"menu_container",children:[s?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"user-text",children:c.fullname}),Object(C.jsx)("li",{className:"link",children:Object(C.jsx)("p",{id:"accept",onClick:o,children:"Logout"})})]}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("li",{className:"link",children:Object(C.jsx)("p",{id:"register",onClick:o,children:"Registration"})}),Object(C.jsx)("li",{className:"link",children:Object(C.jsx)("p",{id:"login",onClick:o,children:"Log in"})})]}),Object(C.jsx)("li",{className:"link",children:Object(C.jsx)("p",{id:"categories",onClick:o,children:"Categories"})})]})}),Object(C.jsx)(S,{isOpen:"categories"===t,setIsOpen:n,handleClose:u,children:Object(C.jsx)("div",{className:"page_container",children:Object(C.jsx)(I,{categories:O,onCategory:function(e){r(M(e)),n("")}})})})]})},Q=function(e){var t=e.message,n=e.messageType,c=e.time,s=Object(i.c)(),r=Object(a.useState)(!1),o=Object(x.a)(r,2),u=o[0],l=o[1];Object(a.useEffect)((function(){var e=setTimeout((function(){l(!0)})),n=setTimeout((function(){l(!1)}),c-300),a=setTimeout((function(){s(Object(L.b)(t.id))}),c);return function(){clearTimeout(n),clearTimeout(e),clearTimeout(a)}}),[c,s,t.id]);return Object(C.jsxs)("div",{className:u?"message ".concat(n," active"):"message",children:[Object(C.jsx)("span",{children:t.text}),Object(C.jsx)("div",{className:"message_close",onClick:function(){l(!1)},children:Object(C.jsx)("img",{src:E,alt:"Close",className:"icon small"})})]})},k=function(e){var t=e.time,n=Object(i.d)((function(e){return e.message})),a=n.messages,c=n.messageType;return Object(C.jsx)("div",{className:"messages",children:a.map((function(e){return Object(C.jsx)(Q,{message:e,messageType:c,time:t},e.id)}))})},z=function(){var e=Object(v.f)();return Object(C.jsx)("h1",{className:"not_found",children:'Page not found, no match for "'.concat(e.pathname,'"')})},H=n.p+"static/media/eco-products.d7555364.jpg",Y=function(e){var t=e.name,n=e.price,c=(e.rating,e.description),s=(e.userName,e.userFullName),r=e.tags,i=e.productName,o=e.productId,u=e.onCategory,l=Object(a.useState)(!0),A=Object(x.a)(l,2),j=A[0],d=A[1];return Object(a.useEffect)((function(){setTimeout((function(){d(!1)}))}),[]),Object(C.jsxs)("div",{className:j?"card animated":"card",children:[Object(C.jsxs)("div",{className:"left_section",children:[Object(C.jsx)("h4",{className:"card_title clickable",onClick:u.bind(null,o),children:i}),Object(C.jsx)("div",{className:"_img",children:Object(C.jsx)("img",{src:H,alt:"Eco-market"})}),Object(C.jsx)("h3",{className:"card_title",children:t})]}),Object(C.jsxs)("div",{className:"right_section",children:[Object(C.jsxs)("div",{className:"card_info",children:[Object(C.jsx)("p",{className:"card_description",children:c}),Object(C.jsx)("p",{className:"card_description large",children:s}),Object(C.jsx)("div",{className:"tags",children:r.map((function(e){return Object(C.jsx)("p",{className:"tag",children:e.name},e.id)}))})]}),Object(C.jsxs)("div",{className:"button_section",children:[Object(C.jsx)("div",{className:"info",children:n}),Object(C.jsx)("button",{className:"buy _button",children:"Buy"})]})]})]})},_=function(e){var t=e.products,n=e.loading,c=e.onCategory,s=Object(j.a)(t),r=Object(a.useRef)(new Array(3).fill(null)).current;return Object(C.jsx)("div",{className:"card_list",children:n?r.map((function(e,t){return Object(C.jsx)("div",{className:"card loading-animation"},t)})):s.length?s.reverse().map((function(e){return Object(C.jsx)(Y,{name:e.name,price:e.price,description:e.description,rating:e.rating,userName:e.userName,userFullName:e.userFullName,tags:e.tags,productName:e.productName,productId:e.productId,onCategory:c},e.id)})):Object(C.jsx)("span",{className:"empty",children:"No Products"})})},q=(n(76),Object(i.b)((function(e){return{category:e.category,product:e.product}}),(function(e){return{getCategories:function(){var t=Object(B.a)(G.a.mark((function t(){return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(function(){var e=Object(B.a)(G.a.mark((function e(t){var n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(Object(L.m)(!0)),e.next=4,F.a.categories.get();case 4:n=e.sent,t(Object(L.d)(n.data)),t(Object(L.m)(!1)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("FROM CATEGORY_THUNK",e.t0),e.t0&&(t(Object(L.c)()),t(Object(L.m)(!1)),t(Object(L.a)("".concat(e.t0))));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}());case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),getProductByCategory:function(){var t=Object(B.a)(G.a.mark((function t(n){return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(M(n));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getProducts:function(){var t=Object(B.a)(G.a.mark((function t(){return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(function(){var e=Object(B.a)(G.a.mark((function e(t){var n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(Object(L.n)(!0)),e.next=4,F.a.products.get();case 4:n=e.sent,t(Object(L.f)(n.data)),t(Object(L.n)(!1)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("FROM PRODUCT_THUNK",e.t0),e.t0&&(t(Object(L.e)()),t(Object(L.n)(!1)));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}());case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}))((function(e){var t=e.getCategories,n=e.getProducts,c=e.getProductByCategory,s=e.category,r=s.categories,i=s.loading,o=e.product,u=o.products,l=o.loading,A=Object(a.useState)([]),j=Object(x.a)(A,2),d=j[0],O=j[1],b=Object(a.useState)([]),p=Object(x.a)(b,2),g=p[0],f=p[1],m=function(e){c(e)};return Object(a.useEffect)((function(){Promise.allSettled([t(),n()])}),[t,n]),Object(a.useEffect)((function(){O(Object(R.a)(r))}),[r,O]),Object(a.useEffect)((function(){f(Object(R.b)(u))}),[u,f]),Object(C.jsxs)("div",{className:"screen",children:[Object(C.jsx)("div",{className:"left_side",children:Object(C.jsx)(I,{categories:d,onCategory:m,loading:i})}),Object(C.jsx)("div",{className:"main_side",children:Object(C.jsx)(_,{products:g,loading:l,onCategory:m})})]})}))),X=(n(77),n(27)),K=Object(i.b)((function(e){return e.auth}),(function(e){return{register:function(t){return e(Object(X.b)(t))}}}))((function(e){var t=e.register,n=e.isOpen,c=e.setIsOpen,s=e.loading,r=Object(a.useState)({fullname:"",username:"",password:""}),i=Object(x.a)(r,2),o=i[0],l=i[1],A=function(e){l((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(P.a)({},e.target.name,"".concat(e.target.value)))}))};return Object(C.jsxs)(S,{loading:s,name:"Registration",isOpen:"register"===n,handleClose:function(){"register"===n&&c("")},children:[Object(C.jsxs)("div",{className:"_form",children:[Object(C.jsx)("input",{className:"_input",name:"fullname",placeholder:"Full name",onChange:A,value:o.fullname}),Object(C.jsx)("input",{className:"_input",name:"username",placeholder:"User name",onChange:A,value:o.username}),Object(C.jsx)("input",{className:"_input",name:"password",placeholder:"Password",type:"password",onChange:A,value:o.password})]}),Object(C.jsx)("div",{className:"_form_buttons",children:Object(C.jsx)("button",{className:"_button",onClick:function(){t(o)},children:"Register"})})]})})),J=Object(i.b)((function(e){return e.auth}),(function(e){return{login:function(t){return e(Object(X.a)(t))}}}))((function(e){var t=e.login,n=e.isOpen,c=e.setIsOpen,s=e.loading,r=Object(a.useState)({username:"",password:""}),i=Object(x.a)(r,2),o=i[0],l=i[1],A=function(e){l((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(P.a)({},e.target.name,"".concat(e.target.value)))}))};return Object(C.jsxs)(S,{loading:s,name:"Log in",isOpen:"login"===n,handleClose:function(){"login"===n&&c("")},children:[Object(C.jsxs)("div",{className:"_form",children:[Object(C.jsx)("input",{className:"_input",name:"username",placeholder:"User name",onChange:A,value:o.username}),Object(C.jsx)("input",{className:"_input",name:"password",placeholder:"Password",type:"password",onChange:A,value:o.password})]}),Object(C.jsx)("div",{className:"_form_buttons",children:Object(C.jsx)("button",{className:"_button",onClick:function(){t(o)},children:"Log in"})})]})})),Z=function(e){var t=e.text,n=e.isOpen,a=e.setIsOpen,c=e.onAccept,s=e.loading,r=function(){var e=Object(B.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(C.jsx)("div",{className:n?"modal active":"modal",children:Object(C.jsxs)("div",{className:"_container",children:[Object(C.jsx)("span",{className:"_title",children:t}),s&&Object(C.jsx)(N,{size:"small"}),Object(C.jsxs)("div",{className:"button_container",children:[Object(C.jsx)("button",{className:"_button",onClick:r,children:"Accept"}),Object(C.jsx)("button",{className:"_button",onClick:a.bind(null,""),children:"Cancel"})]})]})})};var W=function(){var e=Object(a.useState)(""),t=Object(x.a)(e,2),n=t[0],c=t[1],s=Object(i.d)((function(e){return e.auth})),r=s.auth,o=s.authStatus,u=Object(i.c)(),l=function(e){c(e.target.id)};return Object(a.useEffect)((function(){o&&c("")}),[o,c]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(h.a,{children:[Object(C.jsx)(T,{isOpen:n,setIsOpen:c,auth:r,authStatus:o,onClick:l}),Object(C.jsx)(V,{isOpen:n,setIsOpen:c,auth:r,authStatus:o,dispatch:u,onClick:l,handleClose:function(){c("")}}),Object(C.jsx)(K,{isOpen:n,setIsOpen:c}),Object(C.jsx)(J,{isOpen:n,setIsOpen:c}),Object(C.jsx)(Z,{onAccept:function(){u(Object(L.i)()),c("")},isOpen:"accept"===n,setIsOpen:c,text:"Are you sure you want to log out?"}),Object(C.jsxs)(v.c,{children:[Object(C.jsx)(v.a,{exact:!0,path:"/",children:Object(C.jsx)(q,{})}),Object(C.jsx)(v.a,{path:"/*",children:Object(C.jsx)(z,{})})]})]}),Object(C.jsx)(k,{time:3e3})]})};r.a.render(Object(C.jsx)(i.a,{store:m,children:Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(W,{})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.a1f00217.chunk.js.map