var People = function (name, gender) {
  this.name = name;
  this.gender = gender;
  
  this.isMale = function () {
    if (this.gender == 'male') {
      return true;
    }
    return false;
  }
}

People.prototype.getTitle = function () {
  if (this.gender == 'male') {
      return 'Mr.';
    }
    return 'Ms.';
}

var Man = function (name) {
  //derive property from People
  People.call(this, name, 'male');
}

//derive method from People
Man.prototype = Object.create(People.prototype);

var Tom = new Man('Tom');
console.log(Tom.gender); //male
console.log(Tom.getTitle()); //Mr.
