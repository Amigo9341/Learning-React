import { useEffect, useState } from "react";

function Clock(){

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() =>{
    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
        console.log("Hii");         
    },1000)
},[])

    return (
        <>
        <h1>Current Time: {time}</h1>
        </>
    )

}export default Clock;

//setInterval will run like crazy. At first, it will be called once, then after 1 second it will run twice, next second thrice and on and on.
//Its solution is "useEffect" Hook.