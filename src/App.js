import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

import Usuarios from './components/Usuarios/Usuarios'
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario';
import Home from './components/home/Home';
import NotFount from './components/shared/NotFound';

function App() {
  return (
   <Router>
      <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact>Inicio</NavLink>
              </li>
            <li>
              <NavLink to="/usuarios">Usuário Cadastrado</NavLink>
              </li>
            <li>
              <NavLink to="/adicionar">Adicionar Usuário</NavLink>
              </li>           
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path='/usuarios'>
           <Usuarios />
          </Route>
          <Route path='/adicionar'>
            <AdicionarUsuario />
          </Route>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='*'>
            <NotFount />
          </Route>
        </Switch>
      </main>
    </div>
   </Router>
  );
}

export default App;
