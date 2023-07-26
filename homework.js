// Part 1. Hamster

// class Hamster{
//     constructor(owner,name,price){
//         owner = "";
//         this.name = name;
//         this.price= price;
//     }

//     wheelRun(){
//         console.log("Squeak squeak")
//     }
//     eatFood(){
//         console.log("nibble nibble")
//     }
//     getPrice(){
//         return this.price
//     }
// }

// let joey = new Hamster('Joey','Nick',15)
// // joey.wheelRun()
// // joey.eatFood()
// joey.getPrice()
// // console.log(joey.getPrice())


// // Part 2. Person

// class Person {
//     constructor(name,age,height,weight,mood,hamsters,bankAccount){
//         this.name = name;
//         this.age = 0;
//         this.height = 0;
//         this.weight = 0;
//         this.mood = 0;
//         this.hamsters =  []; 
//         this.bankAccount = 0;
//     }   
    

//     getName(){
//         return this.name;
//     }
//     getAge(){
//         return this.age;
//     }
//     getWeight(){
//         return this.weight;
//     }
//     greet(){
//         console.log(`Hello ${this.name}`)
//     }
//     eat(){
//        console.log(this.weight++, this.mood++)
//     }
//     exercise(){
//         this.weight--
//     }
//     ageUp(){
//         this.age++
//         this.height++
//         this.weight++
//         this.mood--
//         this.bankAccount += 10;
//     }
//     buyHamster(hamsters){
//         this.hamsters.push(hamsters)
//         this.mood = this.mood + 10
//         this.bankAccount = this.bankAccount - hamsters.getPrice()
//     }

// }

// let name1 = new Person('Nick')


// // console.log(name1.getName())
// // console.log(name1.getAge())
// // console.log(name1.getWeight())
// // console.log(name1.greet())

// name1.buyHamster(joey)
// console.log(name1)


// //Part 3 Create a Story with your Person class

// // 1. Instantiate a new Person named Timmy

// const name2 = new Person('Timmy')

// // 2. Age Timmy five years

// name2.ageUp()
// name2.ageUp()
// name2.ageUp()
// name2.ageUp()
// name2.ageUp()

// // 3. At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.

// name2.eat()
// name2.eat()
// name2.eat()
// name2.eat()
// name2.eat()

// // 4. Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times

// name2.exercise()
// name2.exercise()
// name2.exercise()
// name2.exercise()
// name2.exercise()

// //5. Age Timmy 9 years

// name2.ageUp()
// name2.ageUp()
// name2.ageUp()
// name2.ageUp()
// name2.ageUp()
// name2.ageUp()
// name2.ageUp()
// name2.ageUp()
// name2.ageUp()

// // 6. Create a hamster named "Gus" 7. Set Gus's owner to the string "Timmy"
// let gus = new Hamster("Timmy","Gus", 15)
// // let joey = new Hamster('Joey','Nick',15)

// // 8. Have Timmy "buy" Gus

// name2.buyHamster(gus)

// // 9. Age Timmy 15 years

// name2.ageUp()
// name2.ageUp()
// name2.ageUp()
// name2.ageUp()
// name2.ageUp()
// name2.ageUp()
// name2.ageUp()
// name2.ageUp()
// name2.ageUp()
// name2.ageUp()
// name2.ageUp()
// name2.ageUp()
// name2.ageUp()
// name2.ageUp()
// name2.ageUp()

// // 10. Have Timmy eat twice

// name2.eat()
// name2.eat()

// // 11. Have Timmy exercise twice

// name2.exercise()
// name2.exercise()

// console.log(name2)


//Part 4 Chef Make Dinners

// class Dinner{
//     constructor(appetizer,entree,dessert){
//         this.appetizer = appetizer;
//         this.entree = entree;
//         this.dessert = dessert;
//     }
// }

// class Chef{
   
//     makeDinner(appetizer,entree,dessert){
//         return new Dinner(appetizer, entree, dessert);
//     }
// }

// const myChef = new Chef();

// console.log(myChef.makeDinner("Salad","Steak","Ice cream"))
// console.log(myChef.makeDinner("Peanuts","Cheese Burger","Cake"))
// console.log(myChef.makeDinner("Salad","Steak","Ice cream"))