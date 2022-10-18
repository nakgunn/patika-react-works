import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css"
function Contacts() {
  const [contacts, setContacts] = useState([
    {fullname: 'Necati Akgün', phone_number: '5549817787'},
    {fullname: 'Tuğrul Orhan', phone_number: '5548887799'},
    {fullname: 'Can Çiçek', phone_number: '5546667799'}
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
