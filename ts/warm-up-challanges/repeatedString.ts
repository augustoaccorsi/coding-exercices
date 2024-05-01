//https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function repeatedString(s: string, n: number): number {
    const infiniteString = s.repeat(n); //=> it overflows the memory if the number of times the string is repeated sis too big
    const infiniteArray:string[] = infiniteString.split('');
    return infiniteArray.filter(value => value === 'a')?.length;
}

const str:string = 'a'
const numb:number = 10;
console.log(repeatedString(str, numb));