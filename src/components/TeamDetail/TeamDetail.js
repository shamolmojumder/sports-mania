import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TeamDetail = () => {
    const{idTeam}= useParams();
    const [team,setTeam]=useState({});
    const {strDescriptionEN,strFacebook,strGender,strInstagram,strLeague,strLeague2,strLeague3,strStadiumThumb,strSport,intFormedYear,strTeamFanart3}=team;
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        .then(res=>res.json())
        .then(data=>setTeam(data.teams[0]))
    },[idTeam])
    console.log("team detail",team);
    return (
        <div>
            <div className="header">
                <img src='https://i.ibb.co/Hx22hkG/Capture.png' alt="" />
            </div>
            <h1>Detail {idTeam} </h1>
            <div  className="premier-league-section">
             <div  className="premier-league-left">
             <h4>Premier league  </h4>
                <h3>Founded: {intFormedYear} </h3>
                <h3>Sport Type: {strSport} </h3>
                <h3>Gender:{strGender} </h3>
             </div>
             <div className="premier-league-right">
            <img src={strTeamFanart3} alt="" />
             </div>
            </div>
            <p> {strDescriptionEN} </p>
            {/* <p> {team[0].strDescriptionEN === undefined? "found" :"no info found"} </p> */}
            {/* {strAlternate.length ? "{strAlternate}": "no info found" } */}
        </div>
    );
};

export default TeamDetail;