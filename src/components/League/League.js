import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="../../images/image1.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {strLeague}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {strAlternate.length ? "{strAlternate}": "no info found" }
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={()=>console.log("hello")} size="small" outlined cvariant="contained" color="secondary">
            Explore
          </Button>
        </CardActions>
      </Card>
    );
};

export default League;