import React,{ Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Saveusers } from "../modals/Saveusers";
import { Editusers } from '../modals/Editusers';
import axios from 'axios';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';



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
 
  
export const Utilisateur = () =>{
  
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const [user,setUser] = useState();

    useEffect( async () => {
        await axios.get('http://localhost:8080/user/showalluser').then((res) =>{
            setUser(res.data);
            console.log(res.data);           
        });
    },[]);

    const deleteUser = async (id) =>{
      await axios.delete(`http://localhost:8080/user/delete/${id}`)
        .then((res)=>{
            setUser(res.data);
        })
        
    };

    return(
        <>
            <div className='dashboard container-fluid'>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-title mt-3 ml-4">
                            <h1 className="titre">GESTION D'HOTEL
                                <small className="ml-3">Gold Star International Hotel</small>
                            </h1>
                            <div className="container-fluid">
                                <ol className="breadcrumb">
                                    <li className="active"><i className="fa fa-dashboard"></i> Dashboard / Users</li>
                                </ol>
                            </div>                            
                        </div>
                    </div>
                </div>
                
                <div className="offset-10">
                    <Saveusers />
                </div> 
                
                <div className="container mt-3">                    
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Code</StyledTableCell>
                                    <StyledTableCell align="center">Noms</StyledTableCell>
                                    <StyledTableCell align="center">Username</StyledTableCell>
                                    <StyledTableCell align="center">Password</StyledTableCell>
                                    <StyledTableCell align="center">Email</StyledTableCell>
                                    <StyledTableCell align="center">Role</StyledTableCell>
                                    <StyledTableCell align="center">Actions</StyledTableCell>                                                                    
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { user &&
                                    user.User.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item,index) =>(
                                                                                                           
                                    <StyledTableRow key={index}>
                                        <StyledTableCell component="th" scope="row">
                                            {index + 1}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{item.noms}</StyledTableCell>
                                        <StyledTableCell align="center">{item.username}</StyledTableCell>
                                        <StyledTableCell align="center">{item.password}</StyledTableCell>
                                        <StyledTableCell align="center">{item.mail}</StyledTableCell>
                                        <StyledTableCell align="center">{item.role}</StyledTableCell>
                                        <StyledTableCell align="center">
                                           <Link to={`/user/edit/${item.id}`}>
                                                <Editusers/>
                                           </Link> 
                                            <Link onClick={() => deleteUser(item.id)} to="#"  className="btn btn-danger bd ml-2"><i className="fa fa-trash"></i></Link>
                                        </StyledTableCell>                                                                                                                                                                                                                                      
                                    </StyledTableRow>                                  
                                  ))
                                }
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
        </>
    )
}

export const Parametre = () =>{
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
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
                                    <li className="active"><i className="fa fa-dashboard"></i> Dashboard / Parametre</li>
                                </ol>
                            </div>                            
                        </div>
                    </div>               
                </div>
                <div className="container mt-3">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Code</StyledTableCell>
                                    <StyledTableCell align="center">Noms</StyledTableCell>
                                    <StyledTableCell align="center">Username</StyledTableCell>
                                    <StyledTableCell align="center">Password</StyledTableCell>
                                    <StyledTableCell align="center">Email</StyledTableCell>
                                    <StyledTableCell align="center">Role</StyledTableCell>
                                    <StyledTableCell align="center">Actions</StyledTableCell>                                                                    
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.calories}</StyledTableCell>
                                    <StyledTableCell align="center">{row.fat}</StyledTableCell>
                                    <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                                    <StyledTableCell align="center">{row.protein}</StyledTableCell>
                                    <StyledTableCell align="center">{row.protein}</StyledTableCell>
                                    <StyledTableCell align="center">{row.protein}</StyledTableCell>                                                                                                                                                                                                                                      
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