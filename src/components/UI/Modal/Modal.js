import React, {Component} from 'react';
import styles from './Modal.module.css';

import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

import { connect } from 'react-redux';

class Modal extends Component {

    render(){

        const back = e => {
            e.stopPropagation();
            this.props.history.goBack();
        };

        return(
            <Aux>
                <Backdrop show = {true} clicked={back}/>
                <div 
                    className = {styles.Modal}
                    style={{
                        transform: true ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: true ? '1' : '0'
                    }}>
                    <h1>MODAL</h1>
                    <button type="button" onClick={back}>
                      Close
                    </button>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        card: state.lists
    };
}

export default connect(mapStateToProps)(Modal);