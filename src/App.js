import Homepage from "./pages/homepage/homepage.component";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/shop.component";
import { Header } from "./components/header/header.component";
import { SignInAndOut } from "./pages/sign-in-sign-out/sign-in-and-out.component";
import { auth } from "./firebase/firebase.utils";
import { Component } from "react";

const HatsPage = (props) => (
  <div>
    <h1>Hats Page</h1>
    <button onClick={() => props.history.push("/tongkoy")}>Click me</button>
  </div>
);

class App extends Component() {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/hat" component={HatsPage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/sign-in" component={SignInAndOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
