import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'

// Pages
import { PortfolioAmis } from './page/portfolio-amis.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/portfolio/amis' element={<PortfolioAmis />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
