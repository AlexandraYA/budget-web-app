import { CALCULATE } from '../actions/actionTypes';

const initialState = {
    budget: 0,
    dayBudget: 0,
    nextDayBudget: 0,
    dayTerminate: ''
}

export default function dayBudget(state = initialState, action) {
    switch (action.type) {
        case CALCULATE:
            const today = new Date();
            const terminateDay = new Date(action.payload.newTerminate);
            const difference = terminateDay.getTime() - today.getTime();
            const daysAmount = Math.round(difference / (1000 * 60 * 60 * 24));
            const newDayBudget = action.payload.newBudget / daysAmount;

            return {
                budget: action.payload.newBudget,
                dayBudget: newDayBudget,
                nextDayBudget: newDayBudget,
                dayTerminate: action.payload.newTerminate
            };
            break;
        default: 
            return state;
    }
}