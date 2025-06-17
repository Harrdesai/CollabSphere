import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './page/HomePage'
import LoginPage from './page/login'
import Register from './page/register';
import { useAuthStore } from './store/useAuthStore';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

function App() {

  const { authUser, checkAuth, isCheckingAuth } = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if(isCheckingAuth && !authUser) {
    
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="size-10animate-spin" />
      </div>
    )

  }
  return (
      <div className='flex flex-col items-center justify-start'>
        <Routes>
          <Route index path="/" element={authUser ? <HomePage/> : <Navigate to="/login" />} />
          <Route path="/register" element={ !authUser ? <Register/> : <Navigate to="/" />} />
          <Route path="/login" element={ !authUser ? <LoginPage/> : <Navigate to="/" />} />
        </Routes>
      </div>
  )
}

export default App
