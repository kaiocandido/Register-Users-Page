import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from '../src/page/Home'
import { GlobalStyles } from './styles/GlobalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Home />
  </StrictMode>,
)
