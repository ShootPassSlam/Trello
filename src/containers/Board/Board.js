import React, { Component } from 'react';
import styles from './Board.module.css';
import BoardTitle from '../../components/BoardTitle/BoardTitle';
import Topbar from '../../components/Topbar/Topbar';
import Lists from '../Lists/Lists';
import Aux from '../../hoc/Aux';

class Board extends Component {
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

export default Board;