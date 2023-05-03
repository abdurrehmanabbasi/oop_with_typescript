export default class Car {
  private make: String;
  private model: String;
  private year: Number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  get details(): string {
    return (
      "Model " + this.model + " Year " + this.year + " and made by " + this.make
    );
  }
}
