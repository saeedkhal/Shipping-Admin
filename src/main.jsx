import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00cba7',
          },
        }}
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>

  </React.StrictMode>,
)
