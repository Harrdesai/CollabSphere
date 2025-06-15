import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './page/HomePage'
import LoginPage from './page/login'
import Register from './page/register';

function App() {

  let authUser = null;

  return (
      <div className='flex flex-col items-center justify-start'>
        <Routes>
          <Route path="/" element={authUser ? <HomePage/> : <Navigate to="/login" />} />
          <Route path="/register" element={ !authUser ? <Register/> : <Navigate to="/" />} />
          <Route path="/login" element={ !authUser ? <LoginPage/> : <Navigate to="/" />} />
        </Routes>
      </div>
  )
}

export default App
