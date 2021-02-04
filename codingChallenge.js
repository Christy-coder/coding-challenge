/*
The program should print the numbers 1 to 100. For multiples of 3, print “CLX” instead of the number and for the multiples of 5, print “DTC”. For numbers that are a multiple of 3 and 5, it should print “CLXDTC”.

Example Output:
1, 2, CLX, 4, DTC, CLX, 7, 8, CLX, DTC, 11, CLX, 13, 14, CLXDTC
*/
const multiples = (num) => {
  //an output result 
const output = [];

// for loop to log out nums from 1 - 100
  // checks if the numbers are divisible by 3 or 5 to replace with strings of different names instead of the nums.
  // then, returning the output numbers. 
for(let i = 1; i <= num; i++){
  if(i % 3 === 0 && i % 5 === 0){
    output.push("CLXDTC")
  }else if(i % 3 === 0){
    output.push("CLX")
  }else if(i % 5 === 0){
    output.push("DTC")
  }else{
    output.push(i)
  }
}
return output
}
console.log(multiples(100))

// time = O(N) linear time complexity, space = O(1) constant space complexity. 

/* Why do you want this role at CLX DTC? 

I want this role at CLX DTC because CLX's vision resonates with me; as I read through the about section on who CLX is, it says the mission is to care about health and wellness and make a meaningful, positive impact worldwide. One of my personal goals is to work for a company that cares about people and creates excellent features that will serve people worldwide. 



*/

