// ES6   >>>>>>>>>>>>>

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const bhabin = new User("bhabin", "bhabin@mail.com", "123")

console.log(bhabin.encryptPassword());
console.log(bhabin.changeUsername());