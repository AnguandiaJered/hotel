import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ErrorPage from './components/ErrorPage';
import Sidebar from './components/Sidebar';
import {Client} from './pages/Client';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/client' component={Client} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
