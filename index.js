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
    this._radius = circumference / (Math.PI * 2);
  }
  
  get circumference() {
    return (this._radius * 2) * Math.PI;
  }
  
  set area(area) {
    this._radius = Math.sqrt()
  }
}
