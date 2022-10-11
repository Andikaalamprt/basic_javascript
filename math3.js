console.log('========== increment ==========')
//post increment
var a = 0
var b = 10
var a = b++

console.log(a)
console.log(b)

//pre increment

var c = 0
var d = 10
var c = ++d

console.log(c)
console.log(d)

console.log('========== decrement ==========')
//post decrement
var a = 0
var b = 10
var a = b--

console.log(a)
console.log(b)

//pre decrement

var c = 0
var d = 10
var c = --d

console.log(c)
console.log(d)

console.log('========== increment + 3 ==========')
//post
var a = 0
var b = 10
var a = b += 3

console.log(a)
console.log(b)

//pre
var a = 0
var b = 10
var a = a += b + 3

console.log(a)
console.log(b)

console.log('========== decrement - 3 ==========')
//post
var a = 0
var b = 10
var a = b -= 3

console.log('post',a)
console.log('post',b)

//pre
var a = 0
var b = 10
var a = a -= b - 17

console.log('pre',a)
console.log('pre',b)