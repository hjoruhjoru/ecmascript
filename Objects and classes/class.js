//people class to define object
var people = function (name, gender) {
  //define public property and assign value in construct
  this.name = name;
  this.gender = gender;
}

//new object
var Tom = new people('Tom', 'boy');
var Richard = new people('Richard', 'girl');
