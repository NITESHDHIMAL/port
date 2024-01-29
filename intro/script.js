


const student = ["ram", "shyam", "hari"]


const getStudents = () => {
    document.getElementById("student").innerHTML= student
}



const courses = ["Python", "UI/UX", "Django","Lraravel"]

const mindRisersCourse = () => {
    document.getElementById("course").innerHTML = courses
}




// types of js variable

// var

// const, let

// Number
// String
// Array
// object
// Boolean


const number = 1
const color = ['yellow', 'red', 'green', 'yellowa'] 

color.push("brown")
color.pop("red")
color[1] = "purple"
console.log("this is color: ", color)

console.log("this is a first print number", number)
console.log("data type of this variable is:", typeof(number))
console.log("length of this variable is:", color.length)

// console.log("length of this variable is:", number.length) it should be undefined

const mindrisers = "institution"
console.log("string datatype:", mindrisers, mindrisers.length, typeof(mindrisers))

// array = collection of data or set of object
// object = collection of properties

const binit = {name: "binit", address: "kahtmandu", phone:"9825145214"}

console.log("this is Binit info: ", binit, typeof(binit), binit.length )




let car = "lambo"

car = "ferrari"

console.log("tis is car:",car);


const fruit = "apple"

console.log("this is fruit",fruit)

fruits = "orange"

console.log("this is fruit",fruits);



const numbers = [22, 33, 21, 25]

const men = () =>{
    document.getElementById("age").innerHTML = numbers
    alert("age show successfully")
}








