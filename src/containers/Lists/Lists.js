import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import * as listActions from '../../store/actions/lists';

import styles from './Lists.module.css';
import List from '../List/List';
import InputList from '../InputList/InputList';

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

    findListHandler = (list) => {
        return this.props.lists.indexOf(list);
    };

    render(){
        const { connectDropTarget} = this.props
        const displayLists = this.props.lists.map( (list, key) => {
                return <List 
                    key={key}
                    listIndex={key}
                    listName={list.text}
                    list ={list}
                    findList={this.findListHandler}
                    listMove={this.props.onListMoved}
                    />;
            })

        return connectDropTarget(
            <div className={styles.Lists}>
                {displayLists}
                <InputList/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        lists: state.lists
    };
}

const mapDispatchToProps= dispatch => {
    return {
        onListMoved: (originalListIndex, newListIndex) => dispatch(listActions.moveList(originalListIndex, newListIndex))
    }
}

export default DragDropContext(HTML5Backend)(
    DropTarget(Types.LIST, listTarget, collectDropList)(
        connect(mapStateToProps, mapDispatchToProps)(Lists)
    )
)