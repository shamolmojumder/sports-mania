import React from 'react';
import { useParams } from 'react-router-dom';

const TeamDetail = () => {
    const{idTeam}= useParams()
    return (
        <div>
            <h1>Detail {idTeam} </h1>
        </div>
    );
};

export default TeamDetail;