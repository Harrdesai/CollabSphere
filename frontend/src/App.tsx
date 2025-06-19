// src/App.tsx

import { Routes, Route, Navigate } from 'react-router'
import { Loader2 } from 'lucide-react';
import { useEffect } from 'react';

// functions
import { useAuthStore } from './store/useAuthStore';

// pages
import HomePage from './page/HomePage'
import LoginPage from './page/login'
import Register from './page/register';
import Teams from './page/TeamsList';
import MembersList from './page/MembersList';
// src/App.tsx
import MembersProfile from './page/MembersProfile';


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

          <Route path="/teams" element={authUser ? <Teams/> : <Navigate to="/login" />} />
          <Route path="/search-members" element={authUser ? <MembersList/> : <Navigate to="/login" />} />
          <Route path="/members/:id" element={authUser ? <MembersProfile/> : <Navigate to="/login" />} />
        </Routes>
      </div>
  )
}

export default App
