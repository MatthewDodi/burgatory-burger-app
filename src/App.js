import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import OrderComplete from './components/Order/OrderComplete/OrderComplete';
import SuccessfulSignIn from './components/UI/SuccessfulSignIn/SuccessfulSignIn';
import Home from './containers/Home/Home';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';



class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignIn();
  }

  render() {

    return (
      <Router>
        <Layout>
          <Switch>
						<Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/order-complete" component={OrderComplete} />
            <Route path="/sign-in" component={Auth} />
            <Route path="/sign-in-successful" component={SuccessfulSignIn} />
            <Route path='/burger-builder' component={BurgerBuilder}/>
            <Route path='/logged-out' component={Home} />
            <Route exact path='/' component={Home}/>
						<Route render={() => <div style={{width: '100%', textAlign: 'center'}}><h1>Oops, You must've taken a wrong turn somewhere! <br /> We know you're hungry, so why not navigate to our <NavLink to="/">Home</NavLink> Page?</h1></div>} />
					</Switch>
        </Layout>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignIn: () => dispatch(actions.authCheckState())
  }
}

export default connect(null, mapDispatchToProps)(App);
