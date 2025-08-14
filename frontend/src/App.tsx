// src/App.tsx

import { Routes, Route, Navigate } from 'react-router'
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

// functions
import { useAuthStore } from './store/useAuthStore';

// pages
import HomePage from './page/HomePage'
import TeamLeaderHomePage from './page/TeamLeaderHomePage'
import LoginPage from './page/Login'
import Register from './page/Register';
import Teams from './page/TeamsList';
import MembersList from './page/MembersList';
import MembersProfile from './page/MembersProfile';
import Trial from './page/trial';


function App() {

  const { authUser, checkAuth, onlineUsers } = useAuthStore()
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  console.log(onlineUsers);
  useEffect(() => {
    checkAuth().finally(() => {
      setIsAuthChecked(true);
    });
  }, [checkAuth])

  if (!isAuthChecked) {
    
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="size-10animate-spin" />
      </div>
    )
  }

  return (
      <div className='flex flex-col items-center justify-start'>
        <Routes>
          <Route index path="/" element={authUser ? (authUser.isTeamLeader ? <TeamLeaderHomePage/> : <HomePage/>) : <Navigate to="/login" />} />
          <Route path="/register" element={ !authUser ? <Register/> : <Navigate to="/" />} />
          <Route path="/login" element={ !authUser ? <LoginPage/> : <Navigate to="/" />} />

          <Route path="/teams" element={authUser ? <Teams/> : <Navigate to="/login" />} />
          <Route path="/search-members" element={authUser ? <MembersList/> : <Navigate to="/login" />} />
          <Route path="/members/:id" element={authUser ? <MembersProfile/> : <Navigate to="/login" />} />
          <Route path="/trial" element={<Trial/>} />
        </Routes>
      </div>
  )
}

export default App
