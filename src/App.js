 import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
 import "./styles/App.scss"
import Header from './component/Header'
import Home from './component/Home'
import Contact from './component/Contact'
import Services from './component/Services'
import "./styles/color.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/contact.scss"
import "./styles/media.scss"




function App()  {
  return (
  <Router> 
    <Header/>
<Routes> 
  <Route  path='/' element ={ <Home/>}/> 
  <Route  path='/contact' element ={ <Contact/>}/> 
  <Route  path='/services' element ={ <Services/>}/> 
</Routes>

  </Router>
  )
}

export default   App 