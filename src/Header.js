import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = {

  root:{
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    height: '40%',
    width: '100%',
    marginBottom: 30,

    backgroundImage: 'url("https://images.alphacoders.com/761/761506.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    
    '-webkit-box-shadow': '0px 0px 59px -38px rgba(0,0,0,0.75)',
    '-moz-box-shadow': '0px 0px 59px -38px rgba(0,0,0,0.75)',
    'box-shadow': '0px 0px 59px -38px rgba(0,0,0,0.75)',
  },
  title:{
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    textShadow: '0px 0px 7px black'
  }
}

const Header = (props) => {
  const classes = props.classes
  return(
      <div className={classes.root}>
        <Typography className={classes.title}>Pokedex</Typography>
      </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);