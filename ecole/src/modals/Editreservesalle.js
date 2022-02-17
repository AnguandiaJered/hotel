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

export const Editreservesalle = () => {
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
          Update Reservation Salle
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <form>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label htmlFor='client'>Clients</label>
                   <select className='form-control'> 
                     <option>Jered</option>
                     <option>Bob</option>
                     <option>Marley</option>
                     <option>Daniel</option>
                   </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='datereservationsalle'>Date Reservation</label>
                    <input type="date" className='form-control' />
                </div>
                <div className='form-group'>
                  <label htmlFor='salles'>Salles</label>
                   <select className='form-control'> 
                     <option>Salle 1</option>
                     <option>Salle 2</option>
                     <option>Salle 3</option>
                   </select>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label htmlFor='libelle'>Libelle</label>
                  <input type="text" placeholder='Libelle' className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor='dateceremonie'>Date Ceremonie</label>
                    <input type="date" className='form-control' />
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
