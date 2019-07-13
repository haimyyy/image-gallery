import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

export default class Modal extends React.Component {
	constructor() {
		super();
		this.state = {
			configurationName: '',
			selectedConfiguration: '',
		}
	}
	handleChange = (event) => {
		this.setState({
			configurationName: event.target.value,
		})
	}

	updateConfiguration = () => {
		this.props.updateConfiguration(this.state.configurationName)
	}

	handleClick = (event) => {
		this.setState({
			selectedConfiguration: event.target.value,
		})
	}

	render() {
		return (
		  <div>
			  <Dialog open={this.props.isModalOpen} onClose={this.props.handleClose} aria-labelledby="form-dialog-title">
				  <DialogTitle id="form-dialog-title">{this.props.mode === 'save'? 'Save Selection' : 'Load Configuration'}</DialogTitle>
				  <DialogContent>
					  {
					  	this.props.mode === 'save'? <React.Fragment>
							  <DialogContentText>
								  You can save this configuration and load it whenever you would like to.
							  </DialogContentText>
							  <TextField
								autoFocus
								margin="dense"
								id="name"
								label="Configuration Name"
								fullWidth
								onChange={this.handleChange}
							  />
						  </React.Fragment>
			            : <FormControl>
							  <InputLabel htmlFor="select-multiple">Select Config</InputLabel>
							  <Select
								  value={this.state.selectedConfiguration}
								  label={"Select config"}
								  style={{
									  minWidth: 120,
									  maxWidth: 300,
								  }}
								  onChange={this.handleClick}>
									  {
										  this.props.configurations && this.props.configurations.map((config)=>{
											  return <MenuItem value={config.key} key={config.key}>{config.key}</MenuItem>
										  })
									  }
							  </Select>
						  </FormControl>
					  }
				  </DialogContent>
				  <DialogActions>
					  {
					  	this.props.mode === 'save'?  <Button style={{margin: '0 0.5em'}} onClick={this.updateConfiguration} color="primary">
						    Save
					    </Button> :  <Button style={{margin: '0 0.5em'}} className="button" onClick={this.props.loadConfiguration.bind(this, this.state.selectedConfiguration)} color="primary">
						    Load
					    </Button>
					  }

				  </DialogActions>
			  </Dialog>
		  </div>
		);
	}
}
