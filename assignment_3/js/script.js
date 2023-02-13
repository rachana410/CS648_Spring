//1st Question
console.log("----1st----");
var movie_names = ["Interstellar", "Skyfall", "The Maze Runner", "Fight Club", "Now you see me"];
console.log(movie_names[1]);

//2nd Question
console.log("----2nd----");
var movies_arr = new Array(5);
movies_arr[0] = "Interstellar";
movies_arr[1] = "Skyfall";
movies_arr[2] = "The Maze Runner";
movies_arr[3] = "Fight Club";
movies_arr[4] = "Now you see me";
console.log(movies_arr[0]);

//3rd Question
console.log("----3rd----");
var movies_arr = new Array(5);
movies_arr[0] = "Interstellar";
movies_arr[1] = "Skyfall";
movies_arr[2] = "The Maze Runner";
movies_arr[3] = "Fight Club";
movies_arr[4] = "Now you see me";
console.log("The length before changes: ", movies_arr.length)
movies_arr.splice(2,0,"The Incredibles");
console.log(movies_arr);
console.log("The length after changes: ", movies_arr.length);

// 4th Question
console.log("----4th----");
var movies_arr = [];
movies_arr[0] = "Interstellar";
movies_arr[1] = "Skyfall";
movies_arr[2] = "The Maze Runner";
movies_arr[3] = "Fight Club";
movies_arr[4] = "Now you see me";
delete movies_arr[0]
console.log(movies_arr)

//5th Question
window.console.log("----5th----");
var movies_arr = [];
movies_arr[0] = "Interstellar";
movies_arr[1] = "Skyfall";
movies_arr[2] = "The Maze Runner";
movies_arr[3] = "Fight Club";
movies_arr[4] = "Now you see me";
movies_arr[5] = "The Incredibles";
movies_arr[6] = "Inception";
for (var ind in movies_arr) {
    console.log(movies_arr[ind]);
}

//6th Question
console.log("----6th----");
var movies_arr = [];
movies_arr[0] = "Interstellar";
movies_arr[1] = "Skyfall";
movies_arr[2] = "The Maze Runner";
movies_arr[3] = "Fight Club";
movies_arr[4] = "Now you see me";
movies_arr[5] = "The Incredibles";
movies_arr[6] = "Inception";
for (var val of movies_arr) {
    console.log(val);
}

//7th Question
console.log("----7th----");
var movies_arr = [];
movies_arr[0] = "Interstellar";
movies_arr[1] = "Skyfall";
movies_arr[2] = "The Maze Runner";
movies_arr[3] = "Fight Club";
movies_arr[4] = "Now you see me";
movies_arr[5] = "The Incredibles";
movies_arr[6] = "Inception";
for (var val of movies_arr.sort()) {
    console.log(val);
}

//8th Question
console.log("----8th----");
var movies_arr = [];
movies_arr[0] = "Interstellar";
movies_arr[1] = "Skyfall";
movies_arr[2] = "The Maze Runner";
movies_arr[3] = "Fight Club";
movies_arr[4] = "Now you see me";
movies_arr[5] = "The Incredibles";
movies_arr[6] = "Inception";
var leastFavMovie = [];
leastFavMovie[0] = "Super Girl";
leastFavMovie[1] = "The Menu";
leastFavMovie[2] = "Legally Blonde";
console.log("Movies I like: \n");
for (var ind in movies_arr) {
    console.log(movies_arr[ind]+"\n");
}
console.log("Movies I regret watching: \n")
for (var ind in leastFavMovie) {
    console.log(leastFavMovie[ind]+"\n");
}

//9th Question
console.log("----9th----");
var movies_arr = [];
movies_arr[0] = "Interstellar";
movies_arr[1] = "Skyfall";
movies_arr[2] = "The Maze Runner";
movies_arr[3] = "Fight Club";
movies_arr[4] = "Now you see me";
movies_arr[5] = "The Incredibles";
movies_arr[6] = "Inception";
var leastFavMovie = [];
leastFavMovie[0] = "Super Girl";
leastFavMovie[1] = "The Menu";
leastFavMovie[2] = "Legally Blonde";
movies_arr = movies_arr.concat(leastFavMovie);
console.log(movies_arr.sort().reverse());

//10th Question
console.log("----10th----");
var movies_arr = [];
movies_arr[0] = "Interstellar";
movies_arr[1] = "Skyfall";
movies_arr[2] = "The Maze Runner";
movies_arr[3] = "Fight Club";
movies_arr[4] = "Now you see me";
movies_arr[5] = "The Incredibles";
movies_arr[6] = "Inception";
var leastFavMovie = [];
leastFavMovie[0] = "Super Girl";
leastFavMovie[1] = "The Menu";
leastFavMovie[2] = "Legally Blonde";
movies_arr = movies_arr.concat(leastFavMovie);
movies_arr = movies_arr.sort().reverse()
console.log("Popped movie: ",movies_arr.slice(-1))

//11th Question
console.log("----11th----");
var movies_arr = [];
movies_arr[0] = "Interstellar";
movies_arr[1] = "Skyfall";
movies_arr[2] = "The Maze Runner";
movies_arr[3] = "Fight Club";
movies_arr[4] = "Now you see me";
movies_arr[5] = "The Incredibles";
movies_arr[6] = "Inception";
var leastFavMovie = [];
leastFavMovie[0] = "Super Girl";
leastFavMovie[1] = "The Menu";
leastFavMovie[2] = "Legally Blonde";
movies_arr = movies_arr.concat(leastFavMovie);
movies_arr = movies_arr.sort().reverse()
console.log("First item: ",movies_arr.shift())

//12th Question

console.log("----12th----");
var not_like_Index = [];
movies_arr.forEach((movie, index) => {
  if (leastFavMovie.includes(movie)) {
    not_like_Index.push(index); }
});
var like_movies = ["Insidious","Conjuring","The Shining"]
not_like_Index.forEach((ind) => {
    movies_arr[ind] = like_movies.shift();
});
for (var ind = 0; ind < movies_arr.length; ind++) {
    "use strict";
    console.log(movies_arr[ind] );
}

//13th Question
console.log("----13th----");

var movies_arr = [["Interstellar",1],["Skyfall",2],["The Maze Runner",3],["Fight Club",4],["Now you see me",5]];

var movies = movies_arr.filter(function(movie) {
  return typeof movie[0] === "string";
});
console.log(movies.map(movie => movie[0]));

//14th Question
console.log("----14th----");
var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

var showEmployee = function(employees) {
  console.log("Employees: \n");
  employees.forEach(function(emp) {
    console.log(emp);
  });
};

showEmployee(employees);

//15th Question
console.log("----15th----");

var given_values = [58, '', 'abcd', true, null, false, 0];
var filterValues = function(given_values){
        return given_values.filter(function(v) {
        return v !== 0  && v !== "" && v !== null && v !== false;
    });
};
console.log(filterValues(given_values));

//16th Question
console.log("----16th----");
var Rand = function(val) {
    return val[Math.floor(Math.random() * val.length)];
  };
  var numeric_array = [100, 223, 311, 24, 56, 61, 37, 438, 92, 90];
  console.log(Rand(numeric_array));

//17th Question
console.log("----17th----");
var Largest = function(value){
    return Math.max(...value);
}

var numeric_array = [100, 223, 311, 24, 56, 61, 37, 438, 92, 90];
console.log(Largest(numeric_array));