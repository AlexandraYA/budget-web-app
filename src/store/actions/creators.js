import { ADD_EXPENSE, ADD_INCOME, ADD_CATEGORY, CALCULATE } from './actionTypes';


export function addExpense(data) {
    return {
        type: ADD_EXPENSE,
        payload: data
    }
}

export function addIncome(data) {
    return {
        type: ADD_INCOME,
        payload: data
    }
}

export function calculateDayBudget(data) {
    return {
        type: CALCULATE,
        payload: data
    }
}

export function addCategory(data) {
    return {
        type: ADD_CATEGORY,
        payload: data
    }
}