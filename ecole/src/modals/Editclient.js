import React,{ Fragment } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

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
          <form>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label htmlFor='noms'>Noms</label>
                  <input type="text" placeholder='Noms' className='form-control' />
                </div>
                <div className='form-group'>
                  <label htmlFor='sexe'>Sexe</label>
                   <select className='form-control'> 
                     <option>M</option>
                     <option>F</option>
                   </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='adresse'>Adresse</label>
                    <input type="text" placeholder='Adresse' className='form-control' />
                </div>
                <div className='form-group'>
                  <label htmlFor='Telephone'>Telephone</label>
                  <input type="tel" placeholder='Telephone' className='form-control' />
                </div>
              </div>
              <div className='col-md-6'>              
                <div className='form-group'>
                    <label htmlFor='datenaissance'>Date naissance</label>
                    <input type="date"  className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor='profession'>Profession</label>
                    <input type="text" placeholder='Profession' className='form-control' />
                </div>
                <div className='form-group'>
                  <label htmlFor='photo'>Photo</label>
                  <input type="file" className='form-control' />
                </div>
              </div>
            </div>
            <div className='form-group'>
                <input type="submit" value="Modifier" className='btn btn-primary col-md-6' />
            </div>
          </form>          
        </DialogContent>
      </BootstrapDialog>
    </Fragment>
  );
}
