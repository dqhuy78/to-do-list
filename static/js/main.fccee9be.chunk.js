(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a(96)},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(12),d=a.n(s),c=a(34),o=a(35),i=a(42),r=a(36),m=a(43),u=a(18),h=a.n(u),k=(a(51),a(37)),g=a.n(k),C=a(2),E=a(5),f=(a(54),a(55),function(e){var t=e.column,a=e.handleAddNewTask,n=e.children;return l.a.createElement("div",{className:"Column"},l.a.createElement("div",{className:"Column__header"},l.a.createElement("h2",{className:"Column__title"},l.a.createElement("span",{className:"Column__item-count"},t.get("tasks").size),l.a.createElement("span",{className:"Column__text"},t.get("title"))),l.a.createElement("p",{className:"Column__btn",onClick:a(t.get("id"))},l.a.createElement("i",{className:"fas fa-plus"})," New task")),l.a.createElement("div",{className:"Column__content"},n))}),N=(a(56),function(e){return l.a.createElement("div",{className:"AddNewModal"},l.a.createElement("div",{className:"AddNewModal__backdrop"}),l.a.createElement("div",{className:"AddNewModal__content"},l.a.createElement("h4",{className:"AddNewModal__title"},"CREATE NEW TASK"),l.a.createElement("div",{className:"AddNewModal__task-status"},l.a.createElement("span",{className:"AddNewModal__radio"},l.a.createElement("input",{type:"radio",checked:"td"===e.selectedColumn,onChange:e.handleChangeSelectedColumn("td")}),l.a.createElement("span",null,"TODO")),l.a.createElement("span",{className:"AddNewModal__radio"},l.a.createElement("input",{type:"radio",checked:"ip"===e.selectedColumn,onChange:e.handleChangeSelectedColumn("ip")}),l.a.createElement("span",null,"IN PROGRESS")),l.a.createElement("span",{className:"AddNewModal__radio"},l.a.createElement("input",{type:"radio",checked:"de"===e.selectedColumn,onChange:e.handleChangeSelectedColumn("de")}),l.a.createElement("span",null,"DONE"))),l.a.createElement("div",{className:"AddNewModal__task"},l.a.createElement("input",{className:"AddNewModal__input",type:"text",placeholder:"Enter your task...",value:e.taskContent,onChange:e.handleChangeTaskContent})),l.a.createElement("div",{className:"AddNewModal__action"},l.a.createElement("button",{className:"AddNewModal__btn AddNewModal__btn--confirm",onClick:e.handleAddNewTask},"Save"),l.a.createElement("button",{className:"AddNewModal__btn AddNewModal__btn--cancel",onClick:e.handleToggleModal},"Cancel"))))}),p=(a(57),function(e){return l.a.createElement(E.b,{index:e.index,draggableId:e.task.get("id"),isDragDisabled:e.isEditing},function(t){return l.a.createElement("div",Object.assign({className:"Task"},t.draggableProps,t.dragHandleProps,{ref:t.innerRef}),e.isEditing?l.a.createElement("div",{className:"Task__editing"},l.a.createElement("input",{type:"text",className:"Task__editor",defaultValue:e.task.get("content"),onChange:e.handleChangeTaskContent}),l.a.createElement("div",{className:"Task__editing-action"},l.a.createElement("i",{className:"fas fa-check",onClick:e.handleEdit}),l.a.createElement("i",{className:"fas fa-ban",onClick:e.handleCancelEdit})),l.a.createElement("div",{className:"Task__editing-bgr",onClick:e.handleCancelEdit})):l.a.createElement(n.Fragment,null,e.task.get("time")&&l.a.createElement("div",{className:"Task__time"},l.a.createElement("i",{className:"far fa-calendar-alt"})," ",e.task.get("time")),l.a.createElement("div",{className:"Task__main"},l.a.createElement("div",{className:"Task__content"},e.task.get("content")),l.a.createElement("div",{className:"Task__action"},l.a.createElement("div",{className:"Task__btn",onClick:e.handleChooseEditTask},l.a.createElement("i",{className:"far fa-edit"})),l.a.createElement("div",{className:"Task__btn",onClick:e.handleDeleteTask},l.a.createElement("i",{className:"far fa-trash-alt"}))))))})}),_=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(l)))).state={displayModal:!1,selectedColumn:"",taskContent:"",editedTaskIndex:null,editedTaskId:null,columns:Object(C.a)([{id:"td",title:"TO DO",tasks:[]},{id:"ip",title:"IN PROGRESS",tasks:[]},{id:"de",title:"DONE",tasks:[]}])},a.handleToggleModal=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){a.setState(function(t){return{displayModal:!t.displayModal,selectedColumn:e}})}},a.handleChangeTaskContent=function(e){return a.setState({taskContent:e.target.value})},a.handleChangeSelectedColumn=function(e){return function(){return a.setState({selectedColumn:e})}},a.handleAddNewTask=function(){var e=a.state.taskContent;if(""===e.trim())h.a.warning("Please enter your task","Notice",{timeOut:2e3});else{var t=a.state,n=t.selectedColumn,l=t.columns,s=Object(C.a)({id:g()(),content:e,time:(new Date).toLocaleString()}),d=l.findIndex(function(e){return e.get("id")===n}),c=l.updateIn([d,"tasks"],function(e){return e.push(s)});a.setState({displayModal:!1,selectedColumn:"",taskContent:"",columns:Object(C.a)(c)},function(){localStorage.setItem("columns",JSON.stringify(c.toJS()))})}},a.handleDeleteTask=function(e,t){return function(){if(window.confirm("Are your sure to delete this task?")){var n=a.state.columns.updateIn([e,"tasks"],function(e){return e.remove(t)});a.setState({columns:Object(C.a)(n)},function(){localStorage.setItem("columns",JSON.stringify(n.toJS())),h.a.success("Delete task success","Notice",{timeOut:2e3})})}}},a.handleChooseEditTask=function(e,t){return function(){var n=a.state.columns.getIn([e,"id"]),l=a.state.columns.getIn([e,"tasks",t]);a.setState({selectedColumn:n,taskContent:l.get("content"),editedTaskIndex:t,editedTaskId:l.get("id")})}},a.handleEdit=function(){var e=a.state,t=e.columns,n=e.selectedColumn,l=e.taskContent,s=e.editedTaskIndex,d=t.findIndex(function(e){return e.get("id")===n}),c=t.updateIn([d,"tasks"],function(e){return e.setIn([s,"content"],l)});a.setState({selectedColumn:"",taskContent:"",editedTaskId:null,editedTaskIndex:null,columns:Object(C.a)(c)},function(){localStorage.setItem("columns",JSON.stringify(c.toJS()))})},a.handleCancelEdit=function(){a.setState({selectedColumn:"",taskContent:"",editedTaskId:null,editedTaskIndex:null})},a.handleSaveDrag=function(e){var t=e.source,n=e.destination;if("DROP"===e.reason&&n){var l=a.state.columns,s=l.findIndex(function(e){return e.get("id")===t.droppableId}),d=l.getIn([s,"tasks",t.index]),c=l.updateIn([s,"tasks"],function(e){return e.remove(t.index)}),o=l.findIndex(function(e){return e.get("id")===n.droppableId});c=c.updateIn([o,"tasks"],function(e){return e.insert(n.index,d)}),a.setState({columns:Object(C.a)(c)},function(){localStorage.setItem("columns",JSON.stringify(c.toJS()))})}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("columns");e&&this.setState({columns:Object(C.a)(JSON.parse(e))})}},{key:"render",value:function(){var e=this,t=this.state,a=t.columns,n=t.displayModal,s=t.selectedColumn,d=t.taskContent,c=t.editedTaskId;return l.a.createElement("div",{className:"App"},l.a.createElement("h1",{className:"App__title"},"TO DO LIST"),l.a.createElement(E.a,{onDragEnd:this.handleSaveDrag},l.a.createElement("div",{className:"App__content"},a.map(function(t,a){return l.a.createElement(f,{key:t.get("id"),column:t,handleAddNewTask:e.handleToggleModal},l.a.createElement(E.c,{droppableId:t.get("id")},function(n){return l.a.createElement("div",Object.assign({ref:n.innerRef},n.droppableProps,{style:{minHeight:"300px"}}),t.get("tasks").map(function(t,n){return l.a.createElement(p,{key:t.get("id"),index:n,isEditing:t.get("id")===c,handleChangeTaskContent:e.handleChangeTaskContent,task:t,handleEdit:e.handleEdit,handleCancelEdit:e.handleCancelEdit,handleChooseEditTask:e.handleChooseEditTask(a,n),handleDeleteTask:e.handleDeleteTask(a,n)})}),n.placeholder)}))}))),n&&l.a.createElement(N,{selectedColumn:s,taskContent:d,handleChangeTaskContent:this.handleChangeTaskContent,handleChangeSelectedColumn:this.handleChangeSelectedColumn,handleAddNewTask:this.handleAddNewTask,handleToggleModal:this.handleToggleModal()}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(l.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.fccee9be.chunk.js.map