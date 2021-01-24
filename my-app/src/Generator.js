// console.log("chạy")

// function* helloGeneratorFunction(){
//     yield 2019;
//     yield 2020;
//     return 'tự học lập trình redux-saga';//ket thuc
// }

// const result = helloGeneratorFunction();
// console.log(result);
// console.table(result.next());//value:2019 done:false
// console.table(result.next());//value:2019 done:true
// console.table(result.next());


// console.log(helloGeneratorFunction().next())// value: 2019 done:false
// console.log(helloGeneratorFunction().next())// value: 2019 done:false


/* Vòng lặp vô tận */

// function* helloGeneratorFunction(){
//     while (true){
//         // comback 
//       yield "Tôi Đang lắng nghe"; 
//     }
// }

// const iterator = helloGeneratorFunction();

// console.log("Result 1: ",iterator.next())
// console.log("Result 1: ",iterator.next())

// /* Vòng generator trong generator*/ phut 9.30

// function* printName(){
//       yield "Tôi Đang lắng nghe 2";
// }

// function* hello(){
//     yield "Tôi Đang lắng nghe 1";
//     const nameIterator = printName();
//     yield nameIterator.next();
//     yield "Tôi Đang lắng nghe 3";

// } 
///Cách 2
// function* printName(){
//     yield "Tôi Đang lắng nghe 2";
// }

// function* hello(){
//   yield "Tôi Đang lắng nghe 1";
//   yield* printName()
//   yield "Tôi Đang lắng nghe 3";
// } 

// const iterator = hello();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());