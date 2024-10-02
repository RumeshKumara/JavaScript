class rectangle {
  constructor(_width, _height, _color){
    this.width = _width;
    this.height = _height;
    this.color = _color;
    console.log("construct");
  }

  gerArea(){
    return this.width * this.height;
  }
}

const re = new rectangle(5, 6);

console.log(re.gerArea()); // Output: 10
