/*****************************
* CODING CHALLENGE 1
*/
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
GOOD LUCK 😀
*/

// Solved normal way
/*
var massMark = 78; //kg
var heightMark = 1.69; //meters

var massJohn = 92;
var heightJohn = 1.95;


var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/

//Solved challenge 1 using if else condition
/*
var massMark = 78; //kg
var heightMark = 1.69; //meters

var massJohn = 92;
var heightJohn = 1.95;


var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'s BMI is higher than Mark\'s');
}
*/



/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team

2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.

3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)

5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

/*
var johnFirstGame = 189;
var johnSecondGame = 141;
var johnThirdGame = 103;

var johnScore = ((johnFirstGame + johnSecondGame + johnThirdGame) / 3);

console.log(johnScore);


var mikeFirstGame = 150;
var mikeSecondGame = 94;
var mikeThirdGame = 123;

var mikeScore = ((mikeFirstGame + mikeSecondGame + mikeThirdGame) / 3);


console.log(mikeScore);
*/
/*------------------------------------------------------------------------*/
/*
var maryFirstGame = 97;
var marySecondGame = 134;
var maryThirdGame = 102;

var maryScore = ((maryFirstGame + marySecondGame + maryThirdGame) / 3);

console.log(maryScore);

if (johnScore > mikeScore && johnScore > maryScore) {
    console.log('John\'s Team is winner');
} else if ( maryScore > mikeScore && maryScore > johnScore) {
    console.log('mary\'s Team is winner');
} else if (maryScore < mikeScore && mikeScore > johnScore) {
    console.log('Mike\'s Team is winner');
} else {
    console.log('The game is drawn');
}
*/

/*
var saymaFirstGame = 129;
var saymaSecondGame = 129;
var saymaThirdGame = 105;

var saymaScore = ((saymaFirstGame + saymaSecondGame + saymaThirdGame) / 3);
console.log('Sayma\'s score is ' + saymaScore);

var tithiFirstGame = 122;
var tithiSecondGame = 130;
var tithiThirdGame = 102;

var tithiScore = ((tithiFirstGame + tithiSecondGame + tithiThirdGame) / 3);
console.log('Tithi\'s score is ' + tithiScore);

var urbanaFirstGame = 128;
var urbanaSecondGame = 130;
var urbanaThirdGame = 102;

var urbanaScore = ((urbanaFirstGame + urbanaSecondGame + urbanaThirdGame) / 3);
console.log('Urbana\'s score is ' + urbanaScore);


if (saymaScore > tithiScore && saymaScore > urbanaScore) {
    console.log('Sayma\'s team is winner');
} else if (saymaScore < tithiScore && urbanaScore < tithiScore) {
    console.log('Tithi\'s team is winner');
} else if (saymaScore < urbanaScore && urbanaScore > tithiScore) {
    console.log('Urbana\'s team is winner');
} else {
    console.log('The game is drawn');
}
*/



/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/

/*
function tipCalculator(bill) {
    var percentage;
    
    if (bill < 50) {
        percentage = 20/100;
    } else if (bill >= 50 && bill < 200) {
        percentage = 15/100;
    } else {
        percentage = 10/100;
    }
    
    return percentage * bill;
}


//console.log(tipCalculator(195));

var bills = [124, 48, 268];

var tips = [tipCalculator(bills[0]), 
           tipCalculator(bills[1]), 
           tipCalculator(bills[2])];

var finalPaidAmount = [bills[0] + tips[0],
                      bills[1] + tips[1],
                      bills[2] + tips[2]]

console.log(tips, finalPaidAmount);
*/

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

/*
var markInfo = {
    markFullName: 'Mark Miller',
    massMark: 78,
    heightMark: 1.69,
    calcMarkBMI: function() {
        this.markBmi = this.massMark / (this.heightMark * this.heightMark);
        return this.markBmi;
    }
}

console.log(markInfo.calcMarkBMI());

var johnInfo = {
    johnFullName: 'John Smith',
    massJohn: 92,
    heightJohn: 1.95,
    calcJohnBMI: function() {
        this.johnBmi = this.massJohn / (this.heightJohn * this.heightJohn);
        return this.johnBmi;
    }
}

console.log(johnInfo.calcJohnBMI());

if (markInfo.markBmi > johnInfo.johnBmi) {
    console.log(markInfo.markFullName + ' is heigher BMI than ' + johnInfo.johnFullName);
    
}else if (markInfo.markBmi === johnInfo.johnBmi) {
    console.log('They have the same BMI');
    
} else {
    console.log(johnInfo.johnFullName + ' is heigher BMI than ' + markInfo.markFullName);
}
*/



/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
GOOD LUCK 😀
*/


var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++) {
            
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50) {
                percentage = 20/100;
            } else if (bill >= 50 && bill <= 200) {
                percentage = 15/100;
            } else {
                percentage = 10/100;
            }
            
            
            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}


var mark = {
    fullName: 'Mark Miller',
    bills: [77, 375, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
         
        for (var i = 0; i < this.bills.length; i++) {
            
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100) {
                percentage = 20/100;
            } else if (bill >= 100 && bill <= 300) {
                percentage = 10/100;
            } else {
                percentage = 25/100;
            }
            
            
            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}


function calcAverage(tips) {
    var sum = 0;
    
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    
    return sum / tips.length;
}


// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + `'s family pays higher tips, with an average of $` + john.average);
} else if (john.average < mark.average) {
    console.log(mark.fullName + `'s family pays higher tips, with an average of $` + mark.average);
} else {
    console.log('Both family pays same amount of money');
}































