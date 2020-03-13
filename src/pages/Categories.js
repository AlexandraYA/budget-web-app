import React from 'react';
import { connect } from 'react-redux';

import { addCategory } from '../store/actions/creators'
import Layout from '../layout/Layout';
import Dashboard from '../layout/Dashboard';
import Card from '../components/card';


const Categories = (props) => {

    return (
        <Layout>
            <Dashboard pageTitle={"Управление категориями"}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <Card styleClass="card-primary" cardTitle="Добавить категорию">
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
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card styleClass="card-warning" cardTitle="Все категории">
                                <div className="card-body p-0">
                                    <table className="table table-sm">
                                        <tbody>
                                            {props.categories.map(category => (
                                                    <tr>
                                                        <td>{category}</td>
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
        categories: state.categories.list
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmit: data => dispatch(addCategory(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);