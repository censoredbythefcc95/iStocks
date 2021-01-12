import logo from './logo.svg';
import './App.css';

//import Components and Route
import { Route, Switch } from "react-router-dom";
import Home from "./pages/homepage";
import About from "./pages/aboutpage";
import Dashboard from "./pages/dashboard";
import Stock from "./pages/stock";
import Navigation from "./components/navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
     <Route exact path="/">
       <Home />
     </Route>
     <Route path="/about">
       <About />
     </Route>
     <Route path="/dashboard">
       <Dashboard />
     </Route>
     <Route path="/stock">
       <Stock />
       </Route>
       </Switch>
    </div>
  );
}

export default App;
