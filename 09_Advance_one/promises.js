// const promiseOne = new Promise(function (resolve, reject){
//     // Do an async  task, DB calls, crptography, network
//     setTimeout(function(){
//         console.log("Async task is complete")
//         resolve()
//     }, 1000)
// }) 

// promiseOne.then(function(){
//     console.log("Promise consumed")
// })


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
        console.log("Async 2 resolve")
    
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Bhabin", email: "babindulal46@gmail.com"})

    },1000)
})

promise3.then(function(user){
    console.log(user);
})


const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Vabin", password:"122"})

        } else{
            reject('Error: Unexpected error occured')
        }

    },1000)
})

promise4.then((user) =>{
    console.log(user);
    return user.username
    
}).then((username) => {
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"anonymous", password: "333"})
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
         const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
        
    }
    
}
consumePromiseFive()


// async function getAllUsers(){
//    try {
//      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     const data = await response.json()
//     console.log(data)
    
//    } catch (error) {
//         console.log(error)
//    }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => {
    return response.json()
})
.then((data)=> {
    console.log(data)
})
.catch((error) => console.log(error))
