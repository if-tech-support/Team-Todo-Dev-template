(this.webpackJsonptodo_team=this.webpackJsonptodo_team||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(14),s=c.n(i),l=c(7),r=(c(24),c(25),c(26),c(0)),j=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("header",{children:Object(r.jsx)("h1",{className:"header-title",children:"Todo\u30a2\u30d7\u30ea"})})})},o=c(3),d=c(6),b=c(19),u=Object(b.recoilPersist)().persistAtom,O=(Object(d.atom)({key:"inputState",default:"test",effects_UNSTABLE:[u]}),Object(d.atom)({key:"todoState",default:[{id:1,title:"Github\u4e0a\u306b\u9759\u7684\u30b5\u30a4\u30c8\u3092\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u3059\u308b",detail:"Github\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3002\u9759\u7684\u30b5\u30a4\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3002\u4f5c\u3063\u305f\u30b5\u30a4\u30c8\u3092Github\u306b\u30a2\u30c3\u30d7\u3059\u308b\u3002",status:"\u672a\u7740\u624b",priority:"\u4f4e",createAt:"2020-11-8 18:55:07",updateAt:"2020-11-8 18:55:07"},{id:2,title:"React\u3067Todo\u30b5\u30a4\u30c8\u3092\u4f5c\u6210\u3059\u308b",detail:"\u5fc5\u8981\u306a\u753b\u9762\u306e\u6d17\u3044\u51fa\u3057\u3068\u8a2d\u8a08\u3002\u5f79\u5272\u5206\u62c5\u3092\u3069\u3046\u3059\u308b\u304b\u691c\u8a0e\u3059\u308b",status:"\u5b8c\u4e86",priority:"\u4e2d",createAt:"2020-11-8 18:55:07",updateAt:"2020-11-8 18:55:07"},{id:3,title:"Todo\u30b5\u30a4\u30c8\u3067\u753b\u9762\u9077\u79fb\u3092\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b",detail:"react-router-dom\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u30d5\u30a3\u30fc\u30b8\u30d3\u30ea\u30c6\u30a3\u30fc\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b",status:"\u4f5c\u696d\u4e2d",priority:"\u9ad8",createAt:"2020-11-8 18:55:07",updateAt:"2020-11-8 18:55:07"}],effects_UNSTABLE:[u]})),h=(c(30),c(31),function(e){var t=e.breadcrumbElements;return Object(r.jsx)("nav",{className:"breadcrumb",children:Object(r.jsx)("ul",{className:"breadcrumb-elements",children:t.map((function(e){var t=e.id,c=e.title;return Object(r.jsx)("li",{className:"breadcrumb-element",children:c},t)}))})})}),x=c(8),m=c(2),p=c(4),f=function(){var e=Object(d.useRecoilState)(O),t=Object(p.a)(e,2),c=t[0],n=t[1],a=function(e,t,c){return[].concat(Object(x.a)(e.slice(0,t)),[c],Object(x.a)(e.slice(t+1)))};return{updateTodoStatus:function(e){var t=c.findIndex((function(t){return t.id===e}));n((function(){switch(c[t].status){case"\u672a\u7740\u624b":return a(c,t,Object(m.a)(Object(m.a)({},c[t]),{},{status:"\u4f5c\u696d\u4e2d"}));case"\u4f5c\u696d\u4e2d":return a(c,t,Object(m.a)(Object(m.a)({},c[t]),{},{status:"\u5b8c\u4e86"}));case"\u5b8c\u4e86":return a(c,t,Object(m.a)(Object(m.a)({},c[t]),{},{status:"\u672a\u7740\u624b"}));default:return c}}))},updateTodoPriority:function(e){var t=c.findIndex((function(t){return t.id===e}));n((function(){switch(c[t].priority){case"\u4f4e":return a(c,t,Object(m.a)(Object(m.a)({},c[t]),{},{priority:"\u4e2d"}));case"\u4e2d":return a(c,t,Object(m.a)(Object(m.a)({},c[t]),{},{priority:"\u9ad8"}));case"\u9ad8":return a(c,t,Object(m.a)(Object(m.a)({},c[t]),{},{priority:"\u4f4e"}));default:return c}}))}}},v=function(e){var t=e.todo,c=f().updateTodoStatus,n={"\u672a\u7740\u624b":"table-content-status table-content-status-pending","\u4f5c\u696d\u4e2d":"table-content-status table-content-status-working","\u5b8c\u4e86":"table-content-status table-content-status-done"};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("button",{className:n[t.status],onClick:function(){c(t.id)},children:t.status})})},N=function(e){var t=e.todo,c=f().updateTodoPriority,n={"\u9ad8":"table-content-priority table-content-priority-high","\u4e2d":"table-content-priority table-content-priority-normal","\u4f4e":"table-content-priority table-content-priority-low"};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("button",{className:n[t.priority],onClick:function(){c(t.id)},children:t.priority})})},_=[{id:1,title:"\u30db\u30fc\u30e0"}],g=function(){var e=Object(d.useRecoilValue)(O),t=Object(o.f)();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(h,{breadcrumbElements:_}),Object(r.jsxs)("main",{children:[Object(r.jsxs)("div",{className:"task-info-area",children:[Object(r.jsxs)("p",{className:"task-info",children:["\u9032\u884c\u4e2d\u306e\u30bf\u30b9\u30af\u306f",0!==e.filter((function(e){return"\u5b8c\u4e86"!==e.status})).length?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("span",{children:[e.filter((function(e){return"\u5b8c\u4e86"!==e.status})).length,"\u500b"]}),"\u3042\u308a\u307e\u3059"]}):"\u3042\u308a\u307e\u305b\u3093"]}),Object(r.jsx)(l.b,{to:"create",children:Object(r.jsxs)("button",{className:"btn-add",children:[Object(r.jsx)("span",{children:"+"}),"\u30bf\u30b9\u30af\u3092\u8ffd\u52a0"]})})]}),Object(r.jsxs)("div",{className:"search-area",children:[Object(r.jsxs)("div",{className:"search-keyword-area",children:[Object(r.jsx)("label",{className:"label-search-area",htmlFor:"search-keyword-box",children:"\u30ad\u30fc\u30ef\u30fc\u30c9"}),Object(r.jsx)("input",{id:"search-keyword-box",className:"search-box",type:"text",placeholder:"\u30ad\u30fc\u30ef\u30fc\u30c9\u3092\u5165\u529b",value:"",onChange:function(e){}})]}),Object(r.jsxs)("div",{className:"search-priority-area",children:[Object(r.jsx)("label",{className:"label-search-area",children:"\u30b9\u30c6\u30fc\u30bf\u30b9"}),Object(r.jsxs)("select",{className:"search-box",children:[Object(r.jsx)("option",{defaultValue:"all",children:"\u3059\u3079\u3066"}),Object(r.jsx)("option",{value:"complete",children:"\u5b8c\u4e86"}),Object(r.jsx)("option",{value:"working",children:"\u4f5c\u696d\u4e2d"}),Object(r.jsx)("option",{value:"pending",children:"\u672a\u7740\u624b"})]})]}),Object(r.jsxs)("div",{className:"search-status-area",children:[Object(r.jsx)("label",{className:"label-search-area",children:"\u512a\u5148\u5ea6"}),Object(r.jsxs)("select",{className:"search-box",children:[Object(r.jsx)("option",{defaultValue:"all",children:"\u3059\u3079\u3066"}),Object(r.jsx)("option",{value:"high",children:"\u9ad8"}),Object(r.jsx)("option",{value:"normal",children:"\u4e2d"}),Object(r.jsx)("option",{value:"low",children:"\u4f4e"})]})]})]}),Object(r.jsxs)("div",{className:"bulk-exection-area",children:[Object(r.jsx)("label",{className:"label-bulk-exection",children:"\u307e\u3068\u3081\u3066\u64cd\u4f5c\uff1a"}),Object(r.jsxs)("select",{className:"bulk-exection-selection",children:[Object(r.jsx)("option",{defaultValue:"",children:"------------"}),Object(r.jsx)("option",{value:"complete",children:"\u5b8c\u4e86"}),Object(r.jsx)("option",{value:"delete",children:"\u524a\u9664"})]}),Object(r.jsx)("button",{className:"btn-bulk-exection",children:"\u5b9f\u884c"})]}),Object(r.jsxs)("table",{className:"todo-table",children:[Object(r.jsx)("thead",{className:"todo-table-header",children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{colSpan:"3",className:"todo-table-header-title",children:"\u30bf\u30b9\u30af\u540d"}),Object(r.jsx)("th",{children:"\u30b9\u30c6\u30fc\u30bf\u30b9"}),Object(r.jsx)("th",{children:"\u512a\u5148\u5ea6"}),Object(r.jsx)("th",{children:"\u4f5c\u6210\u65e5\u6642"}),Object(r.jsx)("th",{children:"\u66f4\u65b0\u65e5\u6642"})]})}),Object(r.jsx)("tbody",{children:e.map((function(e){return Object(r.jsxs)("tr",{className:"todo-table-body-row",children:[Object(r.jsx)("td",{children:Object(r.jsx)("input",{type:"checkbox"})}),Object(r.jsx)("td",{className:"table-content-title",children:Object(r.jsx)(l.b,{to:"/detail",state:{todo:e},children:e.title})}),Object(r.jsx)("td",{children:Object(r.jsx)("button",{className:"btn-edit",onClick:function(){t("edit/".concat(e.id),{state:{targetTodo:e}})},children:"\u270e"})}),Object(r.jsx)("td",{children:Object(r.jsx)(v,{todo:e})}),Object(r.jsx)("td",{children:Object(r.jsx)(N,{todo:e})}),Object(r.jsx)("td",{children:e.createAt}),Object(r.jsx)("td",{children:e.updateAt})]},e.id)}))})]})]})]})},y=(c(32),function(){var e=function(e){return("00"+e).slice(-2)},t=new Date,c=t.getFullYear(),n=e(t.getMonth()+1),a=e(t.getDate()),i=e(t.getHours()),s=e(t.getMinutes()),l=e(t.getSeconds());return"".concat(c,"-").concat(n,"-").concat(a," ").concat(i,":").concat(s,":").concat(l)}),k=[{id:1,title:"\u30db\u30fc\u30e0"},{id:2,title:"\u8ffd\u52a0"}],F=function(){var e=Object(d.useRecoilState)(O),t=Object(p.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)({title:"",detail:"",status:"\u672a\u7740\u624b",priority:""}),s=Object(p.a)(i,2),j=s[0],o=s[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(h,{breadcrumbElements:k}),Object(r.jsx)("div",{className:"create-container",children:Object(r.jsx)("div",{className:"contents-container",children:Object(r.jsxs)("div",{className:"todo-create",children:[Object(r.jsxs)("div",{className:"task-container input-container content-container",children:[Object(r.jsx)("label",{htmlFor:"title",className:"task-label input-area-label label",children:"\u30bf\u30b9\u30af\u540d :"}),Object(r.jsx)("input",{id:"title",className:"title-input input",type:"text",rows:"1",onChange:function(e){return o(Object(m.a)(Object(m.a)({},j),{},{title:e.target.value}))}})]}),Object(r.jsxs)("div",{className:"text-container input-container content-container",children:[Object(r.jsx)("label",{htmlFor:"text",className:"text-label input-area-label label",children:"\u5185\u5bb9 :"}),Object(r.jsx)("textarea",{id:"text",className:"text-input input",type:"text",rows:"20",onChange:function(e){return o(Object(m.a)(Object(m.a)({},j),{},{detail:e.target.value}))}})]}),Object(r.jsxs)("div",{className:"priority-container select-container input-container content-container",children:[Object(r.jsx)("label",{className:"priority-label input-area-label label",children:"\u512a\u5148\u5ea6 :"}),Object(r.jsxs)("select",{name:"priority",className:"select-priority select-box",onChange:function(e){o(Object(m.a)(Object(m.a)({},j),{},{priority:e.target.value}))},children:[Object(r.jsx)("option",{className:"select-default option",children:"--------------------"}),Object(r.jsx)("option",{className:"high option",value:"\u9ad8",children:"\u9ad8"}),Object(r.jsx)("option",{className:"middle option",value:"\u4e2d",children:"\u4e2d"}),Object(r.jsx)("option",{className:"low option",value:"\u4f4e",children:"\u4f4e"})]})]}),Object(r.jsxs)("div",{className:"btn-container content-container",children:[Object(r.jsx)(l.b,{to:"/",children:Object(r.jsx)("button",{className:"back-button button",children:"\u623b\u308b"})}),Object(r.jsx)(l.b,{to:"/",children:Object(r.jsx)("button",{className:"add-button button",onClick:function(){var e=y(),t=function(e){return e.map((function(e){return e.id})).reduce((function(e,t){return Math.max(e,t)}),0)+1}(c);a([].concat(Object(x.a)(c),[Object(m.a)(Object(m.a)({},j),{},{id:t,createAt:e,updateAt:e})]))},children:"\u8ffd\u52a0"})})]})]})})})]})},w=(c(33),function(){var e=Object(d.useRecoilState)(O),t=Object(p.a)(e,2),c=t[0],n=t[1];return{updateTodo:function(e,t){var a=c.findIndex((function(t){return t.id===Number(e)})),i=Object(x.a)(c);i[a]=Object(m.a)(Object(m.a)({},t),{},{updateAt:y()}),n(i)}}}),C=function(){var e=Object(d.useRecoilState)(O),t=Object(p.a)(e,2),c=t[0],n=t[1];return{deleteTodo:function(e){var t=c.findIndex((function(t){return t.id===Number(e)})),a=Object(x.a)(c);a.splice(t,1),n(a)}}},T=[{id:1,title:"\u30db\u30fc\u30e0"},{id:2,title:"\u7de8\u96c6"}],S=function(){var e=Object(o.f)(),t=Object(o.e)().state.targetTodo,c=Object(n.useState)(t),a=Object(p.a)(c,2),i=a[0],s=a[1],l=w().updateTodo,j=C().deleteTodo;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(h,{breadcrumbElements:T}),Object(r.jsxs)("div",{className:"edit__input-form",children:[Object(r.jsxs)("dl",{children:[Object(r.jsxs)("div",{className:"edit__input-list",children:[Object(r.jsx)("dt",{children:Object(r.jsx)("label",{htmlFor:"task-title",className:"edit__label",children:"\u30bf\u30b9\u30af\u540d\uff1a"})}),Object(r.jsx)("dd",{children:Object(r.jsx)("input",{id:"task-title",className:"edit__input edit__input-title",type:"text",value:i.title,onChange:function(e){return s(Object(m.a)(Object(m.a)({},i),{},{title:e.target.value}))}})})]}),Object(r.jsxs)("div",{className:"edit__input-list",children:[Object(r.jsx)("dt",{children:Object(r.jsx)("label",{htmlFor:"task-detail",className:"edit__label edit__label-detail",children:"\u5185\u5bb9\uff1a"})}),Object(r.jsx)("dd",{children:Object(r.jsx)("textarea",{id:"task-detail",className:"edit__input edit__input-detail",rows:"10",value:i.detail,onChange:function(e){return s(Object(m.a)(Object(m.a)({},i),{},{detail:e.target.value}))}})})]}),Object(r.jsxs)("div",{className:"edit__input-list",children:[Object(r.jsx)("dt",{children:Object(r.jsx)("label",{className:"edit__label",children:"\u30b9\u30c6\u30fc\u30bf\u30b9\uff1a"})}),Object(r.jsx)("dd",{children:Object(r.jsxs)("select",{className:"edit__input edit__select-status",value:i.status,onChange:function(e){return s(Object(m.a)(Object(m.a)({},i),{},{status:e.target.value}))},children:[Object(r.jsx)("option",{value:"\u5b8c\u4e86",children:"\u5b8c\u4e86"}),Object(r.jsx)("option",{value:"\u4f5c\u696d\u4e2d",children:"\u4f5c\u696d\u4e2d"}),Object(r.jsx)("option",{value:"\u672a\u7740\u624b",children:"\u672a\u7740\u624b"})]})})]}),Object(r.jsxs)("div",{className:"edit__input-list",children:[Object(r.jsx)("dt",{children:Object(r.jsx)("label",{className:"edit__label",children:"\u512a\u5148\u5ea6\uff1a"})}),Object(r.jsx)("dd",{children:Object(r.jsxs)("select",{className:"edit__input edit__select-priority",value:i.priority,onChange:function(e){return s(Object(m.a)(Object(m.a)({},i),{},{priority:e.target.value}))},children:[Object(r.jsx)("option",{value:"\u9ad8",children:"\u9ad8"}),Object(r.jsx)("option",{value:"\u4e2d",children:"\u4e2d"}),Object(r.jsx)("option",{value:"\u4f4e",children:"\u4f4e"})]})})]})]}),Object(r.jsxs)("div",{className:"edit__btn-area",children:[Object(r.jsx)("button",{className:"edit__btn edit__btn-delete",onClick:function(){j(i.id),e("/")},children:"\u524a\u9664"}),Object(r.jsx)("button",{className:"edit__btn edit__btn-return",onClick:function(){e("/")},children:"\u623b\u308b"}),Object(r.jsx)("button",{className:"edit__btn edit__btn-save",onClick:function(){l(i.id,i),e("/")},children:"\u4fdd\u5b58"})]})]})]})},A=(c(34),function(e){var t=e.todo;return[{name:"\u30bf\u30b9\u30af\u540d",description:t.title},{name:"\u5185\u5bb9",description:t.detail},{name:"\u30b9\u30c6\u30fc\u30bf\u30b9",description:t.status},{name:"\u512a\u5148\u5ea6",description:t.priority}].map((function(e){var t=e.name,c=e.description;return Object(r.jsxs)("div",{className:"content-container",children:[Object(r.jsx)("p",{className:"field-name",children:t}),Object(r.jsx)("p",{className:"field-description",children:c})]})}))}),E=[{id:1,title:"\u30db\u30fc\u30e0"},{id:2,title:"\u8a73\u7d30"}],R=function(){var e=Object(o.e)().state.todo;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(h,{breadcrumbElements:E}),Object(r.jsxs)("div",{className:"detail-container",children:[Object(r.jsx)(A,{todo:e}),Object(r.jsx)("div",{className:"btn-container content-container",children:Object(r.jsx)(l.b,{to:"/",children:Object(r.jsx)("button",{className:"back-button button",children:"\u623b\u308b"})})})]})]})},I=function(){return Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{exact:!0,path:"/",element:Object(r.jsx)(g,{})}),Object(r.jsx)(o.a,{path:"create",element:Object(r.jsx)(F,{})}),Object(r.jsx)(o.a,{path:"edit/:todoId",element:Object(r.jsx)(S,{})}),Object(r.jsx)(o.a,{path:"detail",element:Object(r.jsx)(R,{})})]})},P=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{}),Object(r.jsx)(I,{}),Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/",children:"listview"})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"create",children:"list to create"})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"edit",children:"list to edit"})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"detail",children:"list to detail"})})]})})]})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(d.RecoilRoot,{children:Object(r.jsx)(l.a,{children:Object(r.jsx)(P,{})})})}),document.getElementById("root")),B()}},[[35,1,2]]]);
//# sourceMappingURL=main.d53bebb1.chunk.js.map