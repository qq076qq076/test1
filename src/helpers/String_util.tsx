function _addCommas(numberString: string) {
    const parts = numberString.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}

function _fixWithFloatingDigits(num: number, digits: number) {
    const numString = num.toString();
    const floatingIndex = numString.indexOf('.');
    if (floatingIndex < 0) {
        return numString + '.' + new Array(digits).fill('0').join('');
    } else {
        const floatingPart = ((numString.length - 1) - floatingIndex > 1)
            ? numString.substr(floatingIndex + 1, digits)
            : numString.substr(floatingIndex + 1, 1) + '0';
        return numString.substring(0, floatingIndex) + '.' + floatingPart;
    }
}

function stringifyMoney(money: number) {
    return money ? _addCommas(_fixWithFloatingDigits(money, 2)) : '';
}

export default stringifyMoney;
