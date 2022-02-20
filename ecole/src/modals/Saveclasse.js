import React,{ Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
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

export const Saveclasse = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
       <i className='fa fa-plus'></i> Add Classe Chambre
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Ajouter Classe Chambre
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <FormGroup>
            <div className='row'>
              <div className='col-md-12'>
                <div className='form-group'>
                  <InputLabel htmlFor='designation'>Designation</InputLabel>
                  <Input type="text" placeholder='Designation' className='form-control' />
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='montant'>Montant</InputLabel>
                    <Input type="number" placeholder='Montant' min="0" oninput="this.value = Math.abs(this.value)" className='form-control' />
                </div>                
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <InputLabel htmlFor='devise'>Devise</InputLabel>
                   <Select className='form-control'> 
                     <MenuItem>USD</MenuItem>
                   </Select>
                </div>
              </div>
            </div>
            <FormControl className='form-group'>
                <Input type="submit" value="Enregistrer" className='btn btn-primary col-md-6' />
            </FormControl>
          </FormGroup>          
        </DialogContent>
      </BootstrapDialog>
    </Fragment>
  );
}
