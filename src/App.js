import Homepage from "./pages/homepage/homepage.component";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/shop.component";
import { Header } from "./components/header/header.component";
import { SignInAndOut } from "./pages/sign-in-sign-out/sign-in-and-out.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import React from "react";

const HatsPage = (props) => (
  <div>
    <h1>Hats Page</h1>
    <button onClick={() => props.history.push("/tongkoy")}>Click me</button>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
     
     if(userAuth){
       const userRef = await createUserProfileDocument(userAuth);
       userRef.onSnapshot(snapShot => {
         this.setState({
           currentUser: {
             id: snapShot.id,
             ...snapShot.data()
           }
         });
         
       })
       console.log(this.state);
     }
      
    });
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render() {
    const {currentUser} = this.state;
    return (
      <div className="App">
        <Header currentUser={currentUser}/>
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
