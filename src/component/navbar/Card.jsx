import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const Card = ({
  PlayersData,
  setCoin,
  coin,
  setSelectedPlayer,
  selectedPlayer,
}) => {
  // console.log(PlayersData.price);

  const [isSelected, setisSelected] = useState([false]);
  const handleSelect = (index) => {
    if (!isSelected.includes(index)) {
      setisSelected([...isSelected, index]);
    }
  };
  return (
    <div className=" grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {PlayersData.map((player, index) => {
        // console.log(player.price);
        const coinHandler = () => {
          let newPrice = coin - player.price;
          if (newPrice >= 0) {
            setCoin(coin - player.price);
          } else {
            // alert("yon don't have engoht money");
            toast.error("yon don't have enoght money for buy this player");
            return;
          }
          // alert(`Player Name: ${player.playerName}`);
          toast.success(`${player.playerName} is added`);
          setSelectedPlayer([...selectedPlayer, player]);
        };
        const {
          playerName,
          playerCountry,
          playerType,
          rating,
          battingStyle,
          bowlingStyle,
          price,
          playerImage,
        } = player;
        return (
          <div key={index} className="container mx-auto border-2 rounded-xl">
            <div className="card bg-base-100 shadow-sm">
              <figure>
                <img src={playerImage} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {" "}
                  <FaUser></FaUser> {playerName}
                </h2>
                <div className="flex items-center justify-between gap-2">
                  <FaFlag></FaFlag>
                  <p>{playerCountry}</p>
                  <button className="btn btn-soft rounded-lg">
                    {playerType}
                  </button>
                </div>
                <div className="divider"></div>
                <h4 className="text-xl font-bold">{rating}</h4>
                <div className="flex items-center justify-between text-lg font-semibold">
                  <h4>{battingStyle}</h4>
                  <h4>{bowlingStyle}</h4>
                </div>
                <div className="card-actions justify-end">
                  <p className="text-lg font-semibold">{price}</p>
                  <button
                    onClick={() => {
                      coinHandler();
                      handleSelect(index);
                    }}
                    disabled={isSelected.includes(index)}
                    className="btn btn-soft rounded-lg"
                  >
                    {isSelected.includes(index) ? "disabled" : "Choose Player"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
