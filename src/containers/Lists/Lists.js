import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Lists.module.css';
import List from '../List/List';
import InputList from '../InputList/InputList';
import * as listActions from '../../store/actions/lists';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext, DropTarget } from 'react-dnd';

const Types = {
    LIST: 'lists'
}

const listTarget = {
    drop() {}
}

const collectDropList = (connect, monitor) =>{
    return {
        connectDropTarget: connect.dropTarget()
    }
}

class Lists extends Component {

    render(){
        const { connectDropTarget} = this.props
        const displayLists = Object.keys(this.props.lists).map( listKeys => {
                return <List 
                    key={listKeys}
                    index={listKeys}
                    listId={`${this.props.lists[listKeys].id}`} 
                    listName={this.props.lists[listKeys].name} 
                    cards={this.props.lists[listKeys].cards}
                    lists={this.props.lists}
                    findList={this.findList}
                    moveList={this.props.onListMoved}
                    />;
            })

        return connectDropTarget(
            <div className={styles.Lists}>
                {displayLists}
                <InputList createNewList={this.props.onListAdded} lists={this.props.lists}/>
            </div>
        );
    }
    findList = (id) => {
        return Object.keys(this.props.lists).filter(c => `${this.props.lists[c].id}` === id)[0]
    }
}

const mapStateToProps = state => {
    return {
        lists: state.lists
    };
}
const mapDispatchToProps= dispatch => {
    return {
        onListAdded: (listName, lists) => dispatch(listActions.addList(listName, lists)),
        onListMoved: (originalListId, newListId) => dispatch(listActions.moveList(originalListId, newListId))
    }
}

export default DragDropContext(HTML5Backend)(
    DropTarget(Types.LIST, listTarget, collectDropList)(
        connect(mapStateToProps, mapDispatchToProps)(Lists)
    )
)