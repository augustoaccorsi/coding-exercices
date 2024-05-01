//https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function sockMerchant(n: number, ar: number[]): number {
    let map = new Map<number, number>();

    ar.forEach(element => {
        if (map.has(element)) {
            const sock: number | undefined = map.get(element);
            map.set(element, (sock as number) + 1); // (sock as number) use "as number" to explictly say that this is a number
        } else {
            map.set(element, 1);
        }
    });

    let socks: number = 0;
    for (let [key, value] of map) {
        socks += Math.floor(value/2); //gets the integer of the division. ex: 3/2 => 1
    }
    return socks;
}


const num: number = 7;
const arr: number[] = [1,2,1,2,1,3,2];
console.log(sockMerchant(num, arr));