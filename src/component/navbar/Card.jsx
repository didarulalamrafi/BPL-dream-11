import React, { useState } from 'react';
import { FaFlag, FaUser } from "react-icons/fa"

const Card = ({PlayersData}) => {
    const [isSelected, setisSelected] = useState(false);
    return (
        <div className=" grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {PlayersData.map((player, index) => {
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
                  <button onClick={()=> setisSelected(true)} disabled={isSelected} className="btn btn-soft rounded-lg">
                    {isSelected ? "disabled" : "Choose Player"}
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