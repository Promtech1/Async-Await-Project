// async function myfunction(){
//     // return console.log("Async Await")

//     let sentence = "Promise is revolved"
//     return sentence;
// }

// myfunction()
//     .then(console.log)
    

//FOR RETURNING A PROMISE
// async function myfunction(){
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("I am async and awit keyword"), 2000)
//     });
//     let result = await promise;

//     console.log(result + " This is cool")
// }

// myfunction();


//READING API DATA
// async function myfunction(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos')
//     console.log(response)
//     let userData =await response.json()
//     console.log(userData);
// }
// myfunction();


//HOW TO HANDLE ERROR WHEN FETCHING DATA
function loadData(url){
    return fetch(url).then(response => {
        if(response.status == 200){
            let data = response.json()
            console.log(data)
        }else{
            throw new Error(response.status);
        }
    })
}

loadData("https://jsonplaceholder.typicode.com/todos").catch(alert)

//READING GITHUB USERS DATA