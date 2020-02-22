import React from 'react';
import Layout from '../layout/Layout';
import Dashboard from '../layout/Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';


const BudgetADay = (props) => {

    return (
        <Layout>
            <Dashboard pageTitle={"Бюджет на день"}>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card card-primary">
                                <div class="card-header">
                                    <h3 class="card-title">Рассчитать бюджет</h3>
                                </div>

                                <form role="form">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="inputSumm">Сумма</label>
                                            <input type="number" class="form-control" id="inputSumm" placeholder="Введите сумму" />
                                        </div>
                                        <div class="form-group">
                                            <label for="inputDate">Дата следующего дохода</label>
                                            <input type="text" class="form-control" id="inputDate" placeholder="dd/mm/yyyy" />
                                        </div>
                                    </div>

                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-primary">Считай</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 col-12">
                            <div class="info-box">
                                <span class="info-box-icon bg-success">
                                    <FontAwesomeIcon icon={faHandHoldingUsd} />
                                </span>

                                <div class="info-box-content">
                                    <span class="info-box-text">Тратьте с умом</span>
                                    <span class="info-box-number">1200 руб.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dashboard>
        </Layout>
    );
}

export default BudgetADay;
