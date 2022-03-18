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

export const Editpersonnel = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  
  let history = useHistory();
  const {id}= useParams();
  const [agent,setAgent] = useState({
    idagent:"",
    matricule:"",
    noms:"",
    datenaissance:"",
    sexe:"",
    etatcivil:"",
    adresse:"",
    telephone:"",
    mail:"",
    etude:"",
    provinceorigine:"",
    fonction:"",
    photo:""
  });
  
  const {matricule,noms,datenaissance,sexe,etatcivil,adresse,telephone,mail,etude,provinceorigine
  ,fonction,photo,idagent} = agent;

    const handleChange = e =>{
        setAgent({...agent,[e.target.name] : e.target.value});
    }
  useEffect(async (id) =>{
    await axios.get(`http://localhost:8080/personnel/edit/${id}`).then((res)=>{
      setAgent({...res.data[0]});
    });
  },[]);

  const onSubmit = async e =>{
      e.preventDefault();
      await axios.put(`http://localhost:8080/personnel/update/${id}`,agent);
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
          Update Personnel
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <form onSubmit={e =>onSubmit(e)}>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-control'>              
                  <input type="hidden"
                  className='form-control' 
                  name='idagent' value={idagent} 
                  onChange={e => handleChange(e)}  />
                </div>
                <div className='form-group'>
                  <InputLabel htmlFor='matricule'>Matricule</InputLabel>
                  <Input type="text" 
                  placeholder='Matricule' 
                  className='form-control' 
                  name='matricule' 
                  value={matricule} 
                  onChange={e => handleChange(e)} />
                </div>
                <div className='form-group'>
                  <InputLabel htmlFor='noms'>Noms</InputLabel>
                  <Input type="text" placeholder='Noms' 
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
                     <MenuItem>M</MenuItem>
                     <MenuItem>F</MenuItem>
                   </Select>
                </div>
                <div className='form-group'>
                  <InputLabel htmlFor='datenaissance'>Date naissance</InputLabel>
                  <Input type="date"  
                  className='form-control' 
                  name='datenaissance' 
                  value={datenaissance} 
                  onChange={e => handleChange(e)} />
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
                    <InputLabel htmlFor='etatcivil'>Etat civil</InputLabel>
                    <Select className='form-control' 
                    name='etatcivil' 
                    value={etatcivil} 
                    onChange={e => handleChange(e)}> 
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
                  <Input type="tel" 
                  placeholder='Telephone' 
                  className='form-control' 
                  name='telephone' 
                  value={telephone} 
                  onChange={e => handleChange(e)} />
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='nom'>Email</InputLabel>
                    <Input type="email" 
                    placeholder='Email' 
                    className='form-control' 
                    name='mail' 
                    value={mail} 
                    onChange={e => handleChange(e)} />
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='niveau'>Niveau Etude</InputLabel>
                    <Input type="text" 
                    placeholder='Niveau etude' 
                    className='form-control' 
                    name='etude' 
                    value={etude} 
                    onChange={e => handleChange(e)} />
                </div>
                <div className='form-group'>
                  <InputLabel htmlFor='province'>Province Origine</InputLabel>
                  <Input type="text" 
                  placeholder='Province Origine' 
                  className='form-control' 
                  name='provinceorigine' 
                  value={provinceorigine} 
                  onChange={e => handleChange(e)} />
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='fonction'>Fonction</InputLabel>
                    <Select className='form-control'  
                      name='fonction' 
                      value={fonction} 
                      onChange={e => handleChange(e)}> 
                     <MenuItem>Comptable</MenuItem>
                     <MenuItem>Reception</MenuItem>
                     <MenuItem>Secretaire</MenuItem>
                     <MenuItem>Informaticien</MenuItem>
                    </Select>
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='photo'>Photo</InputLabel>
                    <Input type="file" className='form-control' 
                    name='photo' 
                    value={photo} 
                    onChange={e => handleChange(e)} />
                </div>
              </div>
            </div>
            <FormControl className='form-group'>
                <Input type="submit" value="Modifier" className='btn btn-primary col-md-6' />
            </FormControl>
          </form>           
        </DialogContent>
      </BootstrapDialog>
    </Fragment>
  );
}
