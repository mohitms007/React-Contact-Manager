import React, {Component} from 'react';
import Header from './Components/layout/Header'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './Components/contacts/Contacts'
import AddContact from './Components/contacts/AddContact'
import {Provider} from './context'
import About from './Components/pages/About';
class App extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }
    render() {
        return (
            <Provider>
                <Router>
                <div className="App">
                <Header branding="Contact Manager"/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component = {Contacts}/>
                        <Route exact path="/contact/add" component = {AddContact}/>
                        <Route exact path="/about" component = {About}/>
                    </Switch>
                </div>              
                </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
