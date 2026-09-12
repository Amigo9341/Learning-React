import { useEffect, useState } from "react";

function Clock(){

    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [show, setShow] = useState(true);

    useEffect(() =>{

    if(!show)
        return;

    const interValid = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
        console.log("Hii");         
    },1000)

    return () => {
        clearInterval(interValid);
    }
},[show])

    return (
        <>
        <button onClick={()=>setShow(!show)}>{show?"hide":"show"}</button>
        {show && <h1>Current Time : {time}</h1>}
        </>
    )

}export default Clock;

//setInterval will run like crazy. At first, it will be called once, then after 1 second it will run twice, next second thrice and on and on.
//Its solution is "useEffect" Hook.
//setInterval pehle jaisa to nahi but still chalta rahega, constantly badhega.
//So we will use clearInterval for it to stop before the change in the dependency array.