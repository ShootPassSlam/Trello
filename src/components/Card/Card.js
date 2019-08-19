import React, { Component } from 'react';
import { DragSource, DropTarget} from 'react-dnd'
import {Link} from 'react-router-dom';

import styles from './Card.module.css';
import Edit from '@material-ui/icons/Edit';


const Types = {
    CARD: 'card'
}

const cardSource = {
    beginDrag(props) {
        return {
            originalCard: props.card,
            originalCardIndex: props.cardIndex,
            originalListIndex: props.listIndex
        }
    },

    endDrag(props, monitor) {
        const {originalCardIndex, originalListIndex, originalCard} = monitor.getItem()
        const didDrop = monitor.didDrop()

        if (!didDrop) {
            const { card, draggedCardIndex, draggedListIndex } = props.findCard(originalCard)
            props.cardMove(draggedListIndex, originalListIndex, draggedCardIndex, originalCardIndex, card)
        }
    },
}

const cardTarget = {
    canDrop() {
        return false
    },

    hover(props, monitor) {
        const { originalCard } = monitor.getItem()
        const { cardIndex: hoverCardIndex, listIndex: hoverListIndex, card: hoverCard} = props

        if (originalCard !== hoverCard) {
            const { card, draggedCardIndex, draggedListIndex } = props.findCard(originalCard)
            props.cardMove(draggedListIndex, hoverListIndex, draggedCardIndex, hoverCardIndex, card)
        }
    },
}

const collectDrop = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        item: monitor.getItem()
    }
}

const collectDrag = (connect, monitor) =>{
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Card extends Component {

    state = {
        isHovered: false
    }

    mouseIn = () => {
        this.setState( (prevState) => {return {isHovered: true};});
    }

    mouseOut = () => {
        this.setState( (prevState) => {return {isHovered: false};});
    }

    render() {
        const { title, isOver, connectDragSource, connectDropTarget, item} = this.props
        let editIcon = (this.state.isHovered && !item) ? styles.FormEdit : styles.FormHidden;
        let className = styles.CardContainer;
        let classCard = styles.Card;
        let height

        if(item && item.originalCard === this.props.card && isOver){
            className = styles.CardDragging
            classCard = styles.CardDragging
            height = 50
            editIcon = styles.NoCardsPlaceholder
        }

        if(this.props.isEmptyList){
            className=styles.NoCardsPlaceholder
        }
        if(this.props.isEmptyList && this.props.isOver){
            className=styles.NoCardsPlaceholderDragging
        }

        return connectDragSource(
            connectDropTarget(
                <div 
                    className={className} 
                    ref={input => { this.myElement = input; }} 
                    onMouseEnter={this.mouseIn} 
                    onMouseLeave={this.mouseOut} 
                    style={{height}}>
                    <Link
                        to={{
                            pathname: `/card/${title}`,
                            state: { 
                                modal: true,
                                cardId: this.props.id,
                                listId: this.props.listId
                            }
                        }} 
                    style={{ textDecoration: 'none', color: 'black' }}>
                        <div className={classCard}>{title}</div>
                        <span className={editIcon}><Edit className={styles.Edit} style={{ fontSize: 20 }}/></span>
                    </Link>
                </div>)
        )
    }
}


export default DropTarget(Types.CARD, cardTarget, collectDrop)(
    DragSource(Types.CARD, cardSource, collectDrag)(Card) 
)