import React, { Component } from 'react';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import Board from './containers/Board/Board';
import CardEdit from './containers/CardEdit/CardEdit';
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
            <Route path="/card/:id" component={Modal} />
        </Switch>
        {isModal ? <Route path="/card/:id" component={Modal} /> : null}
      </div>
    );
  }
}

export default App;
