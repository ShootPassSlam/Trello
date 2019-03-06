import * as React from 'react'
import { DragSource, DropTarget} from 'react-dnd'
import Card from '../../components/Card/Card'
import InputCard from '../InputCard/InputCard';
import styles from './List.module.css';

import { connect } from 'react-redux';
import * as listActions from '../../store/actions/lists';

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
            props.moveList(draggedIndex, hoverIndex)
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

class List extends React.Component{
    render() {
        const { connectDropTarget, connectDragSource, connectDropTargetCard, isOver, isOverlocally} = this.props
        const { cards } = this.props
        
        let className = styles.List
        if(isOverlocally){
            className=styles.ListDragging
        }

        let displayCards = <Card
                    id={"NOID"}
                    index={0}
                    listId={this.props.index}
                    findCard={this.findCard}
                    moveCard={this.props.onCardMoved}
                    isEmptyList={true}
                    isOver={isOver}
                />;
        if(cards.length !== 0){
            displayCards = cards.map(card => {
                return <Card
                    key={card.id}
                    id={`${card.id}`}
                    text={card.text}
                    index={cards.indexOf(card)}
                    listId={this.props.index}
                    findCard={this.findCard}
                    moveCard={this.props.onCardMoved}
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
                            listId={this.props.index}/>
                    </div>
                )
            )    
        )
    }

    findCard = (id) => {
        let card = []
        let currentList
        for (var key in this.props.lists){
            const currentCard = (this.props.lists[key].cards.filter(c => `${c.id}` === id)[0])
            if (currentCard){
                card.push(currentCard)
                currentList = key
            }
        }
        return {
            card: card[0],
            draggedIndex: this.props.lists[currentList].cards.indexOf(card[0]),
            draggedListId: currentList
        }
    }
}

const mapDispatchToProps= dispatch => {
    return {
        onCardAdded: (cardName, cards, listId) => dispatch(listActions.addCard(cardName, cards, listId)),
        onCardMoved: (originalListId, newListId, currentIndex, newIndex, card) => dispatch(listActions.moveCard(originalListId, newListId, currentIndex, newIndex, card))
    }
}

export default DropTarget(Types.LIST, listTarget, collectDrop)(
    DragSource(Types.LIST, listSource, collectDrag)(
        DropTarget(Types.CARD, cardTarget, collectDropCard)(
            connect(null, mapDispatchToProps)(List)
        )
    )
)