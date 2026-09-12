import { useEffect, useState } from "react";

function App() {

  const [user, setUser] = useState([]);
  //const [name, setName] = useState("");
  const [count, setCount] = useState(30);

  useEffect(() => {

  async function githubProfile(){

    const response = await fetch(`https://api.github.com/users?per_page=${count}`);
    const data = await response.json();
    setUser(data);
  }

  githubProfile();
},[count])                   //This is the dependency array


  // function handleChange(e) {
  //   //console.log(e.target.value);
  //   setName(e.target.value.toUppercase());
  // }
  

  return(
    <>
    <h1>Github Users</h1>
    <input type="text" value={count} onChange={(e) => setCount(e.target.value)}></input>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap", gap:"20px"}}>
      {
        user.map((Aman) => (
          <img src={Aman.avatar_url} height={"100px"} width={"100px"}/>
        ))

      }
      </div>
    
    </>
  )

}export default App;

//There is a problem in this method. Isme render mai to function call ho rha hai but re render krne pe wapas function call ho rha hai.
//There is a solution for this. 'useEffect' method is used in this case.
//useEffect sbse late run karega. Sabke run krne ke baad.
//Ye sirf render krne pe function call krega, Re-rendering pe nahi.
//But there is a conditon. Blank '[]' rkhne pe hi kaam krega wrna nahi krega.
//If the dependency array is empty, then the useEffect hook wont re render.
//But if the dependency array is changed, it will re render.