import { useState } from 'react'
import './App.css'

import { Route, Routes, } from 'react-router-dom'
import { Confessions } from './Confessions'
import { Misdemeanour } from './Misdemeanour'
import { NotFound } from './NotFound'

interface RoutesProps {
  children?: React.ReactNode;
  location?: Partial<Location> | string;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      {/* Seperate out? */}
      <Routes>
        <Route path="/">
          <Route
            path="confessions"
            element={<Confessions />}
          />
          <Route path="misdemeanour" element={< Misdemeanour />} />
          <Route path="*" element={< NotFound />} />
        </Route>
      </Routes>
      {/* Seperate out? */}

    </div>
  )
}

export default App
