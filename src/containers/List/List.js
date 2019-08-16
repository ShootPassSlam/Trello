import * as React from 'react'
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

class List extends React.Component{
    render() {
        const { connectDropTarget, connectDragSource, connectDropTargetCard, isOver, isOverlocally} = this.props
        const listCards = findCardsOfList(this.props.cards, this.props.listId);
        
        let className = styles.List
        if(isOverlocally){
            className=styles.ListDragging
        }

        let displayCards = <Card
                    id={"NOID"}
                    index={0}
                    listId={this.props.listId}
                    isEmptyList={true}
                    isOver={isOver}
                />;
        if(listCards.length !== 0){
            displayCards = listCards.map( card => {
                console.log("card", card)
                return <Card
                    key={card.cardId}
                    id={card.cardId}
                    title={card.title}
                    index={this.props.cards.indexOf(card)}
                    listId={this.props.listId}
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
                            cards={this.props.allCards} 
                            listId={this.props.listId}/>
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
        onCardAdded: (cardName, listId) => dispatch(listActions.addCard(cardName, listId)),
        onListMoved: (originalListId, newListId) => dispatch(listActions.moveList(originalListId, newListId))
    }
}

export default DropTarget(Types.LIST, listTarget, collectDrop)(
    DragSource(Types.LIST, listSource, collectDrag)(
        DropTarget(Types.CARD, cardTarget, collectDropCard)(
            connect(mapStateToProps, mapDispatchToProps)(List)
        )
    )
)