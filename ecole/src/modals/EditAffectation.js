import React,{ Fragment,useState,useEffect } from 'react';
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

export const EditAffectation = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  let history = useHistory();
  const {id}= useParams();
  const [affectation,setAffectation] = useState({
    idaffect:"",
    refpersonnel:"",
    refservice:"",
    dateaffectation:"",
    montant:"",
    devise:"",
    libelle:"",
    author:""
  });
  const {refpersonnel,refservice,dateaffectation,montant,devise,libelle,author,idaffect} = affectation;
    const handleChange = e =>{
        setAffectation({...affectation,[e.target.name] : e.target.value});
    }
  useEffect(async (id) =>{
    await axios.get(`http://localhost:8080/affectation/edit/${id}`).then((res)=>{
      setAffectation({...res.data[0]});
    });
  },[]);

  const onSubmit = async e =>{
      e.preventDefault();
      await axios.put(`http://localhost:8080/affectation/update/${id}`,affectation);
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
          Update Affectation Personnel
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <form onSubmit={e =>onSubmit(e)}>
            <div className='row'>
              <div className='col-md-6'>
                <div>              
                  <input type="hidden"
                  className='form-control' 
                  name='idaffect' value={idaffect} 
                  onChange={e => handleChange(e)}  />
                </div>
                <div className='form-group'>
                  <InputLabel htmlFor='agent'>Agents</InputLabel>
                  <Select className='form-control' 
                  name='refpersonnel' 
                  value={refpersonnel} 
                  onChange={e => handleChange(e)}> 
                     <MenuItem>Jered</MenuItem>
                     <MenuItem>Ted</MenuItem>
                     <MenuItem>Bob</MenuItem>
                     <MenuItem>Marley</MenuItem>
                  </Select>
                </div>
                <div className='form-group'>
                  <InputLabel htmlFor='service'>Service</InputLabel>
                  <Select className='form-control' 
                  name='refservice' 
                  value={refservice} 
                  onChange={e => handleChange(e)}> 
                     <MenuItem>Comptabilité</MenuItem>
                     <MenuItem>Secretaire</MenuItem>
                     <MenuItem>Cuisine</MenuItem>
                  </Select>
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='nom'>Date Affectation</InputLabel>
                    <Input type="date" 
                    className='form-control'
                     name='dateaffectation' 
                     value={dateaffectation} 
                     onChange={e => handleChange(e)} />
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='montant'>Montant</InputLabel>
                    <Input type="number" 
                    placeholder='Montant' min="0"  
                    className='form-control' 
                    name='montant' value={montant} 
                    onChange={e => handleChange(e)}/>
                </div>              
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                    <InputLabel htmlFor='devise'>Devise</InputLabel>
                    <Select className='form-control' 
                    name='devise' value={devise} 
                    onChange={e => handleChange(e)}> 
                     <MenuItem>USD</MenuItem>
                    </Select>
                </div>
                <div className='form-group'>
                  <InputLabel htmlFor='libelle'>Libelle</InputLabel>
                  <Input type="text" 
                  placeholder='Libelle' 
                  className='form-control' 
                  name='libelle' value={libelle} 
                  onChange={e => handleChange(e)} />
                </div>               
                <div className='form-group'>
                    <InputLabel htmlFor='author'>Author</InputLabel>
                    <Input type="text" 
                    placeholder='Author' 
                    className='form-control' 
                    name='author' value={author} 
                    onChange={e => handleChange(e)}/>
                </div>
              </div>
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
