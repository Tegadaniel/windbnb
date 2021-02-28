import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StarRateSharpIcon from '@material-ui/icons/StarRateSharp';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: ''
      
    },
    gridStyles: {
      marginTop: '65px'
  },
    media: {
      height: "5em",
      paddingTop: '56.25%', // 16:9,
      // marginTop:'30',
      borderRadius: "25px",
      
    },
    textStyle:{
        // fontWeight: 'bold',
        fontFamily:'montserrat',
        fontWeight:'600',
        lineHeight:'17px',
        color:'black'
    },
    typeStyle:{
      fontFamily:'montserrat',
      fontWeight:'500',
      fontSize: '14px',
      lineHeight:'17px',
      color: 'gray',
      paddingBottom: '10px',
      textTransform: 'capitalize'
    },
    starStyle:{
      color:'red',
      float: 'right',
    },
    ratingStyle:{
      color:'#4F4F4F',
      float:'right',
      fontFamily:'montserrat',

    }
  
  }));
  
  const Images = ({item}) => {
  
      const classes = useStyles();
      return (

        <Card className={classes.root}>
        <CardMedia
        image = {item.photo}
        className={classes.media}
       
        />

        <CardContent>
          <Typography className={classes.typeStyle}>
          {item.type}
          <Typography className={classes.ratingStyle}>{item.rating}</Typography>
          <StarRateSharpIcon className={classes.starStyle}/>
         
          </Typography>

          <Typography className={classes.textStyle} variant="body2" color="textSecondary" component="p">
           {item.title}
          </Typography>
        </CardContent>
      </Card>
      
      );
  
  }
  
  export default Images