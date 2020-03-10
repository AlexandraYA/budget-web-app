
export const getDateString = function (arg) {
    const month = arg.getMonth() + 1;
    return ("0" + arg.getDay()).slice(-2) + "/" + ("0" + month).slice(-2) + "/" + arg.getFullYear();
}