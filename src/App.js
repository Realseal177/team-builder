import React, { useState, useEffect} from 'react'
import Form from './Form'
import People from './People'
import axios from './axios'
import './App.css'

const initialFormValues = {
  username: '', 
  email: '',
  role: '',
}

function App() {
  const [people, setPeople] = useState([]);
  const [formValues, setFormValues] = useState([initialFormValues]);
  //const [error, setError] = useState('');

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newFriend = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
      
    }
    setPeople(newFriend);  
  }

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setPeople(res.data))
  }, [])

  return (
    <div className="App">
        <h1>Form App</h1>
        
        <Form 
          values={formValues}
          update={updateForm}
          submit={submitForm}
        />
        
        
        <People key={people.id} details={people}/>
          
    </div>
  );
}

export default App;
