import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const League = (props) => {
  const {strLeague,strAlternate,strSport,strTeamBadge,idTeam}=props.league;
  let history=useHistory();
  const handleExploreBtn =(idTeam)=>{
    history.push(`detail/${idTeam}`)
  }
    // console.log(props)
    return (
       <div className="main" style={{width:"30%",height:'400px',border:'1px solid black',textAlign:"center"}}>
         <div className="image">
          <img style={{height:"120px"}} src={strTeamBadge} alt="" />
         </div>
         <div className="image-info">
          <p> {strLeague} </p>
          <p> {strAlternate} </p>
          <p> {strSport} </p>
          <Button onClick={()=>handleExploreBtn(idTeam)} variant="contained" color="primary">
            Primary
          </Button>
         </div>
       </div>
    );
};

export default League;