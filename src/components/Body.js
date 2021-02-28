import React, {useState,useEffect} from 'react'
import Header from './Header'
import Buffer from './Buffer'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer'



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
   
  }));

    function Body() { 
        const classes = useStyles();
        const [data,setData]=useState([]);

        const getData=()=>{
          fetch('data.json'
          ,{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          }
          )
            .then(function(response){
              console.log(response)
              return response.json();
            })
            .then(function(myJson) {
              console.log(myJson);
              setData(myJson)
            });
        }
        useEffect(()=>{
          getData()
        },[])

        return (
        <Grid container  justify="center"  direction="column" className={classes.root} >
          <Header/>
            <Grid item container >
            <Grid item xs={4} sm={2}/>
            <Grid item xs={12} sm ={8} >
             
            <Buffer data={data}/>
            </Grid>
            <Grid item xs={4} sm={2}/>
            </Grid>
            <Footer/>
            </Grid>
        )
}

export default  Body 
