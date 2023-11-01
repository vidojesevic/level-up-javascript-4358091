// Write your code here
const str = 'Hello';
const length = str.length;

function howManyCombinations(length) {
    if (length === 0 || length === 1) {
        return 1;
    } else if (length == 2) {
        return 2;
    }

    return length * howManyCombinations(length - 1);
}

console.log(howManyCombinations(length));
