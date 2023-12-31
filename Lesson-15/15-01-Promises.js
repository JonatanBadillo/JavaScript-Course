let myPromise = new Promise((resolve, rejected) => {
    let expression = false;
    if(expression){
        resolve('Resolved correctly');
    }else{
        rejected('An error ocurred');
    }
});

//myPromise.then(
//    value => console.log(value),
//    error => console.log(error)
//);


// Other manner of applying promises
myPromise.then(value => console.log(value)).catch(error => console.log(error));

let promise = new Promise((resolved) =>{
    console.log('Starting Promise')
    setTimeout( ()=>{ resolved('Hello with Promise and TimeOut',3000)});
    console.log('End Promise')
});

promise.then( value=> console.log(value));

// async indicates that a function will return a promise
async function myFunctionPromise(){
   return 'hello with promise and async' ;
}

// myFunctionPromise().then(value => console.log(value));

// async/await
async function functionPromiseAwait(){
    let myPromise2 = new Promise(resolve => {
        resolve('Promise with await');
    });
    console.log(await myPromise2);
}

functionPromiseAwait();


// Promises, await, async & timeout
async function functionPromiseAwaitTimeout(){
    let promise2 = new Promise(resolver => {
        setTimeout(()=> resolve('Promise with Await & timeout'),3000);
    });
    console.log(await promise2);
}

functionPromiseAwaitTimeout();