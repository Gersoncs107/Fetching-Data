import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ButtonComponent from './Ref.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ButtonComponent />
  </StrictMode>,
)
