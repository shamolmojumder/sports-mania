import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { useEffect } from 'react';
import League from '../League/League';
import LinearProgress from '@material-ui/core/LinearProgress';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const progessBarLine = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));



const Home = () => {
    const progessBarLineClasses = progessBarLine();  
    const classes = useStyles();
    const [leagues,setLeagues] = useState([]);
    // console.log(leagues);
    useEffect(()=>{
      fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Italian%20Serie%20A`)
      .then(res=>res.json())
      .then(data=>setLeagues((data.teams)))
    },[])
    return (
        <Container fixed >
        <div className={classes.root}>
        <Grid container className="banner">
          <Grid item lg={12}>
            <img style={{width:"100%"}} src="https://cutt.ly/Jn6gUoq" alt="" />
          </Grid>
          
          <Grid item lg={12}>
            <Paper classame={classes.paper}>  
              <h1 style={{textAlign:"center"}}> Total leagues {leagues.length}</h1>
            </Paper>
          </Grid>
          {
            leagues.length ===0 &&   
             <div className={progessBarLineClasses.root}> <LinearProgress /> </div>
          }
           {
            leagues?.map(league=> <League league={league} key={league.idTeam}></League>  )
           }
{/* {
  console.log(Array.isArray(leagues))
} */}
        </Grid>
      </div>
      </Container>
    );
};

export default Home;
