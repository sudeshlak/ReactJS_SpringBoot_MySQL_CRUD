import React from 'react';
import './App.css';
import ListEmployee from "./components/ListEmployee";
import {Container} from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import CreateUpdateEmployee from "./components/CreateUpdateEmployee";
import ViewEmployee from "./components/ViewEmployee";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header/>
        <Switch>
          <Route path='/' exact component={ListEmployee}/>
          <Route path='/employees' component={ListEmployee}/>
          <Route path='/CreateEmployee/:id' component={CreateUpdateEmployee}/>
          <Route path='/viewEmployee/:id' component={ViewEmployee}/>
        </Switch>
        <Footer/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
