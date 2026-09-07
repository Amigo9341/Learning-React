// To avoid all npm commands and all, here is the FinalBoss which does it all.FinalBoss

// The command is:- npm create vite@latest

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Rohit } from './App.jsx'
import { Mohit } from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App/>
)

//Here, App is the export default function. So, it is not written in curly braces.
//Rohit and Mohit are 