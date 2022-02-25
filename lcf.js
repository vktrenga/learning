


// Get The Array 
// 1.[6,9]; 
// [1,2,3],
// [1,3]
// 3
// 2. loop the Array
// 3. find diviters for number 
// 4. find least common number

let arrayOfNumber = [6, 9];
let diviters = []
arrayOfNumber.forEach(number => {
    let divitersList = [];
    maxLoop = number / 2;
    for (i = 2; i <= maxLoop; i++) {
        if (number % i === 0) {
            divitersList.push(i)
        }
    }
    diviters.push(divitersList);
});

if (diviters.length === 0) {
    console.log("1 is LCF");
}
let commonIntegers = []
if (diviters.length > 0) {
    for (i = 0; parseInt(diviters.length / 2); i++) {
        innerArray = diviters[i];
        for(j=0;j<innerArray.length;j++){
            
        }
    }
}

// diviters should be [[2,3][3]]

// find common 

