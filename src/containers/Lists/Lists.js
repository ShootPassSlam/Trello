import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Lists.module.css';
import List from '../List/List';
import InputList from '../InputList/InputList';
import * as listActions from '../../store/actions/lists';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

class Lists extends Component {

    render(){
        const displayLists = Object.keys(this.props.lists).map( listKeys => {
                return <List 
                    key={listKeys}
                    listId={listKeys} 
                    listName={this.props.lists[listKeys].name} 
                    cards={this.props.lists[listKeys].cards}
                    lists={this.props.lists}/>;
            })

        return(
            <div className={styles.Lists}>
                {displayLists}
                <InputList createNewList={this.props.onListAdded} lists={this.props.lists}/>
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
        onListAdded: (listName, lists) => dispatch(listActions.addList(listName, lists))
    }
}

export default DragDropContext(HTML5Backend)(connect(mapStateToProps, mapDispatchToProps)(Lists));