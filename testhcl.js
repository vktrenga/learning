console.log( '1');
setTimeout(()=>{console.log('2')}, 0);
new Promise((Resolve, Reject) =>Resolve(console.log('3')));
console.log( '4');