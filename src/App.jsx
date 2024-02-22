
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
// import BookDetailsPage from './Pages/BookDetailsPage/BookDetailsPage'
import BookDetailsPage from './Pages/BookDetailsPage/BookDetailsPage'

function App() {

  return (
    
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/BookDetailsPage/:id' element={<BookDetailsPage />} />
      
     </Routes>
 
  )
}

export default App
