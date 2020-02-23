import React from 'react';
import Layout from '../layout/Layout';
import Dashboard from '../layout/Dashboard';
import { Doughnut, Bar } from 'react-chartjs-2';

const donutData = {
    labels: [
        'Продукты',
        'Кредиты',
        'Развлечения',
        'Подарки',
        'Путешествия',
        'Транспорт',
    ],
    datasets: [
        {
            data: [700, 500, 400, 600, 300, 100],
            backgroundColor: ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
        }
    ]
};

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Расходы',
            backgroundColor: '#f56954',
            borderColor: '#f56954',
            borderWidth: 1,
            hoverBackgroundColor: '#f56954',
            hoverBorderColor: '#f56954',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'Доходы',
            backgroundColor: '#00a65a',
            borderColor: '#00a65a',
            borderWidth: 1,
            hoverBackgroundColor: '#00a65a',
            hoverBorderColor: '#00a65a',
            data: [55, 70, 40, 51, 46, 46, 60]
        }
    ]
};


const Statistics = (props) => {

    return (
        <Layout>
            <Dashboard pageTitle={"Статистика"}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Расходы по категориям</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="chart">
                                            <Doughnut data={donutData} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card card-success">
                                    <div className="card-header">
                                        <h3 className="card-title">Расходы и доходы</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="chart">
                                            <Bar
                                                data={data}
                                                width={100}
                                                height={243}
                                                options={{
                                                    maintainAspectRatio: false
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Dashboard>  
        </Layout>        
    );
}

export default Statistics;