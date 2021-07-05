import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';


const TeamDetail = () => {
    const{idTeam}= useParams();
    const [team,setTeam]=useState({});
    const {strDescriptionEN,strFacebook,strGender,strInstagram,intFormedYear,strSport}=team;
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        .then(res=>res.json())
        .then(data=>setTeam(data.teams[0]))
    },[idTeam])
    console.log("team detail",team);
    // let strGender='male';
    const ifimg = strGender==="male" ? 'https://i.ibb.co/nfXXPxG/female.png' : 'https://i.ibb.co/S0g5ydp/male.png' ;
    return (
        <div style={{backgroundColor:'#0E0A2A',height:'100vh'}} className="teamDetail">
            <div className="banner">
                <img style={{width:'100%',height:'30vh'}} src='https://i.ibb.co/Hx22hkG/Capture.png' alt="content missing" />
            </div>
            <div className="team-detail-body">
                <div style={{width:'60%',marginLeft:'20%',backgroundColor:'#3A42FF',height:'188px'}} className="premier-league">
                    <div style={{color:'white',float:'left',paddingLeft:'250px'}} className="lef    t">
                        <h2>Premier league  </h2>
                        <h3>  Founded: {intFormedYear} </h3>
                        <h3>Sport Type: {strSport} </h3>
                        <h3>Gender:{strGender} </h3>
                    </div>
                    <div style={{float:'right',paddingRight:'250px',paddingTop:'5px'}} className="right">
                        <img style={{height:'170px'}} src={ifimg} alt="check the url" />
                    </div>
                </div>
            </div>
            <div className="footer">
            <p style={{color:'#fff',width:'60%',marginLeft:'20%',padding:'20px 10px'}}>{strDescriptionEN}</p>
            <p style={{color:'#fff',width:'60%',marginLeft:'20%',padding:'20px 10px'}}>{strDescriptionEN}</p>
                <div style={{color:'white',textAlign:'center'}} className="icon">
                <a href={strFacebook}><FacebookIcon></FacebookIcon></a>
                <a href={strFacebook}><TwitterIcon></TwitterIcon></a>
                <a href={strInstagram}><YouTubeIcon></YouTubeIcon> </a>
                
                
                </div>
            </div>
        </div>
    );
};

export default TeamDetail;