alert("Merhaba Dünya")
/*
------------ SCOPE (KAPSAM) -------------
->Global Scope:Heryerden erişebilirsin.
->Functıon Scope
->Block Scıoe
*/

//GLOBAL SCOPE
// var a = 5;//global scope,buyuzden her yerden erişilebilir.
// if(true){
// console.log(a);
// }
// function method1(){
//     console.log(a);
// }
// method1();

//FUNCTİON SCOPE
// function method1(){
//     var sayı=10;
  
// }
// console.log(sayı);//sadece funtıonun ıcınde tanımlaman ve kullanman gerekıyor.Bu şekilde yaptığında hata alırsın
// method1();

// BLOCK SCOPE
function method1(){
var a=5;//functıon scope
    if(true){
var b=10;//block scope
console.log(b);
    }
    console.log(a);
}
method1();


//DEĞİŞKENLER
//JavaScript dilinde değişkenler veri depolamak için kullanılır.
//Var-Let-Const

//var: functıon scope --ram bellekte çok fazla yer kaplar.
// var a =5;
// var a=10;//var da aynı değişkeni ıkı kere tanımlayabılırsın ama en son verdıgın değer alınır.
// console.log(a);

//let/const:block scope özelliğine sahiptir.
// let ve const da aynı değişkene birden fazla tanımlayamazsın.
// LET & CONST ARASINDAKİ FARK
//const sabit , değişmez
// const a=10;
// a=15;
// console.log(a);//const sabıt oldugu ıcın boyle bırsey yapılamaz!

// let b=5;
// b=7;
// console.log(b);//çıktı 7 dır.


const user={
    userName:"havva",
    password:"123"
}
user.userName="havva daş";
console.log(user);

let user={
    userName:"havva",
    password:"123"
}
user ={age:"20"};
console.log(user);

function selamVer(){
    var selam="herkese selam";
    if(true){
        const b =10;
        console.log(b);// const block ozelliğe sahip oldusu ıcın koşulun dısında cağıramam.
    }
console.log(selam);
}
selamVer();