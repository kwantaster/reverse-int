module.exports = function reverse (n) {
    return Math.abs(n).toString().split('').reverse().map(Number).join('');
}
