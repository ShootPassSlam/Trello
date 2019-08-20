import React, {Component} from 'react';
import styles from './Modal.module.css';

import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

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
                    <this.props.modalType {...this.props}/>
                </div>
            </Aux>
        );
    }
}

export default Modal;