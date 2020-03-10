import { combineReducers } from 'redux';

import expenses from './reducers/expenses';
import incomes from './reducers/incomes';
import dayBudget from './reducers/dayBudget';
import categories from './reducers/categories';

export default combineReducers({
    expenses,
    incomes,
    dayBudget,
    categories
})


/*

const statisticsState = function () {
    return {
        incomes: Array,
        incomesFromDate: new Date(),
        incomesToDate: new Date(),
        spends: Array,
        spendsFromDate: new Date(),
        spendsToDate: new Date()
    }
}

const plansState = function () {
    return {
        regularIncomes: Array,
        futureIncomes: Array,
        regularSpends: Array,
        futureSpends: Array,
        pig: Number,
        toDate: new Date()
    }
}

const homePageState = function () {
    return {
        dayBudget: Number,
        plannedIncomes: Array,
        plannedSpends: Array,
        pig: Array
    }
}
*/

// "Планирование"
// Что я хочу планировать? сбережения и расходы
// Что я хочу видеть на графиках? сбережения(точнее то, что я смогу отложить, если траты будут те, что запланированы) и расходы на каждый день
// на календаре? остаток на счету и расходы
// за какое время? указать время с сегодняшнего дня и на будущее (при переходе на страницу будет по-умолчанию на 3 будущих месяца)
// какие параметры задавать? до какой даты показывать календарь, запланировать трату на конкретное число, и доход тоже, и потом их редактировать еще надо, кликнув по ячейке календаря
// что сохранять в базе?
// - дату "до" только местно в state
// - запланированные расходы и доходы (то же, как в стейте, только regular = false и конкретная дата в будущем)