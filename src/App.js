import Header from './components/Header';
import AddContacts from './components/AddContacts';
import ContactList from './components/ContactList';

function App() {
  return (
    <div style={{display:"flex",
     justifyContent: "center",
     flexDirection: "column",
     alignItems: "center",
    }}>
      <Header/>
      <AddContacts/>
      <ContactList/>
    </div>
  );
}

export default App;
