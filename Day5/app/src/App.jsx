/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
//import Heading from "./Heading.jsx";
/*import Login from "./component/Login.jsx"
import Pages from "./component/Pages.jsx"
function App()
{
  return(
    <>
      <Login/>
      <Pages/>
    </>
  )
};

export default App;

import Pages from "./component/Pages.jsx"
import Login from "./component/Login.jsx";
import AfterLogin from "./component/AfterLogin.jsx";
function App(){
  let login =false;
  return login ? <Login/> : <AfterLogin/>
}
export default App;
*/
import { useState } from "react";
import Pages from "./component/pages";
import Login from "./component/Login";
import AfterLogin from "./component/AfterLogin";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Pages />
      {isLoggedIn ? (
        <AfterLogin />
      ) : (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
    </>
  );
}

export default App;
