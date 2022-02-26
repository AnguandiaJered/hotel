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

export const Savepersonnel = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Link to='#' variant="outlined" className='btn btn-primary' onClick={handleClickOpen}>
          <i className='fa fa-plus'></i> Add Personnel
      </Link>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Ajouter Personnel
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <FormGroup>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group'>
                  <InputLabel htmlFor='matricule'>Matricule</InputLabel>
                  <Input type="text" placeholder='Matricule' className='form-control' />
                </div>
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
                  <InputLabel htmlFor='datenaissance'>Date naissance</InputLabel>
                  <Input type="date"  className='form-control' />
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='adresse'>Adresse</InputLabel>
                    <Input type="text" placeholder='Adresse' className='form-control' />
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='etatcivil'>Etat civil</InputLabel>
                    <Select className='form-control'> 
                     <MenuItem>Marié</MenuItem>
                     <MenuItem>Celibataire</MenuItem>
                     <MenuItem>Divorcé</MenuItem>
                     <MenuItem>Autres</MenuItem>
                    </Select>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <InputLabel htmlFor='telephone'>Telephone</InputLabel>
                  <Input type="tel" placeholder='Telephone' className='form-control' />
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='nom'>Email</InputLabel>
                    <Input type="email" placeholder='Email' className='form-control' />
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='niveau'>Niveau Etude</InputLabel>
                    <Input type="text" placeholder='Niveau etude' className='form-control' />
                </div>
                <div className='form-group'>
                  <InputLabel htmlFor='province'>Province Origine</InputLabel>
                  <Input type="text" placeholder='Province Origine' className='form-control' />
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='fonction'>Fonction</InputLabel>
                    <Select className='form-control'> 
                     <MenuItem>Comptable</MenuItem>
                     <MenuItem>Reception</MenuItem>
                     <MenuItem>Secretaire</MenuItem>
                     <MenuItem>Informaticien</MenuItem>
                    </Select>
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='photo'>Photo</InputLabel>
                    <Input type="file" className='form-control' />
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
