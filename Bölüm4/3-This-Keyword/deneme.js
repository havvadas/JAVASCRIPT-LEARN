let ogremci={
    ad:'havva',
    yas:'19',
    email:'dashavva1',
    dersler:['javascript','c#','phyton'],

    login(){
 console.log('öğrenci giriş yaptı.');
    },
    logout(){
        console.log('öğrenci çıkış yaptı.');
    },
    printLessons(){
        console.log(this);//object de blunuyor.
    }
};
console.log(this);//bulundugu yeri gosterırı windowsda suan.
ogremci.printLessons();