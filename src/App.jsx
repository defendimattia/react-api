import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import Card from "./assets/Card"
import './App.css'

const actressEndpoint = "https://www.freetestapi.com/api/v1/actresses"
const actorsEndpoint = "https://www.freetestapi.com/api/v1/actors"


function App() {

  const [actorsList, setActorsList] = useState([])

  useEffect(() => {
    axios.get(actorsEndpoint)
      .then(res => setActorsList(res.data))
    axios.get(actressEndpoint)
      .then(res => setActorsList(prev => [...prev, ...res.data]))
  }, [])


return (
  <>
    <h1>Lista attori e attrici</h1>
    <div className="container">
      {actorsList.map(actor => <Card key={actor.name.replace(/\s+/g, "-").toLowerCase()} element={actor} />)}
    </div>

  </>
)
}

export default App
