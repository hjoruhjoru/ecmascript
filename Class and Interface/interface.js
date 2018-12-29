//interface
var People = function () {
  this.name;
  this.gender;
}

People.prototype.isMale = function () {}

People.prototype.getTitle = function () {}

//implement interface
var Man = function (name) {
  People.call();
  this.gender = 'male';
  this.name = name;
}

Man.prototype = Object.create(People.prototype);

Man.prototype.isMale = function () {
  return true;
}

Man.prototype.getTitle = function () {
  return 'Mr.';
}
