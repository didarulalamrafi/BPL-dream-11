import React, { useState } from "react";
import Card from "./Card";

const AvailablePlayers = ({ PlayersData, setCoin, coin, setSelectedPlayer, selectedPlayer }) => {
  // console.log(PlayersData);

  return <Card PlayersData={PlayersData} setCoin={setCoin} coin={coin} setSelectedPlayer={setSelectedPlayer} selectedPlayer={selectedPlayer} ></Card>;
};

export default AvailablePlayers;
