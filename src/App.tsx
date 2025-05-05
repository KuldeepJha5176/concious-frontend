
import React from 'react'
import { Button } from './components/button'
function App() {
  return (
    <div>
      <Button variant="primary" onClick={() => alert("Hello")}>
        Hello
      </Button>
    </div>
  )
}

export default App
