import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Checkbox, FormGroup, FormControlLabel, FormControl } from '@material-ui/core';
import { Types } from './types'

const styles = {
  form:{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  root:{
    marginBottom: 30,
    width: '100%'
  }
}

class FiltersPaper extends React.Component{
  constructor(props){
    super(props)
    this.classes = props.classes
    this.allTypes = Object.keys(Types)
  }
  createLabel(type){
    type = type[0].toUpperCase() + type.substring(1)
    return (<FormControlLabel
      control={<Checkbox checked={false} name={type}></Checkbox>}
      label={type}/>)
  }
  render(){
    return(
      <Paper className={this.classes.root}>
        <FormControl component="fieldset" className={this.classes.form}>
          <FormGroup>{
            this.allTypes.slice(0,4).map(type => this.createLabel(type))
          }
          </FormGroup>
          <FormGroup>{
            this.allTypes.slice(4,8).map(type => this.createLabel(type))
          }
          </FormGroup>
          <FormGroup>{
            this.allTypes.slice(8,12).map(type => this.createLabel(type))
          }
          </FormGroup>
          <FormGroup>{
            this.allTypes.slice(12,16).map(type => this.createLabel(type))
          }
          </FormGroup>
          <FormGroup>{
            this.allTypes.slice(16,20).map(type => this.createLabel(type))
          }
          </FormGroup>
        </FormControl>
      </Paper>
    )
  }
}

FiltersPaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FiltersPaper)