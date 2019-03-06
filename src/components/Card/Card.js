import * as React from 'react'
import { DragSource, DropTarget} from 'react-dnd'

import styles from './Card.module.css';
import Edit from '@material-ui/icons/Edit';

const Types = {
    CARD: 'card'
}

const cardSource = {
    beginDrag(props) {
        return {
            id: props.id,
            originalIndex: props.index,
            originalListId: props.listId
        }
    },

    endDrag(props, monitor) {
        const { id: droppedId, originalIndex, originalListId} = monitor.getItem()
        const didDrop = monitor.didDrop()

        if (!didDrop) {
            const { card, draggedIndex, draggedListId } = props.findCard(droppedId)
            props.moveCard(draggedListId, originalListId, draggedIndex, originalIndex, card)
        }
    },
}

const cardTarget = {
    canDrop() {
        return false
    },

    hover(props, monitor) {
        const { id: draggedId} = monitor.getItem()
        const { id: hoverId, index: hoverIndex, listId: hoverListId} = props

        if (draggedId !== hoverId) {
            const { card, draggedIndex, draggedListId } = props.findCard(draggedId)
            props.moveCard(draggedListId, hoverListId, draggedIndex, hoverIndex, card)
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

class Card extends React.Component {

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
        const { text, isDragging, connectDragSource, connectDropTarget, item} = this.props
        let editIcon = (this.state.isHovered && !item) ? styles.FormEdit : styles.FormHidden
        let className = styles.CardContainer
        let classCard = styles.Card
        let height

        if(isDragging){
            className=styles.CardDragging
            classCard = styles.CardDragging
            height = this.myElement.clientHeight
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
                    <div className={classCard}>{text}</div>
                    <span className={editIcon}><Edit className={styles.Edit} style={{ fontSize: 20 }}/></span>
                </div>)
        )
    }
}

export default DropTarget(Types.CARD, cardTarget, collectDrop)(DragSource(Types.CARD, cardSource, collectDrag)(Card))