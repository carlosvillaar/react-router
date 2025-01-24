import { BrowserRouter, Routes, Route } from "react-router-dom"

//pagine
import DefaultLayout from "./components/DefaultLayout"
import HomePage from "../pages/HomePage"
import AboutUs from "../pages/AboutUs"
import Contacts from "../pages/Contacts"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />}/>
        <Route path="/chi-siamo" element={<AboutUs />}/>
        <Route path="/contatti" element={<Contacts />}/>
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App