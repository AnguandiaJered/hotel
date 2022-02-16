import React,{ Fragment , useState } from "react";
import { Link } from "react-router-dom";
import { Saveclient } from "../modals/Saveclient";
import { Editclient } from '../modals/Editclient';


export const Fonction = () =>{
    const [openModal,setOpenModal]= useState(false);
    return(
        <Fragment>
            <div className='dashboard'>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-title mt-3 ml-4">
                            <h1 className="titre">GESTION D'HOTEL
                                <small className="ml-3">Gold Star Hotel</small>
                            </h1>
                            <div className="container-fluid">
                                <ol className="breadcrumb">
                                    <li className="active"><i className="fa fa-dashboard"></i> Dashboard / Fonction</li>
                                </ol>
                            </div>                            
                        </div>
                    </div>
                </div>
                {/* { openModal && <Saveclient closeModal={setOpenModal}/>} */}
                {/* <button onClick={()=>{setOpenModal(true)}} className="btn btn-primary offset-9 col-md-2"><i className="fa fa-plus"></i>  Add client</button> */}
                <div className="offset-10">
                    <Saveclient />
                </div> 
                { openModal && <Saveclient closeModal={setOpenModal}/>}
                <div className="container mt-5">
                    <div className="portlet-body">
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered table-hover table-green" id="map-table-example">
                                <thead>
                                    <tr>
                                        <th>Code</th>
                                        <th>Country</th>
                                        <th>Total Visits</th>
                                        <th>Page Views</th>
                                        <th>Orders</th>
                                        <th>Bounce Rate</th>
                                        <th>Actions</th>
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
                                        <td>
                                            <Editclient />
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
                                        <td>
                                            <Editclient />
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
                                        <td>
                                            <Editclient />
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
                                        <td>
                                            <Editclient />
                                            <Link  to="#" className="btn btn-danger ml-3 bd"><i className="fa fa-trash"></i></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>05</strong></td>
                                        <td>France</td>
                                        <td>2,555</td>
                                        <td>5,615</td>
                                        <td>56</td>
                                        <td>34.83%</td>
                                        <td>
                                            <Editclient />
                                            <Link  to="#" className="btn btn-danger ml-3 bd"><i className="fa fa-trash"></i></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>06</strong></td>
                                        <td>United Kingdom</td>
                                        <td>2,258</td>
                                        <td>4,651</td>
                                        <td>42</td>
                                        <td>32.73%</td>
                                        <td>
                                            <Editclient />
                                            <Link  to="#" className="btn btn-danger ml-3 bd"><i className="fa fa-trash"></i></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>07</strong></td>
                                        <td>Italy</td>
                                        <td>2,036</td>
                                        <td>4,498</td>
                                        <td>44</td>
                                        <td>32.54%</td>
                                        <td>
                                            <Editclient />
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


export const Personne = () =>{
    return(
        <Fragment>
           <div className='dashboard'>
                <div className='text-center py-5 mt-5'>
                    <h1 className='display-1'><span className='fa fa-settings'></span></h1>
                    <h2>Le Personnel de l'hotel</h2>
                </div>
            </div>
        </Fragment>
    )
}