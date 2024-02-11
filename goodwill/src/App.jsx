

import React from "react"
import Navbar from "./Components/Navbar"
import Layouts from './Components/Layouts'
import Footer from './Components/Footer'
function App() {


  return (
    <>
      <div className="w-full bg-primary  text-white border-2">
        <Navbar />
        <Layouts />
        <Footer />
      </div>
    </>
  )
}

export default App
