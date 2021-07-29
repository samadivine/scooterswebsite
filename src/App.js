import NavBar from "./componets/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./componets/Footer/Footer";
import Homme from "./componets/Pages/Home";
import "./App.css";
import About from "./componets/Pages/about/About";
import Location from "./componets/Pages/location/Location";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Homme />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/location">
            <Location />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
