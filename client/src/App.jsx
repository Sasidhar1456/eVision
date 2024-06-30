
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Admin from './Admin'
import Forget from './Components/Forget'
import { Toaster } from 'react-hot-toast';

function App() {


  return (
    <>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/admin/*' element={<Admin />} />
        <Route path="/forget" element={<Forget />} />

      </Routes>
      <div><Toaster
        position="top-center"
        reverseOrder={true}
      /></div>
    </>
  )
}

export default App
