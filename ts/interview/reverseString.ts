function reverseString(str:string):string {
    const array:string[] = str.split('');
    let reverse:string = '';
    for (let i:number = array.length -1; i >= 0; i--) {
        reverse += array[i];
    }
    return reverse;
}

const s:string = 'Hello World!';
console.log(reverseString(s));