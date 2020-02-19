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
                        </div>
                    </div>
                </div>
            </Dashboard>
        </Layout>
    );
}

export default Incomes;