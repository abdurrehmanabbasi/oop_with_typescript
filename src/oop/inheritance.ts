class Vehicle{
    public make:string
    public model:string
    public year:number

    constructor(make:string,model:string,year:number){
        this.make=make;
        this.model=model
        this.year=year
    }

    public mileage(km:number){
        console.log(`${this.model+this.year} by ${this.make} is giving milage of ${km} per liter`)
    }
}