(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports={commentTitle:"Comments_commentTitle__170Jm",commentsContainer:"Comments_commentsContainer__19dCd",commentIcon:"Comments_commentIcon__2L1hw",commentUserIcon:"Comments_commentUserIcon__2iu5V",commentFrame:"Comments_commentFrame__1Fu2T",commentBox:"Comments_commentBox__37K4B",commentBoxInput:"Comments_commentBoxInput__1pVgG",commentInfo:"Comments_commentInfo__2hx87",commentListItem:"Comments_commentListItem__Qglm1",commentAuthor:"Comments_commentAuthor__3x7VN",commentAuthorIcon:"Comments_commentAuthorIcon__SILw2",commentDate:"Comments_commentDate__e2ib8"}},120:function(e,t,n){e.exports={Board:"Board_Board__2dZB0"}},121:function(e,t,n){e.exports={BoardTitle:"BoardTitle_BoardTitle__jGYQa"}},122:function(e,t,n){e.exports={Topbar:"Topbar_Topbar__22Hhp",DesktopOnly:"Topbar_DesktopOnly__2AfU4"}},124:function(e,t,n){e.exports={Lists:"Lists_Lists__2XWHD"}},13:function(e,t,n){e.exports={commentFrame:"InputComment_commentFrame__3p9gA",commentBox:"InputComment_commentBox__30yLY",commentBoxInput:"InputComment_commentBoxInput__UB0NJ",comments:"InputComment_comments__2N9jt",commentsContainer:"InputComment_commentsContainer__1CC_A",commentContainer:"InputComment_commentContainer__3I_eC",comment:"InputComment_comment__nl1NT",buttons:"InputComment_buttons__eHfnK",closeButton:"InputComment_closeButton__2I-Kp",confirmationButtons:"InputComment_confirmationButtons__38KYV",FormAcceptButton:"InputComment_FormAcceptButton__AY_3s"}},130:function(e,t,n){e.exports={Modal:"Modal_Modal__2DBTJ"}},131:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__1E053"}},132:function(e,t,n){e.exports=n(340)},137:function(e,t,n){},138:function(e,t,n){},14:function(e,t,n){e.exports={CardContainer:"Card_CardContainer__3iUTY",Card:"Card_Card__2a_e7",CardDragging:"Card_CardDragging__wSZPd",NoCardsPlaceholderDragging:"Card_NoCardsPlaceholderDragging__31-PY",NoCardsPlaceholder:"Card_NoCardsPlaceholder__3v5hn",FormEdit:"Card_FormEdit__3EFHm",FormHidden:"Card_FormHidden__ruzNh",Edit:"Card_Edit__T5s5d"}},17:function(e,t,n){e.exports={windowHeader:"CardDetail_windowHeader__3lrxU",windowHeaderIcon:"CardDetail_windowHeaderIcon__3OcIM",windowTitle:"CardDetail_windowTitle__qtCdE",windowMain:"CardDetail_windowMain__255Hg",windowSidebar:"CardDetail_windowSidebar__1ksKK",windowHeaderList:"CardDetail_windowHeaderList__3tGeq",closeButton:"CardDetail_closeButton__33bwD",Close:"CardDetail_Close__o3m5C",gutter:"CardDetail_gutter__CQh-b"}},22:function(e,t,n){e.exports={InputCard:"InputCard_InputCard__2tRlx",Buttons:"InputCard_Buttons__2bBg9",FormAcceptButton:"InputCard_FormAcceptButton__GWtDZ",FormCancelButton:"InputCard_FormCancelButton__1F_nA",Cancel:"InputCard_Cancel__1DY4T",InputCardButton:"InputCard_InputCardButton__3VExW"}},23:function(e,t,n){e.exports={InputList:"InputList_InputList__MCSBJ",Buttons:"InputList_Buttons__yg6hW",FormAcceptButton:"InputList_FormAcceptButton__KdJXD",FormCancelButton:"InputList_FormCancelButton__Z6PLT",Cancel:"InputList_Cancel__3WoYl",InputListButton:"InputList_InputListButton__2DJDq"}},340:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(119),i=n.n(o),c=(n(137),n(5)),s=n(6),d=n(8),l=n(7),m=n(9),u=(n(138),n(344)),p=n(345),f=n(120),h=n.n(f),_=n(121),v=n.n(_),C=function(e){return r.a.createElement("header",{className:v.a.BoardTitle},"Demo Board")},I=n(122),E=n.n(I),g=function(e){return r.a.createElement("nav",{className:E.a.Topbar},"Trello")},b=n(11),O=n(124),x=n.n(O),D=n(16),N=n(341),y=n(14),j=n.n(y),w=n(125),L=n.n(w),A="card",B=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={isHovered:!1},n.mouseIn=function(){n.setState(function(e){return{isHovered:!0}})},n.mouseOut=function(){n.setState(function(e){return{isHovered:!1}})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this,n=this.props,a=n.id,o=n.title,i=n.isOver,c=n.connectDragSource,s=n.connectDropTarget,d=n.item,l=this.state.isHovered&&!d?j.a.FormEdit:j.a.FormHidden,m=j.a.CardContainer,u=j.a.Card;return d&&d.originalCard===this.props.card&&i&&(m=j.a.CardDragging,u=j.a.CardDragging,e=50,l=j.a.NoCardsPlaceholder),this.props.isEmptyList&&(m=j.a.NoCardsPlaceholder),this.props.isEmptyList&&this.props.isOver&&(m=j.a.NoCardsPlaceholderDragging),c(s(r.a.createElement("div",{className:m,ref:function(e){t.myElement=e},onMouseEnter:this.mouseIn,onMouseLeave:this.mouseOut,style:{height:e}},r.a.createElement(N.a,{to:{pathname:"/card/".concat(a),state:{modal:!0}},style:{textDecoration:"none",color:"black"}},r.a.createElement("div",{className:u},o),r.a.createElement("span",{className:l},r.a.createElement(L.a,{className:j.a.Edit,style:{fontSize:20}}))))))}}]),t}(a.Component),T=Object(D.DropTarget)(A,{canDrop:function(){return!1},hover:function(e,t){var n=t.getItem().originalCard,a=e.cardIndex,r=e.listIndex;if(n!==e.card){var o=e.findCard(n),i=o.card,c=o.draggedCardIndex,s=o.draggedListIndex;e.cardMove(s,r,c,a,i)}}},function(e,t){return{connectDropTarget:e.dropTarget(),item:t.getItem()}})(Object(D.DragSource)(A,{beginDrag:function(e){return{originalCard:e.card,originalCardIndex:e.cardIndex,originalListIndex:e.listIndex}},endDrag:function(e,t){var n=t.getItem(),a=n.originalCardIndex,r=n.originalListIndex,o=n.originalCard;if(!t.didDrop()){var i=e.findCard(o),c=i.card,s=i.draggedCardIndex,d=i.draggedListIndex;e.cardMove(d,r,s,a,c)}}},function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}})(B)),S=n(22),k=n.n(S),H=n(60),M=n.n(H),F=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={cardName:"",inputActive:!1},n.handleChange=function(e){n.setState({cardName:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.createNewCard(n.state.cardName,n.props.listIndex),n.setState({cardName:""})},n.inputActiveHandler=function(){n.setState({inputActive:!0})},n.inputInactiveHandler=function(){n.setState({inputActive:!1})},n.handleClickOutside=function(e){n.wrapperRef&&!n.wrapperRef.contains(e.target)&&n.setState({inputActive:!1})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"componentDidUpdate",value:function(){this.state.inputActive&&this.inputRef.focus()}},{key:"render",value:function(){var e=this,t=this.state.cardName.length>0,n=this.props.cards?"+ Add another card":"+ Add a card",a=r.a.createElement("div",{ref:function(t){e.wrapperRef=t},className:k.a.InputCard},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("textarea",{ref:function(t){e.inputRef=t},type:"text",value:this.state.cardName,onChange:this.handleChange,placeholder:"Enter card title..."}),r.a.createElement("div",{className:k.a.Buttons},r.a.createElement("button",{className:k.a.FormAcceptButton,disabled:!t},"Add Card"),r.a.createElement("button",{className:k.a.FormCancelButton,type:"button",onClick:this.inputInactiveHandler},r.a.createElement(M.a,{className:k.a.Cancel})))));return this.state.inputActive||(a=r.a.createElement("button",{className:k.a.InputCardButton,onClick:this.inputActiveHandler},n)),a}}]),t}(a.Component),R=n(82),P=n.n(R),U="card",V="lists",W=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).findCardHandler=function(e){return{card:e,draggedCardIndex:n.props.cards.indexOf(e),draggedListIndex:n.props.cards[n.props.cards.indexOf(e)].listIndex}},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t,n=this,a=this.props,o=a.connectDropTarget,i=a.connectDragSource,c=a.connectDropTargetCard,s=a.isOver,d=a.isOverlocally,l=(e=this.props.cards,t=this.props.listIndex,e.filter(function(e){return e.listIndex===t})),m=P.a.List;d&&(m=P.a.ListDragging);var u=r.a.createElement(T,{id:"NOID",index:0,listIndex:this.props.listIndex,isEmptyList:!0,isOver:s});return l.length>0&&(u=l.map(function(e,t){return r.a.createElement(T,{key:t,cardIndex:n.props.cards.indexOf(e),listIndex:n.props.listIndex,id:e.id,title:e.title,card:e,findCard:n.findCardHandler,cardMove:n.props.onCardMoved,isEmptyList:!1,isOver:s})})),i(o(c(r.a.createElement("div",{className:m},r.a.createElement("header",null,this.props.listName),u,r.a.createElement(F,{createNewCard:this.props.onCardAdded,cards:this.props.cards,listIndex:this.props.listIndex})))))}}]),t}(a.Component),Y=Object(D.DropTarget)(V,{canDrop:function(){return!1},hover:function(e,t){var n=t.getItem().originalList,a=e.listIndex;if(n!==e.list){var r=e.findList(n);e.listMove(r,a)}}},function(e,t){return{connectDropTarget:e.dropTarget(),isOverlocally:t.isOver()}})(Object(D.DragSource)(V,{beginDrag:function(e){return{listIndex:e.listIndex,originalList:e.list}},endDrag:function(e,t){}},function(e,t){return{connectDragSource:e.dragSource()}})(Object(D.DropTarget)(U,{drop:function(){}},function(e,t){return{connectDropTargetCard:e.dropTarget(),isOver:t.isOver()}})(Object(b.b)(function(e){return{cards:e.cards}},function(e){return{onCardAdded:function(t,n){return e(function(e,t){return{type:"ADD_CARD",listIndex:t,cardName:e}}(t,n))},onCardMoved:function(t,n,a,r,o){return e(function(e,t,n,a,r){return{type:"MOVE_CARD",draggedListIndex:e,hoverListIndex:t,draggedCardIndex:n,hoverCardIndex:a,card:r}}(t,n,a,r,o))}}})(W)))),J=n(23),K=n.n(J),z=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={listName:"",inputActive:!1},n.handleChange=function(e){n.setState({listName:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.onListAdded(n.state.listName),n.setState({listName:""})},n.inputActiveHandler=function(){n.setState({inputActive:!0})},n.inputInactiveHandler=function(){n.setState({inputActive:!1})},n.handleClickOutside=function(e){n.wrapperRef&&!n.wrapperRef.contains(e.target)&&n.setState({inputActive:!1})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"componentDidUpdate",value:function(){this.state.inputActive&&this.inputRef.focus()}},{key:"render",value:function(){var e=this,t=this.state.listName.length>0,n=this.props.listCounter>0?"+ Add another list":"+ Add a list",a=r.a.createElement("div",{ref:function(t){e.wrapperRef=t},className:K.a.InputList},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{ref:function(t){e.inputRef=t},type:"text",value:this.state.listName,onChange:this.handleChange,placeholder:"Enter list title..."}),r.a.createElement("div",{className:K.a.Buttons},r.a.createElement("button",{className:K.a.FormAcceptButton,disabled:!t},"Add List"),r.a.createElement("button",{className:K.a.FormCancelButton,type:"button",onClick:this.inputInactiveHandler},r.a.createElement(M.a,{className:K.a.Cancel})))));return this.state.inputActive||(a=r.a.createElement("button",{className:K.a.InputListButton,onClick:this.inputActiveHandler},n)),a}}]),t}(a.Component),G=Object(b.b)(function(e){return{listCounter:e.listCounter}},function(e){return{onListAdded:function(t){return e({type:"ADD_LIST",listName:t})}}})(z),X=n(126),Z=n.n(X),q=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).findListHandler=function(e){return n.props.lists.indexOf(e)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.connectDropTarget,n=this.props.lists.map(function(t,n){return r.a.createElement(Y,{key:n,listIndex:n,listName:t.text,list:t,findList:e.findListHandler,listMove:e.props.onListMoved})});return t(r.a.createElement("div",{className:x.a.Lists},n,r.a.createElement(G,null)))}}]),t}(a.Component),Q=Object(D.DragDropContext)(Z.a)(Object(D.DropTarget)("lists",{drop:function(){}},function(e,t){return{connectDropTarget:e.dropTarget()}})(Object(b.b)(function(e){return{lists:e.lists}},function(e){return{onListMoved:function(t,n){return e(function(e,t){return{type:"MOVE_LIST",originalListIndex:e,newListIndex:t}}(t,n))}}})(q))),$=function(e){return e.children},ee=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement($,null,r.a.createElement(g,null),r.a.createElement("div",{className:h.a.Board},r.a.createElement(C,null),r.a.createElement(Q,null)))}}]),t}(a.Component),te=n(342),ne=n(17),ae=n.n(ne),re=n(41),oe=n.n(re),ie=n(127),ce=n.n(ie),se=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:oe.a.description},r.a.createElement("span",null,r.a.createElement(ce.a,{className:oe.a.descriptionIcon,style:{fontSize:24}})),r.a.createElement("div",{className:oe.a.descriptionTitle},r.a.createElement("h3",null,"Description")),r.a.createElement("div",null,r.a.createElement("button",{className:oe.a.descriptionField,href:"#"},"Add a more detailed description\u2026")))}}]),t}(a.Component),de=(Object(b.b)(function(e){return{lists:e.lists,cards:e.cards,comments:e.comments}})(se),n(12)),le=n.n(de),me=n(13),ue=n.n(me),pe=n(61),fe=n.n(pe),he=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={commentText:"",inputActive:!1},n.handleChange=function(e){n.setState({commentText:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.onUpdateComment(n.props.commentIndex,n.state.commentText),n.setState({inputActive:!1})},n.handleDelete=function(e){n.props.handleDelete(n.props.commentIndex,n.props.cardId)},n.inputActiveHandler=function(){n.setState({inputActive:!0},function(){n.inputRef.select()})},n.inputInactiveHandler=function(){n.setState({inputActive:!1})},n.handleClickOutside=function(e){n.wrapperRef&&!n.wrapperRef.contains(e.target)&&n.setState({inputActive:!1})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside),this.setState({commentText:this.props.comment.text})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"render",value:function(){var e=this,t=this.state.commentText.length>0,n=this.props.comment?"":"You haven't typed anything!",a=r.a.createElement("div",{ref:function(t){e.wrapperRef=t},className:ue.a.commentsContainer},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:ue.a.commentFrame},r.a.createElement("div",{className:ue.a.commentBox},r.a.createElement("textarea",{ref:function(t){e.inputRef=t},type:"text",className:ue.a.commentBoxInput,value:this.state.commentText,onChange:this.handleChange,placeholder:n}),r.a.createElement("div",{className:ue.a.confirmationButtons},r.a.createElement("button",{className:ue.a.FormAcceptButton,disabled:!t},"Save"),r.a.createElement("button",{className:ue.a.closeButton,onClick:this.inputInactiveHandler},r.a.createElement(fe.a,{className:ue.a.Close,style:{fontSize:26}})))))));return this.state.inputActive||(a=r.a.createElement($,null,r.a.createElement("div",{className:ue.a.commentContainer},r.a.createElement("div",{className:ue.a.comment},this.props.comment.text)),r.a.createElement("div",{className:ue.a.buttons},r.a.createElement("button",{onClick:this.inputActiveHandler},"Edit"),r.a.createElement("span",null,"-"),r.a.createElement("button",{onClick:this.handleDelete},"Delete")))),a}}]),t}(a.Component),_e=Object(b.b)(null,function(e){return{onUpdateComment:function(t,n){return e(function(e,t){return{type:"UPDATE_COMMENT",commentIndex:e,newCommentText:t}}(t,n))}}})(he),ve=n(128),Ce=n.n(ve),Ie=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=null;return this.props.commentIds&&(t=this.props.commentIds.map(function(t){var n=e.props.comments.find(function(e){return e.id===t});return r.a.createElement("li",{className:le.a.commentListItem,key:t},r.a.createElement("div",{className:le.a.commentAuthorIcon},n.user.charAt(0)),r.a.createElement("div",{className:le.a.commentInfo},r.a.createElement("span",{className:le.a.commentAuthor},n.user," "),r.a.createElement("span",{className:le.a.commentDate},new Date(n.date).toLocaleString(void 0,{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}))),r.a.createElement(_e,{comment:n,commentIndex:e.props.comments.indexOf(n),cardId:e.props.cardId,handleDelete:e.props.onDeleteComment}))})),r.a.createElement("div",null,r.a.createElement("div",{className:le.a.commentsContainer},r.a.createElement("span",null,r.a.createElement(Ce.a,{className:le.a.commentIcon,style:{fontSize:24}})),r.a.createElement("div",{className:le.a.commentTitle},r.a.createElement("h3",null,"Activity")),r.a.createElement("span",{className:le.a.commentUserIcon},"P"),r.a.createElement("form",null,r.a.createElement("div",{className:le.a.commentFrame},r.a.createElement("div",{className:le.a.commentBox},r.a.createElement("textarea",{className:le.a.commentBoxInput,placeholder:"Write a comment\u2026"}))))),r.a.createElement("ul",{className:le.a.comments},t))}}]),t}(a.Component),Ee=Object(b.b)(function(e){return{comments:e.comments}},function(e){return{onDeleteComment:function(t,n){return e(function(e,t){return{type:"DELETE_COMMENT",commentIndex:e,cardId:t}}(t,n))}}})(Ie),ge=n(129),be=n.n(ge),Oe=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.cards.find(function(t){return t.id===e.props.match.params.id});if(!t)return r.a.createElement(te.a,{to:"/"});var n=this.props.lists[t.listIndex];return r.a.createElement($,null,r.a.createElement("button",{className:ae.a.closeButton,onClick:function(t){t.stopPropagation(),e.props.history.goBack()},href:"#"},r.a.createElement(fe.a,{className:ae.a.Close,style:{fontSize:26}})),r.a.createElement("div",null,r.a.createElement("div",{className:ae.a.windowHeader},r.a.createElement("span",null,r.a.createElement(be.a,{className:ae.a.windowHeaderIcon,style:{fontSize:24}})),r.a.createElement("div",{className:ae.a.windowTitle},r.a.createElement("h2",null,t.title)),r.a.createElement("div",{className:ae.a.windowHeaderList},"in list ",r.a.createElement("span",null,n.text))),r.a.createElement("div",{className:ae.a.windowMain},r.a.createElement("div",{className:ae.a.gutter}),r.a.createElement(Ee,{commentIds:t.comments,cardId:t.id})),r.a.createElement("div",{className:ae.a.windowSidebar})))}}]),t}(a.Component),xe=Object(b.b)(function(e){return{lists:e.lists,cards:e.cards}})(Oe),De=n(130),Ne=n.n(De),ye=n(131),je=n.n(ye),we=function(e){return e.show?r.a.createElement("div",{className:je.a.Backdrop,onClick:e.clicked}):null},Le=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement($,null,r.a.createElement(we,{show:!0,clicked:function(t){t.stopPropagation(),e.props.history.goBack()}}),r.a.createElement("div",{className:Ne.a.Modal,style:{transform:"translateY(0)",opacity:"1"}},r.a.createElement(this.props.modalType,this.props)))}}]),t}(a.Component),Ae=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).previousLocation=n.props.location,n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillUpdate",value:function(e){var t=this.props.location;"POP"===e.history.action||t.state&&t.state.modal||(this.previousLocation=this.props.location)}},{key:"render",value:function(){var e=this.props.location,t=!(!e.state||!e.state.modal||this.previousLocation===e);return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{location:t?this.previousLocation:e},r.a.createElement(p.a,{path:"/",exact:!0,component:ee}),r.a.createElement(p.a,{path:"/card/:id",render:function(e){return[r.a.createElement(Le,Object.assign({},e,{key:1,modalType:xe})),r.a.createElement(ee,Object.assign({},e,{key:2}))]}})),t?r.a.createElement(p.a,{path:"/card/:id",render:function(e){return r.a.createElement(Le,Object.assign({},e,{modalType:xe}))}}):null)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be=n(343),Te=n(39),Se=n(18),ke=n(24),He={listCounter:2,cardCounter:8,lists:[{text:"Game One"},{text:"Game Two"}],cards:[{id:"card1",listIndex:0,title:"Come up with a great game idea",description:"first Description",comments:["comment1","comment2"]},{id:"card2",listIndex:0,title:"Write a solid spec outlining the idea",description:"",comments:[]},{id:"card3",listIndex:0,title:"Build and MVP Prototype",description:"",comments:[]},{id:"card4",listIndex:0,title:"Iterate on the prototype until fun",description:"",comments:[]},{id:"card5",listIndex:0,title:"Launch and gather player data",description:"",comments:[]},{id:"card6",listIndex:0,title:"Iterate based on player data",description:"",comments:[]},{id:"card7",listIndex:0,title:"PROFIT",description:"",comments:[]},{id:"card8",listIndex:1,title:"Do it all again",description:"",comments:[]}],comments:[{id:"comment1",user:"Dominic Scotto",text:"First Comment",date:Date.now()},{id:"comment2",user:"Dominic Scotto",text:"Second Comment",date:Date.now()}]},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LIST":var n={text:t.listName};return Object(ke.a)({},e,{listCounter:e.listCounter+1,lists:[].concat(Object(Se.a)(e.lists),[n])});case"ADD_CARD":var a={id:"card".concat(e.cardCounter+1),listIndex:t.listIndex,title:t.cardName,description:"",comments:[]};return Object(ke.a)({},e,{cardCounter:e.cardCounter+1,cards:[].concat(Object(Se.a)(e.cards),[a])});case"MOVE_CARD":var r=Object(Se.a)(e.cards);return t.card.listIndex=t.hoverListIndex,r.splice(t.draggedCardIndex,1),r.splice(t.hoverCardIndex,0,t.card),Object(ke.a)({},e,{cards:Object(Se.a)(r)});case"MOVE_LIST":var o=Object(Se.a)(e.lists),i=o.splice(t.originalListIndex,1)[0];o.splice(t.newListIndex,0,i);var c={};e.lists.forEach(function(e,t){e!==o[t]&&(c["".concat(t)]=o.indexOf(e))});var s=e.cards.map(function(e){return void 0!==c[e.listIndex]&&(e.listIndex=c[e.listIndex]),e});return Object(ke.a)({},e,{lists:Object(Se.a)(o),cards:s});case"UPDATE_COMMENT":var d=e.comments[t.commentIndex];return d.text=t.newCommentText,d.date=Date.now(),e.comments[t.commentIndex]=d,Object(ke.a)({},e,{comments:Object(Se.a)(e.comments)});case"DELETE_COMMENT":var l=e.comments,m=e.cards.find(function(e){return e.id===t.cardId}),u=m.comments.indexOf(l[t.commentIndex]);return m.comments.splice(u,1),l.splice(t.commentIndex,1),Object(ke.a)({},e,{cards:[].concat(Object(Se.a)(e.cards),[m]),comments:Object(Se.a)(l)});default:return e}},Fe=Object(Te.createStore)(Me,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),Re=r.a.createElement(b.a,{store:Fe},r.a.createElement(Be.a,null,r.a.createElement(p.a,{component:Ae})));i.a.render(Re,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},41:function(e,t,n){e.exports={descriptionTitle:"Description_descriptionTitle__2Jv7O",description:"Description_description__1Zw7m",descriptionIcon:"Description_descriptionIcon__VOIdy",descriptionField:"Description_descriptionField__m_E3K"}},82:function(e,t,n){e.exports={List:"List_List__xoNiv",ListDragging:"List_ListDragging__1B8M-"}}},[[132,1,2]]]);
//# sourceMappingURL=main.13295e7b.chunk.js.map