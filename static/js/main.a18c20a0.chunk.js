(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{59:function(e,t,a){e.exports=a(99)},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),l=a.n(r),i=a(11),c=a(12),s=a(14),d=a(13),g=a(15),u=a(17),m=a(120),p=a(107),f=a(108),h=a(53),E=a(127),y=a(121),O=a(122),v=a(123),C=a(100),T=a(101),b=a(102),S=a(103),D=a(16),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={currentFilter:"All"},a.getCategoryCount=function(e,t){return t.filter(function(t){return t.category===e}).length},a.getCompletedCount=function(e){return e.filter(function(e){return!0===e.completed}).length},a.getActiveCount=function(e){return e.filter(function(e){return!1===e.completed}).length},a.onFilterChange=function(e,t,n){a.setState({currentFilter:n}),a.props.controlFilter(e,t,n)},a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todo.todos,a=this.props.category.categories,n=this.props.tag.tags;return o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement(D.a,{icon:"filter"})," Filters"),o.a.createElement(C.a,{vertical:!0},o.a.createElement(T.a,null,o.a.createElement(b.a,{href:"#",onClick:function(){return e.onFilterChange("general","all","All")},active:"All"===this.state.currentFilter},"All"," ",o.a.createElement("span",{className:"float-right"},o.a.createElement(S.a,{pill:!0},t.length)))),o.a.createElement(T.a,null,o.a.createElement(b.a,{href:"#",onClick:function(){return e.onFilterChange("completed",!1,"Active")},active:"Active"===this.state.currentFilter},"Active"," ",o.a.createElement("span",{className:"float-right"},o.a.createElement(S.a,{pill:!0},this.getActiveCount(t))))),o.a.createElement(T.a,null,o.a.createElement(b.a,{href:"#",onClick:function(){return e.onFilterChange("completed",!0,"Completed")},active:"Completed"===this.state.currentFilter},"Completed"," ",o.a.createElement("span",{className:"float-right"},o.a.createElement(S.a,{pill:!0},this.getCompletedCount(t)))))),o.a.createElement("hr",null),o.a.createElement("p",null,o.a.createElement(D.a,{icon:"sitemap"})," Categories"," ",o.a.createElement("a",{href:"#",className:"float-right",onClick:this.props.toggleCategoryModal},o.a.createElement(D.a,{size:"sm",icon:"plus"}))),o.a.createElement(C.a,{vertical:!0},a.map(function(a){return o.a.createElement(T.a,{key:a._id},o.a.createElement(b.a,{href:"#",onClick:function(){return e.onFilterChange("category",a._id,a.name)},active:e.state.currentFilter===a.name},a.name,o.a.createElement("span",{className:"float-right"},o.a.createElement(S.a,{pill:!0},e.getCategoryCount(a._id,t)))))})),o.a.createElement("hr",null),o.a.createElement("p",null,o.a.createElement(D.a,{icon:"tags"})," Tags"," ",o.a.createElement("a",{href:"#",className:"float-right",onClick:this.props.toggleTagModal},o.a.createElement(D.a,{size:"sm",icon:"plus"}))),n.map(function(t){return o.a.createElement("a",{key:t._id,href:"#",className:"tags-list ".concat(e.state.currentFilter===t.name?"active":""),onClick:function(){return e.onFilterChange("tag",t._id,t.name)}},o.a.createElement(S.a,{pill:!0},t.name))}))}}]),t}(n.Component),j=Object(u.b)(function(e){return{todo:e.todo,category:e.category,tag:e.tag}})(_),N=a(25),A=a.n(N),w=function(e){return function(t){var a=(JSON.parse(localStorage.getItem("todos"))||[]).filter(function(t){return t._id!==e});localStorage.setItem("todos",JSON.stringify(a)),t({type:"DELETE_TODO",payload:e})}},I=function(e){return function(t){var a=(JSON.parse(localStorage.getItem("todos"))||[]).map(function(t){return t._id===e._id?e:t});localStorage.setItem("todos",JSON.stringify(a)),t({type:"UPDATE_TODO",payload:a})}},k=function(){return{type:"TODOS_LOADING"}},M=a(109),G=a(18),x=a(104),J=a(105),F=a(106),L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).onDeleteClick=function(e){a.props.deleteTodo(e)},a.onCompleteClick=function(e,t){e.completed=!t,a.props.updateTodo(e)},a.getCategoryName=function(e,t){var a=t.find(function(t){return t._id===e});if("undefined"!==typeof a)return a.name},a.getTagName=function(e,t){var a=t.find(function(t){return t._id===e});if("undefined"!==typeof a)return a.name},a.getDateState=function(e){var t=new Date;t.setHours(0,0,0,0);var a=new Date(e);return a.setHours(0,0,0,0),a.getTime()>t.getTime()?"text-primary":a.getTime()==t.getTime()?"text-warning":"text-danger"},a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.todoItem,a=this.props.category.categories;return o.a.createElement("div",null,o.a.createElement(G.CSSTransition,{key:e._id,timeout:500,classNames:"fade"},o.a.createElement(x.a,{className:e.completed?"toDo__list-item completed":"toDo__list-item"},o.a.createElement(J.a,null,o.a.createElement("span",{className:"toDo__title"},e.name)," ",o.a.createElement(S.a,{color:"secondary"},this.getCategoryName(e.category,a)),o.a.createElement("div",{className:"float-right toDo__actions"},o.a.createElement("a",{className:"text-primary",href:"#",onClick:this.onCompleteClick.bind(this,e,e.completed)},o.a.createElement(D.a,{icon:"check"})),o.a.createElement("a",{className:"text-primary",href:"#",onClick:this.props.editTodo.bind(this,e)},o.a.createElement(D.a,{icon:"edit"})),o.a.createElement("a",{className:"text-primary",href:"#",onClick:this.onDeleteClick.bind(this,e._id)},o.a.createElement(D.a,{icon:"trash-alt"})))),o.a.createElement(F.a,{className:"truncate"},t.description),o.a.createElement("div",{className:"list-goup-item-footer"},o.a.createElement(p.a,null,o.a.createElement(f.a,{className:"toDo__tags"},o.a.createElement("div",null,0!==e.tags.length?JSON.parse(e.tags).map(function(e){return o.a.createElement(S.a,{key:e.value,color:"secondary"},e.label)}):"")),o.a.createElement(f.a,null,o.a.createElement("div",{className:"text-right"},o.a.createElement("h6",{className:this.getDateState(e.dueDate)},o.a.createElement("strong",null,"Due: ")," ",new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(e.dueDate))),o.a.createElement("h6",null,o.a.createElement("strong",null,"Added: ")," ",new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(e.date))))))))))}}]),t}(n.Component),R=Object(u.b)(function(e){return{category:e.category,tag:e.tag}},{deleteTodo:w,updateTodo:I})(L),U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).onDeleteClick=function(e){a.props.deleteTodo(e)},a.onCompleteClick=function(e,t){e.completed=!t,a.props.updateTodo(e)},a.getCategoryName=function(e,t){var a=t.find(function(t){return t._id===e});if("undefined"!==typeof a)return a.name},a.getTagName=function(e,t){var a=t.find(function(t){return t._id===e});if("undefined"!==typeof a)return a.name},a.getDateState=function(e){var t=new Date;t.setHours(0,0,0,0);var a=new Date(e);return a.setHours(0,0,0,0),a.getTime()>t.getTime()?"text-primary":a.getTime()===t.getTime()?"text-warning":"text-danger"},a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todo.todos.filter(function(t){var a=e.props.filter.type,n=e.props.filter.value;return"general"===a&&"all"===n?t:"tag"!==a?t[a]===n:0!==JSON.parse(t.tags).filter(function(e){return e.value===n}).length?t:void 0});return console.log("render in TodoList"),o.a.createElement(M.a,{className:"todo"},o.a.createElement(G.TransitionGroup,{className:"todo__list"},t?t.map(function(t){return o.a.createElement(R,{key:t._id,todoItem:t,editTodo:e.props.editTodo})}):o.a.createElement("h1",null,"No todos")))}}]),t}(n.Component),W=Object(u.b)(function(e){return{todo:e.todo,category:e.category,tag:e.tag}},{deleteTodo:w,updateTodo:I})(U),q=a(22),B=a(126),H=a(111),P=a(110),X=a(112),Y=a(113),z=a(114),V=a(115),$=a(116),K=a(119),Q=a(128),Z=a(118),ee=a(38),te=a(26),ae=a.n(te),ne=a(117),oe=function(){return{type:"CATEGORIES_LOADING"}},re=a(10),le=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).toggleCategoryCollapse=function(){e.setState({catCollapse:!e.state.catCollapse})},e.onChange=function(t){e.setState(Object(q.a)({},t.target.name,t.target.value))},e.onCategorySubmited=function(t){t.preventDefault(),""===e.state.name?e.setState({nameInvalid:!0}):e.setState({nameInvalid:!1},function(){var t={_id:ae()(),name:e.state.name,description:e.state.description};e.props.addCategory(t),e.props.toggleCategoryModal()})},e.onDeleteCategory=function(t){e.props.deleteCategory(t)},e.state={catCollapse:!1,nameInvalid:!1,name:"",description:""},e}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.category.categories;return o.a.createElement(B.a,{isOpen:this.props.categoryModal,toggle:this.props.toggleCategoryModal},o.a.createElement(P.a,{onSubmit:this.onCategorySubmited},o.a.createElement(H.a,null,"Add Category "),o.a.createElement(X.a,null,o.a.createElement(Y.a,null,o.a.createElement(z.a,{for:"name"},"Name*"),o.a.createElement(V.a,{type:"text",name:"name",id:"name",placeholder:"Add category name",onChange:this.onChange,invalid:this.state.nameInvalid}),o.a.createElement($.a,null,"This field is required")),o.a.createElement(Y.a,null,o.a.createElement(z.a,{for:"description"},"Description"),o.a.createElement(V.a,{type:"textarea",name:"description",id:"description",placeholder:"Add category description",onChange:this.onChange})),o.a.createElement(ne.a,{isOpen:this.state.catCollapse},o.a.createElement("h5",null,"Existing categories"),o.a.createElement("br",null),o.a.createElement(M.a,null,t.map(function(t){return o.a.createElement(x.a,{key:t._id},o.a.createElement("strong",null,t.name)," - ",t.description,o.a.createElement("a",{className:"text-danger float-right",href:"#",onClick:e.onDeleteCategory.bind(e,t._id)},o.a.createElement(D.a,{icon:"trash-alt"})))})))),o.a.createElement(Z.a,null,o.a.createElement(h.a,{color:"primary",onClick:this.toggleCategoryCollapse},"Show/Edit existing categories"),o.a.createElement(h.a,{color:"primary",type:"submit"},"Add Category"),o.a.createElement(h.a,{color:"secondary",onClick:this.props.toggleCategoryModal},"Close"))))}}]),t}(n.Component),ie=Object(u.b)(function(e){return{category:e.category}},{addCategory:function(e){return function(t){var a=JSON.parse(localStorage.getItem("categories"))||[];a.unshift(e),localStorage.setItem("categories",JSON.stringify(a)),t({type:"ADD_CATEGORY",payload:e})}},deleteCategory:function(e){return function(t){var a=(JSON.parse(localStorage.getItem("categories"))||[]).filter(function(t){return t._id!==e});localStorage.setItem("categories",JSON.stringify(a)),t({type:"DELETE_CATEGORY",payload:e})}}})(le),ce=function(){return{type:"TAGS_LOADING"}},se=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={tagCollapse:!1,nameInvalid:!1,name:"",description:""},a.toggleTagCollapse=function(){a.setState({tagCollapse:!a.state.tagCollapse})},a.onChange=function(e){a.setState(Object(q.a)({},e.target.name,e.target.value))},a.onTagSubmited=function(e){e.preventDefault(),""===a.state.name?a.setState({nameInvalid:!0}):a.setState({nameInvalid:!1},function(){var e={_id:ae()(),name:a.state.name,description:a.state.description};a.props.addTag(e),a.props.toggleTagModal()})},a.onDeleteTag=function(e){a.props.deleteTag(e)},a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.tag.tags;return o.a.createElement(B.a,{isOpen:this.props.tagModal,toggle:this.props.toggleTagModal},o.a.createElement(P.a,{onSubmit:this.onTagSubmited},o.a.createElement(H.a,null,"Add Tag "),o.a.createElement(X.a,null,o.a.createElement(Y.a,null,o.a.createElement(z.a,{for:"name"},"Name*"),o.a.createElement(V.a,{type:"text",name:"name",id:"name",placeholder:"Add tag name",onChange:this.onChange,invalid:this.state.nameInvalid}),o.a.createElement($.a,null,"This field is required")),o.a.createElement(Y.a,null,o.a.createElement(z.a,{for:"description"},"Description"),o.a.createElement(V.a,{type:"textarea",name:"description",id:"description",placeholder:"Add tag description",onChange:this.onChange})),o.a.createElement(ne.a,{isOpen:this.state.tagCollapse},o.a.createElement("h5",null,"Existing tags"),o.a.createElement("br",null),o.a.createElement(M.a,null,t.map(function(t){return o.a.createElement(x.a,{key:t._id},o.a.createElement("strong",null,t.name)," - ",t.description,o.a.createElement("a",{className:"text-danger float-right",href:"#",onClick:e.onDeleteTag.bind(e,t._id)},o.a.createElement(D.a,{icon:"trash-alt"})))})))),o.a.createElement(Z.a,null,o.a.createElement(h.a,{color:"primary",onClick:this.toggleTagCollapse},"Show/Edit existing tags"),o.a.createElement(h.a,{color:"primary",type:"submit"},"Add Tag"),o.a.createElement(h.a,{color:"secondary",onClick:this.props.toggleTagModal},"Close"))))}}]),t}(n.Component),de=Object(u.b)(function(e){return{tag:e.tag}},{addTag:function(e){return function(t){var a=JSON.parse(localStorage.getItem("tags"))||[];a.unshift(e),localStorage.setItem("tags",JSON.stringify(a)),t({type:"ADD_TAG",payload:e})}},deleteTag:function(e){return function(t){var a=(JSON.parse(localStorage.getItem("tags"))||[]).filter(function(t){return t._id!==e});localStorage.setItem("tags",JSON.stringify(a)),t({type:"DELETE_TAG",payload:e})}}})(se),ge=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).onInputChange=function(t){e.setState(Object(q.a)({},t.target.name,t.target.value))},e.onCategoryChange=function(t){e.setState({category:t.value})},e.onTagsChange=function(t){e.setState({tags:JSON.stringify(t)})},e.onTodoSubmited=function(t){t.preventDefault(),""===e.state.name?e.setState({nameInvalid:!0}):e.setState({nameInvalid:!1},function(){var t={_id:ae()(),name:e.state.name,description:e.state.description,category:e.state.category,tags:e.state.tags,dueDate:new Date(e.state.dueDate),date:new Date,completed:!1};e.props.addTodo(t),e.props.toggleTodoModal()})},e.state={nameInvalid:!1,name:"",description:"",category:"",tags:[],dueDate:new Date},e}return Object(g.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){if(console.log("componentDidUpdate in TodoModal"),null!=e.todoItem){var a=e.todoItem,n=a.name,o=a.description,r=a.category,l=a.tags,i=a.dueDate;this.setState({name:n,description:o,category:r,tags:l,dueDate:i})}}},{key:"render",value:function(){console.log("render in TodoModal");var e=this.props.category.categories.map(function(e){return{value:e._id,label:e.name}}),t=this.props.tag.tags.map(function(e){return{value:e._id,label:e.name}});return o.a.createElement("div",null,o.a.createElement(B.a,{isOpen:this.props.todoModal,toggle:this.props.toggleTodoModal},o.a.createElement(H.a,{toggle:this.toggleToDo},"Add Todo"),o.a.createElement(P.a,{onSubmit:this.onTodoSubmited},o.a.createElement(X.a,null,o.a.createElement(p.a,null,o.a.createElement(f.a,null,o.a.createElement(Y.a,null,o.a.createElement(z.a,{for:"name"},"Name*"),o.a.createElement(V.a,{type:"text",name:"name",id:"name",placeholder:"Add todo name",value:this.state.name,onChange:this.onInputChange,invalid:this.state.nameInvalid}),o.a.createElement($.a,null,"This field is required")))),o.a.createElement(p.a,null,o.a.createElement(f.a,null,o.a.createElement(Y.a,null,o.a.createElement(z.a,{for:"description"},"Description"),o.a.createElement(V.a,{type:"textarea",name:"description",id:"description",placeholder:"Add todo descrption",value:this.state.description,onChange:this.onInputChange})))),o.a.createElement(p.a,null,o.a.createElement(f.a,null,o.a.createElement(Y.a,null,o.a.createElement(z.a,{for:"category"},"Category"),o.a.createElement(K.a,null,o.a.createElement(ee.a,{value:this.category,name:"category",id:"category",onChange:this.onCategoryChange,options:e}),o.a.createElement(Q.a,{addonType:"append"},o.a.createElement(h.a,{color:"secondary",onClick:this.props.toggleCategoryModal},o.a.createElement(D.a,{icon:"plus"}))))))),o.a.createElement(p.a,null,o.a.createElement(f.a,null,o.a.createElement(Y.a,null,o.a.createElement(z.a,{for:"tags"},"Tags"),o.a.createElement(K.a,null,o.a.createElement(ee.a,{value:this.tags,isMulti:!0,name:"tags",id:"tags",onChange:this.onTagsChange,options:t}),o.a.createElement(Q.a,{addonType:"append"},o.a.createElement(h.a,{color:"secondary",onClick:this.props.toggleTagModal},o.a.createElement(D.a,{icon:"plus"}))))))),o.a.createElement(p.a,null,o.a.createElement(f.a,null,o.a.createElement(Y.a,null,o.a.createElement(z.a,{for:"dueDate"},"Due Date"),o.a.createElement(V.a,{type:"date",name:"dueDate",id:"dueDate",placeholder:"Add todo due date",value:new Date(this.state.dueDate),onChange:this.onInputChange}))))),o.a.createElement(Z.a,null,o.a.createElement(h.a,{color:"primary",onClick:this.addNewTodo},"Add To Do"),o.a.createElement(h.a,{color:"secondary",onClick:this.props.toggleTodoModal},"Cancel")))))}}]),t}(n.Component),ue=Object(u.b)(function(e){return{todo:e.todo,category:e.category,tag:e.tag}},{addTodo:function(e){return function(t){var a=JSON.parse(localStorage.getItem("todos"))||[];a.unshift(e),localStorage.setItem("todos",JSON.stringify(a)),t({type:"ADD_TODO",payload:e})}}})(ge),me=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).toggleTodoModal=function(){e.setState({todoModal:!e.state.todoModal,todoItem:null})},e.toggleCategoryModal=function(){e.setState({categoryModal:!e.state.categoryModal})},e.toggleTagModal=function(){e.setState({tagModal:!e.state.tagModal})},e.editTodo=function(t){e.setState({todoItem:t},function(){e.toggleTodoModal()})},e.controlFilter=function(t,a,n){var o={type:t,value:a,current:n};e.setState({filter:o})},e.toggle=function(){e.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})},e.state={todoModal:!1,categoryModal:!1,tagModal:!1,todoItem:null,filter:{type:"general",value:"all",current:"All"},dropdownOpen:!1},e}return Object(g.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("componentDidMount in todoContainer"),this.props.getTodos(),this.props.getCategories(),this.props.getTags()}},{key:"render",value:function(){return console.log("render in ToDoContainer"),o.a.createElement(m.a,{fluid:!0,className:"custom-fluid"},o.a.createElement(p.a,null,o.a.createElement(f.a,null,o.a.createElement("h2",{className:"font-weight-light"},"Todo List")),o.a.createElement(f.a,{className:"text-right"},o.a.createElement(h.a,{color:"dark",onClick:this.toggleTodoModal},"Add ToDo"))),o.a.createElement("hr",null),o.a.createElement(p.a,null,o.a.createElement(f.a,{sm:"3",className:"filters"},o.a.createElement(j,{filter:this.state.filter,controlFilter:this.controlFilter,toggleCategoryModal:this.toggleCategoryModal,categoryModal:this.state.categoryModal,toggleTagModal:this.toggleTagModal,tagModal:this.state.tagModal})),o.a.createElement(f.a,{sm:"9"},o.a.createElement(p.a,null,o.a.createElement(f.a,null,o.a.createElement("p",null,"Showing: ",o.a.createElement("strong",null,this.state.filter.current))),o.a.createElement(f.a,{className:"text-right"},o.a.createElement(E.a,{size:"sm",isOpen:this.state.dropdownOpen,toggle:this.toggle},o.a.createElement(y.a,{caret:!0,className:"custom-filter"},"Newest"),o.a.createElement(O.a,null,o.a.createElement(v.a,null,"Newest"),o.a.createElement(v.a,null,"Oldest"),o.a.createElement(v.a,null,"Due today"),o.a.createElement(v.a,null,"Due tomorrow"),o.a.createElement(v.a,null,"Due this week"),o.a.createElement(v.a,null,"Ending Soon"))))),o.a.createElement(W,{filter:this.state.filter,editTodo:this.editTodo}))),o.a.createElement(ue,{todoItem:this.state.todoItem,todoModal:this.state.todoModal,toggleTodoModal:this.toggleTodoModal,toggleCategoryModal:this.toggleCategoryModal,toggleTagModal:this.toggleTagModal}),o.a.createElement(ie,{categoryModal:this.state.categoryModal,toggleCategoryModal:this.toggleCategoryModal}),o.a.createElement(de,{tagModal:this.state.tagModal,toggleTagModal:this.toggleTagModal}))}}]),t}(n.Component),pe=Object(u.b)(function(e){return{todo:e.todo,category:e.category,tag:e.tag,filter:e.filter}},{getTodos:function(){return function(e){e(k());var t=JSON.parse(localStorage.getItem("todos"))||[];t.length?e({type:"GET_TODOS",payload:t}):A.a.get("data/todos.json").then(function(t){return e({type:"GET_TODOS",payload:t.data})})}},getCategories:function(){return function(e){e(oe());var t=JSON.parse(localStorage.getItem("categories"))||[];t.length?e({type:"GET_CATEGORIES",payload:t}):A.a.get("data/categories.json").then(function(t){return e({type:"GET_CATEGORIES",payload:t.data})})}},getTags:function(){return function(e){e(ce());var t=JSON.parse(localStorage.getItem("tags"))||[];t.length?e({type:"GET_TAGS",payload:t}):A.a.get("data/tags.json").then(function(t){return e({type:"GET_TAGS",payload:t.data})})}}})(me),fe=a(30),he=a(23),Ee=a(57),ye=a(28),Oe=a(7),ve={todos:[],loading:!1},Ce={categories:[],loading:!1},Te={tags:[],loading:!1},be=Object(he.c)({todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TODOS":return localStorage.setItem("todos",JSON.stringify(t.payload)),Object(Oe.a)({},e,{todos:t.payload,loading:!1});case"ADD_TODO":return Object(Oe.a)({},e,{todos:[t.payload].concat(Object(ye.a)(e.todos))});case"DELETE_TODO":return Object(Oe.a)({},e,{todos:e.todos.filter(function(e){return e._id!==t.payload})});case"UPDATE_TODO":return Object(Oe.a)({},e,{todos:e.todos.map(function(e,a){return a===t.index?e:Object(Oe.a)({},e,t.item)})});case"FILTER_TODO":return Object(Oe.a)({},e,{todos:t.payload});case"TODOS_LOADING":return Object(Oe.a)({},e,{loading:!0});default:return e}},category:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CATEGORIES":return localStorage.setItem("categories",JSON.stringify(t.payload)),Object(Oe.a)({},e,{categories:t.payload,loading:!1});case"ADD_CATEGORY":return Object(Oe.a)({},e,{categories:[t.payload].concat(Object(ye.a)(e.categories))});case"DELETE_CATEGORY":return Object(Oe.a)({},e,{categories:e.categories.filter(function(e){return e._id!==t.payload})});case"CATEGORIES_LOADING":return Object(Oe.a)({},e,{loading:!0});default:return e}},tag:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TAGS":return localStorage.setItem("tags",JSON.stringify(t.payload)),Object(Oe.a)({},e,{tags:t.payload,loading:!1});case"ADD_TAG":return Object(Oe.a)({},e,{tags:[t.payload].concat(Object(ye.a)(e.tags))});case"DELETE_TAG":return Object(Oe.a)({},e,{tags:e.tags.filter(function(e){return e._id!==t.payload})});case"TAGS_LOADING":return Object(Oe.a)({},e,{loading:!0});default:return e}}}),Se=[Ee.a],De=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__();De=function(e){return e};var _e=Object(he.e)(be,{},Object(he.d)(he.a.apply(void 0,Se),De)),je=a(124),Ne=a(125),Ae=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).toggle=function(){e.setState({isOpen:!e.state.isOpen})},e.state={isOpen:!1},e}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(je.a,{color:"secondary",dark:!0,expand:"sm"},o.a.createElement(m.a,{fluid:!0},o.a.createElement(Ne.a,{href:"/"},o.a.createElement("span",{className:"text-primary"},"<"),"/>"))))}}]),t}(n.Component),we=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log("render in App"),o.a.createElement("div",{className:"App"},o.a.createElement(u.a,{store:_e},o.a.createElement(Ae,null),o.a.createElement(pe,null)))}}]),t}(n.Component);fe.b.add(re.h,re.e,re.s,re.m,re.d,re.n,re.b,re.r,re.k,re.g,re.a,re.f,re.c,re.p,re.j,re.t,re.l,re.q,re.i,re.o);var Ie=we,ke=(a(98),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function Me(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(Ie,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/advanced-react-todo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/advanced-react-todo","/service-worker.js");ke?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Me(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Me(t,e)})}}()}},[[59,1,2]]]);
//# sourceMappingURL=main.a18c20a0.chunk.js.map