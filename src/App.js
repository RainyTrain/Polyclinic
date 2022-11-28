import Header from "./Components/Header/header";
import Home from "../src/Components/Homepage/home";
import Footer from "./Components/Footer/footer";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Services from "../src/Components/Services/services"
import "../src/app.scss"
import Specialists from "./Components/Specialists/specialists";
import Contact from "./Components/Contact/contact";
import About from "./Components/About/about";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/services' element={<Services />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/specialists' element={<Specialists />}/>
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
