var People = function (name, gender) {
  this.name = name;
  this.gender = gender;
  this.title = getTitle(gender);
  
  this.isMale = function () {
    if (this.gender == 'male') {
      return true;
    }
    return false;
  }
  
  function getTitle(gender) {
    if (gender == 'male') {
      return 'Mr.';
    }
    return 'Ms.';
  }
}

//derive property from People
var Man = function (name) {
  People.call(this, name, 'male');
}

var Tom = new Man('Tom');
console.log(Tom.gender); //male
