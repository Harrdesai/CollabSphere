import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import DashboardWrapper from './DashboardWrapper.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <DashboardWrapper>
      <App />
    </DashboardWrapper>
    </BrowserRouter>
  </StrictMode>,
)
