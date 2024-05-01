
function repeatedString(s, n) {
    let occurances = (s.split('a').length - 1);
    let max = Math.floor(n / s.length);
    let totalAs= occurances * max;
    totalAs += (s.slice(0, n % s.length).split('a').length - 1);
    return totalAs;
 }

const s = 'a'
const n = 1000000000000;
console.log(repeatedString(s, n));