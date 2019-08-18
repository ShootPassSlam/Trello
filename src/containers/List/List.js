import React, { Component } from 'react';
import { DragSource, DropTarget} from 'react-dnd'
import Card from '../../components/Card/Card'
import InputCard from '../InputCard/InputCard';
import styles from './List.module.css';

import { connect } from 'react-redux';
import * as listActions from '../../store/actions/lists';

import { findCardsOfList } from '../../shared/utility';

const Types = {
    CARD: 'card',
    LIST: 'lists'
}

const cardTarget = {
    drop() {}
}

const collectDropCard = (connect, monitor) =>{
    return {
        connectDropTargetCard: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}

const listSource = {
    beginDrag(props) {
        return {
            listId: props.listId,
            index: props.index
        }
    },

    endDrag(props, monitor) {
    },
}

const listTarget = {
    canDrop() {
        return false
    },

    hover(props, monitor) {
        const { listId: draggedListId} = monitor.getItem()
        const { listId: hoverListId, index: hoverIndex } = props

        if (draggedListId !== hoverListId) {
            const  draggedIndex = props.findList(draggedListId)
            this.props.onListMoved(draggedIndex, hoverIndex)
        }
    },
}

const collectDrop = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOverlocally: monitor.isOver()
    }
}

const collectDrag = (connect, monitor) =>{
    return {
        connectDragSource: connect.dragSource()
    }
}

class List extends Component{

    findCardHandler = (card) => {
        return {
            card: card,
            draggedCardIndex: this.props.cards.indexOf(card),
            draggedListIndex: this.props.cards[this.props.cards.indexOf(card)].listIndex
        }
    };


    render() {
        const { connectDropTarget, connectDragSource, connectDropTargetCard, isOver, isOverlocally} = this.props
        let listCards = findCardsOfList(this.props.cards, this.props.listIndex);
        
        let className = styles.List
        if(isOverlocally){
            className=styles.ListDragging
        }

        let displayCards = <Card
                    id={"NOID"}
                    index={0}
                    listIndex={this.props.listIndex}
                    isEmptyList={true}
                    isOver={isOver}
                />;
        if(listCards.length > 0){
            displayCards = listCards.map( (card,key) => {
                return <Card
                    key={key}
                    cardIndex={this.props.cards.indexOf(card)}
                    listIndex={this.props.listIndex}
                    title={card.title}
                    card={card}
                    findCard={this.findCardHandler}
                    cardMove={this.props.onCardMoved}
                    isEmptyList={false}
                    isOver={isOver}
                />;
            })
        }

        return connectDragSource(
            connectDropTarget(
                connectDropTargetCard(
                    <div className={className}>
                        <header>{this.props.listName}</header>
                        {displayCards}
                        <InputCard createNewCard={this.props.onCardAdded} 
                            cards={this.props.cards} 
                            listIndex={this.props.listIndex}/>
                    </div>
                )
            )    
        )
    }
}

const mapStateToProps = state => {
    return {
        cards: state.cards,
    };
}

const mapDispatchToProps= dispatch => {
    return {
        onCardAdded: (cardName, listIndex) => dispatch(listActions.addCard(cardName, listIndex)),
        onCardMoved: (draggedListIndex, hoverListIndex, draggedCardIndex, hoverCardIndex, card) => dispatch(listActions.moveCard(draggedListIndex, hoverListIndex, draggedCardIndex, hoverCardIndex, card)),
        onListMoved: (originalListIndex, newListIndex) => dispatch(listActions.moveList(originalListIndex, newListIndex))
    }
}

export default DropTarget(Types.LIST, listTarget, collectDrop)(
    DragSource(Types.LIST, listSource, collectDrag)(
        DropTarget(Types.CARD, cardTarget, collectDropCard)(
            connect(mapStateToProps, mapDispatchToProps)(List)
        )
    )
)