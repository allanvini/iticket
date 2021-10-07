import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContextProvider from "./context/userContext";
import Menu from "./components/menu/menu";
import Card from "./components/card/card";
import Home from "./pages/home";
import Sobre from "./pages/sobre";

function App() {
  return (
    <Router>
      <div>
        <UserContextProvider>
          <Menu />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/sobre" component={Sobre} exact />
          </Switch>
        </UserContextProvider>
      </div>
    </Router>
  );
}

export default App;
