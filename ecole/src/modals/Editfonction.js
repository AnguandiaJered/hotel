import React,{ Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { FormControl, Input, InputLabel } from '@mui/material';
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

export const Editfonction = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  let history = useHistory();
  const {id}= useParams();
  const [fonction,setFonction] = useState({
    idfonc:"",
    designation:""
  });

  const {designation,idfonc} = fonction;
    const handleChange = e =>{
        setFonction({...fonction,[e.target.name] : e.target.value});
    }
  useEffect(async (id) =>{
    await axios.get(`http://localhost:8080/fonction/edit/${id}`).then((res)=>{
      setFonction({...res.data[0]});
    });
  },[]);

  const onSubmit = async e =>{
      e.preventDefault();
      await axios.put(`http://localhost:8080/fonction/update/${id}`,fonction);
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
          Update Fonction
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <form onSubmit={e => onSubmit(e)}>
            <div>              
                <input type="hidden"
                className='form-control' 
                name='idfonc' value={idfonc} 
                onChange={e => handleChange(e)}  />
            </div>
            <div className='form-group'>
              <InputLabel htmlFor='designation'>Designation</InputLabel>
              <Input type="text" 
              placeholder='Designation' 
              className='form-control' 
              name='designation' 
              value={designation} 
              onChange={e => handleChange(e)} />
            </div>
            <FormControl className='col-md-6'>
                <Input type="submit" value="Modifier" className='btn btn-primary' />
            </FormControl>
          </form>            
        </DialogContent>
      </BootstrapDialog>
    </Fragment>
  );
}
