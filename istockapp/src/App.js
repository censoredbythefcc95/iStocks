import './App.css';

//import Components and Route
import { Route, Switch } from "react-router-dom";
import Home from "./pages/homepage";
import About from "./pages/aboutpage";
import Dashboard from "./pages/dashboard";
import Stock from "./pages/stock";
import Navigation from "./components/navigation";
import Stocks from "./pages/stocks";

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
     <Route path="/stocks">
       <Stocks />
     </Route>
     <Route 
        path="/stock/:symbol"
        render={(routerProps) => 
          <Stock {...routerProps} />}
          />
       </Switch>
    </div>
  );
}

export default App;
