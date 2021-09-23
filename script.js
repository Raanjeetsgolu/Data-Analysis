var data=[{firstName:"Tirth", lastName:"shah", age:23}, {firstName:"Abhishek", lastName:"pathak", age:25}, {firstName:"Riya", lastName:"patel", age:24}, {firstName:"Bhala", lastName:"batuk", age:18},{firstName:"Khalnayak", lastName:"Kalia", age:24}]

// Use the above array of objects & write a code that answers following questions. 


// Write code that consoles fullname of students whose age is greater than equal to 24. 

for(person of data){
  if(person.age>=24){
    console.log(`${person.firstName}  ${person.lastName}`)
  }
}