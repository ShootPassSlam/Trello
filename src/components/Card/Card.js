import React from 'react';
import styles from './Card.module.css';

const card = (props) => (
    <div className={styles.Card}>{props.cardName}</div>
);

export default card;