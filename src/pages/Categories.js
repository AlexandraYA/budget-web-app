import React from 'react';
import Layout from '../layout/Layout';
import Dashboard from '../layout/Dashboard';


const Categories = (props) => {

    return (
        <Layout>
            <Dashboard pageTitle={"Управление категориями"}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Добавить категорию</h3>
                                </div>
                                <form role="form">
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label for="inputSumm">Название</label>
                                            <input type="number" className="form-control" id="inputSumm" placeholder="Введите название" />
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
                                    <h3 className="card-title">Все категории</h3>
                                </div>

                                <div className="card-body p-0">
                                    <table className="table table-sm">
                                        <tbody>
                                            <tr>
                                                <td>Продукты</td>
                                            </tr>
                                            <tr>
                                                <td>Квартплата</td>
                                            </tr>
                                            <tr>
                                                <td>Транспорт</td>
                                            </tr>
                                            <tr>
                                                <td>Развлечение</td>
                                            </tr>
                                            <tr>
                                                <td>Подарки</td>
                                            </tr>
                                            <tr>
                                                <td>Путешествия</td>
                                            </tr>
                                            <tr>
                                                <td>Здоровье</td>
                                            </tr>
                                            <tr>
                                                <td>Спорт</td>
                                            </tr>
                                            <tr>
                                                <td>Дача</td>
                                            </tr>
                                            <tr>
                                                <td>Кредиты</td>
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

export default Categories;