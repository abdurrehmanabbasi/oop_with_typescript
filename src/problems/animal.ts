// Create a class hierarchy of different types of animals with methods to make sounds and move. (Intermediate)

class Animal{
    public name:string
    public origin:string
    public age:number
    public sound:string
    constructor(name:string,origin:string,age:number,sound:string){
        this.name=name
        this.origin=origin
        this.age=age
        this.sound=sound
    }
    makeSound():string{
        return `${this.name} make sound ${this.sound}`
    }
    move(x:number,y:number): string{
        return `${this.name} is move to X:${x} Y:${y}`
    }
}
const cat=new Animal("Tom","US",18,"meow")
console.log(cat.name + cat.age + cat.origin)
console.log(cat.makeSound)
console.log(cat.move(1,2))