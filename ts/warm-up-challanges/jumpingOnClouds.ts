//https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function jumpingOnClouds(c: number[]): number {
    const thunderheads:number = 1;
    const cumulus:number = 0;
    let jumps:number = 0;
    let i:number = 0;
    while (i < c.length-1) {
        if (c[i+1] === thunderheads) { 
            i = i+2;
        } else if (c[i+2] === cumulus && c[i+2] <= c.length) {
            i = i+2;
        } else if (c[i+1] === cumulus && c[i+1] <= c.length) {
            i++
        }
        jumps++;
    }
    return jumps;
}

const clouds:number[] = [0,0,1,0,0,1,0];
console.log(jumpingOnClouds(clouds));