import { useState, useEffect } from 'react'
import './App.css'
import firebase from './firebase/config'
import HomePage from './pages/home/HomePage'
import Login from './signin/Login'

function App() {
  const [user, setUser] = useState(null)

  // auth 
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  })


  return (
    // making sure the user loges in before having access to the 
    //  the website and the services 
   <div className='app'>
     {user ? <HomePage user={user}/> : <Login/> }

   </div>
  )
}

export default App
