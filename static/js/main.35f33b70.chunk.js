(this["webpackJsonpcontact-list-react-app"]=this["webpackJsonpcontact-list-react-app"]||[]).push([[0],{100:function(e,t,a){},15:function(e,t,a){e.exports={main:"Main_main__1YawF",filter:"Main_filter__BYLxC",active:"Main_active__I_8B6",initials:"Main_initials__3sQgX",contacts:"Main_contacts__27hmx",mainBottom:"Main_mainBottom__2VFJc"}},216:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),i=a.n(c),l=(a(100),a(4)),o=a(19),s=a(2),d=function(e,t){return new Promise((function(a){return setTimeout(a,e,t)}))},u=a(10),m=a(5),b=a(20),j=a(87),f=a.n(j),h=a(1),O=function(e){var t=e.children,a=Object(b.a)(e,["children"]);return Object(h.jsx)("label",Object(m.a)(Object(m.a)({className:f.a.fieldLabel},a),{},{children:t}))},g=a(52),p=a.n(g),x=function(e){var t=e.error,a=Object(b.a)(e,["error"]);return Object(h.jsx)(u.a,Object(m.a)({className:"".concat(t?p.a.fieldInputError:""," ").concat(p.a.fieldInput)},a))},v=a(53),N=a.n(v),y=function(e){var t=e.fullWidth,a=void 0!==t&&t,n=e.buttonBg,r=void 0===n?"#011393":n,c=Object(b.a)(e,["fullWidth","buttonBg"]);return Object(h.jsx)("button",Object(m.a)({className:"".concat(a?N.a.customButtonFullWidth:""," ").concat(N.a.customButton),style:{background:r}},c))},_=a(88),C=a.n(_),E=a(89),w=a.n(E);function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var S=n.createElement("defs",null,n.createElement("style",null,".a,.b{fill:none;}.b{stroke:#e9275a;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.667px;}")),k=n.createElement("g",{transform:"translate(-40 -172)"},n.createElement("rect",{className:"a",width:20,height:20,transform:"translate(40 172)"}),n.createElement("g",{transform:"translate(40.333 172.333)"},n.createElement("path",{className:"b",d:"M18.333,10A8.333,8.333,0,1,1,10,1.667,8.333,8.333,0,0,1,18.333,10Z"}),n.createElement("path",{className:"b",d:"M10,6.667V10"}),n.createElement("path",{className:"b",d:"M10,13.333h0"})));function B(e,t){var a=e.title,r=e.titleId,c=F(e,["title","titleId"]);return n.createElement("svg",L({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 20 20",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,S,k)}var T=n.forwardRef(B),P=(a.p,function(e){var t=e.error;return t?Object(h.jsxs)("div",{className:w.a.fieldError,children:[Object(h.jsx)("span",{children:Object(h.jsx)(T,{})}),t]}):null}),A=a(11),D=function(e){var t=e.handleSubmit,a=A.a().shape({password:A.b().min(3,"Too short").max(50,"Too Long!").required("Required"),email:A.b().email("Invalid email").required("Required")});return Object(h.jsx)(u.c,{initialValues:{email:"",password:""},validationSchema:a,onSubmit:t,children:function(e){var t=e.isSubmitting,a=e.errors;return Object(h.jsxs)(u.b,{className:C.a.form,children:[Object(h.jsx)(O,{htmlFor:"email",children:"Username"}),Object(h.jsx)(x,{name:"email",error:a.email}),Object(h.jsx)(P,{error:a.email}),Object(h.jsx)(O,{htmlFor:"password",children:"Password"}),Object(h.jsx)(x,{type:"password",name:"password",error:a.password}),Object(h.jsx)(P,{error:a.password}),Object(h.jsx)(y,{buttonBg:"#f34e9b",fullWidth:!0,type:"submit",disabled:t,children:"Login"})]})}})},I=a(93),M=a.n(I),W=function(e){var t=Object(n.useState)(0),a=Object(l.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){c(100)}),[c]),Object(h.jsx)(M.a,{progress:r,animate:!0,animationDuration:"2s",responsive:!0,size:"100",lineWidth:"25",progressColor:"#53D7FF",bgColor:"#FAFBFC",showPercentage:!1})},R=a.p+"static/media/pink_phone_logo.6469b354.png",q=a(23),H=a.n(q),V=r.a.createContext(),Z=function(){var e=Object(n.useContext)(V);if(void 0===e)throw Error("useContactListContext must be used inside ContactListContext.Provider");return e},G=function(){var e=Z(),t=e.state,a=e.dispatch,r=t.user.email,c=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],c=a[1];return{handleLoginSubmit:function(t){c(!0),d(2e3,t.email).then((function(a){e({type:"LOGIN_USER",payload:t.email})})).catch((function(e){c(!1),console.log(e)}))},loading:r}}(a),i=c.loading,o=c.handleLoginSubmit;return r?Object(h.jsx)(s.a,{to:"/dashboard"}):Object(h.jsxs)("div",{className:H.a.loginPage,children:[Object(h.jsx)("div",{className:H.a.loginBg}),Object(h.jsx)("div",{className:H.a.loginFilter}),Object(h.jsxs)("div",{className:H.a.loginWrapper,children:[Object(h.jsxs)("header",{className:H.a.loginHeader,children:[Object(h.jsx)("img",{src:R,alt:"logo"}),Object(h.jsx)("h1",{children:"Welcome!"})]}),Object(h.jsx)("div",{className:H.a.loginFormContainer,children:i?Object(h.jsx)(W,{}):Object(h.jsx)(D,{handleSubmit:o})})]})]})},U=function(){return Object(h.jsx)(s.a,{to:"/login"})},J=a(6),z=a(94),Y=a.n(z);function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var X=n.createElement("defs",null,n.createElement("style",null,".a1,.b1,.c1,.d1{fill:none;}.c1,.d1{stroke:#fff;}.d1{stroke-linecap:round;}.e1,.f1{stroke:none;}.f1{fill:#fff;}")),$=n.createElement("g",{transform:"translate(-123 -85)"},n.createElement("rect",{className:"a1",width:72.472,height:48,transform:"translate(123 85)"}),n.createElement("g",{transform:"translate(146.529 101.235)"},n.createElement("g",{className:"b1",transform:"translate(3.765 4.765)"},n.createElement("path",{className:"e1",d:"M5.976,7.282A8.547,8.547,0,0,0,9.6,10.906L10.808,9.7a.437.437,0,0,1,.549-.11,5.743,5.743,0,0,0,1.976.329.55.55,0,0,1,.549.549v1.867a.59.59,0,0,1-.549.549A9.325,9.325,0,0,1,4,3.549.55.55,0,0,1,4.549,3H6.471a.55.55,0,0,1,.549.549,6.218,6.218,0,0,0,.329,1.976.676.676,0,0,1-.11.549Z"}),n.createElement("path",{className:"f1",d:"M 4.549015998840332 2.999997138977051 C 4.219606399536133 2.999997138977051 3.999996185302734 3.274506568908691 3.999996185302734 3.549016952514648 C 3.999996185302734 8.709806442260742 8.17254638671875 12.88235664367676 13.33333587646484 12.88235664367676 C 13.6078462600708 12.88235664367676 13.88235664367676 12.60784721374512 13.88235664367676 12.33333683013916 L 13.88235664367676 10.46666717529297 C 13.88235664367676 10.13725662231445 13.6078462600708 9.917646408081055 13.33333587646484 9.917646408081055 C 12.61960601806641 9.917646408081055 11.96078681945801 9.807847023010254 11.35685634613037 9.588236808776855 C 11.29851150512695 9.549337387084961 11.2332763671875 9.531107902526855 11.1660327911377 9.531107902526855 C 11.04345512390137 9.531108856201172 10.9142017364502 9.591681480407715 10.80784606933594 9.698036193847656 L 9.599996566772461 10.90588760375977 C 8.062746047973633 10.08235740661621 6.745096206665039 8.819606781005859 5.976466178894043 7.282357215881348 L 7.239216804504395 6.074506759643555 C 7.349016189575195 5.909807205200195 7.403926849365234 5.690196990966797 7.349016189575195 5.525486946105957 C 7.129405975341797 4.866666793823242 7.019606590270996 4.207846641540527 7.019606590270996 3.549016952514648 C 7.019606590270996 3.274506568908691 6.799996376037598 2.999997138977051 6.470586776733398 2.999997138977051 L 4.549015998840332 2.999997138977051 M 4.549015998840332 1.999997138977051 L 6.470586776733398 1.999997138977051 C 7.324716567993164 1.999997138977051 8.019606590270996 2.694887161254883 8.019606590270996 3.549016952514648 C 8.019606590270996 4.09709644317627 8.113166809082031 4.65567684173584 8.297696113586426 5.209257125854492 C 8.448026657104492 5.660197257995605 8.363386154174805 6.19102668762207 8.071266174316406 6.629206657409668 L 8.010106086730957 6.72093677520752 L 7.930436134338379 6.797146797180176 L 7.232209205627441 7.465017318725586 C 7.780534744262695 8.308390617370605 8.539022445678711 9.058633804321289 9.441645622253418 9.650017738342285 L 10.10073661804199 8.990926742553711 C 10.39725685119629 8.694406509399414 10.77558708190918 8.531106948852539 11.16603660583496 8.531106948852539 C 11.37736225128174 8.531106948852539 11.58298683166504 8.579909324645996 11.76910400390625 8.673341751098633 C 12.24227714538574 8.835497856140137 12.7680549621582 8.917646408081055 13.33333587646484 8.917646408081055 C 14.18746662139893 8.917646408081055 14.88235664367676 9.612537384033203 14.88235664367676 10.46666717529297 L 14.88235664367676 12.33333683013916 C 14.88235664367676 13.1585168838501 14.15851593017578 13.88235664367676 13.33333587646484 13.88235664367676 C 10.57023620605469 13.88235664367676 7.974496841430664 12.80831718444824 6.024266242980957 10.85808753967285 C 4.074036598205566 8.907856941223145 2.999996185302734 6.312116622924805 2.999996185302734 3.549016952514648 C 2.999996185302734 2.694887161254883 3.694886207580566 1.999997138977051 4.549015998840332 1.999997138977051 Z"})),n.createElement("circle",{className:"c1",cx:12.706,cy:12.706,r:12.706}),n.createElement("g",{className:"c1",transform:"translate(2.824 2.824)"},n.createElement("circle",{className:"e1",cx:9.882,cy:9.882,r:9.882}),n.createElement("circle",{className:"a1",cx:9.882,cy:9.882,r:10.382}))),n.createElement("path",{className:"d1",d:"M-210.5,4951.289l12.309-16.109",transform:"translate(376.441 -4848.641)"}),n.createElement("path",{className:"d1",d:"M-232.764,4958.7l-7.13-7",transform:"translate(383.674 -4854.913)"}),n.createElement("path",{className:"d1",d:"M-239.594,4986.88l-17.927,10.721",transform:"translate(388.859 -4865.259)"}),n.createElement("path",{className:"d1",d:"M-202.7,4985.981l30.972,10.9",transform:"translate(372.737 -4864.995)"}));function ee(e,t){var a=e.title,r=e.titleId,c=Q(e,["title","titleId"]);return n.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",width:78.642,height:48.029,viewBox:"0 0 78.642 48.029",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,X,$)}var te=n.forwardRef(ee);a.p;function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var re=n.createElement("defs",null,n.createElement("style",null,".a2{fill:none;}.b2{fill:#fff;}")),ce=n.createElement("path",{className:"a2",d:"M24,24H0V0H24Z"}),ie=n.createElement("path",{className:"b2",d:"M15.5,14h-.8l-.3-.3A6.259,6.259,0,0,0,16,9.5,6.5,6.5,0,1,0,9.5,16a6.259,6.259,0,0,0,4.2-1.6l.3.3v.8l5,5L20.5,19l-5-5Zm-6,0A4.5,4.5,0,1,1,14,9.5,4.481,4.481,0,0,1,9.5,14Z"});function le(e,t){var a=e.title,r=e.titleId,c=ne(e,["title","titleId"]);return n.createElement("svg",ae({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,re,ce,ie)}var oe=n.forwardRef(le),se=(a.p,a(57)),de=a.n(se),ue=function(){return Object(h.jsxs)("header",{className:de.a.header,children:[Object(h.jsx)("div",{children:Object(h.jsx)(te,{})}),Object(h.jsx)("div",{children:Object(h.jsx)("h1",{className:de.a.title,children:"Contacts"})}),Object(h.jsx)("div",{children:Object(h.jsx)(oe,{})})]})},me=a(95),be=function(e){var t=e.name,a=Object(b.a)(e,["name"]),n=Object(u.d)(t),r=Object(l.a)(n,3),c=r[0],i=r[2];return Object(h.jsx)(me.a,Object(m.a)({styles:{control:function(){return{display:"flex",padding:"15px 20px",border:"1px solid #c4c4c4",borderRadius:"24px",marginBottom:"32px"}},indicatorSeparator:function(){return{display:"none"}},indicatorsContainer:function(){return{padding:"0"}},dropdownIndicator:function(){return{padding:"0"}}},value:c.defaultValue,onChange:function(e){return i.setValue(e)},onBlur:function(){return i.setTouched(!0)}},a))},je=a(40),fe=a.n(je);function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Oe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ge=n.createElement("defs",null,n.createElement("style",null,".a3{fill:none;}.b3{fill:#011393;}")),pe=n.createElement("path",{className:"a3",d:"M0,0H24V24H0Z"}),xe=n.createElement("path",{className:"b3",d:"M3,17.2V21H6.8l11-11.1L14.1,6.2ZM20.7,7a.967.967,0,0,0,0-1.4L18.4,3.3a.967.967,0,0,0-1.4,0L15.2,5.1l3.7,3.8Z"});function ve(e,t){var a=e.title,r=e.titleId,c=Oe(e,["title","titleId"]);return n.createElement("svg",he({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,ge,pe,xe)}var Ne=n.forwardRef(ve),ye=(a.p,function(e){var t=e.contact,a=e.categories,n=e.disabled,r=e.setDisabled,c=e.handleDelete,i=e.handleFormSubmit,l=t.firstName,o=t.lastName,s=t.email,d=t.category,m=t.id,b=function(){return r(!1)},j=A.a().shape({firstName:A.b().min(1,"Too short").max(50,"Too Long!").required("Required"),lastName:A.b().min(1,"Too short").max(50,"Too Long!").required("Required"),email:A.b().email("Invalid email").required("Required"),category:A.b().required("Please, select office")});return Object(h.jsx)("aside",{className:fe.a.sidebar,children:Object(h.jsx)(u.c,{initialValues:{firstName:l,lastName:o,email:s,category:d},validationSchema:j,enableReinitialize:!0,children:function(e){var t=e.isSubmitting,l=e.errors,o=e.values,s=e.resetForm;return Object(h.jsxs)(u.b,{className:fe.a.form,children:[Object(h.jsx)("div",{className:fe.a.editIconWrapper,children:n?Object(h.jsx)("button",{type:"button",onClick:b,children:Object(h.jsx)(Ne,{})}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{type:"button",onClick:function(){s(),r(!0)},children:"CANCEL"}),Object(h.jsx)("button",{type:"button",onClick:function(){return i({id:m,firstName:o.firstName,lastName:o.lastName,email:o.email,category:o.category})},children:"SAVE"})]})}),Object(h.jsx)(O,{htmlFor:"firstName",children:"First Name"}),Object(h.jsx)(x,{name:"firstName",error:l.firstName,disabled:t||n}),Object(h.jsx)(P,{error:l.firstName}),Object(h.jsx)(O,{htmlFor:"lastName",children:"Last Name"}),Object(h.jsx)(x,{name:"lastName",error:l.lastName,disabled:t||n}),Object(h.jsx)(P,{error:l.lastName}),Object(h.jsx)(O,{htmlFor:"email",children:"Email"}),Object(h.jsx)(x,{name:"email",error:l.email,disabled:t||n}),Object(h.jsx)(P,{error:l.email}),Object(h.jsx)(O,{htmlFor:"category",children:"Category"}),Object(h.jsx)(be,{name:"category",disabled:t||n,options:a}),!n&&Object(h.jsx)(y,{buttonBg:"#011393",type:"button",onClick:function(){return c(m)},disabled:t,children:"Delete"})]})}})})}),_e=a(15),Ce=a.n(_e),Ee=function(e){var t=e.contactList,a=e.handleContactClick,r=e.categories,c=Object(n.useState)(3),i=Object(l.a)(c,2),o=i[0],s=i[1],d=Object(n.useState)("ALL"),u=Object(l.a)(d,2),m=u[0],b=u[1],j=function(e){return b(e.target.innerText)};return t?Object(h.jsxs)("main",{className:Ce.a.main,children:[Object(h.jsx)("div",{className:Ce.a.filter,children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{className:"ALL"===m?Ce.a.active:"",children:Object(h.jsx)("button",{onClick:j,children:"All"})}),r.map((function(e,t){return Object(h.jsx)("li",{className:e.toUpperCase()===m?Ce.a.active:"",children:Object(h.jsx)("button",{onClick:j,children:e})},t)}))]})}),Object(h.jsxs)("div",{className:Ce.a.contacts,children:[Object(h.jsx)("ul",{children:t.slice(0,o).map((function(e){return Object(h.jsxs)("li",{onClick:function(){return a(e.id)},children:[Object(h.jsx)("span",{className:Ce.a.initials,style:{background:e.color},children:"".concat(e.firstName[0]).concat(e.lastName[0])}),Object(h.jsx)("span",{className:Ce.a.name,children:"".concat(e.firstName," ").concat(e.lastName)})]},e.id)}))}),Object(h.jsx)("div",{className:Ce.a.mainBottom,children:o<t.length?Object(h.jsx)(y,{buttonBg:"#011393",onClick:function(){return s((function(e){return e+3}))},children:"Load more"}):Object(h.jsx)("p",{children:"You\u2019ve reached the end of the list."})})]})]}):null},we=a(58),Le=a.n(we),Fe=function(){var e=Object(s.g)().url;return Object(h.jsxs)("nav",{className:Le.a.nav,children:[Object(h.jsx)(o.b,{to:"".concat(e,"/contacts"),className:Le.a.active,children:"Contacts"}),Object(h.jsx)(o.b,{to:"".concat(e,"/my-profile"),children:"My Profile"}),Object(h.jsx)(o.b,{to:"".concat(e,"/settings"),children:"Settings"})]})},Se=[{id:1,firstName:"Millie",lastName:"Balkey",email:"millie.balkey@gmail.com",category:"Friends",color:"#8AB2D9"},{id:2,firstName:"Genevieve",lastName:"Dean",email:"genevieve.dean@gmail.com",category:"Friends",color:"#CDB3E8"},{id:3,firstName:"Jack",lastName:"Rogers",email:"jack.rogers@gmail.com",category:"Office",color:"#73CCA4"},{id:4,firstName:"Kevin",lastName:"Delgado",email:"kevin.delgado@gmail.com",category:"Neighbours",color:"#A7DDED"},{id:5,firstName:"Donna",lastName:"Nicholis",email:"donna.nicholis@gmail.com",category:"Friends",color:"#5A64A"},{id:6,firstName:"Scott",lastName:"Perkins",email:"scott.perkins@gmail.com",category:"Friends",color:"#8AB2D9"},{id:7,firstName:"Diana",lastName:"Grant",email:"diana.grant@gmail.com",category:"Favorites",color:"#CDB3E8"},{id:8,firstName:"Jackie",lastName:"Rogers",email:"jackie.rogers@gmail.com",category:"Family",color:"#73CCA4"},{id:9,firstName:"Eva",lastName:"Willis",email:"eva.willis@gmail.com",category:"Friends",color:"#5A64A"}],ke=function(){var e=Z(),t=e.state,a=function(e,t){var a=Object(n.useState)(!0),r=Object(l.a)(a,2),c=r[0],i=r[1],o=e.user,s=Object(n.useCallback)((function(){d(1e3,Se).then((function(e){t({type:"GET_CONTACTS",payload:e})})).catch((function(e){console.log(e)}))}),[t]);return{user:o,contactList:e.contactList,fetchContacts:s,handleDelete:function(e){d(1e3,e).then((function(e){t({type:"DELETE_CONTACT",payload:e})})).catch((function(e){console.log(e)}))},handleFormSubmit:function(e){d(1e3,e).then((function(e){t({type:"UPDATE_CONTACT",payload:e}),i(!0)})).catch((function(e){i(!1),console.log(e)}))},disabled:c,setDisabled:i}}(t,e.dispatch),r=a.contactList,c=a.handleDelete,i=a.fetchContacts,o=a.disabled,u=a.setDisabled,m=a.handleFormSubmit,b=Object(n.useState)(0),j=Object(l.a)(b,2),f=j[0],O=j[1],g=t.user.email;if(Object(n.useEffect)((function(){i()}),[i]),!g)return Object(h.jsx)(s.a,{to:"/login"});var p=r.find((function(e){return e.id===f})),x=Object(J.a)(new Set((r||[]).map((function(e){return e.category}))));return Object(h.jsxs)("div",{className:Y.a.dashboardPage,children:[Object(h.jsx)(ue,{}),Object(h.jsx)(Fe,{}),Object(h.jsx)(Ee,{contactList:r,handleContactClick:function(e){O(e),u(!0)},categories:x}),p&&Object(h.jsx)(ye,{contact:p,categories:x,disabled:o,setDisabled:u,handleDelete:c,handleFormSubmit:m})]})},Be={user:{email:""},contactList:[]},Te=function(e,t){switch(t.type){case"LOGIN_USER":return Object(m.a)(Object(m.a)({},e),{},{user:{email:t.payload}});case"GET_CONTACTS":return Object(m.a)(Object(m.a)({},e),{},{contactList:t.payload});case"UPDATE_CONTACT":var a=Object(J.a)(e.contactList.map((function(e){var a=t.payload,n=a.id,r=a.firstName,c=a.lastName,i=a.email,l=a.category;return e.id===n?{id:n,firstName:r,lastName:c,email:i,category:l}:e})));return Object(m.a)(Object(m.a)({},e),{},{contactList:Object(J.a)(a)});case"DELETE_CONTACT":var n=Object(J.a)(e.contactList.filter((function(e){return e.id!==t.payload})));return Object(m.a)(Object(m.a)({},e),{},{contactList:n});case"RESET_DATA":return Be;default:return e}},Pe=function(){var e=Object(n.useReducer)(Te,Be),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(h.jsx)(V.Provider,{value:{state:a,dispatch:r},children:Object(h.jsx)(o.a,{children:Object(h.jsxs)(s.d,{children:[Object(h.jsx)(s.b,{path:"/login",children:Object(h.jsx)(G,{})}),Object(h.jsx)(s.b,{path:"/dashboard",children:Object(h.jsx)(ke,{})}),Object(h.jsx)(s.b,{path:"/",children:Object(h.jsx)(U,{})})]})})})},Ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,217)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(Pe,{})}),document.getElementById("root")),Ae()},23:function(e,t,a){e.exports={loginPage:"Login_loginPage__2jGDY",loginBg:"Login_loginBg__1OWTU",loginFilter:"Login_loginFilter__g5y8B",loginHeader:"Login_loginHeader__2bZaq",loginWrapper:"Login_loginWrapper__vsgrw",loginFormContainer:"Login_loginFormContainer__2Dmr_"}},40:function(e,t,a){e.exports={form:"Sidebar_form__3rX9P",sidebar:"Sidebar_sidebar__Bcdwo",editIconWrapper:"Sidebar_editIconWrapper__1_TVW"}},52:function(e,t,a){e.exports={fieldInput:"FieldInput_fieldInput__23KfH",fieldInputError:"FieldInput_fieldInputError__3q59z"}},53:function(e,t,a){e.exports={customButton:"Button_customButton__2Erq6",customButtonFullWidth:"Button_customButtonFullWidth__2a_PM"}},57:function(e,t,a){e.exports={header:"Header_header__2Jt5J",title:"Header_title__1krQW"}},58:function(e,t,a){e.exports={nav:"Nav_nav__1OEyl",active:"Nav_active__Z5z7b"}},87:function(e,t,a){e.exports={fieldLabel:"FieldLabel_fieldLabel__9UEOg"}},88:function(e,t,a){e.exports={form:"LoginForm_form__59GVW"}},89:function(e,t,a){e.exports={fieldError:"FieldError_fieldError__A1Lsg"}},94:function(e,t,a){e.exports={dashboardPage:"Dashboard_dashboardPage__1Rg08"}}},[[216,1,2]]]);
//# sourceMappingURL=main.35f33b70.chunk.js.map