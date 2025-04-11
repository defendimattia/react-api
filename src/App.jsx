import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import Card from "./assets/Card"
import './App.css'

const actressndpoint = "https://www.freetestapi.com/api/v1/actresses"


function App() {

  const [actressList, setActressList] = useState([])

  useEffect(() => {
    axios.get(actressndpoint)
      .then(res => setActressList(res.data))
  }, [])

  return (
    <>
      <h1>Lista attrici</h1>
      <div className="container">
        <ul >
          {actressList.map(actress => <Card key={actress.id} />)}
        </ul>
      </div>

    </>
  )
}

export default App
