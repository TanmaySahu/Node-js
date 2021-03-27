// const express = require('express')
// const app = express()
 
// app.get('/', function (req, res) {
//     console.log("get method called")
//   res.send('Hello World')
// })
//  console.log("server started on 3000")
// app.listen(3000)


const util = require('./util');

// const msg  = util.demoMethod("Tanmay Sahu")

// console.log(msg)

//-----------       .every()      -------------
// const testArray = [6,9,16,10,7];

// const check = util.everyOfThem(testArray, 5);


//---------------    .some()    --------------
const testArray = [6,9,16,3,10,7];

const check = util.someOfThem(testArray, 5);



console.log(check);