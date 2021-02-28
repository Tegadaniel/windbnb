import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  iconStyles:{
    display: 'flex',
  justifyContent: 'space-around',
      color: 'red'
  }
}));

export default function Example() {
  const classes = useStyles();

  return (
      <AppBar position="static" color="white" className={classes.appBar}>
        <Toolbar className={classes.iconStyles}>
          
          <IconButton aria-label="Github.com" onClick={() => window.open('https://www.github.com/tegadaniel')}>
              <GitHubIcon/>
          </IconButton>
          
          <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/tega-daniel-a7b63a120/')}>
              <LinkedInIcon/>
          </IconButton>
          
          <IconButton aria-label="Twitter.com" onClick={() => window.open('https://www.twitter.com/iamtegadaniel')}><TwitterIcon/>
          </IconButton>

        </Toolbar>
      </AppBar>
  );
}
