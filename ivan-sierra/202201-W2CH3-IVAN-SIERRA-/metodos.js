export function myPush(Array, element) {
    const returnArray = [];
    for (let i = 0; i < Array.length; i++) {
        returnArray[i] = Array[i];
        
    }
    returnArray[Array.length] = element;
    return returnArray;
};
export function myPop (Array){
    const newArray = [];
    for (let b = 0; b < Array.length-1; b++) {
        
        newArray[b] = Array[b];
    }
    
    return newArray;
}
export function myShift(Array,element){
    let Array1 = [];
    let Array3 = [];
    Array1 = element;
    console.log(Array1);
    Array3 = element + Array;
    console.log(Array3);
}
export function myUnshift(Array){
    let newArray = [];
    for (let c = 1; c < Array.length; c++) {
        console.log([c]);
        newArray[c-1] = Array[c];
    }
    console.log(newArray);
    return newArray;
}
myPop([5,4,3,2,1]);
myShift([5,4,3,2,1],6);
myUnshift([5,4,3,2,1]);