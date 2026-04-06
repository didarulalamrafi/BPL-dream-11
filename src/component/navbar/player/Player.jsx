import React, { use } from 'react';
import AvailablePlayers from '../AvailablePlayers';

const Player = ({playerData}) => {
    const PlayersData = use(playerData)
    // console.log(PlayersData)
    return (
        <div className='w-11/12 mx-auto my-5'>
            <h2 className='text-4xl font-bold my-5'>Total Players: {PlayersData.length}</h2>
            <AvailablePlayers PlayersData={PlayersData}></AvailablePlayers>
        </div>
    );
};

export default Player;