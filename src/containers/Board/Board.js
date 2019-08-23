import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/lists';

import styles from './Board.module.css';
import BoardTitle from '../../components/BoardTitle/BoardTitle';
import Topbar from '../../components/Topbar/Topbar';
import Lists from '../Lists/Lists';
import Aux from '../../hoc/Aux';

class Board extends Component {
    componentDidMount(){
        this.props.onInitBoards();
        this.props.onInitCard();
    }

    render(){
        return(
        <Aux>
            <Topbar />
            <div className={styles.Board}>
                <BoardTitle/>
                <Lists/>
            </div>
        </Aux>    
        );
    }
}

const mapDispatchToProps= dispatch => {
    return {
        onInitBoards: () => dispatch(actions.initBoards()),
        onInitCard: () => dispatch(actions.initCard())
    }
}

export default connect(null, mapDispatchToProps)(Board);