//people class to define object
var People = function (name, gender) {
  //define public property and assign value in construct
  this.name = name;
  this.gender = gender;
}

//new object
var Tom = new People('Tom', 'boy');
var Richard = new People('Richard', 'girl');
