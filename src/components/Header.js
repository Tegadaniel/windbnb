import React from 'react'
import { AppBar, Toolbar, Typography} from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';


const useStyles = makeStyles((theme) => ({
    typographyStyles: {
        flex: 1,
        
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'secondary',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      border:'1.5px solid #F5F5F5',
     borderRadius: '16px',
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 'auto',
        '&:focus': {
          width: '10ch',
        },
      },

    },
  }));
  
  function Header( ) {
    const classes = useStyles();
    return (
        <AppBar position="fixed" style ={{backgroundColor: "white"}}>
            <Toolbar >
                <Typography className = {classes.typographyStyles}>
                <img src="logo.png" alt="logo" className={classes.logo} />
                </Typography>
                <div className={classes.search}>
            <div className={classes.searchIcon}>
            <SearchIcon style ={{color: "red"}}/>
            </div>
            <InputBase
              placeholder="Helsinki, Finland"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              
              inputProps={{ 'aria-label': 'Locations' }}
            />
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
            <AddBoxIcon  style ={{color: "red"}}/>
            </div>
            <InputBase
              placeholder="Add Guest"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

            </Toolbar>
        </AppBar>
    )
}

export default Header;