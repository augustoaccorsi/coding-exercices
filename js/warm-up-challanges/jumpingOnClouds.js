
function jumpingOnClouds(clouds) {
    let jumps = 0;
    const cumulus = 0;
    let i = 0;
    while (i !== clouds.length) {
        if (clouds[i+2] === cumulus) {
            jumps++;
            i = i + 2;
        } else if (clouds[i+1] === cumulus) { 
            jumps++;
            i++;
        } else {
            i++;
        }
    }

    return jumps;
}


const c = [0,0,1,0,0,1,0];
console.log(jumpingOnClouds(c));