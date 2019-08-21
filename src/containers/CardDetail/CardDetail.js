import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './CardDetail.module.css';

import Aux from '../../hoc/Aux';
import Description from './Description/Description';
import Comments from './Comments/Comments';

import Web from '@material-ui/icons/Web';
import Close from '@material-ui/icons/Close';

class CardDetail extends Component {

    render(){

        let card = this.props.cards.find( card => card.id === this.props.match.params.id);
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
                <button className={styles.closeButton} onClick={back} href="#"><Close className={styles.Close} style={{ fontSize: 26 }}/></button>
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
                        <Description/>
                        <Comments commentIds={card.comments} cardId={card.id}/>
                    </div>
                    <div className={styles.windowSidebar} >
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        lists: state.lists,
        cards: state.cards
    };
}

export default connect(mapStateToProps)(CardDetail);