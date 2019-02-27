import React, { Component } from 'react';
import styles from './CardDrop.module.css';

import { DropTarget } from 'react-dnd'

const Types = {
    ITEM: 'card'
}

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOverCurrent: monitor.isOver({ shallow: true })
    }
}


const box = {
    drop( props, monitor, component: React.Component | null) {
        if (!component) {
            return
        }
        const droppedList = props.droppedList;
        return ({
            droppedList
        });

    }
}

class CardDrop extends Component {
    state={
        hasDropped: false
    }

    render() {
        const {isOverCurrent, connectDropTarget} = this.props

        return connectDropTarget(
            <div>
                HELLO DUDE
            </div>
        )
    }
}
export default DropTarget(Types.ITEM, box, collect)(CardDrop)