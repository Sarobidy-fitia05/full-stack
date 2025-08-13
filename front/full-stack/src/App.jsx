import { useState } from 'react'
import Table from './composant/Table'
import Form from './composant/Form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form/>
    </>
  )
}

export default App
