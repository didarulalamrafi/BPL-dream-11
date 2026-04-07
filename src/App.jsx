import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Player from "./component/navbar/player/Player";
const playerPromise = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const [coin, setCoin] = useState(5000000);
  const playerData = playerPromise();
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Suspense
        fallback={<span className="loading loading-spinner text-error"></span>}
      >
        <Player playerData={playerData} setCoin={setCoin} coin={coin}></Player>
      </Suspense>
    </>
  );
}

export default App;
