class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }

    static createId(){ // id ko acces sabhei object lai nadina ko lagi static keyword use gareko
        return `123`
    }
    
}

const bhabin = new User("bhabin")

//console.log(bhabin.createId()); // throws an error cause static function isnot accessible by it's instance as bhbain is the instance of user..

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }

}

const phone = new Teacher( "Iphone", "iphone@mail.com")
phone.logMe()
console.log(phone.createId())