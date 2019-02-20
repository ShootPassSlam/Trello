import React, { Component } from 'react';
import styles from './Board.module.css';
import BoardTitle from '../../components/BoardTitle/BoardTitle';
import Lists from '../Lists/Lists';

class Board extends Component {
    render(){
        return(
        <div className={styles.Board}>
            <BoardTitle/>
            <Lists/>
        </div>
        );
    }
}

export default Board;