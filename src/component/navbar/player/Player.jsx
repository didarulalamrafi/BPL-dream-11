import React, { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers";

const Player = ({ playerData }) => {
  const PlayersData = use(playerData);
  const [BtnStatus, setBtnStatus] = useState("Available");
  //   console.log(BtnStatus);
  return (
    <div className="w-11/12 mx-auto my-5">
      <h2 className="text-4xl font-bold my-5">
        Total Players: {PlayersData.length}
      </h2>

      <div className="flex justify-between items- gap-4 my-5">
        {BtnStatus === "Available" ? (
          <h3 className="text-3xl font-bold">Available Players</h3>
        ) : (
          <h3 className="text-3xl font-bold">Selected Players 2/6</h3>
        )}

        <div className="flex gap-4">
          <button
            onClick={() => setBtnStatus("Available")}
            className={`btn ${BtnStatus === "Available" ? "btn-warning" : "bg-red"}`}
          >
            Available
          </button>
          <button
            onClick={() => setBtnStatus("Selected")}
            className={`btn ${BtnStatus === "Selected" ? "btn-warning" : "bg-red"}`}
          >
            Selected (0)
          </button>
        </div>
      </div>
      {BtnStatus === "Available" ? (
        <AvailablePlayers PlayersData={PlayersData}></AvailablePlayers>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </div>
  );
};

export default Player;
