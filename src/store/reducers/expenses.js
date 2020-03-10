import { ADD_EXPENSE } from '../actions/actionTypes';

const initialState = {
    money: 0,
    date: '',
    category: '',
    dayInMonth: 0,
    dayInWeek: 0,
    regular: false,
    paid: false,
    list: [
        {
            date: '16.01.2020',
            category: 'Квартплата',
            comment: '',
            money: 7500
        },
        {
            date: '18.01.2020',
            category: 'Квартплата',
            comment: '',
            money: 7500
        },
        {
            date: '19.01.2020',
            category: 'Транспорт',
            comment: '',
            money: 1200
        },
        {
            date: '19.01.2020',
            category: 'Транспорт',
            comment: '',
            money: 650
        },
        {
            date: '20.01.2020',
            category: 'Продукты',
            comment: 'На праздник',
            money: 8500
        },
        {
            date: '21.01.2020',
            category: 'Продукты',
            comment: '',
            money: 3000
        },
        {
            date: '21.01.2020',
            category: 'Обучение',
            comment: 'Бибигон',
            money: 3000
        },
        {
            date: '22.01.2020',
            category: 'Развлечения',
            comment: 'Кинотеатр',
            money: 1230
        }]
}

export default function expenses(state = initialState, action) {
    switch (action.type) {
        case ADD_EXPENSE:

            return {
            };
            break;
        default:
            return state;
    }
}