var Bank = function(name) { 
    this.name = name; 
      
    this.getBankName = function() { 
        return this.name; 
    } 
}  

var Employee = function(name) { 
    this.name = name; 
      
    this.getEmployeeName = function() { 
        return this.name; 
    }  
} 

//composition
var bank = new Bank("Test"); 
var emp = new Employee("Judy"); 
console.log(emp.getEmployeeName() + " is employee of " + bank.getBankName()); //Judy is employee of Test
