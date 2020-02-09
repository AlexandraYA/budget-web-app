import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import Statistics from './pages/Statistics';
import Incomes from './pages/Incomes';
import Expenses from './pages/Expenses';
import Plans from './pages/Plans';
import Categories from './pages/Categories';
import BudgetADay from './pages/BudgetADay';


class App extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact render={() => <Statistics />} />
                    <Route path="/incomes" exact render={() => <Incomes />} />
                    <Route path="/expenses" exact render={() => <Expenses />} />
                    <Route path="/plans" exact render={() => <Plans />} />
                    <Route path="/categories" exact render={() => <Categories />} />
                    <Route path="/budgetaday" exact render={() => <BudgetADay />} />
                    <Redirect to={'/'} />
                </Switch >
            </div>
        );
    }
}

export default App;
