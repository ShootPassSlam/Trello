import * as React from 'react'
import { DragSource, DropTarget} from 'react-dnd'

import './Card.css';

const Types = {
    ITEM: 'card'
}

const cardSource = {
    beginDrag(props) {
        console.log("BEGIN DRAG PROPS:")
        console.log("ID:", props.id)
        console.log("ORIGINAL INDEX:", props.index)
        console.log("ORIGINAL LIST:", props.listId)
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
            props.moveCard(originalListId, droppedId, originalIndex)
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

const collectDrop = (connect) => {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

const collectDrag = (connect, monitor) =>{
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Card extends React.Component {
    render() {
        const { text, isDragging, connectDragSource, connectDropTarget } = this.props
        let className = "Card"
        let height
        if(isDragging){
            className="CardDragging"
            height = this.myElement.clientHeight
        }

        return connectDragSource(
            connectDropTarget(<div className={className} ref={input => { this.myElement = input; }} style={{height}}>{text}</div>),
        )
    }
}

export default DropTarget(Types.ITEM, cardTarget, collectDrop)(DragSource(Types.ITEM, cardSource, collectDrag)(Card))