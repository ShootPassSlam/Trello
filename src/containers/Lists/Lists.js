import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Lists.module.css';
import List from '../List/List';
import InputList from '../InputList/InputList';
import * as listActions from '../../store/actions/lists';

class Lists extends Component {

    render(){
        const displayLists = Object.keys(this.props.lists).map( listKeys => {
                return <List 
                    key={listKeys} 
                    listName={listKeys} 
                    cards={this.props.lists[listKeys]}/>;
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
        onListAdded: (listName) => dispatch(listActions.addList(listName)),
        onListRemoved: (listName) => dispatch(listActions.removeList(listName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);