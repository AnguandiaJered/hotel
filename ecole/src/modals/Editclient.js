import React,{ Fragment } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { FormControl, FormGroup, Input, InputLabel, MenuItem, Select } from '@mui/material';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export const Editclient = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Link variant="outlined" className='btn btn-primary bd' onClick={handleClickOpen}>
       <i className='fa fa-pencil-square-o'></i>
      </Link>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Update Clients
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <FormGroup>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group'>
                  <InputLabel htmlFor='noms'>Noms</InputLabel>
                  <Input type="text" placeholder='Noms' className='form-control' />
                </div>
                <div className='form-group'>
                  <InputLabel htmlFor='sexe'>Sexe</InputLabel>
                   <Select className='form-control'> 
                     <MenuItem>M</MenuItem>
                     <MenuItem>F</MenuItem>
                   </Select>
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='adresse'>Adresse</InputLabel>
                    <Input type="text" placeholder='Adresse' className='form-control' />
                </div>
                <div className='form-group'>
                  <InputLabel htmlFor='Telephone'>Telephone</InputLabel>
                  <Input type="tel" placeholder='Telephone' className='form-control' />
                </div>
              </div>
              <div className='col-md-6'>              
                <div className='form-group'>
                    <InputLabel htmlFor='datenaissance'>Date naissance</InputLabel>
                    <Input type="date"  className='form-control' />
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='profession'>Profession</InputLabel>
                    <Input type="text" placeholder='Profession' className='form-control' />
                </div>
                <div className='form-group'>
                  <InputLabel htmlFor='photo'>Photo</InputLabel>
                  <Input type="file" className='form-control' />
                </div>
              </div>
            </div>
            <FormControl className='form-group'>
                <Input type="submit" value="Modifier" className='btn btn-primary col-md-6' />
            </FormControl>
          </FormGroup>          
        </DialogContent>
      </BootstrapDialog>
    </Fragment>
  );
}
