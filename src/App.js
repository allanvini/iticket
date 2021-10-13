import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useUserContext } from "./context/userContext";

import Menu from "./components/menu/menu";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Cadastro from "./pages/cadastro";
import Login from "./pages/login";

function App() {
  const { userContext } = useUserContext();
  return (
    <Router>
      <div>
          <Menu />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/sobre" component={Sobre} exact />
            {
              !userContext.isLoggedIn  ?
                <>
                  <Route path="/cadastro" component={Cadastro} exact />
                  <Route path="/login" component={Login} exact />
                </>
                :
                <>
                  <Route path="/painel" exact />
                  <Route path="/painel/editar" exact />
                  <Route path="/painel/criar" exact />
                </>
            }
          </Switch>
      </div>
    </Router>
  );
}

export default App;
