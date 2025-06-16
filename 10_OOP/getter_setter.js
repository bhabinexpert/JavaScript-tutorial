class User{
    constructor(email, password){
    this.email = email;
    this.password = password

    }

    get password(){
        return this._password.toUpperCase()

    }

    set password(value){
        this._password = value.toUpperCase()

    }


    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value.toUpperCase()
    }

}

const bhabin = new User("bhabin@mail.com", "12abc3")
console.log(bhabin.password)
console.log(bhabin.email)

function User2(username, password) {
    this._username = username;
    this._password = password;

    Object.defineProperty(this, 'password', {
        get:function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this.password = value
        }
    })

    Object.defineProperty(this, 'username', {
        get:function(){
            return this._username.toUpperCase()
        },
        set: function(value){
            this.username = value
        }
    })
}

const chai2 = new User2("bhabin@mail.com", "hero")

console.log(chai2._username)

// object based getter- setter:

const user3 = {
    _email: 'user3@mail.com',
    _password : 'abc',

    get email(){
        return this._email.toUpperCase()

    }, // brings the email from memory

    set email(value){
        this._email = value

    } // sets the value of .-email in a value so it can be accessed by object.email only<<<<
}

const tea2 = Object.create(user3)
console.log(tea2.email) 