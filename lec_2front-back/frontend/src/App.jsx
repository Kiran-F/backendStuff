import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios' 
//axios for making web request. how data is being received, being loaded, how it's handled, what if we want to add something

// cors error:
// cors provide safety to your application. cors(cross origin resource sharing)
// if url is different or cors different -> cross origin (origin not same)
// Origins for backend and frontend are different. we can whitelist the url of frontend to fix this issue.
// localhost and in production, the ports can be different and how they are being handled are different as well.
function App() {
  const [jokes, setJokes]=useState([]);
  useEffect(() => {
    axios.get('/api/jokes') //axios also handle the conversion of data into json format
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    <>
      <h2>Connecting frontend and backend...</h2>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App


// Whitelisting in backend development is a security rule where you make a list of safe, 
// approved things (like web addresses, user roles, or data inputs). 
// Your server blocks everything else by default. 
// Think of it like a VIP guest list at a club: only the names on the list get in, 
// and everyone else is turned away