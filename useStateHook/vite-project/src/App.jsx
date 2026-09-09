import { useState } from "react";

//useState is a hook jo ki function ke jaisa maanlo. 
//setCount v ek function ke jaisa hai jo count ka value by 1 increase krke count ko update krta hai and function ko re-render(dubara call) karta hai. 
//Manually DOM Manipulation mai error aa jata hai. Watch lecture from 40th mminute.

export default function App(){

  let [count, setCount] = useState(0);

  // let count = 0;

  // function increaseCount(){
  //   count++;
  //   const para = document.querySelector("p");       {/* This is DOM Manipulation and type of doing manual work*/}
  //   para.textContent = `Counter : ${count}`;        {/* React should do this not us manually */}
  // }

  function increaseCount(){
    count++;
    setCount(count);             {/* const instead of let line5 mai likhne se count++ nhi krna hota and sirf setAman(count+1) se kaam ho jata*/}
  }

  return(
  <>
  <p>Counter : {count}</p>
  {/* increaseCount is a function reference, not a function call */}
  <button onClick={increaseCount}>Increment</button>    
  </>
  )
} 
