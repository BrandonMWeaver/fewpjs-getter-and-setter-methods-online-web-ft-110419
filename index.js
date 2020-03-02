class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  
  set diameter(diameter) {
    this._radius = diameter / 2;
  }
  
  get diameter() {
    return this._radius * 2;
  }
  
  set circumference(circumference) {
    this._circumference = circumference;
  }
}
