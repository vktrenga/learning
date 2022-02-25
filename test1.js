// function init() {
//     var company = "Cali"
//     company1 = "Cali"
// }
// console.log(company)
// console.log(company1)
// init();



// let isLoop = true;
// setTimeout(()=>{
// isLoop =false;
// },0);
// let i =0;
// while(isLoop){
//     i = i+1;
//     console.log(i)
// }


let num = 0;
async function incrementAwit() {
    num +=  await 2;
    console.log('inincrementAwitside', num);
}


async function increment() {
    num +=  2;
    console.log('inside', num);
}

num +=1;
console.log('outside', num);

incrementAwit();
increment();

