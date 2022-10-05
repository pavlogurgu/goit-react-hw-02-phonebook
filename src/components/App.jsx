import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { Buttons } from './Buttons/Buttons';
import { AppPart } from './Buttons/Buttons.styled';


export class App extends Component {
  state = {
    contacts: [],
    name: ''
  };
  btnText = {
    addBtnText: 'Add Contact'
  }

  onAddContact = contact => {
    this.state.contacts.push(contact)
  };

 

  render() {
    const { contacts, name } = this.state;

   

    const options = Object.values(this.btnText);



    return (
      <AppPart>
        <h1>Add your contacts</h1>

          <Contacts
            contacts={contacts}
            name={name}
         
          />
          <Buttons
          options={options}
          onAddContact={this.onAddContact}
        />
      </AppPart>
    );
  }
}


