import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'


export default function App() {
  return(
    <main>
      <h1>App</h1>
      
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />}/>


        <Route path='/*' element={<NotFound />} />
      </Routes>
    </main>
  )
}