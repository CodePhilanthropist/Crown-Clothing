import Homepage from "./pages/homepage/homepage.component";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/shop.component";
import { Header } from "./components/header/header.component";

const HatsPage = (props) => (
  <div>
    <h1>Hats Page</h1>
    <button onClick={() => props.history.push('/tongkoy')}>Click me</button>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hat" component={HatsPage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
