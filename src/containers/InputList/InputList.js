import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as listActions from '../../store/actions/lists';

import styles from './InputList.module.css';
import Clear from '@material-ui/icons/Clear';

class InputList extends Component{
    state={
        listName: "",
        inputActive: false
    }

    handleChange = event => {
        this.setState({listName: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        const newList = {
            text: this.state.listName
        }
        this.props.onListAdded(newList);
        this.setState({listName: ""});
    }

    inputActiveHandler = () => {
        this.setState({inputActive: true});
    }

    inputInactiveHandler = () => {
        this.setState({inputActive: false});
    }

    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({inputActive: false});
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    
    componentDidUpdate(){
        if(this.state.inputActive){
            this.inputRef.focus();
        }
    }

    render (){
        const formIsValid = this.state.listName.length > 0
        const listText = this.props.listCounter > 0 ? '+ Add another list' : '+ Add a list';
        let form  = (
                    <div ref={node => { this.wrapperRef = node; }} className={styles.InputList}>
                        <form onSubmit={this.handleSubmit}>
                            <input ref={inputEl => { this.inputRef = inputEl; }} type="text" value={this.state.listName} onChange={this.handleChange} placeholder="Enter list title..."/>
                            <div className={styles.Buttons}>
                                <button className={styles.FormAcceptButton} disabled={!formIsValid}>Add List</button>
                                <button className={styles.FormCancelButton} type="button" onClick={this.inputInactiveHandler}><Clear className={styles.Cancel}/></button>
                            </div>
                        </form>
                    </div>
            );

        if(!this.state.inputActive){
            form = (
                <button className={styles.InputListButton} onClick={this.inputActiveHandler}>{listText}</button>
            );
        }
        return form;
    }
}

const mapStateToProps = state => {
    return {
        listCounter: state.listCounter,
    };
}

const mapDispatchToProps= dispatch => {
    return {
        onListAdded: (newList) => dispatch(listActions.addListToDatabase(newList)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InputList);