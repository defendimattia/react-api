import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const endpoint = "https://www.freetestapi.com/api/v1/actresses"


function App() {

  const [actressList, setActressList] = useState([])

  useEffect(() => {
    axios.get(endpoint)
      .then(res => setActressList(res.data))
  }, [])

  return (
    <>
      <h1>Lista attrici</h1>
      <ul>
    {actressList.map(actress => console.log(actress))}
      </ul>
    </>
  )
}

export default App
