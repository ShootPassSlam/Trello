import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as listActions from '../../../store/actions/lists';
import styles from './Comments.module.css';

import InputComment  from '../InputComment/InputComment';

import List from '@material-ui/icons/List';

class Comments extends Component {

    render(){
        let comments = null;
        if(this.props.commentIds){
            comments = this.props.commentIds
                .map( commentId => {
                    let comment = this.props.comments.find( comment => comment.id === commentId);
                    return (
                        <li className={styles.commentListItem} key={commentId}>
                            <div className={styles.commentAuthorIcon}>{comment.user.charAt(0)}</div>
                            <div className={styles.commentInfo}>
                                <span className={styles.commentAuthor}>{comment.user} </span>
                                <span className={styles.commentDate}>
                                    {new Date(comment.date).toLocaleString(undefined, {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit',
                                    })}
                                </span>
                            </div>
                            <InputComment 
                                comment={comment} 
                                commentIndex={this.props.comments.indexOf(comment)} 
                                cardId={this.props.cardId}
                                handleDelete={this.props.onDeleteComment}
                                newComment={false}/>
                        </li>
                    );
                });
        }

        return( 
            <div>
                <div className={styles.commentsContainer}>
                    <span><List className={styles.commentIcon} style={{ fontSize: 24 }}/></span>
                    <div className={styles.commentTitle}>
                        <h3>Activity</h3>
                    </div>
                    <span className={styles.commentUserIcon}>P</span>
                    <InputComment 
                        cardId={this.props.cardId}
                        newComment={true}/>
                </div>
                <ul className={styles.comments}>
                    {comments}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments
    };
}

const mapDispatchToProps= dispatch => {
    return {
        onDeleteComment: (commentIndex, cardId) => dispatch(listActions.deleteComment(commentIndex, cardId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);