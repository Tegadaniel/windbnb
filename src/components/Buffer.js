import Images from './Images'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'block',

    marginTop: '65px'
  },

  control: {
    padding: theme.spacing(4),
  },

}));


const Buffer = ({data}) => {
  const [spacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={4}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>

          {data.map((item, i) => (
            <Grid item xs={12}  sm ={4}  key={i} >
              <Images item={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
     
    </Grid>
  );
}

export default Buffer