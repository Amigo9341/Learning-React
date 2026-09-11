import { useState } from "react";

function App() {

  const [user, setUser] = useState([]);

  async function githubProfile(){

    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    setUser(data);
  }

  githubProfile();

  return(
    <>
    <h1>Github Users</h1>
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