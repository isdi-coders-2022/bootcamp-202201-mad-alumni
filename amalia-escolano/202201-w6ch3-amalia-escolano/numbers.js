export function numbers(query) {
    let finalNumbers = query.replaceAll('=', '');
    let arr = finalNumbers.split('&');
    let numbers = [];
    let number = arr[0].replaceAll('a', '');
    numbers.push(number);
    number = arr[1].replaceAll('b', '');
    numbers.push(number);
    if (isNaN(numbers[0]) || isNaN(numbers[1])) {
        process.exit(1);
    }
    return numbers;
}
