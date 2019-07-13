import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Header = (props) => {
    return(
      <div className="header-container">
          <h2 className="title">Image Gallery</h2>
          <div className="textField-container">
              <TextField
                id="standard-search"
                label="Search field"
                type="search"
                value={props.searchValue}
                onChange={props.onChange}
                margin="normal"/>
          </div>
          <div className="storage-handler-container">
              <Button variant="contained" color="primary" title={'Save Search'} onClick={props.onSaveClick}>
                  Save
              </Button>
              <Button variant="contained" color="primary" title={'Load existing configuration'} onClick={props.onLoadClick}>
                  Load
              </Button>
          </div>
      </div>
    )
}

export default Header;