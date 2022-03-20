import React,{ Fragment, useState, useEffect } from 'react';
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

export const Editreservechambre = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  let history = useHistory();
  const {id}= useParams();
  const [reserveroom,setReserveroom] = useState({
    idroom:"",
    refclient:"",
    refchambre:"",
    dateentree:"",
    datesortie:"",
    libelle:"",
    nombrejour:"",
    prix:"",
    devise:"",
    datereservation:"",
    observation:"",
    provenance:""
  });
  
  const {refclient,refchambre,dateentree,datesortie,libelle,nombrejour,prix,devise,datereservation,observation,provenance,idroom} = reserveroom;
    
  const handleChange = e =>{
        setReserveroom({...reserveroom,[e.target.name] : e.target.value});
    }

  useEffect(async (id) =>{
    await axios.get(`http://localhost:8080/reserveroom/edit/${id}`).then((res)=>{
      setReserveroom({...res.data[0]});
    });
  },[]);

  const onSubmit = async e =>{
      e.preventDefault();
      await axios.put(`http://localhost:8080/reserveroom/update/${id}`,reserveroom);
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
          Update Reservation Chambre
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <form onSubmit={e =>onSubmit(e)}>
            <div className='row'>
              <div className='col-md-6'>
                <div>              
                  <input type="hidden"
                  className='form-control' 
                  name='idroom' value={idroom} 
                  onChange={e => handleChange(e)}  />
                </div>
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
                  <InputLabel htmlFor='chambre'>Chambres</InputLabel>
                   <Select className='form-control'  
                    name='refchambre' 
                    value={refchambre} 
                    onChange={e => handleChange(e)}> 
                     <MenuItem>Ch1</MenuItem>
                     <MenuItem>Ch2</MenuItem>
                     <MenuItem>Ch3</MenuItem>
                     <MenuItem>Ch4</MenuItem>
                   </Select>
                </div>
                <div className='form-group'>
                  <InputLabel htmlFor='dateentree'>Date Entrée</InputLabel>
                  <Input type="date" 
                  className='form-control' 
                  name='dateentree' 
                  value={dateentree} 
                  onChange={e => handleChange(e)}/>
                </div>
                <div className='form-group'>
                  <InputLabel htmlFor='datesortie'>Date Sortie</InputLabel>
                  <Input type="date" 
                  className='form-control'  
                  name='datesortie' 
                  value={datesortie} 
                  onChange={e => handleChange(e)} />
                </div>
                <div className='form-group'>
                  <InputLabel htmlFor='libelle'>Libelle</InputLabel>
                  <Input type="text" 
                  placeholder='Libelle' 
                  min="0" 
                  className='form-control'  
                  name='libelle' 
                  value={libelle} 
                  onChange={e => handleChange(e)} />
                </div>
                <div className='form-group'>
                  <InputLabel htmlFor='jour'>Nombre de jours</InputLabel>
                  <Input type="number" 
                  placeholder='Nombre de jour' 
                  min="0" 
                  className='form-control'  
                  name='nombrejour' 
                  value={nombrejour} 
                  onChange={e => handleChange(e)} />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <InputLabel htmlFor='nom'>Prix unitaire</InputLabel>
                  <Input type="number" 
                  placeholder='Prix unitaire' 
                  min="0" 
                  className='form-control'  
                  name='prix' 
                  value={prix} 
                  onChange={e => handleChange(e)} />
                </div>
                <div className='form-group'>
                  <InputLabel htmlFor='devise'>Devise</InputLabel>
                   <Select className='form-control' 
                    name='devise' 
                    value={devise} 
                    onChange={e => handleChange(e)}> 
                     <MenuItem>USD</MenuItem>
                   </Select>
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='datereservation'>Date Reservation</InputLabel>
                    <Input type="date" 
                    className='form-control'  
                    name='datereservation' 
                  value={datereservation} 
                  onChange={e => handleChange(e)}/>
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='observation'>Observation</InputLabel>
                    <Input type="text" 
                    placeholder='Observation' 
                    className='form-control'  
                    name='observation' 
                  value={observation} 
                  onChange={e => handleChange(e)} />
                </div>
                <div className='form-group'>
                    <InputLabel htmlFor='provenance'>Provenance</InputLabel>
                    <Input type="text" 
                    placeholder='Provenance' 
                    className='form-control'  
                    name='provenance' 
                  value={provenance} 
                  onChange={e => handleChange(e)} />
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
