var People = function (name, gender) {
  this.name = name;
  this.gender = gender;
  this.title = getTitle(gender);
  
  //public method
  this.isMale = function () {
    if (this.gender == 'male') {
      return true;
    }
    return false;
  }
  
  //private method
  function getTitle(gender) {
    if (gender == 'male') {
      return 'Mr.';
    }
    return 'Ms.';
  }
}

var Tom = new People('Tom', 'male');
console.log(Tom.isMale()); //true
console.log(Tom.title); //Mr.
