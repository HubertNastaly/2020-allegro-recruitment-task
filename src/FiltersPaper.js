import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {  Paper, Checkbox, FormControlLabel, Typography, Button, Grid } from '@material-ui/core';
import { Types } from './types'

const styles = {
  form:{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  label:{
    fontSize: 10
  },
  root:{
    marginBottom: 30,
    width: '100%',
  },
  paper:{
    boxSizing: 'border-box',
    padding: 15
  }
}

class FiltersPaper extends React.Component{
  constructor(props){
    super(props)
    this.classes = props.classes
    this.allTypes = Object.keys(Types)
    this.state = {
      panelOpened: false
    }
    this.tooglePanel = this.tooglePanel.bind(this)
  }
  tooglePanel(){
    const opened = Boolean(this.state.panelOpened ^ 1)
    this.setState({
      panelOpened: opened
    })
  }
  createLabel(type){
    const upperCaseType = type.charAt(0).toUpperCase() + type.substring(1)
    return (<FormControlLabel
              key = {type}
              control={<Checkbox onChange={this.props.updateTypes} name={type}></Checkbox>}
              label={<Typography className={this.classes.label}>{upperCaseType}</Typography>}/>)
  }
  render(){
    return(
      <div className={this.classes.root}>
        <Button variant="contained" onClick={this.tooglePanel}>
          Types
        </Button>
        { this.state.panelOpened &&
        <Paper className={this.classes.paper} display="none">
            <Grid container>{
                this.allTypes.map(type => 
                  <Grid item xs={6} sm={3} md={2} key={type}>{
                    this.createLabel(type)
                  }
                  </Grid>
                )
              }    
            </Grid>
        </Paper>
        }      
      </div>
    )
  }
}

FiltersPaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FiltersPaper)