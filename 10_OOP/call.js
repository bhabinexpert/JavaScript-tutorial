function setUsername(username){
    this.username = username
    console.log("called")
}

function createUser (username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password

    
}
const user = new createUser("bhabin", "bhabin22@mil.com", 23323); 
console.log(user)