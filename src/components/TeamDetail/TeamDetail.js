import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TeamDetail = () => {
    const{idTeam}= useParams();
    const [team,setTeam]=useState([]);
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        .then(res=>res.json())
        .then(data=>setTeam(data.teams))
    },[idTeam])
    console.log("team detail",team);
    return (
        <div>
            <div className="header">
                <img src='https://i.ibb.co/Hx22hkG/Capture.png' alt="" />
            </div>
            <h1>Detail {idTeam} </h1>
            <p> {team[0].strDescriptionEN} </p>
        </div>
    );
};

export default TeamDetail;