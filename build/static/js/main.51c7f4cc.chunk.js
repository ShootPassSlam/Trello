(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports={commentFrame:"InputComment_commentFrame__3p9gA",commentBox:"InputComment_commentBox__30yLY",commentBoxInput:"InputComment_commentBoxInput__UB0NJ",comments:"InputComment_comments__2N9jt",commentsContainer:"InputComment_commentsContainer__1CC_A",commentContainer:"InputComment_commentContainer__3I_eC",comment:"InputComment_comment__nl1NT",buttons:"InputComment_buttons__eHfnK",closeButton:"InputComment_closeButton__2I-Kp",confirmationButtons:"InputComment_confirmationButtons__38KYV",FormAcceptButton:"InputComment_FormAcceptButton__AY_3s"}},120:function(e,t,n){e.exports={Board:"Board_Board__2dZB0"}},121:function(e,t,n){e.exports={BoardTitle:"BoardTitle_BoardTitle__jGYQa"}},122:function(e,t,n){e.exports={Topbar:"Topbar_Topbar__22Hhp",DesktopOnly:"Topbar_DesktopOnly__2AfU4"}},124:function(e,t,n){e.exports={Lists:"Lists_Lists__2XWHD"}},130:function(e,t,n){e.exports={Modal:"Modal_Modal__2DBTJ"}},131:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__1E053"}},132:function(e,t,n){e.exports=n(340)},137:function(e,t,n){},138:function(e,t,n){},14:function(e,t,n){e.exports={CardContainer:"Card_CardContainer__3iUTY",Card:"Card_Card__2a_e7",CardDragging:"Card_CardDragging__wSZPd",NoCardsPlaceholderDragging:"Card_NoCardsPlaceholderDragging__31-PY",NoCardsPlaceholder:"Card_NoCardsPlaceholder__3v5hn",FormEdit:"Card_FormEdit__3EFHm",FormHidden:"Card_FormHidden__ruzNh",Edit:"Card_Edit__T5s5d"}},15:function(e,t,n){e.exports={commentTitle:"Comments_commentTitle__170Jm",commentsContainer:"Comments_commentsContainer__19dCd",commentIcon:"Comments_commentIcon__2L1hw",commentUserIcon:"Comments_commentUserIcon__2iu5V",commentFrame:"Comments_commentFrame__1Fu2T",commentBox:"Comments_commentBox__37K4B",commentBoxInput:"Comments_commentBoxInput__1pVgG",commentInfo:"Comments_commentInfo__2hx87",commentListItem:"Comments_commentListItem__Qglm1",commentAuthor:"Comments_commentAuthor__3x7VN",commentAuthorIcon:"Comments_commentAuthorIcon__SILw2",commentDate:"Comments_commentDate__e2ib8"}},18:function(e,t,n){e.exports={windowHeader:"CardDetail_windowHeader__3lrxU",windowHeaderIcon:"CardDetail_windowHeaderIcon__3OcIM",windowTitle:"CardDetail_windowTitle__qtCdE",windowMain:"CardDetail_windowMain__255Hg",windowSidebar:"CardDetail_windowSidebar__1ksKK",windowHeaderList:"CardDetail_windowHeaderList__3tGeq",closeButton:"CardDetail_closeButton__33bwD",Close:"CardDetail_Close__o3m5C",gutter:"CardDetail_gutter__CQh-b"}},23:function(e,t,n){e.exports={InputCard:"InputCard_InputCard__2tRlx",Buttons:"InputCard_Buttons__2bBg9",FormAcceptButton:"InputCard_FormAcceptButton__GWtDZ",FormCancelButton:"InputCard_FormCancelButton__1F_nA",Cancel:"InputCard_Cancel__1DY4T",InputCardButton:"InputCard_InputCardButton__3VExW"}},24:function(e,t,n){e.exports={InputList:"InputList_InputList__MCSBJ",Buttons:"InputList_Buttons__yg6hW",FormAcceptButton:"InputList_FormAcceptButton__KdJXD",FormCancelButton:"InputList_FormCancelButton__Z6PLT",Cancel:"InputList_Cancel__3WoYl",InputListButton:"InputList_InputListButton__2DJDq"}},340:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(119),c=n.n(o),i=(n(137),n(5)),s=n(6),m=n(8),d=n(7),l=n(9),u=(n(138),n(344)),p=n(345),h=n(120),f=n.n(h),_=n(121),C=n.n(_),v=function(e){return r.a.createElement("header",{className:C.a.BoardTitle},"Demo Board")},I=n(122),E=n.n(I),g=function(e){return r.a.createElement("nav",{className:E.a.Topbar},"Trello")},b=n(11),O=n(124),x=n.n(O),D=n(17),N=n(341),w=n(14),j=n.n(w),y=n(125),L=n.n(y),A="card",T=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isHovered:!1},n.mouseIn=function(){n.setState(function(e){return{isHovered:!0}})},n.mouseOut=function(){n.setState(function(e){return{isHovered:!1}})},n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this,n=this.props,a=n.id,o=n.title,c=n.isOver,i=n.connectDragSource,s=n.connectDropTarget,m=n.item,d=this.state.isHovered&&!m?j.a.FormEdit:j.a.FormHidden,l=j.a.CardContainer,u=j.a.Card;return m&&m.originalCard===this.props.card&&c&&(l=j.a.CardDragging,u=j.a.CardDragging,e=50,d=j.a.NoCardsPlaceholder),this.props.isEmptyList&&(l=j.a.NoCardsPlaceholder),this.props.isEmptyList&&this.props.isOver&&(l=j.a.NoCardsPlaceholderDragging),i(s(r.a.createElement("div",{className:l,ref:function(e){t.myElement=e},onMouseEnter:this.mouseIn,onMouseLeave:this.mouseOut,style:{height:e}},r.a.createElement(N.a,{to:{pathname:"/card/".concat(a),state:{modal:!0}},style:{textDecoration:"none",color:"black"}},r.a.createElement("div",{className:u},o),r.a.createElement("span",{className:d},r.a.createElement(L.a,{className:j.a.Edit,style:{fontSize:20}}))))))}}]),t}(a.Component),B=Object(D.DropTarget)(A,{canDrop:function(){return!1},hover:function(e,t){var n=t.getItem().originalCard,a=e.cardIndex,r=e.listIndex;if(n!==e.card){var o=e.findCard(n),c=o.card,i=o.draggedCardIndex,s=o.draggedListIndex;e.cardMove(s,r,i,a,c)}}},function(e,t){return{connectDropTarget:e.dropTarget(),item:t.getItem()}})(Object(D.DragSource)(A,{beginDrag:function(e){return{originalCard:e.card,originalCardIndex:e.cardIndex,originalListIndex:e.listIndex}},endDrag:function(e,t){var n=t.getItem(),a=n.originalCardIndex,r=n.originalListIndex,o=n.originalCard;if(!t.didDrop()){var c=e.findCard(o),i=c.card,s=c.draggedCardIndex,m=c.draggedListIndex;e.cardMove(m,r,s,a,i)}}},function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}})(T)),k=n(23),S=n.n(k),M=n(60),H=n.n(M),F=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={cardName:"",inputActive:!1},n.handleChange=function(e){n.setState({cardName:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.createNewCard(n.state.cardName,n.props.listIndex),n.setState({cardName:""})},n.inputActiveHandler=function(){n.setState({inputActive:!0})},n.inputInactiveHandler=function(){n.setState({inputActive:!1})},n.handleClickOutside=function(e){n.wrapperRef&&!n.wrapperRef.contains(e.target)&&n.setState({inputActive:!1})},n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"componentDidUpdate",value:function(){this.state.inputActive&&this.inputRef.focus()}},{key:"render",value:function(){var e=this,t=this.state.cardName.length>0,n=this.props.cards?"+ Add another card":"+ Add a card",a=r.a.createElement("div",{ref:function(t){e.wrapperRef=t},className:S.a.InputCard},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("textarea",{ref:function(t){e.inputRef=t},type:"text",value:this.state.cardName,onChange:this.handleChange,placeholder:"Enter card title..."}),r.a.createElement("div",{className:S.a.Buttons},r.a.createElement("button",{className:S.a.FormAcceptButton,disabled:!t},"Add Card"),r.a.createElement("button",{className:S.a.FormCancelButton,type:"button",onClick:this.inputInactiveHandler},r.a.createElement(H.a,{className:S.a.Cancel})))));return this.state.inputActive||(a=r.a.createElement("button",{className:S.a.InputCardButton,onClick:this.inputActiveHandler},n)),a}}]),t}(a.Component),R=n(82),P=n.n(R),U="card",V="lists",W=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).findCardHandler=function(e){return{card:e,draggedCardIndex:n.props.cards.indexOf(e),draggedListIndex:n.props.cards[n.props.cards.indexOf(e)].listIndex}},n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t,n=this,a=this.props,o=a.connectDropTarget,c=a.connectDragSource,i=a.connectDropTargetCard,s=a.isOver,m=a.isOverlocally,d=(e=this.props.cards,t=this.props.listIndex,e.filter(function(e){return e.listIndex===t})),l=P.a.List;m&&(l=P.a.ListDragging);var u=r.a.createElement(B,{id:"NOID",index:0,listIndex:this.props.listIndex,isEmptyList:!0,isOver:s});return d.length>0&&(u=d.map(function(e,t){return r.a.createElement(B,{key:t,cardIndex:n.props.cards.indexOf(e),listIndex:n.props.listIndex,id:e.id,title:e.title,card:e,findCard:n.findCardHandler,cardMove:n.props.onCardMoved,isEmptyList:!1,isOver:s})})),c(o(i(r.a.createElement("div",{className:l},r.a.createElement("header",null,this.props.listName),u,r.a.createElement(F,{createNewCard:this.props.onCardAdded,cards:this.props.cards,listIndex:this.props.listIndex})))))}}]),t}(a.Component),Y=Object(D.DropTarget)(V,{canDrop:function(){return!1},hover:function(e,t){var n=t.getItem().originalList,a=e.listIndex;if(n!==e.list){var r=e.findList(n);e.listMove(r,a)}}},function(e,t){return{connectDropTarget:e.dropTarget(),isOverlocally:t.isOver()}})(Object(D.DragSource)(V,{beginDrag:function(e){return{listIndex:e.listIndex,originalList:e.list}},endDrag:function(e,t){}},function(e,t){return{connectDragSource:e.dragSource()}})(Object(D.DropTarget)(U,{drop:function(){}},function(e,t){return{connectDropTargetCard:e.dropTarget(),isOver:t.isOver()}})(Object(b.b)(function(e){return{cards:e.cards}},function(e){return{onCardAdded:function(t,n){return e(function(e,t){return{type:"ADD_CARD",listIndex:t,cardName:e}}(t,n))},onCardMoved:function(t,n,a,r,o){return e(function(e,t,n,a,r){return{type:"MOVE_CARD",draggedListIndex:e,hoverListIndex:t,draggedCardIndex:n,hoverCardIndex:a,card:r}}(t,n,a,r,o))}}})(W)))),J=n(24),K=n.n(J),z=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={listName:"",inputActive:!1},n.handleChange=function(e){n.setState({listName:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.onListAdded(n.state.listName),n.setState({listName:""})},n.inputActiveHandler=function(){n.setState({inputActive:!0})},n.inputInactiveHandler=function(){n.setState({inputActive:!1})},n.handleClickOutside=function(e){n.wrapperRef&&!n.wrapperRef.contains(e.target)&&n.setState({inputActive:!1})},n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"componentDidUpdate",value:function(){this.state.inputActive&&this.inputRef.focus()}},{key:"render",value:function(){var e=this,t=this.state.listName.length>0,n=this.props.listCounter>0?"+ Add another list":"+ Add a list",a=r.a.createElement("div",{ref:function(t){e.wrapperRef=t},className:K.a.InputList},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{ref:function(t){e.inputRef=t},type:"text",value:this.state.listName,onChange:this.handleChange,placeholder:"Enter list title..."}),r.a.createElement("div",{className:K.a.Buttons},r.a.createElement("button",{className:K.a.FormAcceptButton,disabled:!t},"Add List"),r.a.createElement("button",{className:K.a.FormCancelButton,type:"button",onClick:this.inputInactiveHandler},r.a.createElement(H.a,{className:K.a.Cancel})))));return this.state.inputActive||(a=r.a.createElement("button",{className:K.a.InputListButton,onClick:this.inputActiveHandler},n)),a}}]),t}(a.Component),G=Object(b.b)(function(e){return{listCounter:e.listCounter}},function(e){return{onListAdded:function(t){return e({type:"ADD_LIST",listName:t})}}})(z),X=n(126),Z=n.n(X),q=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).findListHandler=function(e){return n.props.lists.indexOf(e)},n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.connectDropTarget,n=this.props.lists.map(function(t,n){return r.a.createElement(Y,{key:n,listIndex:n,listName:t.text,list:t,findList:e.findListHandler,listMove:e.props.onListMoved})});return t(r.a.createElement("div",{className:x.a.Lists},n,r.a.createElement(G,null)))}}]),t}(a.Component),Q=Object(D.DragDropContext)(Z.a)(Object(D.DropTarget)("lists",{drop:function(){}},function(e,t){return{connectDropTarget:e.dropTarget()}})(Object(b.b)(function(e){return{lists:e.lists}},function(e){return{onListMoved:function(t,n){return e(function(e,t){return{type:"MOVE_LIST",originalListIndex:e,newListIndex:t}}(t,n))}}})(q))),$=function(e){return e.children},ee=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement($,null,r.a.createElement(g,null),r.a.createElement("div",{className:f.a.Board},r.a.createElement(v,null),r.a.createElement(Q,null)))}}]),t}(a.Component),te=n(342),ne=n(18),ae=n.n(ne),re=n(41),oe=n.n(re),ce=n(127),ie=n.n(ce),se=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:oe.a.description},r.a.createElement("span",null,r.a.createElement(ie.a,{className:oe.a.descriptionIcon,style:{fontSize:24}})),r.a.createElement("div",{className:oe.a.descriptionTitle},r.a.createElement("h3",null,"Description")),r.a.createElement("div",null,r.a.createElement("button",{className:oe.a.descriptionField,href:"#"},"Add a more detailed description\u2026")))}}]),t}(a.Component),me=(Object(b.b)(function(e){return{lists:e.lists,cards:e.cards,comments:e.comments}})(se),n(15)),de=n.n(me),le=n(12),ue=n.n(le),pe=n(61),he=n.n(pe),fe=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={commentText:"",inputActive:!1},n.handleChange=function(e){n.setState({commentText:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.newComment?n.props.onNewComment(n.state.commentText,"Placeholder",n.props.cardId):n.props.onUpdateComment(n.props.commentIndex,n.state.commentText),n.setState({inputActive:!1})},n.handleDelete=function(e){n.props.handleDelete(n.props.commentIndex,n.props.cardId)},n.inputActiveHandler=function(){n.setState({inputActive:!0},function(){n.inputRef.select()})},n.inputInactiveHandler=function(){n.setState({inputActive:!1})},n.handleClickOutside=function(e){n.wrapperRef&&!n.wrapperRef.contains(e.target)&&n.setState({inputActive:!1})},n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside),this.props.newComment||this.setState({commentText:this.props.comment.text})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"render",value:function(){var e=this,t=this.state.commentText.length>0,n=this.props.comment?"":"You haven't typed anything!",a=r.a.createElement("div",{ref:function(t){e.wrapperRef=t},className:ue.a.commentsContainer},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:ue.a.commentFrame},r.a.createElement("div",{className:ue.a.commentBox},r.a.createElement("textarea",{ref:function(t){e.inputRef=t},type:"text",className:ue.a.commentBoxInput,value:this.state.commentText,onChange:this.handleChange,placeholder:n}),r.a.createElement("div",{className:ue.a.confirmationButtons},r.a.createElement("button",{className:ue.a.FormAcceptButton,disabled:!t},"Save"),r.a.createElement("button",{className:ue.a.closeButton,onClick:this.inputInactiveHandler},r.a.createElement(he.a,{className:ue.a.Close,style:{fontSize:26}})))))));return this.state.inputActive||(a=this.props.newComment?r.a.createElement("form",null,r.a.createElement("div",{className:ue.a.commentFrame},r.a.createElement("div",{className:ue.a.commentBox},r.a.createElement("textarea",{className:ue.a.commentBoxInput,placeholder:"Write a comment\u2026",onClick:this.inputActiveHandler})))):r.a.createElement($,null,r.a.createElement("div",{className:ue.a.commentContainer},r.a.createElement("div",{className:ue.a.comment},this.props.comment.text)),r.a.createElement("div",{className:ue.a.buttons},r.a.createElement("button",{onClick:this.inputActiveHandler},"Edit"),r.a.createElement("span",null,"-"),r.a.createElement("button",{onClick:this.handleDelete},"Delete")))),a}}]),t}(a.Component),_e=Object(b.b)(null,function(e){return{onUpdateComment:function(t,n){return e(function(e,t){return{type:"UPDATE_COMMENT",commentIndex:e,newCommentText:t}}(t,n))},onNewComment:function(t,n,a){return e(function(e,t,n){return{type:"ADD_COMMENT",commentText:e,author:t,cardId:n}}(t,n,a))}}})(fe),Ce=n(128),ve=n.n(Ce),Ie=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=null;return this.props.commentIds&&(t=this.props.commentIds.map(function(t){var n=e.props.comments.find(function(e){return e.id===t});return r.a.createElement("li",{className:de.a.commentListItem,key:t},r.a.createElement("div",{className:de.a.commentAuthorIcon},n.user.charAt(0)),r.a.createElement("div",{className:de.a.commentInfo},r.a.createElement("span",{className:de.a.commentAuthor},n.user," "),r.a.createElement("span",{className:de.a.commentDate},new Date(n.date).toLocaleString(void 0,{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}))),r.a.createElement(_e,{comment:n,commentIndex:e.props.comments.indexOf(n),cardId:e.props.cardId,handleDelete:e.props.onDeleteComment,newComment:!1}))})),r.a.createElement("div",null,r.a.createElement("div",{className:de.a.commentsContainer},r.a.createElement("span",null,r.a.createElement(ve.a,{className:de.a.commentIcon,style:{fontSize:24}})),r.a.createElement("div",{className:de.a.commentTitle},r.a.createElement("h3",null,"Activity")),r.a.createElement("span",{className:de.a.commentUserIcon},"P"),r.a.createElement(_e,{cardId:this.props.cardId,newComment:!0})),r.a.createElement("ul",{className:de.a.comments},t))}}]),t}(a.Component),Ee=Object(b.b)(function(e){return{comments:e.comments}},function(e){return{onDeleteComment:function(t,n){return e(function(e,t){return{type:"DELETE_COMMENT",commentIndex:e,cardId:t}}(t,n))}}})(Ie),ge=n(129),be=n.n(ge),Oe=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.cards.find(function(t){return t.id===e.props.match.params.id});if(!t)return r.a.createElement(te.a,{to:"/"});var n=this.props.lists[t.listIndex];return r.a.createElement($,null,r.a.createElement("button",{className:ae.a.closeButton,onClick:function(t){t.stopPropagation(),e.props.history.goBack()},href:"#"},r.a.createElement(he.a,{className:ae.a.Close,style:{fontSize:26}})),r.a.createElement("div",null,r.a.createElement("div",{className:ae.a.windowHeader},r.a.createElement("span",null,r.a.createElement(be.a,{className:ae.a.windowHeaderIcon,style:{fontSize:24}})),r.a.createElement("div",{className:ae.a.windowTitle},r.a.createElement("h2",null,t.title)),r.a.createElement("div",{className:ae.a.windowHeaderList},"in list ",r.a.createElement("span",null,n.text))),r.a.createElement("div",{className:ae.a.windowMain},r.a.createElement("div",{className:ae.a.gutter}),r.a.createElement(Ee,{commentIds:t.comments,cardId:t.id})),r.a.createElement("div",{className:ae.a.windowSidebar})))}}]),t}(a.Component),xe=Object(b.b)(function(e){return{lists:e.lists,cards:e.cards}})(Oe),De=n(130),Ne=n.n(De),we=n(131),je=n.n(we),ye=function(e){return e.show?r.a.createElement("div",{className:je.a.Backdrop,onClick:e.clicked}):null},Le=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement($,null,r.a.createElement(ye,{show:!0,clicked:function(t){t.stopPropagation(),e.props.history.goBack()}}),r.a.createElement("div",{className:Ne.a.Modal,style:{transform:"translateY(0)",opacity:"1"}},r.a.createElement(this.props.modalType,this.props)))}}]),t}(a.Component),Ae=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).previousLocation=n.props.location,n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentWillUpdate",value:function(e){var t=this.props.location;"POP"===e.history.action||t.state&&t.state.modal||(this.previousLocation=this.props.location)}},{key:"render",value:function(){var e=this.props.location,t=!(!e.state||!e.state.modal||this.previousLocation===e);return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{location:t?this.previousLocation:e},r.a.createElement(p.a,{path:"/",exact:!0,component:ee}),r.a.createElement(p.a,{path:"/card/:id",render:function(e){return[r.a.createElement(Le,Object.assign({},e,{key:1,modalType:xe})),r.a.createElement(ee,Object.assign({},e,{key:2}))]}})),t?r.a.createElement(p.a,{path:"/card/:id",render:function(e){return r.a.createElement(Le,Object.assign({},e,{modalType:xe}))}}):null)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te=n(343),Be=n(39),ke=n(13),Se=n(20),Me={listCounter:2,cardCounter:8,commentCounter:2,lists:[{text:"Game One"},{text:"Game Two"}],cards:[{id:"card1",listIndex:0,title:"Come up with a great game idea",description:"first Description",comments:["comment1","comment2"]},{id:"card2",listIndex:0,title:"Write a solid spec outlining the idea",description:"",comments:[]},{id:"card3",listIndex:0,title:"Build and MVP Prototype",description:"",comments:[]},{id:"card4",listIndex:0,title:"Iterate on the prototype until fun",description:"",comments:[]},{id:"card5",listIndex:0,title:"Launch and gather player data",description:"",comments:[]},{id:"card6",listIndex:0,title:"Iterate based on player data",description:"",comments:[]},{id:"card7",listIndex:0,title:"PROFIT",description:"",comments:[]},{id:"card8",listIndex:1,title:"Do it all again",description:"",comments:[]}],comments:[{id:"comment1",user:"Dominic Scotto",text:"First Comment",date:Date.now()},{id:"comment2",user:"Dominic Scotto",text:"Second Comment",date:Date.now()}]},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LIST":var n={text:t.listName};return Object(Se.a)({},e,{listCounter:e.listCounter+1,lists:[].concat(Object(ke.a)(e.lists),[n])});case"ADD_CARD":var a={id:"card".concat(e.cardCounter+1),listIndex:t.listIndex,title:t.cardName,description:"",comments:[]};return Object(Se.a)({},e,{cardCounter:e.cardCounter+1,cards:[].concat(Object(ke.a)(e.cards),[a])});case"MOVE_CARD":var r=Object(ke.a)(e.cards);return t.card.listIndex=t.hoverListIndex,r.splice(t.draggedCardIndex,1),r.splice(t.hoverCardIndex,0,t.card),Object(Se.a)({},e,{cards:Object(ke.a)(r)});case"MOVE_LIST":var o=Object(ke.a)(e.lists),c=o.splice(t.originalListIndex,1)[0];o.splice(t.newListIndex,0,c);var i={};e.lists.forEach(function(e,t){e!==o[t]&&(i["".concat(t)]=o.indexOf(e))});var s=e.cards.map(function(e){return void 0!==i[e.listIndex]&&(e.listIndex=i[e.listIndex]),e});return Object(Se.a)({},e,{lists:Object(ke.a)(o),cards:s});case"UPDATE_COMMENT":var m=e.comments[t.commentIndex];return m.text=t.newCommentText,m.date=Date.now(),e.comments[t.commentIndex]=m,Object(Se.a)({},e,{comments:Object(ke.a)(e.comments)});case"DELETE_COMMENT":var d=e.comments,l=e.cards.find(function(e){return e.id===t.cardId}),u=l.comments.indexOf(d[t.commentIndex].id);return l.comments.splice(u,1),e.cards[t.cardId]=l,d.splice(t.commentIndex,1),Object(Se.a)({},e,{commentCounter:e.commentCounter-1,cards:Object(ke.a)(e.cards),comments:Object(ke.a)(d)});case"ADD_COMMENT":var p={id:"comment".concat(e.commentCounter+1),user:t.author,text:t.commentText,date:Date.now()},h=e.cards.find(function(e){return e.id===t.cardId});return h.comments.push(p.id),e.cards[t.cardId]=h,e.comments.push(p),Object(Se.a)({},e,{commentCounter:e.commentCounter+1,cards:Object(ke.a)(e.cards),comments:Object(ke.a)(e.comments)});default:return e}},Fe=Object(Be.createStore)(He,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),Re=r.a.createElement(b.a,{store:Fe},r.a.createElement(Te.a,null,r.a.createElement(p.a,{component:Ae})));c.a.render(Re,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},41:function(e,t,n){e.exports={descriptionTitle:"Description_descriptionTitle__2Jv7O",description:"Description_description__1Zw7m",descriptionIcon:"Description_descriptionIcon__VOIdy",descriptionField:"Description_descriptionField__m_E3K"}},82:function(e,t,n){e.exports={List:"List_List__xoNiv",ListDragging:"List_ListDragging__1B8M-"}}},[[132,1,2]]]);
//# sourceMappingURL=main.51c7f4cc.chunk.js.map