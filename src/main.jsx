import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { CounterApp } from './CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp />
        <FirstApp pais  = "Paraguay" edad = {20} /> */}
        <CounterApp value= {5}/>
    </React.StrictMode>
)