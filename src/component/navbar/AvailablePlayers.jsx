import React, { useState } from "react";
import Card from "./Card";
const AvailablePlayers = ({ PlayersData }) => {
  // console.log(PlayersData);
  
  return (
    <Card PlayersData={PlayersData}></Card>
  );
};

export default AvailablePlayers;
