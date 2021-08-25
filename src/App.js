import Homepage from "./pages/homepage/homepage.component";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import { SignInAndOut } from "./pages/sign-in-sign-out/sign-in-and-out.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import React from "react";

import {connect} from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/sign-in" component={SignInAndOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
