import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ButtonComponent from './Ref.jsx'
import Counter from './Memo.jsx'
import DualCounter from './Count.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DualCounter />
  </StrictMode>,
)
