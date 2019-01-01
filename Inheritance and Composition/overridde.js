var People = function (name, gender) {
  this.name = name;
  this.gender = gender;
}

People.prototype.isMale = function () {
}

People.prototype.getTitle = function () {
  if (this.gender == 'male') {
      return 'Mr.';
    }
    return 'Ms.';
}

var Man = function (name) {
  People.call(this, name, 'male');
}

Man.prototype = Object.create(People.prototype);

//override isMale
Man.prototype.isMale = function () {
  return true;
}

var Tom = new Man('Tom');
console.log(Tom.isMale()); //true
