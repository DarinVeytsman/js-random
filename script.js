
let max = +prompt('Введите максимальное число');
let min = +prompt('Введите минимальное число');



function ran(max,min) {
    let num = Math.floor(Math.random() * (max + 1 - min) + min);
   return num;
}

for (let i = 0;  i < 10; i++) {
    let num1 = ran(max,min);
    let num2 = ran(max,min);

    let exam = +prompt(num1 + '+' + num2 + '=');
    let prt = (num1+num2) == exam ? 'Ответ верный': 'Ответ не верный';
     
    console.log(i);
    alert(' Ваш ответ = ' + exam + '.' + prt);
}