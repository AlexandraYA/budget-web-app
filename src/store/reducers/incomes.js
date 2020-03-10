import { ADD_INCOME } from '../actions/actionTypes'

const initialState = {
    money: 0,
    date: '',
    source: '',
    dayInMonth: 0,
    dayInWeek: 0,
    regular: false,
    received: false,
    list: [
        {
            date: '02.01.2020',
            source: 'Зарплата',
            money: 53000
        },
        {
            date: '18.01.2020',
            source: 'Зарплата',
            money: 48000
        },
        {
            date: '02.02.2020',
            source: 'Зарплата',
            money: 53000
        },
        {
            date: '18.02.2020',
            source: 'Зарплата',
            money: 68000
        },
        {
            date: '02.03.2020',
            source: 'Зарплата',
            money: 283000
        },
        {
            date: '18.03.2020',
            source: 'Зарплата',
            money: 148000
        }
    ]
}

export default function incomes(state = initialState, action) {
    switch (action.type) {
        case ADD_INCOME:

            return {
            };
            break;
        default:
            return state;
    }
}
