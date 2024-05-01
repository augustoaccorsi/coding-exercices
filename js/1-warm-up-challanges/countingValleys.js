// https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen

function countingValleys(steps, path) {
    const pathArray = path.split('');
    
    const seaLevel = 0;
    let valleyCount = 0;
    let aux = 0;
    const up = 'U';

    pathArray.forEach(element => {
        if (element === up) {
            aux++;
        } else {
            aux--;
        }

        if (aux === seaLevel && element === up) {
            valleyCount++;
        }
    });

    return valleyCount;
}

const steps = 8;
const path = 'DDUUUUDD';
console.log(countingValleys(steps, path));