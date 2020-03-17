import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom'
import Home from './Screens/Home'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
