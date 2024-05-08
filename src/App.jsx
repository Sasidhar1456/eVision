
import { Routes , Route } from 'react-router-dom'
import Home from './Home'
import Admin from './Admin'
import Forget from './Components/Forget'


function App() {
  

  return (
    <>
      <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/admin/*' element={<Admin />} />
          <Route path="/forget"  element= {<Forget />} />
          
        </Routes> 
    </>
  )
}

export default App
