class User {
    constructor(username){
        this.username = username;
    
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;

    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)

    }
}

const bhabin = new Teacher ("Bhabin", "bhabinsir@mail.com", 123)


bhabin.addCourse()
bhabin.logMe()

const dulal = new User("Dulal")

dulal.logMe()


console.log(bhabin === dulal)
console.log(bhabin instanceof Teacher)
console.log(bhabin instanceof User)