function sum(a, b) {
  return a + b;
} 

const sub = (a, b) => a - b

const mul = (a, b) => a * b

const div = (a, b) => a / b

function arrSum(arr){
  var sum = 0
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum
}

module.exports = {sum, sub, mul, div, arrSum}
  