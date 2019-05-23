function add (num) {
  if (num % 2 === 0 ) {
    return num +1
  } else {
    return num + 2
  }
}
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

export  {
  Polygon,
  add
};