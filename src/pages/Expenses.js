import React, { useState } from 'react';
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
                                            <tr>
                                                <td>12.01.2020</td>
                                                <td>Продукты</td>
                                                <td></td>
                                                <td>3000 руб.</td>
                                            </tr>
                                            <tr>
                                                <td>16.01.2020</td>
                                                <td>Квартплата</td>
                                                <td></td>
                                                <td>7500 руб.</td>
                                            </tr>
                                            <tr>
                                                <td>18.02.2020</td>
                                                <td>Продукты</td>
                                                <td>К празднику</td>
                                                <td>8300 руб.</td>
                                            </tr>
                                            <tr>
                                                <td>12.01.2020</td>
                                                <td>Продукты</td>
                                                <td></td>
                                                <td>3000 руб.</td>
                                            </tr>
                                            <tr>
                                                <td>16.01.2020</td>
                                                <td>Квартплата</td>
                                                <td></td>
                                                <td>7500 руб.</td>
                                            </tr>
                                            <tr>
                                                <td>22.02.2020</td>
                                                <td>Обучение</td>
                                                <td>Бибигон</td>
                                                <td>3900 руб.</td>
                                            </tr>
                                            <tr>
                                                <td>22.02.2020</td>
                                                <td>Обучение</td>
                                                <td>Бибигон</td>
                                                <td>3900 руб.</td>
                                            </tr>
                                            <tr>
                                                <td>22.02.2020</td>
                                                <td>Обучение</td>
                                                <td>Бибигон</td>
                                                <td>3900 руб.</td>
                                            </tr>
                                            <tr>
                                                <td>22.02.2020</td>
                                                <td>Обучение</td>
                                                <td>Бибигон</td>
                                                <td>3900 руб.</td>
                                            </tr>
                                            <tr>
                                                <td>22.02.2020</td>
                                                <td>Обучение</td>
                                                <td>Бибигон</td>
                                                <td>3900 руб.</td>
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

export default Expenses;