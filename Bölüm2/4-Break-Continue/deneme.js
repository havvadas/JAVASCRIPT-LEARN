const notlar = [15,45,32,0,100,90,7];

for(let i=0; i<notlar.length; i++){
    console.log(notlar[i]);

    if(notlar[i] === 32){
        console.log('Bravo En Yüksek Notu Sen Aldın!');
        continue;//continue  donguyu bıtımıyor devam ettırıyor.
    }

    if(notlar[i] === 100){
        console.log('Bravo En Yüksek Notu Sen Aldın!');
        break;//break koyunca donguyu bıtıtırıyor.
    }

}