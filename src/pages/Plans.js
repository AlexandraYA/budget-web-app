import React from 'react';
import Layout from '../layout/Layout';
import Dashboard from '../layout/Dashboard';
import Card from '../components/card';


const Plans = (props) => {

    return (
        <Layout>
            <Dashboard pageTitle={"Планирование бюджета"}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
            </Dashboard>  
        </Layout>        
    );
}

export default Plans;