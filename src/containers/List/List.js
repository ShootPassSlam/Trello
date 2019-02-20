import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './List.module.css';
import Card from '../../components/Card/Card';
import InputCard from '../InputCard/InputCard';
import * as listActions from '../../store/actions/lists';

class List extends Component {

    render(){
        const displayCards = this.props.cards.map((cardName, index)=> {
            return <Card key={cardName+index} cardName={cardName}/>
        })

        return(
           <div className={styles.List}>
                <h4>{this.props.listName}</h4>
                {displayCards}
                <InputCard createNewCard={this.props.onCardAdded} cards={this.props.cards} list={this.props.listName}/>
            </div>
        );
    }
}

const mapDispatchToProps= dispatch => {
    return {
        onCardAdded: (cardName, listName) => dispatch(listActions.addCard(cardName, listName))
    }
}

export default connect(null, mapDispatchToProps)(List);