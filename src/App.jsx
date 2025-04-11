import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import Card from "./assets/Card"
import './App.css'

const actressEndpoint = "https://www.freetestapi.com/api/v1/actresses"
const actorsEndpoint = "https://www.freetestapi.com/api/v1/actors"


function App() {

  const [actressList, setActressList] = useState([])
  const [actorsList, setActorsList] = useState([])

  useEffect(() => {
    axios.get(actressEndpoint)
      .then(res => setActressList(res.data))
    axios.get(actorsEndpoint)
      .then(res => setActorsList(res.data))
  }, [])

  return (
    <>
      <h1>Lista attrici</h1>
      <div className="container">
          {actressList.map(actress => <Card key={actress.id} element={actress}/>)}
      </div>
      <h1>Lista attori</h1>
      <div className="container">
          {actorsList.map(actress => <Card key={actress.id} element={actress}/>)}
      </div>

    </>
  )
}

export default App
