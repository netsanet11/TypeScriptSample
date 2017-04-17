/////////////////////Exercise1////////////////////////////////////
type bankType =  {money: number, deposit: (input: number) => void};
let bankAccount: bankType = {
    money : 2000,
    deposit: function(value: number): void{
        this.money += value;
    }
};

type mytype =  {name: string, bankAccount: bankType, hobbies: string[]};
let mySelf: mytype ={
     name : "Asaad",
    bankAccount : bankAccount,
    hobbies: ["Violin", "Cooking"]
}
mySelf.bankAccount.deposit(3000);
console.log(mySelf);

/////////////////////Exercise2////////////////////////////////////
class Car{
    public acceleration : number = 0;
    constructor(public name: string){}

    honk(){
        console.log(`${this.name} is saying Toooooooot!`);
    }
    accelerate(speed: number){
        this.acceleration = this.acceleration + speed;
    }
}


var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);

/////////////////////Exercise3////////////////////////////////////
class BaseObject{
    constructor(public width: number, public length: number){};
    calcSize(){
        return this.width * this.length;
    }
}

class Rectangle extends BaseObject{
    constructor(width, height){
        super(width, height);
    }
}

var rectangle = new Rectangle(5, 2);

console.log(rectangle.calcSize());


/////////////////////Exercise4////////////////////////////////////
class Person{
    private  _firstName: string = "";
    get firstName(){
        return this._firstName;
    }
    set firstName(firstName: string){
        this._firstName = firstName;
    }
    static  enumerable: boolean = true;
    static  configurable: boolean = true;
}

var person = new Person();
person.firstName = "Asaad";
console.log(person.firstName);