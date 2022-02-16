import React,{ Fragment } from "react";

const Dashboard = () =>{
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
                                    <li className="active"><i className="fa fa-dashboard"></i> Dashboard</li>
                                </ol>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard;