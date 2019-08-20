import React, { Component } from 'react';
import styles from './CardDetail.module.css';
import Aux from '../../hoc/Aux';
import {Redirect} from 'react-router-dom';

import { connect } from 'react-redux';
import * as listActions from '../../store/actions/lists';

import Web from '@material-ui/icons/Web';
import Close from '@material-ui/icons/Close';
import Subject from '@material-ui/icons/Subject';

class CardDetail extends Component {

    render(){

        let card = this.props.cards.find( card => card.id == this.props.match.params.id);
        if(!card){
            return <Redirect to="/" />;  
        }
        let list = this.props.lists[card.listIndex];  

        const back = e => {
            e.stopPropagation();
            this.props.history.goBack();
        };

        return(
            <Aux>
                <a className={styles.closeButton} onClick={back}><Close className={styles.Close} style={{ fontSize: 26 }}/></a>
                <div>
                    <div className={styles.windowHeader}>
                        <span><Web className={styles.windowHeaderIcon} style={{ fontSize: 24 }}/></span>
                        <div className={styles.windowTitle}>
                            <h2>{card.title}</h2>
                        </div>
                        <div className={styles.windowHeaderList}>
                            in list <span>{list.text}</span>
                        </div>
                    </div>
                    <div className={styles.windowMain}>
                        <div className={styles.gutter}></div>
                        <div className={styles.windowDescription}>
                            <span><Subject className={styles.windowDescriptionIcon} style={{ fontSize: 24 }}/></span>
                            <div className={styles.windowTitle}>
                                <h2>Description</h2>
                            </div>
                            <div>
                                <a className={styles.windowDescriptionField} href="#">Add a more detailed description…</a>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className={styles.windowSidebar} >
                        <div>ADD TO CARD</div>
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        lists: state.lists,
        cards: state.cards,
        comments: state.comments
    };
}

export default connect(mapStateToProps)(CardDetail);