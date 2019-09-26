// var name = "Max";
// var age = 29;
// var hasHobbies = true;

// // function summarizeUser(userName,userAge,userHasHobby){
// //     return ('Name is ' + userName + ',age is ' + userAge + ' and the user has hobbies: ' + userHasHobby);
// // }

// const summarizeUser = (userName,userAge,userHasHobby)=>{
//      return ('Name is ' + userName + ',age is ' + userAge + ' and the user has hobbies: ' + userHasHobby);
// };

// console.log(summarizeUser(name,age,hasHobbies));

// const person = {
//     name: 'Max',
//     age: 29,
//     greet:()=>{
//         console.log('Hi, I am ' + this.name);
//     }
// };

// person.greet();
// console.log(person);

// const hobbies = ['sports','cooking'];
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);\

const fetchData = () =>{
    const promise = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve('Done!');
        },1500);
    });
    return promise;
};

setTimeout(()=>{
    console.log('Timer is done!');
    fetchData()
    .then(text =>{
        console.log(text);
        return fetchData();
    })
    .then(text2=>{
        console.log(text2);
    });
},2000);

console.log('Hello!');
console.log('Hi!');