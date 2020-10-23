import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {

 state = {
            contacts: [
                {
                    id: 1,
                    name: "John Doe",
                    email: "jdoe@gmail.com",
                    phone: "884-755-1223"
                    
                },
                {
                    id: 2,
                    name: "Johnson",
                    email: "john@gmail.com",
                    phone: "884-755-1223"
                    
                },
                {
                    id: 3,
                    name: "Mohit Sharma",
                    email: "mohit@gmail.com",
                    phone: "884-755-1223"
                    
                },
            ]
        }
    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {contacts.map(contact => (
                   <Contact key={contact.id} contact={contact} />
                ))}
            </React.Fragment>
        )
    }
}

export default Contacts;