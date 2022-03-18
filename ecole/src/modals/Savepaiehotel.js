import React,{ Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { FormControl, Input, InputLabel, MenuItem, Select } from '@mui/material';
import axios from 'axios';
import { useHistory } from "react-router-dom";


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

export const Savepaiehotel = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

    
  let history = useHistory();
  const [hotel,setHotel] = useState({
    montant:"",
    devise:"",
    libelle:"",
    datepaie:"",
    refreservation:"",
    author:""
  });
  
  const {montant,devise,libelle,datepaie,refreservation,author} = hotel;
    const handleChange = e =>{
        setHotel({...hotel,[e.target.name] : e.target.value});
    }

    const onSubmit = async e =>{
      e.preventDefault();
      await axios.post('http://localhost:8080/paiehotel/create',hotel).then(res =>{
        console.log(res.data);
      });
      history.push("/");
  }

  return (
    <Fragment>
      <Link to='#' variant="outlined" className='btn btn-primary' onClick={handleClickOpen}>
          <i className='fa fa-plus'></i> Add Paie Hotel
      </Link>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Ajouter Paiement Hotel
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <form onSubmit={e => onSubmit(e)}>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group'>
                  <InputLabel htmlFor='reservation'>Reservation</InputLabel>
                  <Select className='form-control'  
                  name='refreservation' 
                  value={refreservation} 
                  onChange={e => handleChange(e)}> 
                     <MenuItem>Reservation 1</MenuItem>
                     <MenuItem>Reservation 2</MenuItem>
                     <MenuItem>Reservation 3</MenuItem>
                     <MenuItem>Reservation 4</MenuItem>
                  </Select>
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='montant'>Montant</InputLabel>
                    <Input type="number" 
                    placeholder='Montant' min="0" 
                    className='form-control'
                    name='montant' 
                    value={montant} 
                    onChange={e => handleChange(e)} />
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='devise'>Devise</InputLabel>
                    <Select className='form-control' 
                    name='devise' 
                    value={devise} 
                    onChange={e => handleChange(e)}> 
                     <MenuItem value='USD'>USD</MenuItem>
                    </Select>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <InputLabel htmlFor='libelle'>Libelle</InputLabel>
                  <Input type="text" 
                  placeholder='Libelle' 
                  className='form-control' 
                  name='libelle' 
                  value={libelle} 
                  onChange={e => handleChange(e)}/>
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='nom'>Date Payer</InputLabel>
                    <Input type="date" 
                    className='form-control' 
                    name='datepaie' 
                    value={datepaie} 
                    onChange={e => handleChange(e)}/>
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='author'>Author</InputLabel>
                    <Input type="text" 
                    placeholder='Author' 
                    className='form-control' 
                    name='author' 
                    value={author} 
                    onChange={e => handleChange(e)} />
                </div>
              </div>
            </div>
            <FormControl className='form-group'>
                <Input type="submit" value="Enregistrer" className='btn btn-primary' />
            </FormControl>
          </form>          
        </DialogContent>
      </BootstrapDialog>
    </Fragment>
  );
}
