class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  
  set diameter(diameter) {
    this._diameter = diameter;
  }
  
  get diameter() {
    return this._diameter;
  }
  
  set circumference(circumference) {
    this._circumference = circumference;
  }
}
