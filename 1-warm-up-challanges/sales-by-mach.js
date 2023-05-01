// https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function sockMerchant(n, ar) {
    const pairs = [];
    const socks = [...ar];
    let count = 0;

    socks.forEach(sock => {
       if (!pairs.some(pair => pair === sock)) {
        const currentColor = socks.filter(aux => aux === sock).length;
        if (currentColor > 0 && currentColor % 2 === 0) {
            pairs.push(sock);
            count += currentColor;
        } else if (currentColor > 1) {
            pairs.push(sock);
            count += currentColor - 1;
        }
       }
    });
    return count/2;
}

const n = 7;
const ar = [1,2,1,2,1,3,2];
console.log(sockMerchant(n, ar));