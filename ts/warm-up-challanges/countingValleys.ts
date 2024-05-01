// https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen

function countingValleys(steps: number, path: string): number {
    const arr:string[] = path.split('');

    const seaLevel:number = 0;
    let level:number = 0;
    let valleys:number = 0;

    arr.forEach(step => {
        const aux:number = level;
        step === 'U' ? level++ : level--;

        if (aux < 0 && level === seaLevel) {
            valleys++;
        }
    })

    return valleys;
}


const s:number = 8;
const p:string = 'DDUUUUDD';
console.log(countingValleys(s, p));