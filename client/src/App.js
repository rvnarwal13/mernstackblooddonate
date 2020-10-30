import React, {Component} from 'react';
import AppNavbar from './components/AppNavbar';
import BloodDonate from './components/BloodDonate';
import {Container} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Container>
      <BloodDonate />
      </Container>
    </div>
  );
}

export default App;
