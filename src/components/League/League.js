import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  

const League = (props) => {
    const classes = useStyles();
    const {strLeague,strAlternate,strSport,strTeamBadge}=props.league;
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
          <Button onClick={()=>console.log("hello",strLeague)} variant="contained" color="primary">
            Primary
          </Button>
         </div>
       </div>
    );
};

export default League;