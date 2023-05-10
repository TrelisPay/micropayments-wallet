import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Web3Auth } from "@web3auth/modal";

// import dotenv from 'dotenv'; // Import dotenv library to read .env file
// dotenv.config(); // Load .env file

// await web3auth.initModal(); // Initialize the modal

function App() {
  const [count, setCount] = useState(0)

  const YOUR_WEB3AUTH_CLIENT_ID = 'BKjhJGrcAfTNWb-0uQkni-w34x8cVWjcCtrjvTlhLyGHTqBTdq2G4YwKTl47WQUB4V1dArb2j5FV1Qaom4dlMno';

  console.log(YOUR_WEB3AUTH_CLIENT_ID); // Print the variable to the console

  

  // //Initialize within your constructor
  // const web3auth = new Web3Auth({
  //   clientId: "YOUR_WEB3AUTH_CLIENT_ID", // Get your Client ID from Web3Auth Dashboard
  //   chainConfig: {
  //     chainNamespace: "eip155",
  //     chainId: "0x89", // Use 0x13881 for Mumbai Testnet
  //   },
  // });

  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
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
