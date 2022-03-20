import React,{ Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Savepaiesalle } from "../modals/Savepaiesalle";
import { Editpaiesalle } from '../modals/Editpaiesalle';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import axios from "axios";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

const PaieSalle = () =>{
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const [salles,setSalles] = useState();

    useEffect( async () => {
        await axios.get('http://localhost:8080/paiesalle/showallsalle').then((res) =>{
            setSalles(res.data);
            console.log(res.data);           
        });
    },[]);

    const deleteSalles= async (id) =>{
      await axios.delete(`http://localhost:8080/paiesalle/delete/${id}`)
        .then((res)=>{
            setSalles(res.data);
        })        
    };

    return(
        <Fragment>
            <div className='dashboard container-fluid'>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-title mt-3 ml-4">
                            <h1 className="titre">GESTION D'HOTEL
                                <small className="ml-3">Gold Star International Hotel</small>
                            </h1>
                            <div className="container-fluid">
                                <ol className="breadcrumb">
                                    <li className="active"><i className="fa fa-dashboard"></i> Dashboard / Paiement Salle</li>
                                </ol>
                            </div>                            
                        </div>
                    </div>
                </div>
               
                <div className="offset-10">
                    <Savepaiesalle />
                </div> 
               
                <div className="container mt-3">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Code</StyledTableCell>
                                    <StyledTableCell align="center">Montant payé</StyledTableCell>
                                    <StyledTableCell align="center">Devise</StyledTableCell>
                                    <StyledTableCell align="center">Libelle</StyledTableCell>
                                    <StyledTableCell align="center">Date Paiement</StyledTableCell>
                                    <StyledTableCell align="center">Reservation</StyledTableCell>
                                    <StyledTableCell align="center">Author</StyledTableCell>
                                    <StyledTableCell align="center">Actions</StyledTableCell>                                                                    
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {salles &&
                                salles.Paiesalle.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item,index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell component="th" scope="row">
                                        {index +1}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{item.montant}</StyledTableCell>
                                    <StyledTableCell align="center">{item.devise}</StyledTableCell>
                                    <StyledTableCell align="center">{item.libelle}</StyledTableCell>
                                    <StyledTableCell align="center">{item.datepaie}</StyledTableCell>
                                    <StyledTableCell align="center">{item.refreservation}</StyledTableCell>
                                    <StyledTableCell align="center">{item.author}</StyledTableCell>                                                                                                                                                                                                                                      
                                    <StyledTableCell align="center">
                                        <Editpaiesalle/>
                                        <Link onClick={() => deleteSalles(item.id)} to="#" className="btn btn-danger bd ml-2"><i className="fa fa-trash"></i></Link>
                                    </StyledTableCell>                                                                                                                                                                                                                                      
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5,10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default PaieSalle;