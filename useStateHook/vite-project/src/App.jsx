export default function App(){

  let count = 0;

  function increaseCount(){
    count++;
    const para = document.querySelector("p");
    para.textContent = `Counter : ${count}`
  }

  return(
  <>
  <p>Counter : {count}</p>
  {/* increaseCount is a function reference, not a function call */}
  <button onClick={increaseCount}>Increment</button>    
  </>
  )
} 
