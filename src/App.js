import Header from "./Components/Header/header";
import Home from "../src/Components/Homepage/home";
import Footer from "./Components/Footer/footer";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Services from "../src/Components/Services/services"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/services' element={<Services />}/>
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
