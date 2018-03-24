import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import { Container } from 'reactstrap';

import Header from './Header';
import Sidebar from './Sidebar';
import Aside from './Aside';
import Footer from './Footer';

import Dashboard from '../../../routes/Dashboard';

class PrivateApp extends React.Component {
  componentDidMount() {
    this.props.loadProfile();
  }

  render() {
    const { loading, currentUser } = this.props;

    if(loading) {
      return <div>loading...</div>
    }

    return (
      <div className="app">
        <Header user={currentUser} logout={this.props.logoutUser} />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Container fluid>
              <Switch>
                <Route exact path="/" name="Dashboard" component={Dashboard}/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default PrivateApp;
