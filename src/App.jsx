import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Componentes
import MainLayout from "./layouts/MainLayout.jsx"
import Banner  from './components/Banner/Banner.jsx'
import Footer from './components/Footer/Footer.jsx'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route
            path="/"
            element={
              <>
                <Banner 
                  Titulo="NUTRICIÓN PARA CAMPEONES" 
                  />
              </>
              }
          />
        </Route>
        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
