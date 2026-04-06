import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Player from "./component/navbar/player/Player";
const playerPromise = async ()=>{
  const res = await fetch("/data.json")
  return res.json();
}
function App() {
  const playerData =playerPromise();
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
      <Player playerData={playerData}></Player>
      </Suspense>
    </>
  );
}

export default App;
