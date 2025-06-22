import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'




const DashboardWrapper = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='flex-col flex min-h-[100vh] bg-slate-600'>
      <Navbar />
      <div className='flex w-full flex-row'>
      <Sidebar />
      <main className='w-full m-2 bg-orange-400 rounded-3xl'>{children}</main>
      </div>
    </div>
  )
}

export default DashboardWrapper