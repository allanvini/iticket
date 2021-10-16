import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useUserContext } from "./context/userContext";

import Menu from "./components/menu/menu";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Cadastro from "./pages/cadastro";
import Login from "./pages/login";
import Painel from './pages/painel';
import Editar from "./pages/editar";
import Criar from "./pages/criar";

function App() {
  const { userContext } = useUserContext();
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/sobre" component={Sobre} exact />
        {
          !userContext.isLoggedIn ?
            <>
              <Route path="/cadastro" component={Cadastro} exact />
              <Route path="/login" component={Login} exact />
            </>
            :
            <>
              <Route path="/painel" component={Painel} exact />
              <Route path="/painel/editar/:id" component={Editar} exact />
              <Route path="/painel/criar" component={Criar} exact />
            </>
        }
      </Switch>
    </Router>
  );
}

export default App;
