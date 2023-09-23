function logger() {
    console.log("madhuranga")
}

logger();

function calculator(n1, n2) {
    const sumofbothn = n1 + n2
    return sumofbothn;
}

// const t = calculator(5, 6, 7);
// console.log(t)

// const sum2 = calc2 => n1 + n2;

// const result = sum2(5, 5);
// console.log(result)

// const calage = birthyear => 2037 - birthyear;
// const age = calage(1778);

// console.log(age);

// const sum1 = (n1, n2) => {
//     const total = n1 + n2;
//     return total;
// }

// const firstTotalsum1 = sum1(5, 9);
// console.log(firstTotalsum1);


/* Write your code below. Good luck! 🙂 */

// const calcAverage = (score1, score2, score3) => {
//     average = (score1 + score2 + score3) / 3;
//     return average;
// };

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins >= (avgKoalas * 2)) {
//         return `Dolphins vin ${avgDolphins} vs ${avgKoalas}`;
//     } else if (avgKoalas >= (avgDolphins * 2)) {
//         return `Koalas vin ${avgKoalas} vs ${avgDolphins}`;
//     } else {
//         return "No team wins...";
//     }
// };
// const winner = checkWinner(scoreDolphins, scoreKoalas);
// console.log(winner);


// const jonas = {
//     firstName: 'jonas',
//     lastName: 'schmedtman',
//     birthYeah: 1991,
//     job: 'teacher',
//     friends: ['Michel', 'peter', 'Steven'],
//     hasDriversLicense: true,

//     calcAge: function (birthYeah) {
//         return 2037 - birthYeah
//     }
// }

// const age = jonas.calcAge(1991);
// console.log(age);
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};


const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 92,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};


mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi)
*/

// for (i = 1; i <= 2; i++) {

//     console.log(`clculating, no ${i}`);
// }

// const jonass = [
//     "jonas smetman",
//     23,
//     true,
//     "34",
//     1234 - 45,
//     ["repeat", 3, "a3"],
//     "teacher",
// ]


// for (i = 0; i < jonass.length; i++) {
//     console.log(jonass[i], typeof jonass[i]);
// }


const jonass = [
    "jonas smetman",
    23,
    true,
    "34",
    1234 - 45,
    ["repeat", 3, "a3"],
    "teacher",
]


for (let i = jonass.length - 1; i >= 0; i--) {
    console.log(jonass[i])
}

let d = 1;
while (d <= 20) {
    console.log(`While calculating..... ${d}`);
    d++;
}