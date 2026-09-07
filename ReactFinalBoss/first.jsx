// To avoid all npm commands and all, here is the FinalBoss which does it all.FinalBoss

// The command is:- npm create vite@latest

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Rohit, Mohit } from './App.jsx'


createRoot(document.getElementById('root')).render(
    <>
    <App/>
    <Mohit></Mohit>
    <Rohit></Rohit>
    </>
)

//Here, App is the export default function. So, it is not written in curly {} braces.
//Rohit and Mohit are named export functions and should always ne imported in Curly Braces {}.
//Name of the export Function and the file name (here,"App.jsx") should be same.