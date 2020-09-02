
export const getDateString = function (arg) {
    const month = arg.getMonth() + 1;
    return ("0" + arg.getDay()).slice(-2) + "/" + ("0" + month).slice(-2) + "/" + arg.getFullYear();
}

export const getWeekDayName = num => {
    const arr = ["", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    return arr[num];
}

export const getMonthDayName = num => {
    const arr = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", 
                    "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    return arr[num];
}