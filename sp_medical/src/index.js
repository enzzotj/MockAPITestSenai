import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect ,Route, BrowserRouter as Router, Switch } from 'react-router-dom';


import './index.css';


import Home from './pages/login/App';
import Administrador from './pages/administrador/Administrador'
import Medico from './pages/medico/Medico'
import NotFound from './pages/notFound/NotFound'
import Paciente from './pages/paciente/Paciente'


import reportWebVitals from './reportWebVitals';

const routing = (

  <Router>
   <div>
      <Switch>
        <Route exact path="/" component={Medico}/>
        <Route path="/administrador" component={Administrador}/>
        <Route path="/medico" component={Medico}/>
        <Route path="/paciente" component={Paciente}/>
        <Route path="/notfound" component={NotFound}/>
        <Redirect to="/notfound"/>
      </Switch>
   </div>
  </Router>

)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
