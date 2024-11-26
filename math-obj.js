let mathObj = {
    abs: function(num) {return Math.abs(num);},
    isEven: function(num) {return (num%2)==0;},
    isOdd: function(num) {return (num%2!=0);},
    isStrictlyPositive: function(num) {return (num > 0);},
    min: function(num1, num2) {return Math.min(num1, num2);},
    max: function(num1, num2) {return Math.max(num1, num2);}
};