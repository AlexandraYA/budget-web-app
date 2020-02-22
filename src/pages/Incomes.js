import React, { useState } from 'react';
import Layout from '../layout/Layout';
import Dashboard from '../layout/Dashboard';


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
                            <div class="card card-primary">
                                <div class="card-header">
                                    <h3 class="card-title">Добавить доход</h3>
                                </div>

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
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card card-warning">
                                <div class="card-header">
                                    <h3 class="card-title">Доходы за последние полгода</h3>
                                </div>

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
                                            <tr>
                                                <td>02.01.2020</td>
                                                <td>Зарплата</td>
                                                <td>13000 руб.</td>
                                            </tr>
                                            <tr>
                                                <td>22.01.2020</td>
                                                <td>Зарплата</td>
                                                <td>53000 руб.</td>
                                            </tr>
                                            <tr>
                                                <td>02.02.2020</td>
                                                <td>Зарплата</td>
                                                <td>283000 руб.</td>
                                            </tr>
                                            <tr>
                                                <td>22.02.2020</td>
                                                <td>Зарплата</td>
                                                <td>148000 руб.</td>
                                            </tr>
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

export default Incomes;