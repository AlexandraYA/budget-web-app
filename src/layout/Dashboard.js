import React from 'react';


const Dashboard = (props) => {
    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">{ props.pageTitle }</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Статистика</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <section className="content">
                {props.children}
            </section>
        </div>
    );
};

export default Dashboard;
