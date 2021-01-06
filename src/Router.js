import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import Home from './Home/screen';
import Login from './Login/screen';

class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="login">
            <Scene key="loginMain" component={Login} hideNavBar initial />
          </Scene>
          <Scene key="main">
            <Scene key="home" component={Home} hideNavBar />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
