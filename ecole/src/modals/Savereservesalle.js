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

export const Savereservesalle = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  let history = useHistory();
  const [reservesalle,setReservesalle] = useState({
    refclient:"",
    datereservation:"",
    refsalle:"",
    libelle:"",
    dateceremonie:""
  });
  
  const {refclient,datereservation,refsalle,libelle,dateceremonie} = reservesalle;
    
  const handleChange = e =>{
        setReservesalle({...reservesalle,[e.target.name] : e.target.value});
    }

    const onSubmit = async e =>{
      e.preventDefault();
      await axios.post('http://localhost:8080/reservesalle/create',reservesalle).then(res =>{
        console.log(res.data);
      });
      history.push("/");
  }

  return (
    <Fragment>
      <Link to='#' variant="outlined" className='btn btn-primary' onClick={handleClickOpen}>
        <i className='fa fa-plus'></i> Add Reservation
      </Link>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Ajouter Reservation Salle
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <form onSubmit={e =>onSubmit(e)}>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group'>
                  <InputLabel htmlFor='client'>Clients</InputLabel>
                   <Select className='form-control'  
                    name='refclient' 
                    value={refclient} 
                    onChange={e => handleChange(e)}> 
                     <MenuItem>Jered</MenuItem>
                     <MenuItem>Bob</MenuItem>
                     <MenuItem>Marley</MenuItem>
                     <MenuItem>Daniel</MenuItem>
                   </Select>
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='datereservationsalle'>Date Reservation</InputLabel>
                    <Input type="date" 
                    className='form-control'  
                    name='datereservation' 
                    value={datereservation} 
                    onChange={e => handleChange(e)}/>
                </div>
                <div className='form-group'>
                  <InputLabel htmlFor='salles'>Salles</InputLabel>
                   <Select className='form-control'  
                    name='refsalle' 
                    value={refsalle} 
                    onChange={e => handleChange(e)}> 
                     <MenuItem>Salle 1</MenuItem>
                     <MenuItem>Salle 2</MenuItem>
                     <MenuItem>Salle 3</MenuItem>
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
                  onChange={e => handleChange(e)} />
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='dateceremonie'>Date Ceremonie</InputLabel>
                    <Input type="date" 
                    className='form-control'  
                    name='dateceremonie' 
                    value={dateceremonie} 
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
