import './App.css'

import { useEffect } from 'react'
import toast from 'react-hot-toast'

function App() {

  useEffect(() => {
    toast.success("success");
  },[])

  return (
    <>
      hello
    </>
  )
}

export default App
