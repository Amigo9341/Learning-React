import { useState } from "react";

function App() {

  const [user, setUser] = useState([]);

  async function githubProfile(){

    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
  }

  githubProfile();

}export default App;