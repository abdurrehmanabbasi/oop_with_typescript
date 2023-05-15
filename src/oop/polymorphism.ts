// // Polymorphism is a concept in object-oriented programming (OOP) that allows objects of different classes to be treated as if they were of the same class. It is achieved by using inheritance and interfaces.

// // In TypeScript, we can create polymorphic behavior using interfaces. An interface is a blueprint for a class and defines a set of properties and methods that a class must implement. When a class implements an interface, it is said to "conform to" that interface.

// interface Animal {
//     makeSound(): void;
//   }
  
//   class Dog implements Animal {
//     makeSound() {
//       console.log("Woof!");
//     }
//   }
  
//   class Cat implements Animal {
//     makeSound() {
//       console.log("Meow!");
//     }
//   }
  
//   function animalSound(animal: Animal) {
//     animal.makeSound();
//   }
  
//   let dog = new Dog();
//   let cat = new Cat();
  
//   animalSound(dog); // Output: Woof!
//   animalSound(cat); // Output: Meow!
  