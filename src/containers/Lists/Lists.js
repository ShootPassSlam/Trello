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
        const displayLists = this.props.lists.map( list => {
                return <List 
                    key={list.listId}
                    index={list.listId}
                    listId={list.listId}
                    listName={list.text}
                    list={list}
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

export default DragDropContext(HTML5Backend)(
    DropTarget(Types.LIST, listTarget, collectDropList)(
        connect(mapStateToProps)(Lists)
    )
)