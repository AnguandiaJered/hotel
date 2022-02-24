import React,{ Fragment  } from "react";
import { Link } from "react-router-dom";
import { Savereservechambre } from "../modals/Savereservechambre";
import { Editreservechambre } from '../modals/Editreservechambre';


const ReservationChambre = () =>{
  
    return(
        <Fragment>
            <div className='dashboard'>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-title mt-3 ml-4">
                            <h1 className="titre">GESTION D'HOTEL
                                <small className="ml-3">Gold Star International Hotel</small>
                            </h1>
                            <div className="container-fluid">
                                <ol className="breadcrumb">
                                    <li className="active"><i className="fa fa-dashboard"></i> Dashboard / Reservation Chambre</li>
                                </ol>
                            </div>                            
                        </div>
                    </div>
                </div>
               
                <div className="offset-9">
                    <Savereservechambre />
                </div> 
   
                <div className="container mt-5">
                    <div className="portlet-body">
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered table-hover table-green" id="map-table-example">
                                <thead>
                                    <tr>
                                        <th>Code</th>
                                        <th>Clients</th>
                                        <th>Chambres</th>
                                        <th>Date Entrée</th>
                                        <th>Date Sortie</th>
                                        <th>Prix</th>
                                        <th>Devise</th>
                                        <th>Libelle</th>
                                        <th>Date Reservation</th>
                                        <th>Observation</th>
                                        <th>Provenance</th>
                                        <th>ActionsActions </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>01</strong></td>
                                        <td>United States</td>
                                        <td>14,624</td>
                                        <td>28,981</td>
                                        <td>281</td>
                                        <td>30.43%</td>
                                        <td>United States</td>
                                        <td>14,624</td>
                                        <td>28,981</td>
                                        <td>281</td>
                                        <td>30.43%</td>
                                   
                                        <td>
                                            <Editreservechambre />
                                            <Link  to="#" className="btn btn-danger ml-3 bd"><i className="fa fa-trash"></i></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>02</strong></td>
                                        <td>China</td>
                                        <td>5,745</td>
                                        <td>10,491</td>
                                        <td>121</td>
                                        <td>36.73%</td>
                                        <td>China</td>
                                        <td>5,745</td>
                                        <td>10,491</td>
                                        <td>121</td>
                                        <td>36.73%</td>
                                   
                                        <td>
                                            <Editreservechambre />
                                            <Link  to="#" className="btn btn-danger ml-3 bd"><i className="fa fa-trash"></i></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>03</strong></td>
                                        <td>Japan</td>
                                        <td>5,390</td>
                                        <td>11,165</td>
                                        <td>102</td>
                                        <td>35.52%</td>
                                        <td>Japan</td>
                                        <td>5,390</td>
                                        <td>11,165</td>
                                        <td>102</td>
                                        <td>35.52%</td>
                                     
                                        <td>
                                            <Editreservechambre />
                                            <Link  to="#" className="btn btn-danger ml-3 bd"><i className="fa fa-trash"></i></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>04</strong></td>
                                        <td>Germany</td>
                                        <td>3,305</td>
                                        <td>7,651</td>
                                        <td>71</td>
                                        <td>36.24%</td>
                                        <td>Germany</td>
                                        <td>3,305</td>
                                        <td>7,651</td>
                                        <td>71</td>
                                        <td>36.24%</td>
                                        
                                        <td>
                                            <Editreservechambre />
                                            <Link  to="#" className="btn btn-danger ml-3 bd"><i className="fa fa-trash"></i></Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>                                
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ReservationChambre;