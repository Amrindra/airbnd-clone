import Home from "./Pages/Home";
import Header from "./components/Header";
import SearchPage from "./Pages/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
