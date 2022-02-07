import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
  
    var name = this.props.values.name;
    var quantity = this.props.values.quantity;
    var description = this.props.values.description
    console.log(`${name.length>0} + ${!isNaN(Number.parseInt(quantity))} + ${ description.length>0}`)
    
 console.log(this.props.values)
    if(name.length>0 && !isNaN(quantity) && description.length>0){
       console.log()
      if(Number.parseInt(quantity)>0 && Number.parseInt(quantity)<=10000)
      {
        this.props.nextStep();
      }
      else{
        alert("Quantity should be greater than 0 and less than 10000");
      }
    }
    
    else{
      alert("Please fill all the details correctly");
    }
  };
  
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter User Details" />
            <TextField
              placeholder="Enter the Name of Collection"
              label="Name"
              onChange={handleChange('name')}
              defaultValue={values.name}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Quantity"
              label="Quantity"
              onChange={handleChange('quantity')}
              defaultValue={values.quantity}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Description"
              label="Description"
              onChange={handleChange('description')}
              defaultValue={values.description}
              margin="normal"
              fullWidth
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
