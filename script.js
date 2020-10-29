
let max = +prompt('Введите максимальное число');
let min = +prompt('Введите минимальное число');



function ran(max,min) {
    let num = Math.floor(Math.random() * (max + 1 - min) + min);
   return num;
}
function symran(sym1 = 1, sym2 = 4) {
    return Math.floor(Math.random()*(sym2 + 1 - sym1) + sym1);
  }

for (let i = 0;  i < 10; i++) {
    let num1 = ran(max,min);
    let num2 = ran(max,min);
    // let sym = symran();
    // let symP = '';
     

 let exam = +prompt(num1 +  '+' + num2 + '=');
    let prt = (num1+num2) == exam ? 'Ответ верный': 'Ответ не верный';

    // if (sym == 1) {
    //  alert('+');

    // }else if(sym == 2 ){
    //     alert('-');
    // }
    // else if(sym == 3 ){
    //     alert('*');
    // }
    // else if(sym == 4 ){
    //     alert('/');
    // }


   
     
    console.log(i);
    alert(' Ваш ответ = ' + exam + '.' + prt);
}