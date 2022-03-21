import React,{ Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { FormControl, FormGroup, Input } from '@mui/material';
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

export const Saveusers = () => {
  let history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [users,setUsers] = useState({
    noms:"",
    username:"",
    password:"",
    mail:"",
    role:""
  });
  const {noms,username,password,mail,role} = users;
    const handleChange = e =>{
        setUsers({...users,[e.target.name] : e.target.value});
    }

    const onSubmit = async e =>{
      e.preventDefault();
      await axios.post('http://localhost:8080/user/create',users).then(res =>{
        console.log(res.data);
      });
      history.push("/");
  }

  return (
    <Fragment>
      <Link to='#' variant="outlined" className='btn btn-primary' onClick={handleClickOpen}>
        <i className='fa fa-plus'></i> Add Users
      </Link>
      <BootstrapDialog 
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Ajouter Users
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <form onSubmit={e => onSubmit(e)}>
            <div className='row'>
              <div className='col-md-12'>
                <FormControl className='col-md-12'>              
                  <Input type="text" placeholder='Noms' 
                  className='form-control' 
                  name='noms' value={noms} 
                  onChange={e => handleChange(e)} required/>
                </FormControl>
                <FormControl className='col-md-12'>                   
                    <Input type="text" placeholder='Username' 
                    className='form-control mt-3' 
                    name='username' value={username} 
                    onChange={e => handleChange(e)} required/>
                </FormControl>
                <FormControl className='col-md-12'>                    
                    <Input type="password" placeholder='Password' 
                    className='form-control mt-3' 
                    name='password' value={password} 
                    onChange={e => handleChange(e)} required/>
                </FormControl>
              </div>
              <div className='col-md-12'>
                <FormControl className='col-md-12'>                 
                  <Input type="email" placeholder='Email' 
                  className='form-control mt-3' 
                  name='mail' value={mail} 
                  onChange={e => handleChange(e)} required/>
                </FormControl>
                <FormControl className='col-md-12'>                   
                    <Input type="text" placeholder='Role' 
                    className='form-control mt-3' 
                    name='role' value={role} 
                    onChange={e => handleChange(e)} required/>
                </FormControl>
              </div>
            </div>
            <FormControl className='col-md-6'>
                <Input type="submit" value="Enregistrer" className='btn btn-primary mt-3' />
            </FormControl>
          </form>          
        </DialogContent>
      </BootstrapDialog>
    </Fragment>
  );
}
