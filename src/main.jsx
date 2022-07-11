import React from 'react'
import ReactDOM from 'react-dom/client'
import { HackerNewsApp } from './components/HackerNewsApp/HackerNewsApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HackerNewsApp />
  </React.StrictMode>
)
