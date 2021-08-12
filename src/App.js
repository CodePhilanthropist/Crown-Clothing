import Homepage from "./pages/homepage/homepage.component";
import "./App.css";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hat" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
