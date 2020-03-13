import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addIncome } from '../store/actions/creators'
import Layout from '../layout/Layout';
import Dashboard from '../layout/Dashboard';
import Card from '../components/card';


const Incomes = (props) => {

    const [repeatIncome, setRepeatIncome] = useState(false);

    const toggleCheck = () => {
        setRepeatIncome(!repeatIncome);
    };

    return (
        <Layout>
            <Dashboard pageTitle={"Управление доходами"}>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            <Card styleClass="card-primary" cardTitle="Добавить доход">
                                <form role="form">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="inputSumm">Сумма</label>
                                            <input type="number" class="form-control" id="inputSumm" placeholder="Введите сумму" />
                                        </div>
                                        <div class="form-group">
                                            <label for="inputTags">Тэги</label>
                                            <input type="text" class="form-control" id="inputTags" placeholder="Введите тэги для фильтра" />
                                        </div>
                                        <div class="form-group">
                                            <label for="inputDate">Дата</label>
                                            <input type="text" class="form-control" id="inputDate" placeholder="dd/mm/yyyy"/>
                                        </div>
                                        <div class="icheck-primary d-inline">
                                            <input type="checkbox" id="checkboxRepeat" onClick={() => toggleCheck()} checked={repeatIncome} />
                                            <label for="checkboxRepeat">Регулярные (раз в неделю/в месяц)</label>
                                        </div>
                                    </div>

                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-primary">Сохранить</button>
                                    </div>
                                </form>
                            </Card>
                        </div>
                        <div class="col-md-6">
                            <Card styleClass="card-warning" cardTitle="Доходы за последние полгода">
                                <div class="card-body p-0">
                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Дата</th>
                                                <th>Вид дохода</th>
                                                <th>Сумма</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {props.incomes.map(item => (
                                                    <tr>
                                                        <td>{item.date}</td>
                                                        <td>{item.source}</td>
                                                        <td>{item.money} руб.</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </Dashboard>
        </Layout>
    );
}


function mapStateToProps(state) {
    return {
        incomes: state.incomes.list
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmit: data => dispatch(addIncome(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Incomes);