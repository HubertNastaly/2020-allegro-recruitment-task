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

    backgroundImage: 'url("https://i.pinimg.com/originals/e9/bd/02/e9bd02b31ed412281e60d344a0a21343.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    
    '-webkit-box-shadow': '0px 0px 59px -38px rgba(0,0,0,0.75)',
    '-moz-box-shadow': '0px 0px 59px -38px rgba(0,0,0,0.75)',
    'box-shadow': '0px 0px 59px -38px rgba(0,0,0,0.75)',

    '&::before': {
      width: 30,
      height: 60,
      display: 'block',
      background: 'rgba(0, 0, 0, 0.5)',
      position: 'absolute'
    }
  },
  title:{
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold'
  }
}

const Header = (props) => {
  const classes = props.classes
  return(
      <div className={classes.root}>
        <Typography className={classes.title}>Pockedeck</Typography>
      </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);