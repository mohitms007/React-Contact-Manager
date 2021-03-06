import React, {Component} from 'react';
import Header from './Components/layout/Header'
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './Components/contacts/Contacts'
import AddContact from './Components/contacts/AddContact'
import {Provider} from './context'
import NotFound from './Components/pages/NotFound'
import About from './Components/pages/About';
import Test from './Components/test/Test'
import EditContact from './Components/contacts/EditContact'
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
                        <Route exact path="/contact/edit/:id" component = {EditContact}/>
                        <Route exact path="/about" component = {About}/>
                        <Route exact path="/test" component = {Test}/>
                        <Route component={NotFound}/>
                    </Switch>
                    </div>               
                </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
