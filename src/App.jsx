import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'


export default function App() {
  return(
    <main>
      <h1>App</h1>

      <Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </main>
  )
}