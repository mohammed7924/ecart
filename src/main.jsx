import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css' 
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import cartstore from './redux/cartstore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter>
      <Provider store={cartstore}><App /></Provider>
       {/* store is predifined */}
</BrowserRouter>  
</React.StrictMode>,
)
