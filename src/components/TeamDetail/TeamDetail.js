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
    // let strGender='male';
    const ifimg = strGender==="male" ? 'https://i.ibb.co/nfXXPxG/female.png' : 'https://i.ibb.co/S0g5ydp/male.png' ;
    return (
        <div style={{backgroundColor:'#062b80',height:'100vh'}} className="teamDetail">
            <div className="banner">
                <img style={{width:'100%',height:'30vh'}} src='https://i.ibb.co/Hx22hkG/Capture.png' alt="content missing" />
            </div>
            <div className="team-detail-body">
                <div style={{width:'60%',marginLeft:'20%',backgroundColor:'#1548bf',height:'188px'}} className="premier-league">
                    <div style={{color:'white',float:'left',paddingLeft:'250px'}} className="left">
                        <h2>Premier league  </h2>
                        <h3>Founded: {intFormedYear} </h3>
                        <h3>Sport Type: {strSport} </h3>
                        <h3>Gender:{strGender} </h3>
                    </div>
                    <div style={{float:'right',paddingRight:'250px',paddingTop:'5px'}} className="right">
                        <img style={{height:'170px'}} src={ifimg} alt="check the url" />
                    </div>
                </div>
                <p style={{color:'#fff'}}>{strDescriptionEN}</p>
            </div>
        </div>
    );
};

export default TeamDetail;