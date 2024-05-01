function mergeSortedArrays(arr1:number[], arr2:number[]):number[] {
    let index1:number = 0;
    let index2:number = 0;
    const mergedArrays : number[] = [];

    while (index1 < arr1.length || index2 < arr2.length) {
        if (arr1[index1] < arr2[index2]) {
            mergedArrays.push(arr1[index1]);
            index1++;
        } else {
            mergedArrays.push(arr2[index2]);
            index2++;
        }
    }

    while (index1 < arr1.length) {
        mergedArrays.push(arr1[index1]);
        index1++;
    }

    while (index2 < arr2.length) {
        mergedArrays.push(arr2[index2]);
        index2++;
    }

    return mergedArrays;
}

const a1:number[] = [1,3,5,7];
const a2:number[] = [2,4,6]
console.log(mergeSortedArrays(a1, a2));