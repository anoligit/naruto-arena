import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/typography.css'
import { installGameFonts } from './styles/fonts'
import './index.css'
import App from './App.tsx'

installGameFonts()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
