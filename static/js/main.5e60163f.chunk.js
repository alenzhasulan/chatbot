(this.webpackJsonpchatbot=this.webpackJsonpchatbot||[]).push([[0],{101:function(e,t,n){e.exports=n(154)},106:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),i=n.n(o),c=(n(106),n(32)),s=n(10),l=n(159),u=n(160),d=n(161),f=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{fluid:!0,style:{padding:0}},r.a.createElement(u.a,{style:{maxWidth:"100%",margin:0}},r.a.createElement(d.a,{sm:12,xs:12,style:{padding:0}},e.children))))},g=n(8),p=n(9),m=n.n(p),b=n(17),h=n(4),x=n(41),v=n(35),y=n.n(v),A=n(164),O=n(94),w=n(14),j=n(15),E=n(162),B=n(163);function k(){var e=Object(w.a)(["\nbackground: #f8f9fa;\nbox-shadow: 0 3px 4px rgba(21, 22, 28, 0.1);\npadding:18px;\npadding-left:30px;\n\ndisplay:flex;\nflex-direction: row;\nalign-items: center;\njustify-content: space-between;\nz-index: 1;\n"]);return k=function(){return e},e}var I=j.a.div(k()),C=function(e){var t=e.title,n=e.onBack,a=e.onRihgt;return r.a.createElement(I,null,r.a.createElement("div",{key:"left"},n&&r.a.createElement(E.a,{style:{cursor:"pointer"},size:24,onClick:function(){return n()}})),r.a.createElement("p",{key:"center",style:{margin:0,fontWeight:"bold",fontSize:18,textAlign:"center"}},t),r.a.createElement("div",{style:{cursor:"pointer"},key:"right"},a&&r.a.createElement("div",{onClick:function(){return a()},style:{flexDirection:"row",alignItems:"center",display:"flex"}},r.a.createElement(B.a,{size:16}),r.a.createElement("p",{key:"center",style:{margin:0,fontWeight:"bold",fontSize:14,textAlign:"center",marginLeft:5}},"\u041f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440"))))};function D(){var e=Object(w.a)(["\ndisplay: flex;\nflex-direction: row;\njustify-content: space-between;\nmargin-left: 40px;\nmargin-right: 40px;\nmargin-top: 15px;\nmargin-bottom: 15px;\npadding: 15px;\npadding-left: 25px;\npadding-right: 25px;\nbox-shadow: 0 1px 4px rgba(21,22,28,.1);\nbackground-color: white;\nalign-items: center;\nborder-radius: 4px;\ncursor: pointer\n"]);return D=function(){return e},e}function V(){var e=Object(w.a)(["\n    border: 1px solid #f3f5f8;\n    background: white;\n    border-radius: 4px;\n    outline: 0;\n    width: 100%;\n    font-size: 15px;\n    line-height: 20px;\n    color: #15161c;\n    padding: 9px 11px;\n    box-sizing: border-box;\n    height:40px\n"]);return V=function(){return e},e}function Q(){var e=Object(w.a)(["\n            padding: 0px;\n            background: #e6e7f2;\n            box-shadow: 0 1px 4px rgba(21,22,28,.1);\n            border-radius: 10px;\n            width: 256px;\n            max-width:256px;\n            box-sizing: border-box;\n            position: absolute;\n           \n        "]);return Q=function(){return e},e}function M(){var e=Object(w.a)(["\n            position:absolute;\n            bottom:20px;\n            right:20px;\n            z-index:",";\n            width:300px;\n            height:450px;\n            background-color: #f5f5f5;\n            overflow-y: scroll;\n            border-radius:10px;\n        "]);return M=function(){return e},e}function F(){var e=Object(w.a)(["\n            position:absolute;\n            bottom:20px;\n            right:20px;\n            z-index:10\n        "]);return F=function(){return e},e}function z(){var e=Object(w.a)(["\n            min-width:5000px !important;\n            height:5000px;\n          \n            transform-origin: 0 0;\n        "]);return z=function(){return e},e}function S(){var e=Object(w.a)(["\n            display: flex;\n            flex: 1;\n            overflow-x: scroll;\n            overflow-y: scroll;\n        "]);return S=function(){return e},e}function W(){var e=Object(w.a)(["\n             height: 100vh; \n             overflow: hidden;\n             background: rgba(243, 245, 248, 1);\n             display: flex;\n             flex: 1;\n             flex-direction: column;\n        "]);return W=function(){return e},e}function N(){var e=Object(w.a)(["\n    display:flex;\n    background: #fff;\n    cursor: pointer;\n    outline: none;\n    align-self: center;\n    border: 1px solid rgba(21,22,28,.16);\n    border-radius: 20px;\n    justify-content: center;\n    align-items: center\n"]);return N=function(){return e},e}j.a.div(N());var H=j.a.div(W()),Y=j.a.div(S()),Z=j.a.div(z()),L=j.a.div(F()),q=j.a.div(M(),(function(e){return e.zIndex})),G=(j.a.div(Q()),j.a.textarea(V()),j.a.div(D()));n(81),n(168);var T=n(82),X=n(11),R=function(e,t,n){var a;switch(e){case"text":a={id:0,step:t,data:n||"",type_message:"text",type_content:"question",child_id:0,url:null};break;case"image":a={id:t+1,step:t+1,url:"",type_message:"image",type_content:"question",child_id:0};case"button":a={id:t+1,step:t+1,contentButton:[],type_message:"button",type_content:"answer",child_id:0};default:throw new Error("Invalid type message")}return a},K=n(27),U=n.n(K);U.a.defaults.headers["Access-Control-Allow-Origin"]="*",U.a.defaults.headers.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGVuIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTYxMzA2MzkyNCwiZXhwIjoxNjEzMDY3NTI0fQ.U35Te92tzsl-FnkKznzZWlbeQ1gfQFjoHgmDxv6oetk";var P="http://localhost:8181/api/v1/",J=function(e){return U.a.get(P+"chats/"+e)},_=function(e){return U.a.patch(P+"chats/"+e.id,e)},$=function(){var e=Object(b.a)(m.a.mark((function e(t,n,a,r,o){var i,c,s,l,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=Object(X.a)(t.state.cards),(c=i.findIndex((function(e){return e.id===a})))>=0)try{s="button"===n&&o?o:R(n,i[c].messages.length),(l=i[c].messages.findIndex((function(e){return e.id===r})))>-1?(i[c].messages.splice(l+1,0,s),t.actions.setCards(i)):0===i[c].messages.length&&(u=R("text",i[c].messages.length+1),i[c].messages.push(u),i[c].messages.push(s),t.setState(Object(g.a)({},t.state,{cards:i}))),ee(t,Object(X.a)(i))}catch(d){}case 3:case"end":return e.stop()}}),e)})));return function(t,n,a,r,o){return e.apply(this,arguments)}}(),ee=function(){var e=Object(b.a)(m.a.mark((function e(t,n){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=Object(g.a)({},t.state.chat,{cards:n}),e.next=4,_(a);case 4:r=e.sent,t.setState(Object(g.a)({},t.state,{cards:r.data.cards})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),te={setChat:function(e,t){e.setState(Object(g.a)({},e.state,{chat:t}))},setCards:function(e,t){e.setState(Object(g.a)({},e.state,{cards:t}))},otherAction:function(e,t){},changeMessage:function(e,t,n,a,r){var o=Object(X.a)(e.state.cards),i=o.findIndex((function(e){return e.id===t}));if(console.log("chat ",e.state.chat),i>=0){if(o[i].messages.findIndex((function(e){return e.id===n}))>=0){var c=o[i].messages.findIndex((function(e){return e.id===n}));"text"===o[i].messages[c].type_message&&(o[i].messages[c].data=a),"button"===o[i].messages[c].type_message&&r&&(o[i].messages[c]=Object(g.a)({},o[i].messages[c],{contentButton:Object(X.a)(null===r||void 0===r?void 0:r.contentButton)}))}else{var s=o[i].messages.length,l=R("text",s,a);o[i].messages.push(l)}e.setState(Object(g.a)({},e.state,{cards:o})),ee(e,Object(X.a)(o))}},addNewMessage:$,removeEmptyMessage:function(e,t,n){var a=Object(X.a)(e.state.cards),r=a.findIndex((function(e){return e.id===t}));if(r>=0){var o=a[r].messages.findIndex((function(e){return e.id===n}));if(a[r].messages.splice(o,1),0===a[r].messages.length){var i=R("text",0);a[r].messages.push(i)}e.setState(Object(g.a)({},e.state,{cards:a})),ee(e,Object(X.a)(a))}},onClickModal:function(e,t,n,a,r){e.setState(Object(g.a)({},e.state,{modalState:{visible:t,card_id:n,message_id:a,modal_type:r}}))},addNewCard:function(e){var t=Object(X.a)(e.state.cards);t.push({id:0,messages:[{id:0,step:0,data:"",type_message:"text",type_content:"question",child_id:0}],position:{x:180+180*(Math.floor(t.length/5)+1),y:(t.length-1)%5*150}}),e.setState(Object(g.a)({},e.state,{cards:t})),ee(e,Object(X.a)(t))},movePostion:function(e,t,n){console.log("Change");var a=Object(X.a)(e.state.cards),r=a.findIndex((function(e){return e.id===n}));a[r].position=t,e.setState(Object(g.a)({},e.state,{cards:a})),ee(e,Object(X.a)(a))},addPositionBtn:function(e,t,n,a,r,o,i){var c=Object(X.a)(e.state.cards),s=c.findIndex((function(e){return e.id===t}));if(s>=0){var l=c[s].messages.findIndex((function(e){return e.id===n}));if(console.log("cqwerards ",c[s].messages[l]),console.log("message_index ",l),console.log("card_index ",s),l>=0&&c[s].messages[l].type_message&&"button"===c[s].messages[l].type_message){var u=c[s].messages[l].contentButton.findIndex((function(e){return e.id===a}));c[s].messages[l].contentButton[u]=Object(g.a)({},c[s].messages[l].contentButton[u],{offsetTop:r,offsetWidth:o,offsetHeight:i})}}},updateStateWithAPI:ee},ne={cards:[{id:0,messages:[{id:0,step:0,data:"",type_message:"text",type_content:"question",child_id:0}],position:{x:10,y:100}}],modalState:{visible:!1,card_id:null,message_id:null,modal_type:null},chat:{id:0,name:"Welcome",cards:[]}},ae=Object(T.a)(r.a,ne,te);n(83);y.a.setAppElement("#root");var re=function(e){var t=e.data,n=ae(),r=Object(h.a)(n,2),o=(r[0],r[1],Object(a.useState)({activeDrags:0,data:t})),i=Object(h.a)(o,2);i[0],i[1]},oe=n(166),ie=n(167),ce=n(84),se=n.n(ce);function le(){var e=Object(w.a)(["\n    width: 100%;\n    border: 1px dashed rgba(21, 22, 28, 0.36);\n    cursor: pointer;\n    height: 100%;\n    display: flex;\n    background: #ffffff;\n    box-sizing: border-box;\n    align-items: center;\n    border-radius: 4px;\n    flex-direction: column;\n    justify-content: center;\n    height: '200px';\n"]);return le=function(){return e},e}function ue(){var e=Object(w.a)(["\nposition: absolute;\ntop: 28px;\nleft: 10px; \nwidth: 40px;\nheight: 40px; \ncolor: white; \nbackground: black; \nborder: 50px;\ndisplay: flex; \nflex: 1;\nalign-items: center;\njustify-content: center; \npadding-bottom: 5px;\nborder-radius: 50px;\n"]);return ue=function(){return e},e}function de(){var e=Object(w.a)(["\nposition: absolute;\ntop: 28px;\nright: 10px; \nwidth: 40px;\nheight: 40px; \ncolor: white; \nbackground: black; \nborder: 50px;\ndisplay: flex; \nflex: 1;\nalign-items: center;\njustify-content: center; \npadding-bottom: 5px;\nborder-radius: 50px;\n"]);return de=function(){return e},e}var fe=function(e){var t=e.item,n=e.onChangeInput,o=e.onDropDown,i=Object(a.useState)({inner:!1}),c=Object(h.a)(i,2),s=c[0],l=c[1],u=ae(),d=Object(h.a)(u,2),f=d[0],g=d[1];return r.a.createElement("div",{onMouseMove:function(){return l({inner:!0})},onMouseLeave:function(){return l({inner:!1})},style:{border:"1px solid #cccfe0",width:"100%",borderRadius:"3px",padding:"6px",height:"90px",marginLeft:"5px",boxShadow:s.inner?"grey 2px 2px 10px 0px":"white 0px 0px 0px 0px"}},r.a.createElement("input",{onChange:function(e){return a=e,void n(t.id,a.target.value);var a},value:t.label,placeholder:"\u0422\u0435\u043a\u0441\u0442 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0435",style:{flex:1,display:"flex",width:"100%",background:"#f3f5f8",border:"0px",paddingTop:"5px",paddingBottom:"5px",paddingLeft:"10px"}}),r.a.createElement(oe.a,{style:{width:"100%"}},r.a.createElement(oe.a.Toggle,{style:{width:"100%",marginTop:"5px",background:"#f3f5f8",border:"0px",color:"black"},id:"dropdown-basic"},null!==t.to_id?t.to_id+" \u0448\u0430\u0433":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0448\u0430\u0433"),r.a.createElement(oe.a.Menu,null,f.cards.map((function(e,n){return r.a.createElement(oe.a.Item,{active:e.id===t.to_id,onClick:function(){o(t.id,e.id)}},e.id," \u0448\u0430\u0433")})),r.a.createElement(oe.a.Item,{onClick:Object(b.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.cards.length,g.addNewCard();case 2:case"end":return e.stop()}}),e)})))},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0448\u0430\u0433"))))},ge=j.a.button(de()),pe=j.a.button(ue()),me=j.a.div(le()),be=function(e){Object(x.a)(e);var t=Object(a.useState)(0),n=Object(h.a)(t,2),o=n[0],i=n[1],c=ae(),s=Object(h.a)(c,2),l=s[0],u=s[1],d=l.modalState,f=d.card_id,p=d.message_id,m=d.modal_type,b=Object(a.useState)(function(){var e={type_message:"button",type_content:"answer",id:1,step:1,contentButton:[],child_id:0};if("create"===m)return e;if("number"===typeof f&&"number"===typeof p){var t=l.cards.findIndex((function(e){return e.id===f})),n=l.cards[t].messages.findIndex((function(e){return e.id===p}));if("button"===l.cards[t].messages[n].type_message)return{type_message:"button",type_content:"answer",id:l.cards[t].messages[n].id,step:l.cards[t].messages[n].step,child_id:l.cards[t].messages[n].child_id,contentButton:Object(X.a)(l.cards[t].messages[n].contentButton)}}return e}()),v=Object(h.a)(b,2),y=v[0],A=v[1],O=function(e,t){var n=Object(g.a)({},y),a=n.contentButton.findIndex((function(t){return t.id===e}));a>=0&&(n.contentButton[a].label=t,A(n))},w=function(e,t){var n=Object(g.a)({},y),a=n.contentButton.findIndex((function(t){return t.id===e}));a>=0&&(n.contentButton[a].to_id=t,A(n))};return r.a.createElement("div",{style:{display:"flex",flex:1,flexDirection:"column"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}},r.a.createElement("p",{style:{marginBottom:"0rem",fontWeight:"bold"}},"\u041a\u043d\u043e\u043f\u043a\u0430"),r.a.createElement("p",{onClick:function(){"create"===m?"number"===typeof f&&"number"===typeof p&&(u.addNewMessage("button",f,p,y),u.onClickModal(!1,null,null,null)):"number"===typeof f&&"number"===typeof p&&(u.changeMessage(f,p,void 0,y),u.onClickModal(!1,null,null,null))},style:{marginBottom:"0rem",fontWeight:"bold",color:"green",cursor:"pointer"}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")),r.a.createElement(ie.a,{key:0,variant:"primary",style:{marginTop:15,marginLeft:-20,marginRight:-20}},r.a.createElement(ie.a.Link,{href:"#"},"\u0423\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435")," \u043e\u0431 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430 \u043a\u043d\u043e\u043f\u043a\u0430"),r.a.createElement("div",{style:{padding:"0 ".concat(0,"px"),marginTop:"20px",marginLeft:"-20px",marginRight:"-20px",zIndex:999}},r.a.createElement(se.a,{requestToChangeActive:i,activeItemIndex:o,numberOfCards:3,numberOfPlaceholderItems:5,showSlither:!0,gutter:20,leftChevron:r.a.createElement(pe,null,"<"),rightChevron:r.a.createElement(ge,null,">"),outsideChevron:!1,chevronWidth:0},y.contentButton.map((function(e){return r.a.createElement("div",{style:{height:"300px"}},r.a.createElement(fe,{item:e,onChangeInput:O,onDropDown:w}))})),r.a.createElement("div",{style:{height:"90px",marginLeft:"20px"}},r.a.createElement(me,{style:{cursor:"pointer"},onClick:function(){console.log("rev"),A(Object(g.a)({},y,{contentButton:[].concat(Object(X.a)(y.contentButton),[{label:"",to_id:null,id:y.contentButton.length,offsetTop:null,offsetHeight:null,offsetWidth:null}])}))}},r.a.createElement("p",{style:{marginBottom:"0rem",fontSize:"24px",color:"#0A59F8",fontWeight:"bold"}},"+"),r.a.createElement("p",{style:{marginBottom:"0rem",color:"#0A59F8",fontWeight:"normal"}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443"))))))},he=function(){return r.a.createElement("div",{style:{display:"flex",flex:1,flexDirection:"column"}},r.a.createElement(be,null))},xe=n(165),ve=function(e){var t=e.isViewChat,n=e.chatId,o=Object(a.useState)(),i=Object(h.a)(o,2),c=i[0],s=i[1],l=Object(a.useState)(!0),u=Object(h.a)(l,2),d=(u[0],u[1]),f=Object(a.useState)([]),g=Object(h.a)(f,2),p=g[0],x=g[1];Object(a.useRef)(null);Object(a.useEffect)((function(){console.log("chat_idiid",n),v(n)}),[t]);var v=function(){var e=Object(b.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,J(t);case 4:n=e.sent,a=n.data,console.log(a),s(a),x([a.cards[0]]),d(!1),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{style:{display:"flex",flex:1,padding:10,backgroundColor:"#f5f5f5"}},r.a.createElement("div",{key:"chat"},p.length>0&&p.map((function(e,t){return r.a.createElement("div",null,e.messages.map((function(n,a){return r.a.createElement("div",null,"text"===n.type_message&&r.a.createElement("div",null,r.a.createElement("p",{style:{padding:0,margin:0,fontFamily:"cursive"}},n.data)),(!e.answer_user||null===e.answer_user)&&"button"===n.type_message&&r.a.createElement("div",{style:{marginTop:15}},n.contentButton.map((function(e,n){return r.a.createElement("div",{onClick:function(){console.log("br"),function(e,t){var n=Object(X.a)(p);if(n[t].answer_user=e,x(n),c){var a=null===c||void 0===c?void 0:c.cards.findIndex((function(t){return t.id===e.to_id}));console.log("new_card_index ",a),a&&a>-1&&(console.log([].concat(Object(X.a)(n),[null===c||void 0===c?void 0:c.cards[a]])),setTimeout((function(){x([].concat(Object(X.a)(n),[null===c||void 0===c?void 0:c.cards[a]]))}),1500))}}(e,t)},style:{backgroundColor:"#6610f2",height:40,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:10,borderRadius:5,cursor:"pointer"}},r.a.createElement("p",{style:{padding:0,margin:0,color:"white"}},e.label))}))))})),e.answer_user&&null!==e.answer_user&&r.a.createElement("p",{style:{textAlign:"right",fontWeight:"bold",margin:0,padding:0}},e.answer_user.label),r.a.createElement("p",{id:"isTyping",style:{fontWeight:"bold"}}))}))))};y.a.setAppElement("#root");var ye=function(e){Object(x.a)(e);var t=Object(s.h)(),n=Object(s.g)(),o=ae(),i=Object(h.a)(o,2),c=i[0],l=i[1],u=c.cards,d=Object(a.useState)(!0),f=Object(h.a)(d,2),p=f[0],v=f[1],w=Object(a.useState)(!1),j=Object(h.a)(w,2),E=j[0],B=j[1],k=Object(a.useState)(0),I=Object(h.a)(k,2),D=I[0],V=I[1];Object(a.useEffect)((function(){var e=t.state.chat_id;console.log(e),V(e),Q(e)}),[t]);var Q=function(){var e=Object(b.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,J(t);case 4:n=e.sent,l.setCards(n.data.cards),0===n.data.cards.length?M(n.data):l.setChat(n.data),v(!1),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(b.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(g.a)({},t,{cards:[{id:0,step:0,messages:[{id:0,step:0,type_message:"text",type_content:"question",data:"",url:null,child_id:0}],position:{x:100,y:100}}]}),e.prev=1,e.next=4,_(n);case 4:a=e.sent,l.setChat(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),F=Object(a.useState)(1),z=Object(h.a)(F,2),S=z[0],W=z[1],N=function(e,t,n,a){var o=function(e,t,n,a){var r="M"+e+","+t;return r+=" L"+(.05*Math.abs(n-e)+e)+","+t,r+=" C"+(.66*(n-e)+e)+","+t,r+=" "+(.33*(n-e)+e)+","+a,r+=" "+(.05*-Math.abs(n-e)+n)+","+a,r+=" L"+n+","+a}(e,t,n,a);return r.a.createElement("path",{d:o,stroke:"rgb(37 53 74)","marker-end":"url('#arrow')","stroke-width":"3",fill:"none",style:{position:"absolute"}})};return r.a.createElement(H,null,r.a.createElement(C,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0447\u0430\u0442\u0430",onBack:function(){return n.goBack()},onRihgt:function(){return B(!0)}}),r.a.createElement(Y,{style:{background:"rgb(230 238 246)"}},r.a.createElement(Z,{style:{transform:"scale(".concat(S,")"),padding:"40px",zIndex:2}},!p&&c.cards.length>0?(console.log("I give cards ",u),r.a.createElement(r.a.Fragment,null,u.length>0&&u.map((function(e,t){return r.a.createElement(re,{data:e,key:e.id})})))):0===c.cards.length?r.a.createElement(re,{data:{id:0,messages:[{id:0,step:0,type_message:"text",type_content:"question",data:"",url:null,child_id:0}],position:{x:10,y:10}},key:0}):null,r.a.createElement("svg",{height:"5000",width:"5000",style:{padding:"40px"}},r.a.createElement("marker",{id:"arrow",markerWidth:"20",markerHeight:"20",refX:"16",refY:"8",orient:"auto",markerUnits:"userSpaceOnUse",style:{fill:"rgb(37 53 74)"}},r.a.createElement("polyline",{points:"0,0 20,8 0,16 4,8"})),!p&&function(){var e=[];return c.cards.map((function(t){t.messages.map((function(n){"button"===n.type_message&&n.contentButton.map((function(n){if(null!==n.to_id&&null!==n.offsetHeight&&null!==n.offsetTop&&null!==n.offsetWidth){var a=c.cards.findIndex((function(e){return e.id===n.to_id}));if(a>-1){var r={endX:c.cards[a].position.x-45,endY:c.cards[a].position.y,startY:t.position.y+n.offsetTop-n.offsetHeight/2,startX:t.position.x+n.offsetWidth};e.push(r)}}}))}))})),e}().map((function(e){return N(e.startX,e.startY,e.endX,e.endY)})))),r.a.createElement(L,null,r.a.createElement(A.a,{"aria-label":"Basic example"},r.a.createElement(O.a,{onClick:function(){return W(S-.1)},style:{backgroundColor:"white",color:"black"},variant:"secondary"},"-"),r.a.createElement(O.a,{disabled:!0,style:{backgroundColor:"white",color:"black"},variant:"secondary"},(100*S).toFixed(0),"%"),r.a.createElement(O.a,{onClick:function(){return W(S+.1)},style:{backgroundColor:"white",color:"black"},variant:"secondary"},"+"))),r.a.createElement(q,{zIndex:E?15:-15},r.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){return B(!1)}},r.a.createElement(xe.a,{style:{position:"absolute",right:10},size:24})),r.a.createElement(ve,{isViewChat:E,chatId:D}))),r.a.createElement(y.a,{isOpen:c.modalState.visible,onRequestClose:function(){return l.onClickModal(!1,null,null,null)},closeTimeoutMS:300,style:{content:{right:"0.5%",left:"50%",top:"0.5%",bottom:"0.5%"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.4)",zIndex:999}},contentLabel:"Example Modal"},r.a.createElement(he,null)))},Ae=function(){var e=Object(s.g)(),t=Object(a.useState)(!1),n=Object(h.a)(t,2),o=n[0],i=n[1],c=Object(a.useState)(null),l=Object(h.a)(c,2),u=l[0],d=l[1],f=Object(a.useState)([]),g=Object(h.a)(f,2),p=g[0],x=g[1];Object(a.useEffect)((function(){v()}),[]);var v=function(){var e=Object(b.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,U.a.get(P+"chats");case 4:t=e.sent,console.log(t),x(t.data),i(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),d(e.t0.response);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(H,{style:{overflow:"auto"}},r.a.createElement(C,{title:"\u041c\u043e\u0438 \u0447\u0430\u0442\u044b"}),r.a.createElement("div",{style:{flex:1}},!o&&null===u&&p.length>0&&p.map((function(t,n){return r.a.createElement(G,{onClick:function(){e.push({pathname:"/chat",state:{chat_id:t.id}})}},r.a.createElement("div",null,r.a.createElement("p",{style:{padding:0,margin:0,fontWeight:"bold"}},t&&t.name),r.a.createElement("p",{style:{padding:0,margin:0,fontFamily:"revert"}},"07 \u0430\u0432\u0433. 2020 12:13")),r.a.createElement("div",{style:{background:"#bfffbf",paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,borderRadius:4}},r.a.createElement("p",{style:{padding:0,margin:0,fontWeight:"bold"}},"\u0410\u043a\u0442\u0438\u0432\u0435\u043d")))}))))},Oe=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Builder"))},we=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.a,null,r.a.createElement(s.d,null,r.a.createElement(f,null,r.a.createElement(s.b,{path:"/chats",component:Ae}),r.a.createElement(s.b,{exact:!0,path:"/chat",component:ye}),r.a.createElement(s.b,{path:"/builder/:id",component:Oe}),r.a.createElement(s.b,{path:"/message",component:ve}),r.a.createElement(s.a,{to:"/chats"})))))},je=(n(152),n(153),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(we,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,t){e.exports="data:image/png;base64,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"}},[[101,1,2]]]);
//# sourceMappingURL=main.5e60163f.chunk.js.map