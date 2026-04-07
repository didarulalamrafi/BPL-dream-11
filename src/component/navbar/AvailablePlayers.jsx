import React, { useState } from "react";
import Card from "./Card";
const AvailablePlayers = ({ PlayersData, setCoin, coin }) => {
  // console.log(PlayersData);

  return <Card PlayersData={PlayersData} setCoin={setCoin} coin={coin}></Card>;
};

export default AvailablePlayers;
