// console.log('person1:show ticket');
// console.log('person2:show ticket');

// // async function always return a promise
// const preMovie = async () => {
//     const promisewifebringingticks = new Promise((resolve,reject) => {
//         setTimeout(() => 
//             resolve('ticket cool') ,1000);
      
//         });
//     // await is always used in the async function otherwise it doesnot work
// const getPopcorn = new Promise((resolve,reject) => resolve(`popcorn baby`));
// const addbutter = new Promise((resolve,reject) => resolve(`butter baby`));
//     let ticket = await promisewifebringingticks;

// console.log(`wife: i have the ${ticket}`);
//     console.log('husband: we should go in');
// console.log('wife: no i am hungry');

// let popcorn = await getPopcorn;

// console.log(`husband: i bought some ${popcorn}`);
//     console.log('husband: now we should go in');
// console.log('wife: i need butter on popcorn');

// let butter = await addbutter;

// console.log(`husband: i bought some ${butter} on it`);
//     console.log('husband: now we should go in');
// console.log('wife: yes we are already late ');
// console.log('husband: so please do');



// return ticket;

// }
// preMovie().then((m) => console.log(`person 3: shows ${m}`));

// console.log('person4:show ticket');
// console.log('person5:show ticket');



// 2 code for using promise.all


console.log('person1:show ticket');
console.log('person2:show ticket');

// async function always return a promise
const preMovie = async () => {
    const promisewifebringingticks = new Promise((resolve,reject) => {
        setTimeout(() => 
            resolve('ticket cool') ,1000);
      
        });
    // await is always used in the async function otherwise it doesnot work
const getPopcorn = new Promise((resolve,reject) => resolve(`popcorn baby`));
const addbutter = new Promise((resolve,reject) => resolve(`butter baby`));
const candy = new Promise((resolve,reject) => resolve(`candy baby`));
const coke = new Promise((resolve,reject) => resolve(`coke baby`));
const jalebi = new Promise((resolve,reject) => resolve(`jalebi baby`));

    let ticket = await promisewifebringingticks;

let [pop, butt, cand, coka, jale] =await Promise.all([getPopcorn,addbutter,candy,coke,jalebi]);

console.log(`${pop} ,${butt},${cand},${coka},${jale}`);

return ticket;

}
preMovie().then((m) => console.log(`person 3: shows ${m}`));

console.log('person4:show ticket');
console.log('person5:show ticket');


// 3 phase when wife is no not bring ticket

// console.log('person1:show ticket');
// console.log('person2:show ticket');

// // async function always return a promise
// const preMovie = async () => {
//     const promisewifebringingticks = new Promise((resolve,reject) => {
//         setTimeout(() => 
//             // resolve('ticket cool') ,1000);
//             reject('ticket cool') ,1000);
      
//         });
//     // await is always used in the async function otherwise it doesnot work

// let ticket
//     try{
//   ticket = await promisewifebringingticks;
// }
// catch(e){
//    ticket = 'sad face';
// }


// return ticket;

// }
// preMovie().then((m) => console.log(`person 3: shows ram ${m}`));

// console.log('person4:show ticket');
// console.log('person5:show ticket');



// // 4th phase 



// // async function always return a promise
// // const testuser = async () => {

// //     const loaduser = new Promise((resolve,reject) => {
// //         setTimeout(() => 
// //             resolve('page') ,3000);
// //             // reject('ticket cool') ,1000);
// //         });

// //         const enterusername = new Promise((resolve,reject) => {
// //             setTimeout(() => 
// //             resolve('user name') ,2000);
// //         });
        
// //         const verify =() => {

// //         }
// //     // await is always used in the async function otherwise it doesnot work

// // await loaduser;
// // await enterusername;
// // const testing =verify();

// // return testing;

// // }
// // testuser().then((m) => console.log(` shows ram ${m},${m}`));

