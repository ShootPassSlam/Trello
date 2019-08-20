import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as listActions from '../../../store/actions/lists';
import styles from './Comments.module.css';

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
                            <div className={styles.commentContainer}>
                                <div className={styles.comment}>{comment.text}</div>
                            </div>
                            <div className={styles.buttons}>
                                <a>Edit</a>
                                <span>-</span>
                                <a>Delete</a>
                            </div>
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
                    <form>
                        <div className={styles.commentFrame}>
                            <div className={styles.commentBox}>
                                <textarea className={styles.commentBoxInput} placeholder="Write a comment…"></textarea>
                            </div>
                        </div>
                    </form>
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

export default connect(mapStateToProps)(Comments);