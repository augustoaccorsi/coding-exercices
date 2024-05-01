// https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

function countSwaps(a: number[]): void {
    const len:number = arr.length;
    let swaps:number = 0;
    for (let i:number = 0; i < len; i++) {
        for (let j:number = 0; j < len; j++) {
            if(a[j] > a[j + 1]) {
                let swap = a[j];
                a[j] = a[j + 1];
                a[j + 1] = swap;
                swaps++;
            }
        }
    }

    console.log(`Array is sorted in ${swaps} swaps.`);
    console.log(`First Element: ${arr[0]}`);
    console.log(`Last Element: ${arr[len-1]}`);
}

const arr:number[] = [3,2,1];
countSwaps(arr);