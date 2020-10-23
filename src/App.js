import React, {Component} from 'react';
import Header from './Components/Header'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from '../src/Components/Contacts'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header branding="Contact Manager"/>
                <div className="container">
                    <Contacts />
                </div>              
            </div>
        );
    }
}

export default App;
