import React, { Component } from 'react';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import Board from './containers/Board/Board';
import CardDetail from './containers/CardDetail/CardDetail';
import Modal from './components/UI/Modal/Modal';

class App extends Component {

  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    let { location } = this.props;

    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    
    let { location } = this.props;

    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render


    return (
      <div className="App">
        <Switch location={isModal ? this.previousLocation : location}>
            <Route path='/' exact component={Board} />
            <Route path="/card/:id" render={ props => [<Modal {...props} key={1} modalType={CardDetail}/>,<Board {...props} key={2}/>]}/>
        </Switch>
        {isModal ? <Route path="/card/:id" render={ props => <Modal {...props} modalType={CardDetail}/>}/> : null}
      </div>
    );
  }
}

export default App;
