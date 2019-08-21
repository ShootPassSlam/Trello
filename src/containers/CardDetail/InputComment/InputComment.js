import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as listActions from '../../../store/actions/lists';
import Aux from '../../../hoc/Aux';

import styles from './InputComment.module.css';
import Close from '@material-ui/icons/Close';

class InputComment extends Component{
    state={
        commentText: "",
        inputActive: false
    }

    handleChange = event => {
        this.setState({commentText: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onUpdateComment(this.props.commentIndex, this.state.commentText);
        this.setState({inputActive: false});
    }

    inputActiveHandler = () => {
        this.setState({inputActive: true},() => {
            this.inputRef.select();
        });
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
        this.setState({commentText: this.props.comment.text});
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    render (){
        const formIsValid = this.state.commentText.length > 0
        const placeholder = this.props.comment ? "": "You haven't typed anything!";
        let form  = (
                <div ref={node => { this.wrapperRef = node; }} className={styles.commentsContainer}>
                    <form onSubmit={this.handleSubmit}>
                        <div className={styles.commentFrame}>
                            <div className={styles.commentBox}>
                                <textarea ref={inputEl => { this.inputRef = inputEl; }} type="text" className={styles.commentBoxInput} value={this.state.commentText} onChange={this.handleChange} placeholder={placeholder}/>
                                <div className={styles.confirmationButtons}>
                                    <button className={styles.FormAcceptButton} disabled={!formIsValid}>Save</button>
                                    <a className={styles.closeButton} onClick={this.inputInactiveHandler}><Close className={styles.Close} style={{ fontSize: 26 }}/></a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>   
        );

        if(!this.state.inputActive){
            form = (
                <Aux>
                    <div className={styles.commentContainer}>
                        <div className={styles.comment}>{this.props.comment.text}</div>
                    </div>
                    <div className={styles.buttons}>
                        <a onClick={this.inputActiveHandler}>Edit</a>
                        <span>-</span>
                        <a>Delete</a>
                    </div>   
                </Aux>
            );
        }

        return form;
    }
}

const mapDispatchToProps= dispatch => {
    return {
        onUpdateComment: (commentIndex, commentText) => dispatch(listActions.updateComment(commentIndex, commentText)),
    }
}

export default connect(null, mapDispatchToProps)(InputComment);