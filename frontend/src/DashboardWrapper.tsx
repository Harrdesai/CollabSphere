import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'




const DashboardWrapper = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='flex-col'>
      <Navbar />
      <div className='flex'>
      <Sidebar />
      <main className='w-full'>{children}</main>
      </div>
    </div>
  )
}

export default DashboardWrapper