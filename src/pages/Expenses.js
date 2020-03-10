import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addExpense } from '../store/actions/creators'
import Layout from '../layout/Layout';
import Dashboard from '../layout/Dashboard';


const Expenses = (props) => {

    const [repeatIncome, setRepeatIncome] = useState(false);

    const toggleCheck = () => {
        setRepeatIncome(!repeatIncome);
    };

    return (
        <Layout>
            <Dashboard pageTitle={"Управление расходами"}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Добавить покупку</h3>
                                </div>

                                <form role="form">
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label for="inputSumm">Сумма</label>
                                            <input type="number" className="form-control" id="inputSumm" placeholder="Введите сумму" />
                                        </div>
                                        <div className="form-group">
                                            <label>Выберите категорию</label>
                                            <select className="form-control">
                                                <option>Продукты</option>
                                                <option>На квартиру</option>
                                                <option>Транспорт</option>
                                                <option>Одежда</option>
                                                <option>Подарки</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label for="inputDate">Дата</label>
                                            <input type="text" className="form-control" id="inputDate" placeholder="dd/mm/yyyy" />
                                        </div>
                                        <div className="icheck-primary d-inline">
                                            <input type="checkbox" id="checkboxRepeat" onClick={() => toggleCheck()} checked={repeatIncome} />
                                            <label for="checkboxRepeat">Регулярные (раз в неделю/в месяц)</label>
                                        </div>
                                    </div>

                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary">Сохранить</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card card-warning">
                                <div className="card-header">
                                    <h3 className="card-title">Расходы за два месяца</h3>
                                </div>

                                <div className="card-body p-0">
                                    <table className="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Дата</th>
                                                <th>Категория</th>
                                                <th>Пояснение</th>
                                                <th>Сумма</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {props.expenses.map(item => (
                                                    <tr>
                                                        <td>{item.date}</td>
                                                        <td>{item.category}</td>
                                                        <td>{item.comment}</td>
                                                        <td>{item.money} руб.</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
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
        money: state.expenses.money,
        date: state.expenses.date,
        category: state.expenses.category,
        expenses: state.expenses.list
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmit: data => dispatch(addExpense(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);