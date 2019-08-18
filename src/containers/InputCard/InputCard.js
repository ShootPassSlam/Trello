import React, {Component} from 'react';

import styles from './InputCard.module.css';
import Clear from '@material-ui/icons/Clear';

class InputCard extends Component{
    state={
        cardName: "",
        inputActive: false
    }

    handleChange = event => {
        this.setState({cardName: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.createNewCard(this.state.cardName, this.props.listIndex);
        this.setState({cardName: ""});
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
        const formIsValid = this.state.cardName.length > 0
        const listText = this.props.cards ? '+ Add another card' : '+ Add a card';
        let form  = (
                <div ref={node => { this.wrapperRef = node; }} className={styles.InputCard}>
                    <form onSubmit={this.handleSubmit}>
                        <textarea ref={inputEl => { this.inputRef = inputEl; }} type="text" value={this.state.cardName} onChange={this.handleChange} placeholder="Enter card title..."/>
                        <div className={styles.Buttons}>
                            <button className={styles.FormAcceptButton} disabled={!formIsValid}>Add Card</button>
                            <button className={styles.FormCancelButton} type="button" onClick={this.inputInactiveHandler}><Clear className={styles.Cancel}/></button>
                        </div>
                    </form>
                </div>   
        );

        if(!this.state.inputActive){
            form = (
                <button className={styles.InputCardButton} onClick={this.inputActiveHandler}>{listText}</button>
            );
        }

        return form;
    }
}

export default InputCard;