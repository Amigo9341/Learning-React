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
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap"}}>
      {
        user.map(Aman()=> (
          <img src={Aman.avatar_url} height={"100px"} width={"100px"}/>
        ))

      }
      </div>
    
    </>
  )

}export default App;