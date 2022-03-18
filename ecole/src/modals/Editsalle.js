import React,{ Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { FormControl, FormGroup, Input, InputLabel, MenuItem, Select } from '@mui/material';
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

export const Editsalle = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

   
  let history = useHistory();
  const {id}= useParams();
  const [salle,setSalle] = useState({
    idsalle:"",
    designation:"",
    prix:"",
    devise:""
  });
  
  const {designation,prix,devise,idsalle} = salle;
    
  const handleChange = e =>{
        setSalle({...salle,[e.target.name] : e.target.value});
    }

  useEffect(async (id) =>{
    await axios.get(`http://localhost:8080/salle/edit/${id}`).then((res)=>{
      setSalle({...res.data[0]});
    });
  },[]);

  const onSubmit = async e =>{
      e.preventDefault();
      await axios.put(`http://localhost:8080/salle/update/${id}`,salle);
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
          Update Salle
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <form onSubmit={e =>onSubmit(e)}>
            <div className='row'>
              <div className='col-md-12'>
                <div className='form-control'>              
                  <input type="hidden"
                  className='form-control' 
                  name='idsalle' value={idsalle} 
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
                <div className='form-group'>
                    <InputLabel htmlFor='prix'>Prix</InputLabel>
                    <Input type="number" 
                    placeholder='Prix' 
                    min="0" className='form-control' 
                    name='prix' 
                    value={prix} 
                    onChange={e => handleChange(e)}/>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <InputLabel htmlFor='prix'>Devise</InputLabel>
                   <Select className='form-control' 
                    name='devise' 
                    value={devise} 
                    onChange={e => handleChange(e)}> 
                     <MenuItem>USD</MenuItem>
                   </Select>
                </div>
              </div>
            </div>
            <FormControl className='form-group'>
                <Input type="submit" value="Modifier" className='btn btn-primary' />
            </FormControl>
          </form>    
        </DialogContent>
      </BootstrapDialog>
    </Fragment>
  );
}
