import React,{ Fragment,useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { FormControl, Input, InputLabel, MenuItem, Select } from '@mui/material';
import { Link } from 'react-router-dom';
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

export const Saveclient = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  let history = useHistory();
  const [client,setClient] = useState({
    noms:"",
    sexe:"",
    adresse:"",
    telephone:"",
    datenaissance:"",
    profession:"",
    photo:""
  });
  const {noms,sexe,adresse,telephone,datenaissance,profession,photo} = client;
    const handleChange = e =>{
        setClient({...client,[e.target.name] : e.target.value});
    }

    const onSubmit = async e =>{
      e.preventDefault();
      await axios.post('http://localhost:8080/client/create',client).then(res =>{
        console.log(res.data);
      });
      history.push("/");
  }

  return (
    <Fragment>
      <Link to='#' variant="outlined" className='btn btn-primary' onClick={handleClickOpen}>
          <i className='fa fa-plus'></i> Add Client
      </Link>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Ajouter Clients
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <form onSubmit={e => onSubmit(e)}>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group'>
                  <InputLabel htmlFor='noms'>Noms</InputLabel>
                  <Input type="text" 
                  placeholder='Noms' 
                  className='form-control' 
                  name='noms' 
                  value={noms} 
                  onChange={e => handleChange(e)} />
                </div>
                <div className='form-group'>
                  <InputLabel htmlFor='sexe'>Sexe</InputLabel>
                   <Select className='form-control' 
                   name='sexe' 
                  value={sexe} 
                  onChange={e => handleChange(e)}> 
                     <MenuItem value='M'>M</MenuItem>
                     <MenuItem value='F'>F</MenuItem>
                   </Select>
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='adresse'>Adresse</InputLabel>
                    <Input type="text" 
                    placeholder='Adresse' 
                    className='form-control' 
                    name='adresse' 
                    value={adresse} 
                    onChange={e => handleChange(e)} />
                </div>
                <div className='form-group'>
                  <InputLabel htmlFor='Telephone'>Telephone</InputLabel>
                  <Input type="tel" 
                  placeholder='Telephone' 
                  className='form-control' 
                  name='telephone' 
                  value={telephone} 
                  onChange={e => handleChange(e)} />
                </div>
              </div>
              <div className='col-md-6'>              
                <div className='form-group'>
                    <InputLabel htmlFor='datenaissance'>Date naissance</InputLabel>
                    <Input type="date" 
                    className='form-control' 
                    name='datenaissance' 
                    value={datenaissance} 
                    onChange={e => handleChange(e)}/>
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='profession'>Profession</InputLabel>
                    <Input type="text" 
                    placeholder='Profession' 
                    className='form-control' 
                    name='profession' 
                    value={profession} 
                    onChange={e => handleChange(e)} />
                </div>
                <div className='form-group'>
                  <InputLabel htmlFor='photo'>Photo</InputLabel>
                  <Input type="file" 
                  className='form-control' 
                  name='photo' 
                  value={photo} 
                  onChange={e => handleChange(e)} />
                </div>
              </div>
            </div>
            <FormControl className='col-md-6'>
                <Input type="submit" value="Enregistrer" className='btn btn-primary' />
            </FormControl>
          </form>          
        </DialogContent>
      </BootstrapDialog>
    </Fragment>
  );
}
