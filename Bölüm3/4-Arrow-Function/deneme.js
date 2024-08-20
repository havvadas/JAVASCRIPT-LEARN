const karealanı=(kenar)=>{//tek satır oldugu ıcın parameetrede olmadıgı ıcın  parantez koymasına gerek yok.
    return kenar**2;
}
const sonuc=karealanı(6);
console.log(sonuc);

const fatura =(urunler,vergi)=>{
    let toplam=0;
    for (let i=0;i<urunler.length;i++){
        toplam+=urunler[i] +urunler[i] *vergi;
    }
    return toplam;
}
console.log (fatura([10,20,30],0.25));