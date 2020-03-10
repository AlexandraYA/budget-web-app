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

// "������������"
// ��� � ���� �����������? ���������� � �������
// ��� � ���� ������ �� ��������? ����������(������ ��, ��� � ����� ��������, ���� ����� ����� ��, ��� �������������) � ������� �� ������ ����
// �� ���������? ������� �� ����� � �������
// �� ����� �����? ������� ����� � ������������ ��� � �� ������� (��� �������� �� �������� ����� ��-��������� �� 3 ������� ������)
// ����� ��������� ��������? �� ����� ���� ���������� ���������, ������������� ����� �� ���������� �����, � ����� ����, � ����� �� ������������� ��� ����, ������� �� ������ ���������
// ��� ��������� � ����?
// - ���� "��" ������ ������ � state
// - ��������������� ������� � ������ (�� ��, ��� � ������, ������ regular = false � ���������� ���� � �������)