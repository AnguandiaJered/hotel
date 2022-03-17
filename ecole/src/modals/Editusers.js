import React,{ Fragment,useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { FormControl, FormGroup, Input, InputLabel } from '@mui/material';
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";



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

export const Editusers = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

    let history = useHistory();
    const {id}= useParams();
    const [users,setUsers] = useState({
        iduser:"",
        noms:"",
        username:"",
        password:"",
        mail:"",
        role:""
    });
    const {noms,username,password,mail,role,iduser} = users;
    const handleChange = e =>{
        setUsers({...users,[e.target.name] : e.target.value});
    }
    useEffect(async (id) =>{
      await axios.get(`http://localhost:8080/user/edit/${id}`).then((res)=>{
        setUsers({...res.data[0]});
      });
    },[]);

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/update/${id}`,users);
        history.push("/");
    };


  return (
    <Fragment>
      <Link to='#' variant="outlined" className='btn btn-primary bd' onClick={handleClickOpen}>
       <i className='fa fa-pencil-square-o'></i>
      </Link>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Update Users
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <form onSubmit={e => onSubmit(e)}>
            <div className='row'>
              <div className='col-md-12'>
                <div>              
                  <input type="hidden"
                  className='form-control' 
                  name='iduser' value={iduser} 
                  onChange={e => handleChange(e)}  />
                </div>
                <FormControl className='col-md-12'>              
                  <Input type="text" placeholder='Noms' 
                  className='form-control' 
                  name='noms' value={noms} 
                  onChange={e => handleChange(e)}  />
                </FormControl>
                <FormControl className='col-md-12'>                   
                    <Input type="text" placeholder='Username' 
                    className='form-control mt-3' 
                    name='username' value={username} 
                    onChange={e => handleChange(e)}  />
                </FormControl>
                <FormControl className='col-md-12'>                    
                    <Input type="password" placeholder='Password' 
                    className='form-control mt-3' 
                    name='password' value={password} 
                    onChange={e => handleChange(e)} />
                </FormControl>
              </div>
              <div className='col-md-12'>
                <FormControl className='col-md-12'>                 
                  <Input type="email" placeholder='Email' 
                  className='form-control mt-3' 
                  name='mail' value={mail} 
                  onChange={e => handleChange(e)} />
                </FormControl>
                <FormControl className='col-md-12'>                   
                    <Input type="text" placeholder='Role' 
                    className='form-control mt-3' 
                    name='role' value={role} 
                    onChange={e => handleChange(e)}  />
                </FormControl>
              </div>
            </div>
            <FormControl>
                <Input type="submit" value="Modifier" className='btn btn-primary mt-3' />
            </FormControl>
          </form>  
        </DialogContent>
      </BootstrapDialog>
    </Fragment>
  );
}
