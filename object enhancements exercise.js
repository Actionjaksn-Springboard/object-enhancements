// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

// ES2015 Version
const createInstructor = (firstName, lastName) => {
    return {
        firstName, lastName
    };
}

// var favoriteNumber = 42;
// var instructor = {
//     firstName: "Colt"
//   }
//   instructor[favoriteNumber] = "That is my favorite!"

// ES2015 Version

const favoriteNumber = 42;
const instructor = {
    firstName : 'Colt', [favoriteNumber] : 'That is my favorite!'
};

// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

// ES2015 Version

const newInstructor = {
    firstName : 'Colt',
    sayHi() {
        return 'Hi!';
    },
    sayBye() {
        return this.firstName + ' says bye!'; 
    }
}

// createAnimal function

function createAnimal (species, verb, noise) {
    return {
        species,
        [verb](){
            return noise;
        }
    };
}