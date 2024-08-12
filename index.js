// IF STATEMENT REVIEW
// Day of the Week: Prompt the user to enter a day of the week (e.g., "Monday") and say whether it's a weekday or the weekend.
let user = prompt("What's the day of the week?")

if(user === "Saturday" || user == "Sunday"){
	console.log("It's the weekend, yippie!")
}else{
	console.log("It's a week day!!")
}




// Age Group Classifier: Prompt the user to enter their age and categorize them into different age groups (child, teen, adult, senior)




// WHILE LOOPS
// Print 1 to 5
let i= 1 
while (i <= 5){
	console.log(i)
	i++
}



// Print from a certain number to 1
let user1 = prompt("enter a number")
user =parseInt (user1)
while (user >0){
	console.log(user)
	user--
}
//user -= 1 or user = user -1 
// Summing up to 5
 let sum = 0 
let counter = 1

while(sum <= 5 ){
	sum = counter + sum
	counter++
}
console.log("Sum of 1-5", sum)



// Using prompt
let mysteryStudent= "zyarie"
let user8 = prompt("enter students name")

while(mysteryStudent !== user8.toLowerCase){
	user8= prompt("Try again, guess a different student")
}
console.log("good job")

