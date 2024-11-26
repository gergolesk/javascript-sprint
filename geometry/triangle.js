export class Triangle {
    constructor(sideA, sideB, sideC) {
      this.sideA = sideA;
      this.sideB = sideB;
      this.sideC = sideC;
    }
  
    // Calculate the area using Heron's formula
    area() {
      const s = (this.sideA + this.sideB + this.sideC) / 2; // Semi-perimeter
      return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }
  
    // Calculate the perimeter
    perimeter() {
      return this.sideA + this.sideB + this.sideC;
    }
  }
  
  // Create an instance of the Triangle class
  const triangle = new Triangle(3, 4, 5);

  module.exports = { Triangle, triangle };