import { ADD_CATEGORY } from '../actions/actionTypes';

const initialState = {
    name: '',
    list: [
        'Продукты',
        'Квартплата',
        'Транспорт',
        'Развлечение',
        'Подарки',
        'Путешествия',
        'Здоровье',
        'Спорт',
        'Дача',
        'Кредиты'
    ]
}

export default function categories(state = initialState, action) {

    switch (action.type) {
        case ADD_CATEGORY:
            return {
                ...state,
                list: [...state.list, action.category]
            };    
            break;
        default:
            return state;
    }
}
