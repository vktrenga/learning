var obj = {
  foo: "bar",
  func: () => {
    let self = this;
    console.log("outer func: this.foo = " + this.foo);
    console.log("outer func: self.foo = " + self.foo);
    (() => {
      console.log("inner func: this.foo = " + this.foo);
      console.log("inner func: self.foo = " + self.foo);
    })();
  },
};
obj.func();

console.log(closer);
let closer = "example";
// // Out put
// outer func: this.foo bar
// outer func: this.foo bar

// inner func: this.foo bar
// inner func: this.foo bar

// /user/:id -path
// /user?id=1&sort=dec - 
// req.pathPrame
// req.query

// body ba
// cancelIdleCallback


// async function awaitExample(): Promise<any> {
//     try {
//         const data = await callPromise/Db/timeout function()
//         return data;
//     } catch (err) {
//         console.log(err);
//         throw Error ("errorr");
//     }
    
// }

// a(1,b);

// package

// docker ps
// docker compose-up --build
// docker compose-up
// docker rmi <imagesname>
// docker rm <containerName>


