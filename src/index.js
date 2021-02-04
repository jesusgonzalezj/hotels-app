import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.sass'
import { HotelsApp } from './HotelsApp'
import reportWebVitals from './reportWebVitals'
import 'antd/dist/antd.css'

ReactDOM.render(<HotelsApp />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
