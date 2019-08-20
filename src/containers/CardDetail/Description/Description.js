import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as listActions from '../../../store/actions/lists';
import styles from './Description.module.css';

import Subject from '@material-ui/icons/Subject';

class Description extends Component {

    render(){
        return(
            <div className={styles.description}>
                <span><Subject className={styles.descriptionIcon} style={{ fontSize: 24 }}/></span>
                <div className={styles.descriptionTitle}>
                    <h3>Description</h3>
                </div>
                <div>
                    <a className={styles.descriptionField} href="#">Add a more detailed description…</a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lists: state.lists,
        cards: state.cards,
        comments: state.comments
    };
}

export default connect(mapStateToProps)(Description);