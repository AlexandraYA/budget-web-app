import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getDateString } from '../utils/utils'

import { calculateDayBudget } from '../store/actions/creators'
import Layout from '../layout/Layout';
import Dashboard from '../layout/Dashboard';
import Card from '../components/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';


const BudgetADay = (props) => {

    const initialTerminate = getDateString(new Date);
    console.log("initialTerminate = ", initialTerminate);
    let budgetInput = React.createRef();
    let terminateInput = React.createRef();

    const prepareData = () => {
        console.log("budgetInput = ", budgetInput);
        props.onSubmit({ newBudget: budgetInput.current, newTerminate: terminateInput.current })
    }

    return (
        <Layout>
            <Dashboard pageTitle={"Бюджет на день"}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <Card
                                styleClass="card-primary"
                                cardTitle="Рассчитать бюджет">
                                <form onSubmit={() => prepareData}>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label for="inputSumm">Сумма</label>
                                            <input 
                                                type="number"
                                                className="form-control"
                                                id="inputSumm"
                                                placeholder="Введите сумму"
                                                ref={budgetInput} />
                                        </div>
                                        <div className="form-group">
                                            <label for="inputDate">Дата следующего дохода</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="inputDate"
                                                placeholder="dd/mm/yyyy"
                                                value={initialTerminate}
                                                ref={terminateInput} />
                                        </div>
                                    </div>

                                    <div className="card-footer">
                                        <button
                                            type="submit"
                                            className="btn btn-primary">
                                            Считай
                                        </button>
                                    </div>
                                </form>
                            </Card>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="info-box">
                                <span className="info-box-icon bg-success">
                                    <FontAwesomeIcon icon={faHandHoldingUsd} />
                                </span>

                                <div className="info-box-content">
                                    <span className="info-box-text">Тратьте с умом</span>
                                    <span className="info-box-number">{props.dayBudget} руб.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dashboard>
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        budget: state.dayBudget.budget,
        terminate: state.dayBudget.dayTerminate,
        dayBudget: state.dayBudget.dayBudget
    };
};

function mapDispatchToProps(dispatch) {
    return {
        calculate: data => dispatch(calculateDayBudget(data))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(BudgetADay);
