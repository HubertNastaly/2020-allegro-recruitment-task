// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import { Button, Popover, Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';
// import { Types } from './types'

// const styles = {

// }

// class Filters extends React.Component{
//   constructor(props){
//     super(props)

//     const [anchorEl, setAnchorEl] = React.useState(null);
//     this.classes = props.classes
//     this.setAnchorEl = setAnchorEl
//     this.state = {
//       allTypes: Object.keys(Types),
//       selectedTypes: null,
//       open: false,
//       anchorEl: anchorEl
//     }
//     this.handleClose = this.handleClose.bind(this)
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//     this.setState({
//       open: Boolean(anchorEl)
//     }) 
//   }
//   handleClose = () => {
//     setAnchorEl(null);
//   }
//   render(){
//     //const {anchorEl, open} = this.state
//     const { open } = this.state
//     return(
//       <div>
//         <Button variant="contained" onClick={this.handleClick}>
//           Filters
//         </Button>
//         <Popover  open={open}
//                   //anchorEl={anchorEl}
//                   onClose={this.handleClose}
//                   anchorOrigin={{
//                     vertical: 'bottom',
//                     horizontal: 'left',
//                   }}
//                   transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'left',
//                   }}>
//         </Popover>
//       </div>
//     )
//   }
// }

// Filters.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Filters)