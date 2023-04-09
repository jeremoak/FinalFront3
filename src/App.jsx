import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import DentistListcontainer from "./Components/Pages/Dentist/DentistList.container";
import DentistSelectedContainer from "./Components/Pages/DentistSelected/DentistSelected.container";
import ContacUscontainer from "./Components/Pages/ContacUs/ContacUs.container";
import Favsconteiner from "./Components/Pages/Favs/Favs.conteiner";
import NotFound from "./Components/Pages/NotFound/NotFound";
import GlobalContextProvider from "./Context/GlobalContext";
import Footer from "./Components/Layaut/Footer/Footer";
import Navbar from "./Components/Layaut/Navbar/Navbar";


function App() {
    
  return (
  
    <BrowserRouter>
      <GlobalContextProvider>
        <Routes>
          <Route element={<Footer />}>

            <Route path="/" element={<Home />} />

            
              
              <Route path="/dentist" element={<DentistListcontainer />} />
              <Route path="/dentistDetail/:id" element={<DentistSelectedContainer />} />
              <Route path="/contact" element={<ContacUscontainer />} />
              <Route path="/favs" element={<Favsconteiner />} />              
            
            
          </Route>

          <Route path="*" element={<NotFound />} />

        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
    

  )
}

export default App
