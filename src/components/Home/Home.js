import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { useEffect } from 'react';
import League from '../League/League';

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



const Home = () => {
    const classes = useStyles();
    const [leagues,setLeagues] = useState([]);
    console.log(leagues);
    useEffect(()=>{
      fetch(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`)
      .then(res=>res.json())
      .then(data=>setLeagues((data.leagues).slice(0,10)))
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
            leagues?.map(league=> <League league={league} key={league.idLeague}></League>  )
           }
{
  console.log(Array.isArray(leagues))
}
        </Grid>
      </div>
      </Container>
    );
};

export default Home;
