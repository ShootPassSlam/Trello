import * as React from 'react'
import { DropTarget } from 'react-dnd'
import Card from '../../components/Card/Card'
import InputCard from '../InputCard/InputCard';
import styles from './List.module.css';

import { connect } from 'react-redux';
import * as listActions from '../../store/actions/lists';

const Types = {
    ITEM: 'card'
}

const cardTarget = {
    drop() {}
}

const collectDrop = (connect, monitor) =>{
    return {
        connectDropTarget: connect.dropTarget()
    }
}

class Container extends React.Component{
    render() {
        const { connectDropTarget } = this.props
        const { cards } = this.props
        let displayCards = null
        if(cards){
            displayCards = cards.map(card => {
                return <Card
                    key={card.id}
                    id={`${card.id}`}
                    text={card.text}
                    index={cards.indexOf(card)}
                    listId={this.props.listId}
                    moveCard={this.props.onCardMovedInList}
                    findCard={this.findCard}
                />;
            })
        }

        return connectDropTarget(
            <div className={styles.List}>
                <h4>{this.props.listName}</h4>
                {displayCards}
                <InputCard createNewCard={this.props.onCardAdded} 
                    cards={this.props.cards} 
                    listId={this.props.listId}/>
            </div>
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
        onCardMovedInList: (originalListId, newListId, currentIndex, newIndex, card) => dispatch(listActions.moveCardInList(originalListId, newListId, currentIndex, newIndex, card))

    }
}

export default DropTarget(Types.ITEM, cardTarget, collectDrop)(connect(null, mapDispatchToProps)(Container))