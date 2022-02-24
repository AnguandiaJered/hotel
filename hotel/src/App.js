import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ErrorPage from './components/ErrorPage';
import Sidebar from './components/Sidebar';
import Client from './pages/Client';
import {Chambre,Reservation} from './pages/Chambre';
import ClasseChambre from './pages/ClasseChambre';
import {Fonction,Personne} from './pages/Fonction';
import {PaieConsommation,Paiement} from './pages/PaieConsommation';
import PaieHotel from './pages/PaieHotel';
import PaieSalle from './pages/PaieSalle';
import Personnel from './pages/Personnel';
import ReservationChambre from './pages/ReservationChambre';
import ReservationSalle from './pages/ReservationSalle';
import {Salle,Reserves} from './pages/Salle';
import Service from './pages/Service';
import {Parametre,Utilisateur} from './pages/Utilisateur';
import Affectation from './pages/Affectation';
import Login from './components/Login';



function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/client' component={Client} />
        <Route path='/chambre' component={Chambre} />
        <Route path='/reservation' component={Reservation} />
        <Route path='/classechambre' component={ClasseChambre} />
        <Route path='/salle' component={Salle} />
        <Route path='/salles' component={Reserves} />
        <Route path='/reservationchambre' component={ReservationChambre} />
        <Route path='/reservesalle' component={ReservationSalle} />
        <Route path='/agents' component={Personnel} />
        <Route path='/fonction' component={Fonction} />
        <Route path='/personnel' component={Personne} />
        <Route path='/consommation' component={PaieConsommation} />
        <Route path='/paiement' component={Paiement} />
        <Route path='/paiehotel' component={PaieHotel} />
        <Route path='/paiesalle' component={PaieSalle} />
        <Route path='/service' component={Service} />
        <Route path='/parametre' component={Parametre} />
        <Route path='/users' component={Utilisateur} />
        <Route path='/affectation' component={Affectation} />
        <Route path='/login' component={Login} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
