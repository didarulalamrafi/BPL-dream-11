import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedPlayers = ({
  seletctedPlayers,
  setSeletctedPlayers,
  setCoin,
  coin,
}) => {
  // console.log(seletctedPlayers)
  const deleteHandler = (player) => {
    // console.log(seletctedPlayers , "dlt")
    const fliterPlayer = seletctedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName != player.playerName,
    );
    // console.log(fliterPlayer)
    setSeletctedPlayers(fliterPlayer);
    setCoin(coin + player.price);
  };
  return seletctedPlayers.map((player, index) => {
    return (
      <div
        className="mx-auto w-11/12 flex justify-between items-center border-2 rounded-md p-5 my-10"
        key={index}
      >
        <div className="flex justify-between items-center gap-5 ">
          <img src={player.playerImage} width={150} alt="" />
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold flex items-center gap-2">
              {" "}
              <FaUser></FaUser> {player.playerName}
            </h3>
            <p className="text-xl font-bold">{player.playerType}</p>
          </div>
        </div>
        <button
          className="text-3xl font-bold text-red-600"
          onClick={() => deleteHandler(player)}
        >
          {" "}
          <MdDelete></MdDelete>{" "}
        </button>
      </div>
    );
  });
};

export default SelectedPlayers;
